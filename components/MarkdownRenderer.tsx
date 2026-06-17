import React from 'react'

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) return null

  // 개행 문자를 기준으로 모든 라인을 쪼갭니다
  const lines = content.split(/\r?\n/)
  
  // 마크다운 인라인 스타일 (**굵은 글씨**) 처리기
  const parseInlineStyles = (text: string) => {
    const boldPattern = /\*\*(.*?)\*\*/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = boldPattern.exec(text)) !== null) {
      // 매칭 전 일반 텍스트 추가
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index))
      }
      // 강조(Bold) 텍스트 추가
      parts.push(
        <strong key={match.index} className="text-[#E6BE8A] font-bold text-shadow-gold">
          {match[1]}
        </strong>
      )
      lastIndex = boldPattern.lastIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  // 각 라인을 HTML 리액트 태그로 변환합니다
  const elements = lines.map((line, idx) => {
    const trimmed = line.trim()

    // 빈 줄 처리 (단락 사이 여백용)
    if (trimmed === '') {
      return <div key={idx} className="h-4" />
    }

    // 소제목 H3 (### 소제목)
    if (trimmed.startsWith('### ')) {
      return (
        <h4 key={idx} className="text-base md:text-lg font-bold text-white mt-6 mb-3 tracking-wider font-elegant border-l-2 border-[#E6BE8A]/40 pl-3">
          {parseInlineStyles(trimmed.slice(4))}
        </h4>
      )
    }

    // 중간제목 H2 (## 중간제목)
    if (trimmed.startsWith('## ')) {
      return (
        <h3 key={idx} className="text-xl md:text-2xl font-bold text-[#E6BE8A] mt-10 mb-5 tracking-wide font-elegant">
          {parseInlineStyles(trimmed.slice(3))}
        </h3>
      )
    }

    // 큰제목 H1 (# 큰제목)
    if (trimmed.startsWith('# ')) {
      return (
        <h2 key={idx} className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 tracking-widest font-elegant">
          {parseInlineStyles(trimmed.slice(2))}
        </h2>
      )
    }

    // 리스트 아이템 (- 목록 또는 * 목록)
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      return (
        <ul key={idx} className="list-none pl-4 my-2 text-sm md:text-base text-[#EDE6DA]/80 leading-relaxed font-light flex gap-2">
          <span className="text-[#E6BE8A] select-none">✦</span>
          <li className="break-keep">{parseInlineStyles(trimmed.slice(2))}</li>
        </ul>
      )
    }

    // 일반 문장 단락
    return (
      <p key={idx} className="text-sm md:text-base text-[#EDE6DA]/85 leading-relaxed mb-4 break-keep font-light whitespace-pre-wrap">
        {parseInlineStyles(line)}
      </p>
    )
  })

  return <div className="bicheop-markdown-viewer font-sans">{elements}</div>
}
