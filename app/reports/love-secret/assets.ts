// ═══════════════════════════════════════════════════════════════════════════
// 📸 백도화 매력학당 《연애비급 3종 올인원 세트》 이미지 에셋 설정 파일
// 초보자 안내: 새 이미지가 준비되면 src의 경로를 실제 파일 위치로 수정하시면 됩니다.
// (예: src: '/image/love/love_mockup.png')
// ═══════════════════════════════════════════════════════════════════════════

export interface LoveSecretAssetItem {
  id: string
  src: string
  alt: string
  aspectRatio: string
  objectFit: 'contain' | 'cover'
  placeholderLabel: string
  description: string
}

export const loveSecretAssets: Record<string, LoveSecretAssetItem> = {
  // 1. Hero: 연애비급 3종 세트 + 도화만개부 목업
  hero: {
    id: 'hero',
    src: 'love_mockup_placeholder.png',
    alt: '연애비급 3종 세트 + 도화만개부 목업',
    aspectRatio: 'aspect-video',
    objectFit: 'contain',
    placeholderLabel: '연애비급 3종 세트 + 도화만개부 목업 (Hero 3D)',
    description: 'love_mockup_placeholder.png'
  },

  // 2. Pain: 기울어진 시소 및 읽씹 화면 비주얼
  pain: {
    id: 'pain',
    src: '/images/love-secret/love-pain.png',
    alt: '기울어진 시소 및 읽씹 화면 비주얼',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: '기울어진 시소 및 읽씹 화면 비주얼',
    description: 'love-pain.png'
  },

  // 3. Book 1: 연애비급 본편 표지 목업
  book1: {
    id: 'book1',
    src: '/images/love-secret/book1-love-mockup.png?v=20261101_v2',
    alt: 'Book 1. [정통 바이블] 연애비급 완전판 목업',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 1. [정통 바이블] 연애비급 완전판',
    description: 'book1-love-mockup.png'
  },

  // 4. Book 2: 매혹의 무의식 침투 프로토콜 표지 목업
  protocol: {
    id: 'protocol',
    src: '/images/love-secret/book2-secret-mockup.png',
    alt: 'Book 2. [전략 시크릿북] 매혹의 무의식 침투 프로토콜 목업',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 2. [전략 시크릿북] 매혹의 무의식 침투 프로토콜',
    description: 'book2-secret-mockup.png'
  },

  // 5. Book 3: 30일 매력 각성 워크북 표지 목업
  workbook: {
    id: 'workbook',
    src: '/images/love-secret/book3-workbook-mockup.png',
    alt: 'Book 3. [실전 워크북] 30일 매력 각성 워크북 목업',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 3. [실전 워크북] 30일 매력 각성 워크북',
    description: 'book3-workbook-mockup.png'
  },

  // 6. Bonus: 도화만개부 부적 이미지
  amulet: {
    id: 'amulet',
    src: 'amulet_peach_placeholder.png',
    alt: '도화만개부 부적 이미지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Special Bonus. 도화만개부 모바일 월페이퍼',
    description: 'amulet_peach_placeholder.png'
  },

  // 7. Reviews: 독자 실제 변화 리뷰 캡처
  reviews: {
    id: 'reviews',
    src: 'love_reviews_placeholder.png',
    alt: '독자 실제 변화 리뷰 캡처',
    aspectRatio: 'aspect-video',
    objectFit: 'contain',
    placeholderLabel: '독자 실제 변화 리뷰 캡처',
    description: 'love_reviews_placeholder.png'
  },

  // 8. Final CTA: 매혹의 열쇠 오브제
  finalCta: {
    id: 'finalCta',
    src: 'final_love_bg_placeholder.png',
    alt: '매혹의 열쇠 오브제',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'cover',
    placeholderLabel: '매혹의 열쇠 오브제 (최종 CTA)',
    description: 'final_love_bg_placeholder.png'
  }
}
