'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GlobalBackground from '@/components/GlobalBackground'
import Reveal from '@/components/Reveal'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'
import Script from 'next/script'

// TypeScript를 위한 전역 객체 선언
declare global {
  interface Window {
    IMP: any;
  }
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const productId = searchParams.get('productId')
  const selectedOption = searchParams.get('option')
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const [profile, setProfile] = useState<any>(null)
  const [buyerType, setBuyerType] = useState<'member' | 'guest'>('guest')
  const [sameAsMember, setSameAsMember] = useState(false)
  const [sameAsOrderer, setSameAsOrderer] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // 리포트 전용
    birthDate: '',
    birthTime: '',
    gender: 'female',
    partnerInfo: '',
    // 배송 전용
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
    "golden-forever-lady": {
      name: "Golden Forever Lady",
      type: "physical",
      price: 89000,
      category: "ENERGY CARE",
      image: "/image/golden/m7.webp"
    },
    "baekdohwa-report": {
      name: "선천코드 연애 리포트",
      type: "digital_report",
      price: 39000,
      category: "PREMIUM REPORT",
      image: "/image/product-love-report.png"
    },
    "premium-compatibility-report": {
      name: "프리미엄 궁합 리포트",
      type: "digital_report",
      price: 59000,
      category: "PREMIUM REPORT",
      image: "/image/premium_compatibility_report.png"
    },
    "love-secret-ebook": {
      name: "연애비급",
      type: "digital_ebook",
      price: 19000,
      category: "SECRET METHOD",
      image: "/image/love-secret-thumb.png"
    },
    "abundance-secret-guide": {
      name: "풍요비책",
      type: "digital_ebook",
      price: 19000,
      category: "SECRET METHOD",
      image: "/image/abundance-secret-thumb.png"
    },
    "reunion-secret-method": {
      name: "재회비방",
      type: "digital_ebook",
      price: 19000,
      category: "SECRET METHOD",
      image: "/image/reunion-secret-thumb.png"
    },
    "premium-bookmark": {
      name: "프리미엄 플라워 북마크 세트",
      display_title: "프리미엄 플라워 북마크 세트",
      type: "physical",
      price: 9900,
      category: "PRIVATE OBJECT",
      image: "/image/pre/p7.webp",
      options: [
        {
          name: "색상",
          values: ["Pink Edition", "Purple Edition"]
        }
      ]
    }
  }

  useEffect(() => {
    async function checkUserAndFetchProduct() {
      try {
        setLoading(true)
        
        // 1. 유저 정보 확인
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          setUser(user)
          setBuyerType('member')
          
          const { data: profileData } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()
            
          if (profileData) {
            setProfile(profileData)
            // 회원인 경우 초기값 세팅
            setFormData(prev => ({
              ...prev,
              name: profileData.name || '',
              email: user.email || '',
              phone: profileData.phone || ''
            }))
          }
        }

        // 2. 상품 정보 확인
        if (!productId) return

        const { data, error } = await supabase
          .from('products')
          .select('*')
          .or(`slug.eq."${productId}",id.eq."${productId}"`)
          .single()

        if (!error && data) {
          setProduct({ ...data, slug: productId, selectedOption: selectedOption })
        } else if (productId && productMap[productId]) {
          setProduct({ ...productMap[productId], slug: productId, selectedOption: selectedOption })
        }
      } catch (err) {
        console.error("Checkout: Failed to fetch data", err)
      } finally {
        setLoading(false)
      }
    }
    checkUserAndFetchProduct()
  }, [productId])

  // "회원정보와 동일" 체크 로직
  useEffect(() => {
    if (sameAsMember && profile) {
      setFormData(prev => ({
        ...prev,
        name: profile.name || '',
        email: user?.email || '',
        phone: profile.phone || ''
      }))
    }
  }, [sameAsMember, profile, user])

  // "주문자 정보와 배송지 동일" 체크 로직
  useEffect(() => {
    if (sameAsOrderer) {
      setFormData(prev => ({
        ...prev,
        receiverName: formData.name,
        zipcode: profile?.zipcode || '',
        address: profile?.address || '',
        detailAddress: profile?.detail_address || '',
      }))
    }
  }, [sameAsOrderer, formData.name, profile])

  const [checkoutOption, setCheckoutOption] = useState<string>(selectedOption || "")
  const [agreements, setAgreements] = useState({ terms: false, refund: false })
  const [showOptionError, setShowOptionError] = useState(false)

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

  // 포트원 결제를 위한 주문번호 생성
  const generateMerchantUid = () => {
    const now = new Date();
    const dateStr = now.toISOString().slice(0, 10).replace(/-/g, '');
    const randomStr = Math.random().toString(36).slice(2, 8).toUpperCase();
    return `BDH-${dateStr}-${randomStr}`;
  };

  const handlePayment = async () => {
    const isTestMode = process.env.NEXT_PUBLIC_PAYMENT_TEST_MODE === 'true';

    // 필수 정보 유효성 검사
    if (!formData.name || !formData.email || !formData.phone) {
      alert("주문자 정보를 모두 입력해주세요.");
      return;
    }

    if (productType === 'physical' && (!formData.receiverName || !formData.address)) {
      alert("배송지 정보를 모두 입력해주세요.");
      return;
    }

    if (product.options && product.options.length > 0 && !checkoutOption) {
      setShowOptionError(true);
      alert("색상을 선택해주세요.");
      return;
    }

    if (!window.IMP) {
      alert("결제 모듈을 불러오는 중입니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    setLoading(true);

    try {
      // 1. 가맹점 식별코드 초기화
      const storeCode = process.env.NEXT_PUBLIC_PORTONE_STORE_CODE || 'imp_your_store_id';
      window.IMP.init(storeCode);

      // 2. 주문번호 생성
      const merchantUid = generateMerchantUid();

      // 3. 결제용 상품명 설정
      const paymentName = product.payment_name || product.display_title || product.name;

      // 4. PG사 및 채널 설정
      const isTestMode = process.env.NEXT_PUBLIC_PAYMENT_TEST_MODE === 'true';
      const pgProvider = isTestMode ? "kakaopay.TC0ONETIME" : (process.env.NEXT_PUBLIC_PORTONE_PG_ID || "tosspayments");
      const channelKey = process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY; // V2용 채널키

      // [디버깅 로그 추가]
      console.log("--- [백도화 결제 디버깅] ---");
      console.log("가맹점 코드(storeCode):", storeCode);
      console.log("PG사 식별코드(pg):", pgProvider);
      console.log("채널키(channelKey):", channelKey);
      console.log("테스트 모드:", isTestMode);
      console.log("상품명:", paymentName);
      console.log("결제 금액:", product.price);
      console.log("주문 번호(merchant_uid):", merchantUid);
      console.log("-------------------------");

      // 5. 포트원 전달 데이터 구성
      const paymentData: any = {
        pg: pgProvider,
        pay_method: "card",
        merchant_uid: merchantUid,
        name: paymentName,
        amount: product.price,
        buyer_email: formData.email,
        buyer_name: formData.name,
        buyer_tel: formData.phone,
        buyer_addr: formData.address,
        buyer_postcode: formData.zipcode,
        m_redirect_url: `${window.location.origin}/checkout/success`,
        custom_data: {
          productId: productId,
          productType: productType,
          option: checkoutOption,
          orderNote: formData.orderNote,
          deliveryNote: formData.deliveryNote,
          productTitle: product.display_title || product.name,
          paymentName: paymentName,
          isTest: isTestMode,
          buyerType: buyerType,
          userId: user?.id,
          birthDate: formData.birthDate,
          birthTime: formData.birthTime,
          gender: formData.gender,
          partnerInfo: formData.partnerInfo
        }
      };

      // V2 채널키가 있다면 추가 (V2 방식 대응)
      if (channelKey) {
        paymentData.channelKey = channelKey;
      }

      // 6. 결제창 호출
      window.IMP.request_pay(paymentData, async (rsp: any) => {
        if (rsp.success) {
          // 결제 성공 시
          const params = new URLSearchParams({
            productId: productId || '',
            product_name: product.name,
            product_type: productType,
            amount: product.price.toString(),
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            option: checkoutOption || '',
            merchant_uid: merchantUid,
            payment_id: rsp.imp_uid,
            payment_status: isTestMode ? 'test_paid' : 'paid',
            receiverName: formData.receiverName,
            zipcode: formData.zipcode,
            address: formData.address,
            detailAddress: formData.detailAddress,
            deliveryNote: formData.deliveryNote,
            orderNote: formData.orderNote,
            product_title: product.display_title || product.name,
            payment_name: paymentName,
            // 추가 정보들
            buyer_type: buyerType,
            birth_date: formData.birthDate,
            birth_time: formData.birthTime,
            gender: formData.gender,
            partner_info: formData.partnerInfo,
            shipping_memo: formData.deliveryNote,
          });
          
          router.push(`/checkout/success?${params.toString()}`);
        } else {
          // 결제 실패 시
          router.push(`/checkout/fail?error_msg=${encodeURIComponent(rsp.error_msg)}&error_code=${rsp.error_code}`);
        }
        setLoading(false);
      });

    } catch (err) {
      console.error("Payment Process Error:", err);
      alert("결제 처리 중 오류가 발생했습니다.");
      setLoading(false);
    }
  };

  const getButtonText = () => {
    if (productId === 'premium-bookmark') return '프리미엄 플라워 북마크 세트 결제하기'
    if (productType === 'digital_ebook') return '전자책 결제하기'
    if (productType === 'digital_report') return '리포트 신청 및 결제하기'
    return '상품 결제하기'
  }

  return (
    <div className="container-premium py-20">
      {/* 포트원 SDK 스크립트 */}
      <Script src="https://cdn.iamport.kr/v1/iamport.js" strategy="afterInteractive" />
      <div className="max-w-4xl mx-auto">
        <Reveal>
            <h1 className="text-3xl md:text-4xl font-elegant font-bold text-center mb-12 text-white">
              주문 / <span className="text-[var(--accent-gold)]">결제</span>
            </h1>

            {/* [구매 방식 선택] */}
            <div className="max-w-md mx-auto mb-12">
              <div className="flex p-1 bg-white/5 rounded-2xl border border-white/10">
                <button 
                  onClick={() => setBuyerType('member')}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${buyerType === 'member' ? 'bg-[var(--accent-gold)] text-[#1a0f2e]' : 'text-white/40 hover:text-white'}`}
                >
                  회원 구매
                </button>
                <button 
                  onClick={() => setBuyerType('guest')}
                  className={`flex-1 py-3 text-sm font-bold rounded-xl transition-all ${buyerType === 'guest' ? 'bg-[var(--accent-gold)] text-[#1a0f2e]' : 'text-white/40 hover:text-white'}`}
                >
                  비회원 구매
                </button>
              </div>
              
              {buyerType === 'member' && !user && (
                <div className="mt-4 p-4 rounded-xl bg-accent-gold/10 border border-accent-gold/20 text-center">
                  <p className="text-xs text-[var(--accent-gold)] mb-3">로그인하시면 더 편리하게 주문이 가능합니다.</p>
                  <div className="flex gap-2">
                    <button onClick={() => router.push('/login')} className="flex-1 py-2 text-[10px] font-bold bg-[var(--accent-gold)] text-[#1a0f2e] rounded-lg">로그인하기</button>
                    <button onClick={() => router.push('/signup')} className="flex-1 py-2 text-[10px] font-bold bg-white/5 text-white/60 border border-white/10 rounded-lg">회원가입</button>
                  </div>
                </div>
              )}
            </div>

            {/* 개발 환경 전용 테스트 버튼 */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex flex-wrap gap-4 items-center justify-center">
                <span className="text-xs text-blue-400 font-bold uppercase tracking-widest">Dev Only Test:</span>
                <button 
                  onClick={() => {
                    setFormData({
                      name: '홍길동(테스트)',
                      email: 'test@example.com',
                      phone: '010-1234-5678',
                      birthDate: '19900101',
                      birthTime: '오후 2시',
                      gender: 'female',
                      partnerInfo: '테스트용 정보입니다.',
                      receiverName: '홍길동',
                      zipcode: '12345',
                      address: '서울시 강남구 테헤란로 123',
                      detailAddress: '4층',
                      deliveryNote: '부재 시 문 앞에 두세요',
                      orderNote: '테스트 주문입니다.',
                    })
                    setAgreements({ terms: true, refund: true })
                    if (product.options && product.options.length > 0) {
                      setCheckoutOption(product.options[0].values[0])
                    }
                  }}
                  className="px-4 py-2 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-lg text-xs font-bold hover:bg-blue-500/30 transition-all"
                >
                  데이터 자동 채우기
                </button>
                <button 
                  onClick={() => {
                    // 테스트 데이터 강제 주입 및 즉시 이동
                    const testFormData = {
                      name: '홍길동(테스트)',
                      email: 'test@example.com',
                      phone: '010-1234-5678',
                      birthDate: '19900101',
                      birthTime: '오전 10시',
                      gender: 'female',
                      partnerInfo: '테스트용 정보입니다.',
                      receiverName: '홍길동',
                      zipcode: '12345',
                      address: '서울시 강남구 테헤란로 123',
                      detailAddress: '4층',
                      deliveryNote: '부재 시 문 앞에 두세요',
                      orderNote: '테스트 주문입니다.',
                    }
                    
                    const params = new URLSearchParams({
                      productId: productId || '',
                      product_name: product.name,
                      product_type: productType,
                      amount: product.price.toString(),
                      name: testFormData.name,
                      email: testFormData.email,
                      phone: testFormData.phone,
                      option: checkoutOption || '기본',
                      receiverName: testFormData.receiverName,
                      zipcode: testFormData.zipcode,
                      address: testFormData.address,
                      detailAddress: testFormData.detailAddress,
                      deliveryNote: testFormData.deliveryNote,
                      orderNote: testFormData.orderNote,
                      payment_status: 'test_paid', // 테스트용 상태값
                      payment_id: `test_${Date.now()}`,
                      product_title: product.display_title || product.name,
                      payment_name: product.payment_name || product.display_title || product.name,
                      buyer_type: buyerType,
                      birth_date: formData.birthDate,
                      birth_time: formData.birthTime,
                      gender: formData.gender,
                      partner_info: formData.partnerInfo,
                    })
                    
                    setLoading(true)
                    router.push(`/checkout/success?${params.toString()}`)
                  }}
                  className="px-4 py-2 bg-[var(--accent-gold)] text-[#1a0f2e] rounded-lg text-xs font-bold hover:brightness-110 transition-all shadow-lg"
                >
                  테스트 주문 생성 (즉시 결제완료 처리)
                </button>
              </div>
            )}
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
                  <div className="flex items-center gap-3">
                    <p className="text-[var(--accent-gold)] font-bold">₩{product.price?.toLocaleString()}</p>
                    {(checkoutOption || (product.options && product.options.length > 0)) && (
                      <>
                        <span className="w-[1px] h-3 bg-white/10"></span>
                        {checkoutOption ? (
                          <span className="text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                            옵션: {checkoutOption}
                          </span>
                        ) : (
                          <span className="text-[10px] text-red-400 animate-pulse">옵션 선택 필요</span>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* 1.5 옵션 재선택 (옵션이 없거나 변경하고 싶을 때) */}
            {product.options && product.options.length > 0 && (
              <Reveal delayMs={150}>
                <div className={`gungjung-glass p-8 space-y-4 border ${showOptionError ? 'border-red-500/50' : 'border-white/5'}`}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">옵션 선택</h3>
                    {showOptionError && <span className="text-xs text-red-400">색상을 선택해주세요.</span>}
                  </div>
                  <div className="relative group">
                    <select 
                      value={checkoutOption}
                      onChange={(e) => {
                        setCheckoutOption(e.target.value)
                        setShowOptionError(false)
                      }}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3 text-white appearance-none outline-none focus:border-[var(--accent-gold)] transition-all cursor-pointer text-sm"
                    >
                      <option value="" className="bg-[#0a0514]">색상을 선택해주세요</option>
                      {product.options[0].values.map((val: string) => (
                        <option key={val} value={val} className="bg-[#0a0514]">{val}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* 2. 주문자 정보 */}
            <Reveal delayMs={200}>
              <div className="gungjung-glass p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">주문자 정보</h3>
                  {buyerType === 'member' && user && (
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={sameAsMember}
                        onChange={(e) => setSameAsMember(e.target.checked)}
                        className="w-4 h-4 accent-[var(--accent-gold)]" 
                      />
                      <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">회원정보와 동일</span>
                    </label>
                  )}
                </div>
                
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
                {productType === 'digital_report' ? (
                  <>
                    <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">사주 정보 (리포트 제작용)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs text-white/40 ml-1">생년월일</label>
                        <input 
                          type="text" name="birthDate" value={formData.birthDate} onChange={handleInputChange}
                          placeholder="예: 19900101 (8자리)"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-white/40 ml-1">태어난 시간</label>
                        <input 
                          type="text" name="birthTime" value={formData.birthTime} onChange={handleInputChange}
                          placeholder="예: 오후 2시 30분 (모르면 미입력)"
                          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-white/40 ml-1">성별</label>
                      <div className="flex gap-4">
                        {['female', 'male'].map((g) => (
                          <button 
                            key={g}
                            onClick={() => setFormData({...formData, gender: g})}
                            className={`flex-1 py-3 rounded-xl border text-sm font-bold transition-all ${formData.gender === g ? 'bg-[var(--accent-gold)]/20 border-[var(--accent-gold)] text-[var(--accent-gold)]' : 'bg-white/5 border-white/10 text-white/40'}`}
                          >
                            {g === 'female' ? '여성' : '남성'}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-white/40 ml-1">상대방 정보 (해당 시)</label>
                      <input 
                        type="text" name="partnerInfo" value={formData.partnerInfo} onChange={handleInputChange}
                        placeholder="상대방의 생년월일 또는 알고 싶은 내용을 적어주세요."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all"
                      />
                    </div>
                  </>
                ) : productType === 'physical' ? (
                  <>
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">배송지 정보</h3>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={sameAsOrderer}
                          onChange={(e) => setSameAsOrderer(e.target.checked)}
                          className="w-4 h-4 accent-[var(--accent-gold)]" 
                        />
                        <span className="text-xs text-white/40 group-hover:text-white/60 transition-colors">주문자 정보와 동일</span>
                      </label>
                    </div>
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
                    <h3 className="text-lg font-bold text-white border-l-4 border-[var(--accent-gold)] pl-4">안내 사항</h3>
                    <div className="p-4 rounded-xl bg-accent-gold/10 border border-accent-gold/20">
                      <p className="text-[11px] text-[var(--accent-gold)] leading-relaxed">
                        ※ 전자책은 결제 완료 후 입력하신 이메일 또는 마이페이지에서 바로 다운로드 가능합니다.
                        별도의 배송지 정보가 필요하지 않습니다.
                      </p>
                    </div>
                  </>
                )}
                
                {/* 주문 메모 (공통) */}
                <div className="space-y-2 pt-6 border-t border-white/5">
                  <label className="text-xs text-white/40 ml-1">기타 요청사항</label>
                  <textarea 
                    name="orderNote" value={formData.orderNote} onChange={handleInputChange}
                    placeholder="요청사항이 있다면 입력해주세요."
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white focus:border-[var(--accent-gold)] outline-none transition-all resize-none"
                  />
                </div>
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
                    <input 
                      type="checkbox" 
                      checked={agreements.terms}
                      onChange={(e) => setAgreements(prev => ({ ...prev, terms: e.target.checked }))}
                      className="mt-1 accent-[var(--accent-gold)]" 
                    />
                    <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                      <a href="/terms" target="_blank" className="underline hover:text-[var(--accent-gold)]">이용 약관</a> 및 <a href="/privacy" target="_blank" className="underline hover:text-[var(--accent-gold)]">개인정보 수집 이용</a> 동의 (필수)
                    </span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={agreements.refund}
                      onChange={(e) => setAgreements(prev => ({ ...prev, refund: e.target.checked }))}
                      className="mt-1 accent-[var(--accent-gold)]" 
                    />
                    <span className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                      {productType === 'physical' ? 
                        <a href="/refund" target="_blank" className="underline hover:text-[var(--accent-gold)]">배송 및 교환/반품 정책</a> : 
                        <a href="/refund" target="_blank" className="underline hover:text-[var(--accent-gold)]">디지털 콘텐츠 환불 정책</a>
                      } 동의 (필수)
                    </span>
                  </label>
                </div>
                <button 
                  disabled={loading || !agreements.terms || !agreements.refund || (product.options && product.options.length > 0 && !checkoutOption)}
                  onClick={handlePayment}
                  className={`w-full py-4 rounded-xl font-bold tracking-widest transition-all ${
                    loading || (!agreements.terms || !agreements.refund || (product.options && product.options.length > 0 && !checkoutOption))
                    ? 'bg-white/5 text-white/20 cursor-not-allowed'
                    : 'btn-primary shadow-[0_10px_30px_rgba(212,178,167,0.2)] hover:scale-[1.02] active:scale-95'
                  }`}
                >
                  {loading ? '처리 중...' : getButtonText()}
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
