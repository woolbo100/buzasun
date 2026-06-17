import React from 'react'
import BicheopCategoryTemplate from '@/components/BicheopCategoryTemplate'

export const metadata = {
  title: '마음비첩 | 백도화 매력학당',
  description: '감정, 무의식, 마음의 정렬, 내면의 힘을 다루는 백도화의 마음 기록입니다.',
}

export default function MindBicheopPage() {
  return (
    <BicheopCategoryTemplate
      category="mind"
      categoryName="마음비첩"
      description="감정, 무의식, 마음의 정렬, 내면의 힘을 다루는 백도화의 마음 기록입니다."
    />
  )
}
