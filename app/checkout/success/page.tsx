'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { supabase } from '@/lib/supabase'

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
        // 중복 체크
        const { data: existingOrder } = await supabase
          .from('orders')
          .select('id')
          .eq('payment_id', paymentId)
          .single()

        if (existingOrder) {
          const { data } = await supabase.from('orders').select('*').eq('id', existingOrder.id).single()
          setOrder(data)
          setLoading(false)
          return
        }

        // 주문 저장
        const incomingStatus = searchParams.get('payment_status') || 'paid';
        const isTestMode = process.env.NEXT_PUBLIC_PAYMENT_TEST_MODE === 'true';
        
        // 보안: 테스트 모드가 아닐 때 프로덕션 환경에서 test_paid 상태를 허용하지 않음
        if (incomingStatus === 'test_paid' && process.env.NODE_ENV !== 'development' && !isTestMode) {
          console.error("Test payment not allowed in production without test mode enabled");
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('orders')
          .insert([{
            payment_id: paymentId,
            merchant_uid: merchantUid,
            product_id: productId,
            product_name: product_name,
            product_type: product_type,
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            amount: amount,
            payment_status: incomingStatus,
            order_status: 'new',
            report_status: 'pending',
            // 추가 정보들
            receiver_name: searchParams.get('receiverName'),
            address: searchParams.get('address'),
            detail_address: searchParams.get('detailAddress'),
            zipcode: searchParams.get('zipcode'),
            delivery_note: searchParams.get('deliveryNote'),
            request_note: searchParams.get('orderNote'),
            product_title: searchParams.get('product_title') || product_name,
            payment_name: searchParams.get('payment_name') || product_name,
          }])
          .select()
          .single()

        if (error) throw error
        setOrder(data)
      } catch (err) {
        console.error("Failed to save order:", err)
      } finally {
        setLoading(false)
      }
    }

    saveOrder()
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-[var(--accent-gold)] animate-pulse tracking-widest">주문을 처리하는 중...</p>
      </div>
    )
  }

  return (
    <div className="container-premium py-32">
      <div className="max-w-2xl mx-auto text-center">
        <Reveal>
          <div className="w-20 h-20 bg-[var(--accent-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-[var(--accent-gold)]/30 shadow-[0_0_30px_rgba(212,178,167,0.2)]">
            <i className="fas fa-check text-3xl text-[var(--accent-gold)]"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-6 text-white leading-tight">
            주문이 <span className="text-[var(--accent-gold)]">완료되었습니다</span>
          </h1>
          <p className="text-lg text-[#EDE6DA] opacity-80 mb-12 break-keep">
            백도화를 믿고 선택해주셔서 감사합니다.<br />
            주문 내역은 입력하신 이메일로도 발송되었습니다.
          </p>

          <div className="gungjung-glass p-8 mb-12 text-left space-y-4">
            <div className="flex justify-between border-b border-white/5 pb-4 mb-4">
              <span className="text-white/40">주문 번호</span>
              <span className="text-white font-medium">{order?.merchant_uid || order?.payment_id || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">상품명</span>
              <span className="text-white">{order?.product_name || '-'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/40">결제 금액</span>
              <span className="text-[var(--accent-gold)] font-bold">₩{order?.amount?.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary px-10 py-4 rounded-xl font-bold tracking-widest">
              홈으로 이동
            </Link>
            <Link href="/mypage" className="px-10 py-4 rounded-xl border border-white/10 text-white/60 hover:text-white transition-all">
              주문 내역 확인
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default function CheckoutSuccessPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-[var(--accent-gold)] animate-pulse">Loading...</p></div>}>
          <SuccessContent />
        </Suspense>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
