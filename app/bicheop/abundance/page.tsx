import React from 'react'
import BicheopCategoryTemplate from '@/components/BicheopCategoryTemplate'

export const metadata = {
  title: '풍요비첩 | 백도화 매력학당',
  description: '돈, 기회, 운의 그릇, 풍요를 받아들이는 마음의 구조를 다루는 기록입니다.',
}

export default function AbundanceBicheopPage() {
  return (
    <BicheopCategoryTemplate
      category="abundance"
      categoryName="풍요비첩"
      description="돈, 기회, 운의 그릇, 풍요를 받아들이는 마음의 구조를 다루는 기록입니다."
    />
  )
}
