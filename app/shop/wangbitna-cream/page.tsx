'use client'

import PhysicalProductDetail from '@/components/PhysicalProductDetail'

export default function WangbitnaCreamPage() {
  const productData = {
    productId: 'wangbitna-cream',
    title: '어디서나 왕빛나 크림',
    subtitle: '당신의 분위기는 작은 루틴에서 완성됩니다',
    description: `어디서나 왕빛나 크림은 바쁜 일상 속에서도 간편하게
피부의 탄력과 보습, 매끄러운 바디 컨디션을
관리하고 싶은 분들을 위한 프리미엄 바디 케어 제품입니다.`,
    heroImage: '/image/wangbitna/w1.webp',
    overviewImage: '/image/wangbitna/w2.webp',
    recommendedImage: '/image/wangbitna/w3.webp',
    formulaImage: '/image/wangbitna/w4.webp',
    giftImage: '/image/wangbitna/w5.png',
    ctaImage: '/image/wangbitna/w6.webp',
    price: '59,000', // 가격은 명시되어 있지 않아 임의로 설정하거나 확인 필요, 미스하이랜더(6.9만)보다 조금 높게 설정
    recommendedPoints: [
      '바디 피부 탄력 관리가 필요한 분',
      '건조하고 푸석한 피부가 고민인 분',
      '목, 가슴, 팔, 다리 등 바디 피부를 함께 관리하고 싶은 분',
      '매일 간편한 바디 케어 루틴을 원하는 분',
      '선물하기 좋은 프리미엄 바디 케어 제품을 찾는 분',
    ],
    ingredients: [
      { title: '지모뿌리추출물', desc: '탄력 있는 피부 관리', icon: 'fa-gem' },
      { title: '꿀추출물', desc: '촉촉한 보습 케어', icon: 'fa-tint' },
      { title: '병풀추출물', desc: '편안한 피부 컨디션 관리', icon: 'fa-leaf' },
      { title: '녹차추출물', desc: '산뜻한 피부 케어', icon: 'fa-sun' },
      { title: '보습 성분', desc: '매끄러운 바디 피부 루틴', icon: 'fa-droplet' },
      { title: '식물성 성분', desc: '데일리 셀프케어에 도움', icon: 'fa-seedling' },
    ],
    giftTitle: '선물하고 싶은 프리미엄 바디 리추얼',
    giftDesc: `나를 위한 셀프케어 루틴으로도,
소중한 사람을 위한 선물로도 좋은
우아한 바디 케어 셀렉션입니다.

단순한 바디크림이 아니라,
매일의 자신감을 채우는
백도화의 프리미엄 케어 루틴입니다.`,
    formulaTitle: '프리미엄 바디 케어 포뮬러',
    howToUse: `샤워 후 또는 피부가 건조하게 느껴질 때
적당량을 덜어 원하는 부위에 부드럽게 펴 발라주세요.

피부 상태에 따라 사용량과 사용 횟수는 조절할 수 있습니다.`,
    warningText: `화장품은 질병의 예방 또는 치료를 위한 의약품이 아닙니다.
사용 중 이상이 있을 경우 사용을 중지하고 전문가와 상담해주세요.`,
    accentColor: '#FBC1A7',
  }

  return <PhysicalProductDetail {...productData} />
}
