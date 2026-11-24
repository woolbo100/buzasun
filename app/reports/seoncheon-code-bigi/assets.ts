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
  // 0. Top Banner / Main Hero: 최상단 와이드 배너 (16:9)
  topBanner: {
    id: 'topBanner',
    src: '/image/seoncheon-code-bigi/hero-secret-code.webp',
    alt: '선천코드 비기(先天코드 祕記) 최상단 메인 히어로 배너',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'cover',
    placeholderLabel: '선천코드 비기 메인 히어로 배너 (16:9)',
    description: '최상단 16:9 와이드 메인 히어로 이미지 적용 완료',
    isPlaceholder: false,
  },

  // 1. Hero: 패키지 전체 및 메인 표지 / 구매 카드 목업
  hero: {
    id: 'hero',
    src: '/image/seoncheon-code-bigi/book-purchase-mockup.webp',
    alt: '선천코드 비기(先天코드 祕記) 공식 전자책 구매 목업',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: '선천코드 비기 상품 구매 책 목업 (3:4)',
    description: '상품 구매 카드 전용 목업 이미지 적용 완료',
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
    src: '/image/seoncheon-code-bigi/relationship-disconnection.webp',
    alt: '같은 침대, 같은 공간에 있어도 우리는 왜 늘 다른 곳을 바라볼까요 - 관계 불안 공감',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '관계 불안 및 반복되는 패턴 공감 (3:4)',
    description: '단절된 시선과 관계의 거리감을 다룬 3:4 비주얼 이미지 적용 완료',
    isPlaceholder: false,
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

  // 13. Book Preview 1: 나와 상대의 본능 캐릭터 도감
  bookPreviewGuide: {
    id: 'bookPreviewGuide',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '미리보기 01 - 나와 상대의 본능 캐릭터 도감',
    aspectRatio: 'aspect-[440/661]',
    objectFit: 'contain',
    placeholderLabel: '미리보기 01: 본능 캐릭터 도감',
    description: '십성으로 살펴보는 5대 본능 캐릭터와 관계 아키타입',
    isPlaceholder: true,
  },

  // 14. Book Preview 2: 타고난 매력 페르소나 도감
  bookPreviewTools: {
    id: 'bookPreviewTools',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '미리보기 02 - 타고난 매력 페르소나 도감',
    aspectRatio: 'aspect-[440/656]',
    objectFit: 'contain',
    placeholderLabel: '미리보기 02: 매력 페르소나 도감',
    description: '10가지 일간을 통해 살펴보는 각자의 고유한 매력과 연애 성향',
    isPlaceholder: true,
  },

  // 15. Book Preview 3: 사랑과 인연의 실전 해석 도감
  bookPreviewJourney: {
    id: 'bookPreviewJourney',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '미리보기 03 - 사랑과 인연의 실전 해석 도감',
    aspectRatio: 'aspect-[440/660]',
    objectFit: 'contain',
    placeholderLabel: '미리보기 03: 실전 해석 도감',
    description: '이상형, 본능적 끌림, 배우자, 궁합, 관계 충돌 등을 직관적으로 이해하는 인포그래픽과 해설',
    isPlaceholder: true,
  },

  // 15-B. Book Preview 4: 도화 & 궁합 프로필 도감
  bookPreviewProfile: {
    id: 'bookPreviewProfile',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '미리보기 04 - 도화 & 궁합 프로필 도감',
    aspectRatio: 'aspect-[440/660]',
    objectFit: 'contain',
    placeholderLabel: '미리보기 04: 도화 & 궁합 프로필 도감',
    description: '도화 매혹의 기제와 나와 상대의 인연 궁합을 한눈에 살펴보는 실전 프로필 도감',
    isPlaceholder: true,
  },

  // 16. Heart Banner: 감성 배너 배경 (A WORD FOR YOUR HEART)
  heartBanner: {
    id: 'heartBanner',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 감성 배경 - 지금 필요한 것은 나를 소모하는 노력이 아닐 수 있습니다',
    aspectRatio: 'aspect-[1672/941]',
    objectFit: 'cover',
    placeholderLabel: 'A WORD FOR YOUR HEART 감성 배너 배경',
    description: '선천코드 비기 감성 와이드 배경 비주얼',
    isPlaceholder: true,
  },

  // 17. Art of Reading People: 감성 브릿지 책 펼쳐보기 비주얼 (THE ART OF READING PEOPLE)
  artOfReadingPeople: {
    id: 'artOfReadingPeople',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '사람이 궁금해질 때마다 펼쳐보는 관계 도감 - THE ART OF READING PEOPLE',
    aspectRatio: 'aspect-[4/3]',
    objectFit: 'cover',
    placeholderLabel: '사람이 궁금해질 때마다 펼쳐보는 관계 도감 비주얼',
    description: '책을 펼쳐보는 따뜻한 감성 오브제 또는 수묵 일러스트',
    isPlaceholder: true,
  },

  // 18. When to Open: 실생활 활용 공감 세로형 포스터 (WHEN TO OPEN THIS BOOK)
  whenToOpen: {
    id: 'whenToOpen',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '사람이 궁금해지는 순간, 이 책을 펼쳐보세요 - 선천코드 비기',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '사람이 궁금해지는 순간 포스터 (WHEN TO OPEN)',
    description: '관계의 고민과 궁금증이 생길 때 펼쳐보는 실전 관계 도감 세로형 비주얼 (권장 비율 3:4, 해상도 1200x1600px)',
    isPlaceholder: true,
  },
}
