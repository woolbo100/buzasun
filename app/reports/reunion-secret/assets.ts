// ═══════════════════════════════════════════════════════════════════════════
// 📸 백도화 매력학당 《재회비방 3종 올인원 패키지》 이미지 에셋 설정 파일
// 초보자 안내: 새 이미지가 준비되면 src의 경로를 실제 파일 위치로 수정하시면 됩니다.
// (예: src: '/image/reunion-secret/kakao_blocked.png')
// ═══════════════════════════════════════════════════════════════════════════

export interface ReunionSecretAssetItem {
  id: string
  src: string
  alt: string
  aspectRatio: string
  objectFit: 'contain' | 'cover'
  placeholderLabel: string
  description: string
}

export const reunionSecretAssets: Record<string, ReunionSecretAssetItem> = {
  // 1. Hero: 패키지 전체 목업
  hero: {
    id: 'hero',
    src: 'hero_mockup_placeholder.png',
    alt: '재회비방 3종 패키지 + 부적 3D 목업',
    aspectRatio: 'aspect-video',
    objectFit: 'contain',
    placeholderLabel: '패키지 전체 목업 (Hero 3D)',
    description: 'hero_mockup_placeholder.png'
  },

  // 2. Pain: 읽씹·차단 상황 이미지
  pain: {
    id: 'pain',
    src: 'kakao_blocked_placeholder.png',
    alt: '카톡 읽씹/차단 화면 목업',
    aspectRatio: 'aspect-[4/5]',
    objectFit: 'contain',
    placeholderLabel: '카톡 읽씹·차단 화면 목업',
    description: 'kakao_blocked_placeholder.png'
  },

  // 3. Book 1: 본편 표지
  book1: {
    id: 'book1',
    src: 'book1_placeholder.png',
    alt: '본편 양장본 표지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 1. [본편] 재회비방 완전판 표지',
    description: 'book1_placeholder.png'
  },

  // 4. Book 2: 부록 1 표지
  book2: {
    id: 'book2',
    src: 'book2_placeholder.png',
    alt: '실전 행동 매뉴얼 표지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 2. [부록 1] 재회 역전의 법칙 표지',
    description: 'book2_placeholder.png'
  },

  // 5. Book 3: 부록 2 표지
  book3: {
    id: 'book3',
    src: 'book3_placeholder.png',
    alt: '시크릿 메시지 33선 표지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 3. [부록 2] 재회 후폭풍 치트키 표지',
    description: 'book3_placeholder.png'
  },

  // 6. Amulet: 모바일 부적
  amulet: {
    id: 'amulet',
    src: 'amulet_placeholder.png',
    alt: '회향연부 부적 이미지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Special Bonus. 회향연부 모바일 부적',
    description: 'amulet_placeholder.png'
  },

  // 7. Review: 후기 카톡 이미지
  review: {
    id: 'review',
    src: 'review_kakao_placeholder.png',
    alt: '재회 성공 카톡 캡처 3종',
    aspectRatio: 'aspect-[4/5]',
    objectFit: 'contain',
    placeholderLabel: '재회 성공 카톡 캡처 3종',
    description: 'review_kakao_placeholder.png'
  },

  // 8. Final CTA: 최종 CTA 배경 오브제
  finalCta: {
    id: 'finalCta',
    src: 'final_cta_bg_placeholder.png',
    alt: '결제 유도 배경 오브제',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'cover',
    placeholderLabel: '최종 CTA 배경 오브제',
    description: 'final_cta_bg_placeholder.png'
  }
}
