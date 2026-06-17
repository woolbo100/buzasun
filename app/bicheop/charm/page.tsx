import React from 'react'
import BicheopCategoryTemplate from '@/components/BicheopCategoryTemplate'

export const metadata = {
  title: '매력비첩 | 백도화 매력학당',
  description: '타고난 매력, 분위기, 자기장, 끌림의 감각을 깨우는 기록입니다.',
}

export default function CharmBicheopPage() {
  return (
    <BicheopCategoryTemplate
      category="charm"
      categoryName="매력비첩"
      description="타고난 매력, 분위기, 자기장, 끌림의 감각을 깨우는 기록입니다."
    />
  )
}
