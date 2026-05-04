'use client'

import PhysicalProductDetail from '@/components/PhysicalProductDetail'

export default function MissHighlanderPage() {
  const productData = {
    productId: 'miss-highlander',
    title: '미스하이랜더 플러스',
    subtitle: '아름다움은 매일의 습관에서 시작됩니다',
    description: `미스하이랜더 플러스는 바쁜 일상 속에서도
간편하게 아름다움과 컨디션을 관리하고 싶은 분들을 위한
프리미엄 이너뷰티 제품입니다.`,
    heroImage: '/image/miss/m7.webp',
    overviewImage: '/image/miss/m2.webp',
    recommendedImage: '/image/miss/m4.webp',
    formulaImage: '/image/miss/m5.webp',
    giftImage: '/image/miss/m3.png',
    ctaImage: '/image/miss/m6.webp',
    price: '69,000',
    recommendedPoints: [
      '피부 탄력 관리가 필요한 분',
      '건조함과 푸석함이 고민인 분',
      '이너뷰티 루틴을 시작하고 싶은 분',
      '매일 간편한 셀프케어를 원하는 분',
      '선물하기 좋은 프리미엄 제품을 찾는 분',
      '생기 있고 맑은 인상을 관리하고 싶은 분',
    ],
    ingredients: [
      { title: '콜라겐', desc: '피부 탄력 케어에 도움', icon: 'fa-gem' },
      { title: '글루타치온', desc: '맑은 피부 컨디션 관리', icon: 'fa-sun' },
      { title: '히알루론산', desc: '촉촉한 보습 케어', icon: 'fa-tint' },
      { title: '비타민 C', desc: '활력 있는 뷰티 루틴', icon: 'fa-bolt' },
      { title: 'L-시스테인', desc: '균형 있는 피부 관리', icon: 'fa-leaf' },
      { title: 'MSM', desc: '건강한 일상 케어', icon: 'fa-shield-heart' },
    ],
    giftTitle: '선물하고 싶은 프리미엄 케어',
    giftDesc: `나를 위한 루틴으로도,

사랑하는 사람을 위한 선물로도 좋은
백도화의 우아한 이너뷰티 셀렉션입니다.

아름다움은
하루아침에 만들어지지 않습니다.

매일의 작은 선택이
피부를 바꾸고,

시간이 지나도
빛나는 분위기를 만듭니다.

피부의 탄력, 생기, 그리고 자신감까지—

당신의 일상을
조금 더 아름답게 만드는
프리미엄 루틴을 시작해보세요.`,
    formulaTitle: '미스하이랜더 프리미엄 성분',
  }

  return <PhysicalProductDetail {...productData} />
}
