'use client'

import PhysicalProductDetail from '@/components/PhysicalProductDetail'

export default function DubomProductPage() {
  const productData = {
    productId: 'dubom',
    title: '두봄 | DUBOM',
    tagline: 'BAEKDOHWA WELLNESS SELECTION',
    heroEnglishSubtitle: 'DUBOM · THE SECOND SPRING',
    heroMainCopy: '여자에게는 두 번의 봄이 옵니다',
    heroDescription: `첫 번째 봄이 세상을 향해 피어나는 시간이었다면,
두 번째 봄은 나에게 다시 돌아오는 시간입니다.

매일 조금 더 나를 돌보고,
오늘의 나에게 필요한 것을 선택하는 시간.

여성의 건강한 변화와 일상의 밸런스를 위한
프리미엄 여성 데일리 케어, 두봄.`,
    heroButtonText: '두봄 만나보기',
    subtitle: '여성의 두 번째 봄을 위한 프리미엄 데일리 밸런스 케어',
    
    // 컬러 팔레트: 누드 피치 & 샴페인 골드 (백도화 톤앤매너)
    accentColor: '#D8A48F',
    
    // 이미지 매핑 (지침에 지정된 경로)
    heroImage: '/image/dubom/m1.webp',
    overviewImage: '/image/dubom/m2.webp',
    recommendedImage: '/image/dubom/m3.webp',
    formulaImage: '/image/dubom/m4.webp',
    selfCareImage: '/image/dubom/m5.webp',
    giftImage: '/image/dubom/m6.webp',
    howToUseImage: '/image/dubom/m7.webp',
    ctaImage: '/image/dubom/m6.webp',

    price: '89,000',

    // 2. Brand Story / Product Overview Section
    overviewTitle: '두 번째 봄은\n나를 돌보는 시간입니다',
    description: `누군가를 돌보고,
수많은 역할을 살아오느라
정작 나 자신을 뒤로 미뤄온 시간.

이제는 내 몸의 변화와
오늘의 컨디션을 조금 더 섬세하게 살펴보세요.

두봄은 여성의 건강한 변화의 시기를 생각해
기능성 원료와 다양한 부원료를 함께 구성한
프리미엄 여성 건강기능식품입니다.

단순히 무언가를 더 먹는 것이 아니라,
매일 나를 챙기는 작은 습관.

두봄을 나를 위한
데일리 밸런스 루틴으로 제안합니다.`,
    overviewPoints: [
      '여성 건강 밸런스 케어',
      '갱년기 여성 건강에 도움을 줄 수 있는 기능성 원료',
      '매일 간편하게 챙기는 루틴',
      '다양한 식물 유래 부원료',
      '여성의 변화하는 시기를 고려한 포뮬러',
      '나를 위한 프리미엄 자기관리'
    ],

    // 3. Recommended For Section
    recommendedPoints: [
      '요즘 내 몸과 컨디션의 변화에 조금 더 관심을 갖고 싶은 분',
      '여성의 건강한 변화의 시기를 미리 준비하고 싶은 분',
      '갱년기 전후 여성 건강 관리에 관심 있는 분',
      '매일 간편하게 챙길 수 있는 여성 건강 루틴을 찾는 분',
      '원료 구성을 꼼꼼하게 확인하고 제품을 선택하는 분',
      '가족을 챙기듯 이제는 나 자신도 돌보고 싶은 분',
      '엄마, 아내, 언니, 친구에게 의미 있는 건강 선물을 찾는 분'
    ],

    // 4. Formula Section
    formulaTitle: '여성을 생각해 구성한\n두봄의 밸런스 포뮬러',
    formulaDescription: `여성의 건강한 일상과 변화의 시기를 생각해
기능성 원료와 다양한 부원료를 함께 담았습니다.`,
    functionalIngredients: [
      {
        title: '회화나무열매추출물',
        desc: '갱년기 여성 건강에 도움을 줄 수 있는 식약처 기능성 인정 원료',
        icon: 'fa-leaf',
        badge: '식약처 기능성 인정 원료'
      }
    ],
    subIngredients: [
      {
        title: '감마리놀렌산 함유 유지',
        desc: '식물 유래 원료를 함께 배합했습니다.',
        icon: 'fa-seedling'
      },
      {
        title: '이노시톨',
        desc: '두봄의 균형 잡힌 포뮬러를 구성하는 부원료입니다.',
        icon: 'fa-heart'
      },
      {
        title: '브로콜리추출물분말',
        desc: '자연에서 찾은 식물 유래 원료를 더했습니다.',
        icon: 'fa-spa'
      },
      {
        title: '퀘르세틴 & 브로멜라인',
        desc: '여성의 조화로운 일상을 고려하여 배합한 부원료입니다.',
        icon: 'fa-shield-halved'
      },
      {
        title: '어성초추출분말',
        desc: '정갈하게 선별하여 더한 식물 유래 부원료입니다.',
        icon: 'fa-clover'
      },
      {
        title: '프로바이오틱스 유산균',
        desc: '매일의 편안하고 가벼운 루틴을 돕는 부원료입니다.',
        icon: 'fa-circle-check'
      }
    ],
    formulaWarning: `본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.
건강기능식품의 기능성 및 원료 정보는 제품 표시사항을 기준으로 확인해주세요.
개인의 체질과 건강 상태에 따라 체감은 다를 수 있습니다.`,

    // 5. Self-Care / Premium Product Section
    selfCareTitle: '나를 위한 것이\n가장 뒤가 되지 않도록',
    selfCareDesc: `가족을 먼저 챙기고,
일을 먼저 생각하고,
나를 위한 선택은 늘 뒤로 미뤄두었다면.

이제는 나에게도
작은 건강 루틴을 선물해보세요.

두봄이 이야기하는 두 번째 봄은
젊음으로 돌아가는 시간이 아닙니다.

지금의 나를 이해하고,
지금의 나를 더 소중하게 돌보는 시간입니다.

Golden Age가 아닌,
나만의 Second Spring.

건강과 우아함, 여성의 자신감과 자기돌봄이 느껴지는
백도화 비밀상점만의 프리미엄 감성으로 함께합니다.`,

    // 6. Gift Section
    giftTitle: '두 번째 봄을 선물하세요',
    giftDesc: `엄마에게,
사랑하는 아내에게,
언니와 친구에게,
그리고 가장 소중한 나 자신에게.

건강을 챙기라는 말 대신
"당신의 시간을 더 소중히 여기길 바란다"는 마음을 담아
두봄을 선물해보세요.

과도한 포장보다 깊은 진심이 깃든
백도화의 프리미엄 여성 웰니스 셀렉션입니다.`,

    // 7. How To Use Section
    howToUse: `하루 권장 섭취량에 맞춰
충분한 물과 함께 섭취해주세요.

정확한 섭취량과 섭취 방법은
제품 패키지의 표시사항을 확인해주세요.`,
    warningText: `본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.
임산부, 수유부, 특정 질환이 있거나 의약품을 복용 중인 분은 섭취 전 전문가와 상담해주세요.
특정 성분에 알레르기가 있는 경우 제품의 원료명 및 알레르기 표시를 반드시 확인해주세요.`,

    // 8. Notice Section
    notices: [
      '본 제품은 실물 배송 상품입니다.',
      '결제 시 배송지 정보를 정확히 입력해주세요.',
      '배송 기간은 결제 완료 후 영업일 기준 2~5일 정도 소요될 수 있습니다.',
      '제품 특성상 개봉 후 단순 변심에 의한 교환/반품은 제한될 수 있습니다.',
      '건강기능식품은 개인의 체질과 건강 상태에 따라 체감이 다를 수 있습니다.',
      '본 제품은 질병의 예방 및 치료를 위한 의약품이 아닙니다.',
      '제품의 기능성, 원료 및 섭취방법은 제품 표시사항을 우선합니다.',
      '자세한 사항은 배송정책 및 환불정책을 확인해주세요.'
    ],

    // 9. Final CTA Section
    ctaTitle: '다시, 나에게 피어나는 계절',
    ctaDescription: `여성의 시간은
어느 한 시기에 머물지 않습니다.

지금의 나를 이해하고,
오늘의 나를 돌보고,
나에게 필요한 것을 선택하는 시간.

여자에게 찾아오는 또 하나의 봄.

두봄과 함께
나를 위한 데일리 밸런스 루틴을 시작해보세요.`,
    ctaButtonText: '두봄 구매하기'
  }

  return <PhysicalProductDetail {...productData} />
}
