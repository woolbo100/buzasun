import React from 'react'
import BicheopCategoryTemplate from '@/components/BicheopCategoryTemplate'

export const metadata = {
  title: '연애비첩 | 백도화 매력학당',
  description: '사랑의 흐름, 관계의 신호, 선택받는 포지션을 다루는 백도화의 연애 기록입니다.',
}

export default function LoveBicheopPage() {
  return (
    <BicheopCategoryTemplate
      category="love"
      categoryName="연애비첩"
      description="사랑의 흐름, 관계의 신호, 선택받는 포지션을 다루는 백도화의 연애 기록입니다."
    />
  )
}
