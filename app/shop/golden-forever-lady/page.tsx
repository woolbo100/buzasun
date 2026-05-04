'use client'

import PhysicalProductDetail from '@/components/PhysicalProductDetail'

export default function GoldenForeverLadyPage() {
  const productData = {
    productId: 'golden-forever-lady',
    title: 'Golden Forever Lady',
    subtitle: '여전히 빛나는 당신을 위한 골든 밸런스',
    description: `Golden Forever Lady는 갱년기 여성 건강의 균형을 위한 프리미엄 여성 건강기능식품입니다. 

변화의 시기를 더 편안하고 우아하게 지나갈 수 있도록, 매일의 건강 루틴에 골든 포에버 레이디를 더해보세요. 

여성의 몸과 마음이 변화하는 시기에 보다 건강한 일상과 활력 있는 컨디션을 관리하고 싶은 분들을 위한 백도화의 프리미엄 여성 밸런스 루틴입니다.`,
    heroImage: '/image/golden/m1.webp',
    overviewImage: '/image/golden/m2.webp',
    recommendedImage: '/image/golden/m3.webp',
    formulaImage: '/image/golden/m4.webp',
    giftImage: '/image/golden/m5.webp',
    ctaImage: '/image/golden/m6.webp',
    price: '89,000',
    recommendedPoints: [
      '갱년기 전후 여성 건강 관리가 필요한 분',
      '얼굴 열감, 컨디션 변화 등으로 일상 밸런스가 신경 쓰이는 분',
      '나이 들수록 건강한 여성성을 우아하게 관리하고 싶은 분',
      '피부, 활력, 기분 변화까지 함께 신경 쓰고 싶은 분',
      '매일 간편하게 섭취할 수 있는 프리미엄 여성 건강 루틴을 찾는 분',
      '선물하기 좋은 고급 여성 건강 제품을 찾는 분',
    ],
    ingredients: [
      { title: '회화나무열매추출물', desc: '갱년기 여성 건강에 도움', icon: 'fa-leaf' },
      { title: '호로파씨추출분말', desc: '여성 밸런스 케어', icon: 'fa-seedling' },
      { title: '석류농축액', desc: '여성 건강과 활력 관리', icon: 'fa-apple-whole' },
      { title: '비타민 B군', desc: '에너지 대사와 활력 관리', icon: 'fa-bolt' },
      { title: '비타민C/글루타치온', desc: '항산화와 건강 루틴', icon: 'fa-sun' },
      { title: '유산균사균체', desc: '장 건강과 컨디션 관리', icon: 'fa-shield-heart' },
    ],
    giftTitle: '선물하고 싶은 프리미엄 여성 케어',
    giftDesc: `나를 위한 건강 루틴으로도,
소중한 여성에게 전하는 선물로도 좋은
프리미엄 여성 밸런스 케어 제품입니다.

화려한 포장보다 중요한 것은
매일 나를 돌보는 작은 습관입니다.

백도화 비밀상점의 우아함과
여성의 자신감을 채우는 프리미엄 케어를 경험해보세요.`,
    formulaTitle: '자연의 지혜를 담은 프리미엄 포뮬러',
    howToUse: `하루 권장 섭취량에 맞춰 충분한 물과 함께 섭취해주세요.
정확한 섭취량과 섭취 방법은 제품 패키지의 표시사항을 확인해주세요.`,
    warningText: `본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.
임산부, 수유부, 특정 질환이 있거나 의약품을 복용 중인 분은 섭취 전 전문가와 상담해주세요.
특정 성분에 알레르기가 있는 경우 원료명을 확인한 후 섭취해주세요.`,
  }

  return <PhysicalProductDetail {...productData} />
}
