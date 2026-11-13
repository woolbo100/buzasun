// ═══════════════════════════════════════════════════════════════════════════
// 📸 백도화 매력학당 《선천코드 비기》 이미지 에셋 설정 파일
// 초보자 안내: 새 이미지가 준비되면 src의 경로를 실제 파일 위치로 수정하시면 됩니다.
// (예: src: '/image/seoncheon-code/hero_banner.webp')
// ═══════════════════════════════════════════════════════════════════════════

export interface SeoncheonCodeAssetItem {
  id: string
  src: string
  alt: string
  aspectRatio: string
  objectFit: 'contain' | 'cover'
  placeholderLabel: string
  description: string
  isPlaceholder?: boolean
}

export const seoncheonCodeAssets: Record<string, SeoncheonCodeAssetItem> = {
  // 1. Hero: 패키지 전체 및 메인 표지
  hero: {
    id: 'hero',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기(先天코드 祕記) 공식 전자책 표지',
    aspectRatio: 'aspect-video',
    objectFit: 'contain',
    placeholderLabel: '선천코드 비기 전체 패키지 목업 (Hero 3D)',
    description: '공식 비첩 실물 이미지 적용 완료',
    isPlaceholder: false,
  },

  // 2. Pain: 반복되는 인연의 상처와 엇갈림
  pain: {
    id: 'pain',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '반복되는 인연의 갈등과 결핍 - 공감 일러스트',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '인연의 갈등 및 결핍 공감 일러스트',
    description: '한지와 먹빛 안개 질감 속 인연의 엇갈림을 표현한 수묵 추상화',
    isPlaceholder: true,
  },

  // 3. Book 1: 본편 표지
  book1: {
    id: 'book1',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 [본편] 완전판 표지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '선천코드 비기 본편 표지',
    description: 'seoncheon-code-secret-book.webp',
    isPlaceholder: false,
  },

  // 4. Book 2: 실전 부록 1 표지
  book2: {
    id: 'book2',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 [실전 부록 1] 10대 일간 & 십성 심리 암호 해독 도감',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '실전 부록 1: 10대 일간 & 십성 심리 암호 해독 도감',
    description: '일간·십성 페르소나 및 관계 분석 도감',
    isPlaceholder: true,
  },

  // 5. Book 3: 실전 부록 2 표지
  book3: {
    id: 'book3',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 [실전 부록 2] 도화·이상형·배우자 복덕 실전 판별 비책',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '실전 부록 2: 도화·이상형·배우자 복덕 판별 비책',
    description: '도화 매혹의 심리와 궁합·인연 판별 실전 가이드',
    isPlaceholder: true,
  },

  // 6. Amulet / Special Gift: 특별 비책
  amulet: {
    id: 'amulet',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '특별 비책: 오행 조화 & 인연 수호 모바일 부적 비첩',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: '오행 조화 & 인연 수호 모바일 부적 비첩',
    description: '선천코드 조화 디지털 부적 이미지',
    isPlaceholder: true,
  },

  // 7. Review: 독자 후기 및 변화
  review: {
    id: 'review',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 독자 체감 후기',
    aspectRatio: 'aspect-square',
    objectFit: 'cover',
    placeholderLabel: '선천코드 비기 독자 체감 후기',
    description: '실전 적용 후 관계 변화 사례',
    isPlaceholder: true,
  },

  // 8. Anxiety: 관계의 불안과 자책
  anxiety: {
    id: 'anxiety',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '왜 매번 비슷한 상처 앞에서 무너질까 - 관계 불안 공감',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '관계 불안 및 반복되는 패턴 공감',
    description: '불안과 자책의 순간을 다룬 공감 비주얼',
    isPlaceholder: true,
  },

  // 9. Curriculum: 전체 아키텍처 인포그래픽
  curriculum: {
    id: 'curriculum',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 전체 커리큘럼 아키텍처',
    aspectRatio: 'aspect-video',
    objectFit: 'contain',
    placeholderLabel: '선천코드 비기 커리큘럼 & 오행 아키텍처 다이어그램',
    description: '10대 일간과 십성, 도화 심리 7단계 아키텍처',
    isPlaceholder: true,
  },

  // 10. Relation Law: 관계 역전 및 오행 메커니즘
  reunionLaw: {
    id: 'reunionLaw',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 관계 역학 - 오행의 끌림과 상호작용 법칙',
    aspectRatio: 'aspect-video',
    objectFit: 'contain',
    placeholderLabel: '선천코드 관계 역학 인포그래픽',
    description: '오행 상생상극과 관계 역학 다이어그램',
    isPlaceholder: true,
  },

  // 11. Sovereign: 인연의 주권자
  sovereign: {
    id: 'sovereign',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '나만의 매혹과 고유한 본성을 회복하는 길 - 인연의 주권자',
    aspectRatio: 'aspect-video',
    objectFit: 'contain',
    placeholderLabel: '나만의 본성을 회복하는 인연의 주권자 배너',
    description: '선천코드로 깨우는 당당한 나만의 중심',
    isPlaceholder: true,
  },

  // 12. Final CTA: 최종 비첩
  finalCta: {
    id: 'finalCta',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 최종 안내 비첩',
    aspectRatio: 'aspect-video',
    objectFit: 'cover',
    placeholderLabel: '선천코드 비기 최종 안내 비첩',
    description: '선천코드 비기 엔딩 비주얼',
    isPlaceholder: false,
  },
}
