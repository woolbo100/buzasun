'use client'

import PhysicalProductDetail from '@/components/PhysicalProductDetail'

export default function PremiumBookmarkPage() {
  const productData = {
    productId: 'premium-bookmark',
    title: 'Premium Flower Bookmark Set',
    subtitle: '소중한 순간을 오래 기억하게 해주는 선물',
    description: `Premium Flower Bookmark Set는 책 속 한 페이지를 기억하게 해주는 프리미엄 메탈 북마크입니다.

섬세한 플라워 패턴과 우아한 나비 디테일, 고급스러운 태슬 장식이 더해져 단순한 독서용품이 아니라 의미를 담은 선물로 완성됩니다.

나를 위한 작은 사치로도, 소중한 사람을 위한 특별한 선물로도 잘 어울리는 프리미엄 기프트입니다.`,
    heroImage: '/image/bookmark/p1.webp',
    overviewImage: '/image/bookmark/p2.webp',
    recommendedImage: '/image/bookmark/p3.webp',
    formulaImage: '/image/bookmark/p4.webp',
    giftImage: '/image/bookmark/p5.webp',
    ctaImage: '/image/bookmark/p6.webp',
    price: '39,000',
    accentColor: '#BA8D7E', // 샴페인 골드/로즈골드 톤
    recommendedPoints: [
      '책을 사랑하는 사람에게 특별한 선물을 하고 싶은 분',
      '의미 있는 기념일 선물을 찾고 있는 분',
      '여성스럽고 우아한 감성 아이템을 좋아하는 분',
      '평범하지 않은 프리미엄 선물 아이템을 찾는 분',
      '독서 시간을 더욱 아름답게 만들고 싶은 분',
      '나를 위한 작은 사치와 감성적인 오브제를 찾는 분',
    ],
    ingredients: [
      { title: '고급 메탈 소재', desc: '섬세한 금속 조각 디테일', icon: 'fa-gem' },
      { title: '플라워 패턴', desc: '우아한 여성 감성을 담은 디자인', icon: 'fa-leaf' },
      { title: '버터플라이 포인트', desc: '특별한 순간을 상징하는 장식', icon: 'fa-wind' },
      { title: '태슬 디테일', desc: '부드럽고 고급스러운 마감', icon: 'fa-ellipsis-v' },
      { title: '선물 패키지', desc: '바로 선물 가능한 프리미엄 구성', icon: 'fa-gift' },
      { title: '에디션 선택', desc: 'Pink / Purple 취향 맞춤 선택', icon: 'fa-palette' },
    ],
    giftTitle: '선물하고 싶은 프리미엄 기프트',
    giftDesc: `Premium Flower Bookmark Set는

나를 위한 감성적인 선물이자,
소중한 사람에게 마음을 전하는
특별한 기프트가 됩니다.

화려함보다 오래 남는 것은
기억과 마음입니다.

책을 닫는 순간에도
그 사람을 떠올리게 되는 선물.`,
    formulaTitle: '섬세한 디테일이 만드는 프리미엄 무드',
    howToUse: `[상품 정보]
- 소재 : Premium Alloy Metal + Tassel
- 컬러 옵션 : Pink Edition / Purple Edition
- 구성 : 북마크 1ea + Gift Package
- 용도 : 선물용 / 독서용 / 기념품
- 포장 : 프리미엄 기프트 패키지 포함`,
    warningText: '제품 특성상 미세한 제작 차이가 있을 수 있으며, 이는 불량 사유에 해당하지 않습니다.',
    ctaTitle: '기억되는 선물은 오래 남습니다',
    ctaButtonText: 'Premium Flower Bookmark Set 구매하기',
    options: [
      {
        name: "에디션",
        values: ["Pink Edition", "Purple Edition"]
      }
    ]
  }

  return <PhysicalProductDetail {...productData} />
}
