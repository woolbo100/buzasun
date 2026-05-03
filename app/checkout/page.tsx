'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const productId = searchParams.get('productId')
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    receiverName: '',
    zipcode: '',
    address: '',
    detailAddress: '',
    deliveryNote: '',
    orderNote: '',
  })

  // DB에 없을 경우를 위한 Fallback 상품 정보
  const productMap: { [key: string]: any } = {
    "miss-highlander": {
      name: "미스하이랜더 플러스",
      type: "physical",
      price: 69000,
      category: "ENERGY CARE",
      image: "/image/miss/m1.webp"
    },
    "wangbitna-cream": {
      name: "어디서나 왕빛나 크림",
      type: "physical",
      price: 59000,
      category: "ENERGY CARE",
      image: "/image/wangbitna/w7.webp"
    },
    "baekdohwa-report": {
      name: "선천코드 연애 리포트",
      type: "digital_report",
      price: 59000,
      category: "PREMIUM REPORT",
      image: "/image/product-love-report.png"
    },
    "premium-compatibility-report": {
      name: "프리미엄 궁합 리포트",
      type: "digital_report",
      price: 89000,
      category: "PREMIUM REPORT",
      image: "/image/premium_compatibility_report.png"
    },
    "love-secret": {
      name: "연애비급",
      type: "digital_ebook",
      price: 39000,
      category: "SECRET METHOD",
      image: "/image/product-charm-signal.png"
    },
    "abundance-secret": {
      name: "풍요비책",
      type: "digital_ebook",
      price: 49000,
      category: "SECRET METHOD",
      image: "/image/product-abundance.png"
    },
    "reunion-secret": {
      name: "재회비방",
      type: "digital_ebook",
      price: 99000,
      category: "SECRET METHOD",
      image: "/image/product-reunion-reading.png"
    }
  }

  useEffect(() => {
    if (!productId) {
      setLoading(false)
      return
    }

    async function fetchProduct() {
      try {
        setLoading(true)
        // 1. DB에서 먼저 시도
        // 신규 ID를 DB 슬러그로 보정
        let dbId = productId;
        if (dbId === 'baekdohwa-report') dbId = 'love-code-report';
        if (dbId === 'premium-compatibility-report') dbId = 'premium-compatibility';
        if (dbId === 'reunion-secret') dbId = 'reunion-secret-method';
        if (dbId === 'abundance-secret') dbId = 'abundance-secret-guide';
        if (dbId === 'love-secret') dbId = 'love-secret-ebook';

        const { data, error } = await supabase
          .from('products')
          .select('*')
          .or(`slug.eq."${dbId}",id.eq."${dbId}"`)
          .single()

        if (!error && data) {
          // 이름 및 가격 오버라이드 (지침 반영)
          let finalData = { ...data, slug: productId }; // URL의 productId를 slug로 유지
          
          if (productId === 'baekdohwa-report') {
            finalData.name = '선천코드 연애 리포트';
            finalData.price = 59000;
          } else if (productId === 'premium-compatibility-report') {
            finalData.name = '프리미엄 궁합 리포트';
            finalData.price = 89000;
          } else if (productId === 'love-secret') {
            finalData.name = '연애비급';
            finalData.price = 39000;
          } else if (productId === 'abundance-secret') {
            finalData.name = '풍요비책';
            finalData.price = 49000;
          } else if (productId === 'reunion-secret') {
            finalData.name = '재회비방';
            finalData.price = 99000;
          } else if (productId === 'wangbitna-cream') {
            finalData.name = '어디서나 왕빛나 크림';
            finalData.price = 59000;
          }
          
          setProduct(finalData)
        } else if (productId && productMap[productId]) {
          // 2. DB에 없으면 로컬 맵에서 시도
          setProduct({ ...productMap[productId], slug: productId })
        }
      } catch (err) {
        console.error("Checkout: Failed to fetch product", err)
        // 에러 시에도 로컬 맵 확인
        if (productId && productMap[productId]) {
          setProduct(productMap[productId])
        }
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [productId])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-[var(--accent-gold)] animate-pulse tracking-widest">결제 정보를 불러오는 중...</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <p className="text-white/60">상품 정보를 찾을 수 없습니다.</p>
        <button onClick={() => router.back()} className="text-[var(--accent-gold)] underline">뒤로 가기</button>
      </div>
    )
  }

  // 상품 타입 판별 (DB의 category나 type 필드 기준, 없으면 slug 등으로 추론)
  const productType = product.type || 
                     (product.category?.includes('REPORT') ? 'digital_report' : 
                      product.category?.includes('METHOD') ? 'digital_ebook' : 'physical')

  const getButtonText = () => {
    if (productType === 'digital_ebook') return '전자책 결제하기'
    if (productType === 'digital_report') return '리포트 신청 및 결제하기'
    return '상품 결제하기'
  }

  return (
    <div className="container-premium py-20">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-elegant font-bold text-center mb-12 text-white">
            주문 / <span className="text-[var(--accent-gold)]">결제</span>
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Order Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. 상품 요약 */}
            <Reveal delayMs={100}>
              <div className="gungjung-glass p-6 flex items-center gap-6">
                <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 border border-white/10">
                  <Image 
                    src={product.image || '/image/product-love-report.png'} 
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest text-[var(--accent-gold)] opacity-60 uppercase mb-1 block">
                    {product.category}
                  </span>
                  <h2 className="text-xl font-bold text-white mb-1">{product.name}</h2>
                  <p className="text-[var(--accent-gold)] font-bold">₩{product.price?.toLocaleString()}</p>
                </div>
              </div>
            </Reveal>

            {/* 2. 주문자 정보 */}
            <Reveal delayMs={200}>
              <div className="gungjung-glass p-8 space-y-6">
                <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">주문자 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-white/40 ml-1">이름</label>
                    <input 
                      type="text" name="name" value={formData.name} onChange={handleInputChange}
                      placeholder="이름을 입력해주세요"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-white/40 ml-1">연락처</label>
                    <input 
                      type="text" name="phone" value={formData.phone} onChange={handleInputChange}
                      placeholder="010-0000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-white/40 ml-1">이메일</label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleInputChange}
                    placeholder="example@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                  />
                </div>
              </div>
            </Reveal>

            {/* 3. 상품 타입별 추가 폼 */}
            <Reveal delayMs={300}>
              <div className="gungjung-glass p-8 space-y-6">
                {productType === 'physical' ? (
                  <>
                    <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">배송지 정보</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-xs text-white/40 ml-1">수령인 이름</label>
                        <input 
                          type="text" name="receiverName" value={formData.receiverName} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-xs text-white/40 ml-1">우편번호</label>
                          <input 
                            type="text" name="zipcode" value={formData.zipcode} onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-white/40 ml-1">주소</label>
                        <input 
                          type="text" name="address" value={formData.address} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-white/40 ml-1">상세주소</label>
                        <input 
                          type="text" name="detailAddress" value={formData.detailAddress} onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-white/40 ml-1">배송 요청사항</label>
                        <textarea 
                          name="deliveryNote" value={formData.deliveryNote} onChange={handleInputChange}
                          rows={2}
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all resize-none"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">추가 요청사항</h3>
                    <div className="space-y-2">
                      <label className="text-xs text-white/40 ml-1">주문 메모</label>
                      <textarea 
                        name="orderNote" value={formData.orderNote} onChange={handleInputChange}
                        placeholder={productType === 'digital_report' ? "리포트 제작 시 참고할 특이사항이 있다면 적어주세요." : "요청사항이 있다면 입력해주세요."}
                        rows={3}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all resize-none"
                      />
                    </div>
                    {productType === 'digital_report' && (
                      <div className="p-4 rounded-lg bg-[var(--accent-gold-soft)]/10 border border-[var(--accent-gold-soft)]/20 text-xs text-[var(--accent-gold-light)] leading-relaxed">
                        <p>※ 리포트 제작에 필요한 상세 정보(생년월일 등)는 결제 완료 후 별도의 입력 폼을 통해 작성하시게 됩니다.</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </Reveal>
          </div>

          {/* Right: Summary & Payment */}
          <div className="space-y-6">
            <Reveal delayMs={400}>
              <div className="gungjung-glass p-8 sticky top-24">
                <h3 className="text-lg font-bold text-white mb-8">결제 금액</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">주문 금액</span>
                    <span className="text-white">₩{product.price?.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/40">배송비</span>
                    <span className="text-white">₩0</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-white font-bold">최종 결제 금액</span>
                    <span className="text-2xl font-bold text-[var(--accent-gold)]">₩{product.price?.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 accent-[var(--accent-gold)]" />
                    <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                      <a href="/terms" target="_blank" className="underline hover:text-[var(--accent-gold)]">이용 약관</a> 및 <a href="/privacy" target="_blank" className="underline hover:text-[var(--accent-gold)]">개인정보 수집 이용</a> 동의 (필수)
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input type="checkbox" className="mt-1 accent-[var(--accent-gold)]" />
                    <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                      {productType === 'physical' ? 
                        <a href="/refund" target="_blank" className="underline hover:text-[var(--accent-gold)]">교환/반품/배송 정책</a> : 
                        <a href="/refund" target="_blank" className="underline hover:text-[var(--accent-gold)]">디지털 콘텐츠 환불 정책</a>
                      } 동의 (필수)
                    </span>
                  </label>
                </div>

                <button 
                  className="w-full btn-primary py-4 rounded-xl font-bold tracking-widest shadow-[0_10px_30px_rgba(212,178,167,0.2)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                  {getButtonText()}
                </button>

                <p className="mt-6 text-[10px] text-center text-white/30 leading-relaxed">
                  안전한 결제 시스템을 통해 보호됩니다.<br />
                  결제 완료 시 주문 정보가 이메일로 전송됩니다.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CheckoutPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0514]">
      <GlobalBackground src="/image/main4.png">
        <Navigation />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-[var(--accent-gold)] animate-pulse">Loading...</p></div>}>
          <CheckoutContent />
        </Suspense>
        <Footer />
      </GlobalBackground>
    </main>
  )
}
