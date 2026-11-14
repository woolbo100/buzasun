import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '선천코드 풍요 리포트 | 백도화 매력학당',
  description:
    '나의 재물 성향과 반복되는 선택에는 어떤 패턴이 있을까요? 선천코드를 바탕으로 돈을 대하는 성향과 강점, 주의할 습관을 살펴보는 개인 맞춤 풍요 리포트입니다.',
  alternates: {
    canonical: 'https://www.baekdohwa.com/reports/abundance-report',
  },
  openGraph: {
    title: '선천코드 풍요 리포트 | 백도화 매력학당',
    description:
      '나의 재물 성향과 반복되는 선택에는 어떤 패턴이 있을까요? 선천코드를 바탕으로 돈을 대하는 성향과 강점, 주의할 습관을 살펴보는 개인 맞춤 풍요 리포트입니다.',
    url: 'https://www.baekdohwa.com/reports/abundance-report',
    siteName: '백도화 매력학당',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/image/baekdohwa-wealth-destiny.webp',
        width: 1200,
        height: 630,
        alt: '선천코드 풍요 리포트 | 백도화 매력학당',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '선천코드 풍요 리포트 | 백도화 매력학당',
    description:
      '나의 재물 성향과 반복되는 선택에는 어떤 패턴이 있을까요? 선천코드를 바탕으로 돈을 대하는 성향과 강점, 주의할 습관을 살펴보는 개인 맞춤 풍요 리포트입니다.',
    images: ['/image/baekdohwa-wealth-destiny.webp'],
  },
}

export default function AbundanceReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
