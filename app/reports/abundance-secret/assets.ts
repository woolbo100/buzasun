// ═══════════════════════════════════════════════════════════════════════════
// 📸 백도화 매력학당 《풍요비책 3종 올인원 세트》 이미지 에셋 설정 파일
// 초보자 안내: 새 이미지가 준비되면 src의 경로를 실제 파일 위치로 수정하시면 됩니다.
// (예: src: '/image/abundance/abundance_mockup.png')
// ═══════════════════════════════════════════════════════════════════════════

export interface AbundanceSecretAssetItem {
  id: string
  src: string
  alt: string
  aspectRatio: string
  objectFit: 'contain' | 'cover'
  placeholderLabel: string
  description: string
}

export const abundanceSecretAssets: Record<string, AbundanceSecretAssetItem> = {
  // 1. Hero: 풍요비책 3종 세트 + 금옥만당부 목업
  hero: {
    id: 'hero',
    src: '/image/abundance-secret/baekdohwa-abundance-book-set.webp',
    alt: '풍요비책 3종 올인원 세트 목업',
    aspectRatio: 'aspect-square',
    objectFit: 'cover',
    placeholderLabel: '풍요비책 3종 세트 목업',
    description: 'baekdohwa-abundance-book-set.webp'
  },

  // 2. Pain: 깨진 그릇의 잔혹한 굴레 (3:4)
  pain: {
    id: 'pain',
    src: '/image/abundance-secret/broken-wealth-vessel.webp',
    alt: '아무리 퍼부어도 채워지지 않던, 깨진 그릇의 잔혹한 굴레',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '깨진 그릇의 잔혹한 굴레',
    description: 'broken-wealth-vessel.webp'
  },

  // 3. Book 1: 풍요비책 본편 표지
  book1: {
    id: 'book1',
    src: 'book1_abundance_placeholder.png',
    alt: '풍요비책 본편 표지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 1. [본편] 풍요비책 완전판 표지',
    description: 'book1_abundance_placeholder.png'
  },

  // 4. Book 2: 정화와 각성의 서 표지
  workbook: {
    id: 'workbook',
    src: 'book2_workbook_placeholder.png',
    alt: '정화와 각성의 서 표지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 2. [실전 워크북] 정화와 각성의 서 표지',
    description: 'book2_workbook_placeholder.png'
  },

  // 5. Book 3: 풍요의 파동 표지
  wave: {
    id: 'wave',
    src: 'book3_wave_placeholder.png',
    alt: '풍요의 파동 표지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Book 3. [특별 외전] 풍요의 파동 표지',
    description: 'book3_wave_placeholder.png'
  },

  // 6. Bonus: 금옥만당부 부적 이미지
  amulet: {
    id: 'amulet',
    src: 'amulet_gold_placeholder.png',
    alt: '금옥만당부 부적 이미지',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'contain',
    placeholderLabel: 'Special Bonus. 금옥만당부 모바일 월페이퍼',
    description: 'amulet_gold_placeholder.png'
  },

  // 7. Proof: 수강생/독자 실제 변화 리뷰 캡처
  proof: {
    id: 'proof',
    src: '/image/abundance-secret/abundance-income-flow.webp',
    alt: '풍요비책 실전 체감 사례 및 수입 흐름 변화',
    aspectRatio: 'aspect-[3/4]',
    objectFit: 'cover',
    placeholderLabel: '풍요비책 실전 체감 사례',
    description: 'abundance-income-flow.webp'
  },

  // 8. Final CTA: 황금의 문 오브제
  finalCta: {
    id: 'finalCta',
    src: 'final_cta_bg_placeholder.png',
    alt: '황금의 문 오브제',
    aspectRatio: 'aspect-[16/9]',
    objectFit: 'cover',
    placeholderLabel: '황금의 문 오브제 (최종 CTA)',
    description: 'final_cta_bg_placeholder.png'
  }
}
