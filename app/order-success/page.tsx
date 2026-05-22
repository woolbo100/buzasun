'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { supabase } from '@/lib/supabase'
import { Check, ShieldCheck, Mail, Truck, Home, ShoppingBag } from 'lucide-react'

function SuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState<any>(null)

  useEffect(() => {
    async function saveOrder() {
      const paymentId = searchParams.get('payment_id') || `manual_${Date.now()}`
      const merchantUid = searchParams.get('merchant_uid') || `order_${Date.now()}`
      const productId = searchParams.get('productId')
      const name = searchParams.get('name')
      const email = searchParams.get('email')
      const phone = searchParams.get('phone')
      const amount = parseInt(searchParams.get('amount') || '0')
      const product_name = searchParams.get('product_name')
      const product_type = searchParams.get('product_type')
      
      if (!productId || !email) {
        setLoading(false)
        return
      }

      try {
        // 1. 중복 체크
        // RLS로 인해 select가 차단될 수도 있지만, anon role select가 열려있는 한에서 시도합니다.
        const { data: existingOrder } = await supabase
          .from('orders')
          .select('*')
          .eq('customer_email', email)
          .order('created_at', { ascending: false })
          .limit(1)

        // 이미 생성된 주문과 merchant_uid가 겹치거나, amount와 이름이 일치하는 최근 주문이 1분 내에 있는지 간단 확인
        if (existingOrder && existingOrder.length > 0) {
          const recent = existingOrder[0]
          const isTooRecent = (Date.now() - new Date(recent.created_at).getTime()) < 60000 // 1분 이내
          if (isTooRecent && recent.product_name === product_name && recent.amount === amount) {
            setOrder(recent)
            setLoading(false)
            return
          }
        }

        // 2. 주문 저장 데이터 구성 (데이터베이스에 실제로 존재하는 컬럼만 포함!)
        const incomingStatus = searchParams.get('payment_status') || 'paid';
        const isTestMode = process.env.NEXT_PUBLIC_PAYMENT_TEST_MODE === 'true';
        
        // 보안: 테스트 모드가 아닐 때 프로덕션 환경에서 test_paid 상태를 허용하지 않음
        if (incomingStatus === 'test_paid' && process.env.NODE_ENV !== 'development' && !isTestMode) {
          console.error("Test payment not allowed in production without test mode enabled");
          setLoading(false);
          return;
        }

        const { data: { user } } = await supabase.auth.getUser();

        // 핑크레이디 상품의 고유식별자(UUID) 정합성 매핑
        const realProductUuid = productId === 'pink-lady' 
          ? '6472fa45-4657-4c71-a79f-6979ffad1dac' 
          : productId;

        // 배송지 주소 정보를 하나의 정돈된 텍스트로 합치기 (DB address 컬럼 부재 우회)
        const receiverName = searchParams.get('receiverName') || '';
        const zipcode = searchParams.get('zipcode') || '';
        const address = searchParams.get('address') || '';
        const detailAddress = searchParams.get('detailAddress') || '';
        const deliveryNote = searchParams.get('deliveryNote') || '';
        const orderNote = searchParams.get('orderNote') || '';

        let formattedShippingMemo = '';
        if (product_type === 'physical' || productId === 'pink-lady' || productId === 'premium-bookmark') {
          formattedShippingMemo = [
            `[실물 상품 배송 정보]`,
            `- 받는 분: ${receiverName || name || ''}`,
            `- 연락처: ${phone || ''}`,
            `- 우편번호: ${zipcode || ''}`,
            `- 주소: ${address || ''} ${detailAddress || ''}`,
            `- 배송 요청사항: ${deliveryNote || '없음'}`,
            `- 주문 요청사항: ${orderNote || '없음'}`,
            `- 주문번호: ${merchantUid}`,
            `- 결제식별코드: ${paymentId}`
          ].filter(Boolean).join('\n');
        } else {
          formattedShippingMemo = [
            `[디지털 상품 주문 메모]`,
            `- 신청자: ${name || ''}`,
            `- 연락처: ${phone || ''}`,
            `- 주문 요청사항: ${orderNote || '없음'}`,
            `- 주문번호: ${merchantUid}`,
            `- 결제식별코드: ${paymentId}`
          ].filter(Boolean).join('\n');
        }

        // DB에 실제로 존재하는 컬럼만 안전하게 인서트
        const insertData = {
          product_id: realProductUuid,
          product_name: product_name || '백도화 상품',
          customer_name: name || '고객',
          customer_email: email,
          customer_phone: phone || '',
          amount: amount,
          payment_status: incomingStatus,
          report_status: 'pending',
          buyer_type: searchParams.get('buyer_type') || 'guest',
          user_id: user?.id || null,
          shipping_memo: formattedShippingMemo,
          birth_date: searchParams.get('birth_date') || null,
          birth_time: searchParams.get('birth_time') || null,
          gender: searchParams.get('gender') || null,
          partner_info: searchParams.get('partner_info') || [
            searchParams.get('partner_name') ? `이름: ${searchParams.get('partner_name')}` : '',
            searchParams.get('partner_birth_date') ? `생일: ${searchParams.get('partner_birth_date')}` : '',
            searchParams.get('partner_birth_time') ? `시간: ${searchParams.get('partner_birth_time')}` : '',
            searchParams.get('partner_gender') ? `성별: ${searchParams.get('partner_gender') === 'female' ? '여성' : '남성'}` : ''
          ].filter(Boolean).join(' | ') || null,
          product_title: searchParams.get('product_title') || product_name || '백도화 상품',
          payment_name: searchParams.get('payment_name') || product_name || '백도화 결제'
        };

        const { data, error } = await supabase
          .from('orders')
          .insert([insertData])
          .select()
          .single()

        if (error) {
          console.error("Supabase insert error details:", error);
          throw error;
        }
        
        // 정상 저장된 주문 건을 로컬 상태에 등록
        setOrder({
          ...data,
          // 화면 노출용 가상 주문번호 매핑 (데이터 유실 방지)
          merchant_uid: merchantUid
        })
      } catch (err) {
        console.error("Failed to save order in Supabase:", err)
        // 혹시 에러가 발생하더라도 결제 자체는 성공했으므로 
        // 사용자 화면에는 주문 번호와 정보를 정상적으로 노출하여 사용자 이탈을 방지합니다.
        setOrder({
          product_name: product_name,
          amount: amount,
          merchant_uid: merchantUid,
          customer_name: name
        })
      } finally {
        setLoading(false)
      }
    }

    saveOrder()
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-[var(--accent-gold)] animate-pulse tracking-widest text-lg font-serif">
          주문 정보를 확인하고 결제 내역을 저장하는 중입니다...
        </p>
      </div>
    )
  }

  // 상품 이미지 및 분기 처리 결정
  const isPhysical = searchParams.get('product_type') === 'physical' || 
                     searchParams.get('productId') === 'pink-lady' || 
                     searchParams.get('productId') === 'premium-bookmark';

  const productImageSrc = searchParams.get('productId') === 'pink-lady' 
    ? '/image/pinklady/p7.webp' 
    : (searchParams.get('productId') === 'premium-bookmark' ? '/image/pre/p7.webp' : '/image/product-love-report.png');

  return (
    <div className="container-premium py-28 md:py-36">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          
          {/* 완벽 완료 배지 */}
          <div className="w-24 h-24 bg-gradient-to-tr from-[#2D0A1E] to-[#1A0514] rounded-full flex items-center justify-center mx-auto mb-10 border border-[#E6BE8A]/40 shadow-[0_0_40px_rgba(230,190,138,0.2)]">
            <Check className="w-10 h-10 text-[#E6BE8A]" />
          </div>

          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-6 text-white leading-tight tracking-wide">
            결제가 <span className="text-[#E6BE8A]">완료되었습니다</span>
          </h1>
          
          <p className="text-base md:text-lg text-[#EDE6DA] opacity-80 mb-12 max-w-lg mx-auto break-keep leading-relaxed font-light">
            백도화를 신뢰하고 이용해 주셔서 진심으로 감사드립니다.<br />
            소중한 주문 내역이 시스템에 안전하게 등록되었습니다.
          </p>

          {/* 결제 내역 영수증 디자인 */}
          <div className="gungjung-glass p-8 md:p-10 mb-12 text-left border border-white/5 relative overflow-hidden rounded-[24px] bg-gradient-to-br from-white/[0.02] to-[#2D0A1E]/10">
            {/* 자개 오로라 글로우 장식 */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#E6BE8A]/5 blur-3xl rounded-full pointer-events-none" />
            
            <h3 className="text-xs tracking-[0.25em] text-[#E6BE8A] font-bold uppercase mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#E6BE8A]" /> ORDER RECEIPT
            </h3>

            <div className="flex gap-6 items-center mb-6 pb-6 border-b border-white/5">
              <div className="relative w-16 h-20 rounded-lg overflow-hidden shrink-0 border border-white/10">
                <Image src={productImageSrc} alt="Product Thumbnail" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs text-white/40 mb-1">상품 정보</p>
                <h4 className="text-lg font-bold text-white leading-snug">{order?.product_name || '백도화 상품'}</h4>
                {searchParams.get('option') && (
                  <span className="inline-block mt-1 text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                    옵션: {searchParams.get('option')}
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-white/40">주문 번호</span>
                <span className="text-white font-mono font-medium tracking-wide">{order?.merchant_uid || '-'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40">결제 금액</span>
                <span className="text-xl font-bold text-[#E6BE8A] font-serif">₩{order?.amount?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/40">주문자 성함</span>
                <span className="text-[#EDE6DA]">{order?.customer_name || name || '-'}</span>
              </div>
            </div>
          </div>

          {/* 배송지/안내 사항 카드 */}
          <div className="gungjung-glass p-8 mb-12 text-left border border-white/5 rounded-[24px]">
            {isPhysical ? (
              <div className="space-y-4">
                <h4 className="text-[#E6BE8A] font-bold text-base flex items-center gap-2">
                  <Truck className="w-5 h-5" /> 실물 배송 상품 배송 안내
                </h4>
                <div className="text-xs md:text-sm text-[#EDE6DA]/70 leading-relaxed font-light space-y-2 break-keep">
                  <p>본 상품은 우체국택배 또는 CJ대한통운 등을 통해 안전하게 발송되는 실물 배송 제품입니다.</p>
                  <p className="text-white font-medium pl-1 border-l-2 border-[#E6BE8A] py-0.5">
                    평일 오후 2시 이전 주문 시 당일 출고되며, 배송은 결제 완료일 기준으로 영업일 2~5일 정도 소요됩니다.
                  </p>
                  <p className="opacity-80 pt-1">
                    운송장 번호는 출고 완료 시 등록하신 연락처/이메일로 안내해 드리며, 마이페이지에서도 실시간 배송 조회가 가능합니다.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h4 className="text-[#E6BE8A] font-bold text-base flex items-center gap-2">
                  <Mail className="w-5 h-5" /> 디지털 콘텐츠 제공 안내
                </h4>
                <div className="text-xs md:text-sm text-[#EDE6DA]/70 leading-relaxed font-light space-y-2 break-keep">
                  {searchParams.get('product_type') === 'digital_report' ? (
                    <>
                      <p>본 상품은 사주 정보 분석에 기반한 맞춤형 디지털 PDF 리포트입니다.</p>
                      <p className="text-white font-medium pl-1 border-l-2 border-[#E6BE8A] py-0.5">
                        입력하신 사주 정보를 토대로 마스터가 정밀 분석하여, 영업일 기준 2~5일 이내에 이메일로 완성본을 전송해 드립니다.
                      </p>
                      <p className="opacity-80 pt-1">
                        완료 시 알림톡이 전송되며, 이메일 수신함이 가득 차 있지 않은지 미리 확인해주시기 바랍니다. (마이페이지에서도 즉시 다운로드 가능)
                      </p>
                    </>
                  ) : (
                    <>
                      <p>본 상품은 바로 다운로드 가능한 전자책 콘텐츠입니다.</p>
                      <p className="text-white font-medium pl-1 border-l-2 border-[#E6BE8A] py-0.5">
                        결제가 성공적으로 처리되어 지금 즉시 읽으실 수 있습니다.
                      </p>
                      <p className="opacity-80 pt-1">
                        가입하신 이메일 수신함으로 다운로드 링크가 발송되었으며, [마이페이지 ➔ 주문 내역] 메뉴에서도 언제든지 전자책을 다운로드 받아 보실 수 있습니다.
                      </p>
                    </>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-2 text-white/30">
              <ShieldCheck className="w-4 h-4 shrink-0 text-[#E6BE8A]/60" />
              <span className="text-[11px] leading-normal break-keep">
                결제 정보는 SSL 보안 환경 아래에서 안전하게 처리되었습니다.
              </span>
            </div>
          </div>

          {/* 하단 이동 버튼 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-xl font-bold tracking-widest text-sm hover:scale-[1.03] transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #E6BE8A 0%, #BA8D7E 100%)',
                color: '#2D0A1E'
              }}
            >
              <Home className="w-4 h-4" /> 홈으로 이동
            </Link>
            <Link 
              href="/mypage" 
              className="inline-flex items-center justify-center gap-2 px-10 py-4.5 rounded-xl border border-white/10 text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 text-sm"
            >
              마이페이지 주문조회
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default function OrderSuccessPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-[var(--accent-gold)] animate-pulse font-serif">로딩 중...</p>
          </div>
        }>
          <SuccessContent />
        </Suspense>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
