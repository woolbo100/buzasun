// ═══════════════════════════════════════════════════════════════════════════
// 📸 백도화 매력학당 《선천코드 비기》 이미지 에셋 설정 파일
// 초보자 안내: 새 이미지가 준비되면 src의 경로를 실제 파일 위치로 수정하시면 됩니다.
// (예: src: '/image/seoncheon-code/character_guide.webp')
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
  // 1. Hero: 메인 공식 책 표지 (실제 파일 연결)
  hero: {
    id: 'hero',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기(先天코드 祕記) 공식 전자책 표지',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'cover',
    placeholderLabel: '선천코드 비기 공식 표지',
    description: '공식 비첩 실물 이미지 적용 완료',
    isPlaceholder: false,
  },

  // 2. Pain: 공감 및 인연의 반복 상황 이미지
  pain: {
    id: 'pain',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '반복되는 인연의 상처와 끌림 - 공감 일러스트',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '공감 및 인연 패턴 일러스트 (교체 예정)',
    description: '한지와 먹빛 안개 질감 속 인연의 엇갈림을 표현한 수묵 추상화',
    isPlaceholder: true,
  },

  // 3. Main Book: 본편 표지 목업
  book1: {
    id: 'book1',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 완전판 목업 이미지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '선천코드 비기 완전판 표지',
    description: 'seoncheon-code-secret-book.webp',
    isPlaceholder: false,
  },

  // 4. Character Map: 십성 5대 본능 & 10대 일간 인포그래픽
  characterMap: {
    id: 'characterMap',
    src: '',
    alt: '십성 5대 본능 & 10대 일간 관계 캐릭터 맵',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'contain',
    placeholderLabel: '10대 일간 & 십성 캐릭터 맵 (인포그래픽 제작 예정)',
    description: '천문도와 오행의 흐름을 현대적 골드 라인아트로 표현한 다이어그램',
    isPlaceholder: true,
  },

  // 5. Romance Code: 도화 & 매혹의 심리 가이드
  romanceCode: {
    id: 'romanceCode',
    src: '',
    alt: '도화와 오행으로 푸는 매혹의 심리',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'contain',
    placeholderLabel: '도화 & 매혹의 심리 다이어그램 (교체 예정)',
    description: '도화꽃과 금박이 흐르는 신비로운 비단 질감의 그래픽',
    isPlaceholder: true,
  },

  // 6. Preview 1: 만세력 판독법 미리보기
  preview1: {
    id: 'preview1',
    src: '',
    alt: '나의 선천코드를 찾는 만세력 기본 판독법',
    aspectRatio: 'aspect-[4/3]',
    objectFit: 'cover',
    placeholderLabel: '만세력 3대 핵심 글자 판독 가이드 (교체 예정)',
    description: '일간, 일지, 월지 판독 예시 인포그래픽',
    isPlaceholder: true,
  },

  // 7. Preview 2: 10대 일간 페르소나 미리보기
  preview2: {
    id: 'preview2',
    src: '',
    alt: '10대 일간 페르소나와 관계 캐릭터 도감',
    aspectRatio: 'aspect-[4/3]',
    objectFit: 'cover',
    placeholderLabel: '10대 일간 페르소나 카드 도감 (교체 예정)',
    description: '갑을병정무기경신임계 10대 일간 캐릭터 카드 예시',
    isPlaceholder: true,
  },

  // 8. Preview 3: 궁합·이상형·배우자 해석 미리보기
  preview3: {
    id: 'preview3',
    src: '',
    alt: '도화·이상형·배우자·궁합을 해석하는 주요 관점',
    aspectRatio: 'aspect-[4/3]',
    objectFit: 'cover',
    placeholderLabel: '궁합 & 배우자 복덕 판별 가이드 (교체 예정)',
    description: '관계의 끌림과 갈등을 해석하는 사주 오행 지도',
    isPlaceholder: true,
  },

  // 9. Closing: 엔딩 감성 배너
  closing: {
    id: 'closing',
    src: '/image/seoncheon-code-secret-book.webp',
    alt: '선천코드 비기 감성 엔딩 배너',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'cover',
    placeholderLabel: '선천코드 비기 감성 엔딩 배너',
    description: '한국 전통 서재와 금빛 오행 비첩이 어우러진 비주얼',
    isPlaceholder: false,
  },
}
