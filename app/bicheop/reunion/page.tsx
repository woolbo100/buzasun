import React from 'react'
import BicheopCategoryTemplate from '@/components/BicheopCategoryTemplate'

export const metadata = {
  title: '재회비첩 | 백도화 매력학당',
  description: '끝난 인연의 흐름을 다시 읽고, 재회의 가능성과 거리 조절을 다루는 기록입니다.',
}

export default function ReunionBicheopPage() {
  return (
    <BicheopCategoryTemplate
      category="reunion"
      categoryName="재회비첩"
      description="끝난 인연의 흐름을 다시 읽고, 재회의 가능성과 거리 조절을 다루는 기록입니다."
    />
  )
}
