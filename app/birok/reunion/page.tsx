import React from 'react'
import BicheopCategoryTemplate from '@/components/BicheopCategoryTemplate'

export const metadata = {
  title: '재회비록 | 백도화 매력학당',
  description: '타이밍, 거리감, 다시 연결되는 심리를 다루는 백도화의 재회 기록입니다.',
}

export default function ReunionBicheopPage() {
  return (
    <BicheopCategoryTemplate
      category="reunion"
      categoryName="재회비록"
      description="타이밍, 거리감, 다시 연결되는 심리를 다루는 백도화의 재회 기록입니다."
    />
  )
}
