import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '선천코드 연애 리포트 | 백도화 매력학당',
  description:
    '반복되는 연애 패턴에는 어떤 이유가 있을까요? 선천코드를 바탕으로 나의 연애 성향과 관계 패턴을 살펴보고, 나에게 맞는 관계 전략을 제안하는 개인 맞춤 리포트입니다.',
  alternates: {
    canonical: 'https://www.baekdohwa.com/reports/baekdohwa-report',
  },
  openGraph: {
    title: '선천코드 연애 리포트 | 백도화 매력학당',
    description:
      '반복되는 연애 패턴에는 어떤 이유가 있을까요? 선천코드를 바탕으로 나의 연애 성향과 관계 패턴을 살펴보고, 나에게 맞는 관계 전략을 제안하는 개인 맞춤 리포트입니다.',
    url: 'https://www.baekdohwa.com/reports/baekdohwa-report',
    siteName: '백도화 매력학당',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/image/baekdohwa-love-destiny.webp',
        width: 1200,
        height: 630,
        alt: '선천코드 연애 리포트 | 백도화 매력학당',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '선천코드 연애 리포트 | 백도화 매력학당',
    description:
      '반복되는 연애 패턴에는 어떤 이유가 있을까요? 선천코드를 바탕으로 나의 연애 성향과 관계 패턴을 살펴보고, 나에게 맞는 관계 전략을 제안하는 개인 맞춤 리포트입니다.',
    images: ['/image/baekdohwa-love-destiny.webp'],
  },
}

export default function BaekdohwaReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
