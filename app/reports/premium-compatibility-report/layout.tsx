import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '프리미엄 궁합 리포트 | 백도화 매력학당',
  description:
    '두 사람은 왜 끌리고, 어디에서 부딪힐까요? 선천코드를 바탕으로 서로의 관계 성향과 갈등 패턴을 살펴보고, 더 나은 관계를 위한 맞춤 전략을 제안합니다.',
  alternates: {
    canonical: 'https://www.baekdohwa.com/reports/premium-compatibility-report',
  },
  openGraph: {
    title: '프리미엄 궁합 리포트 | 백도화 매력학당',
    description:
      '두 사람은 왜 끌리고, 어디에서 부딪힐까요? 선천코드를 바탕으로 서로의 관계 성향과 갈등 패턴을 살펴보고, 더 나은 관계를 위한 맞춤 전략을 제안합니다.',
    url: 'https://www.baekdohwa.com/reports/premium-compatibility-report',
    siteName: '백도화 매력학당',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/image/baekdohwa-romantic-compatibility.webp',
        width: 1200,
        height: 630,
        alt: '프리미엄 궁합 리포트 | 백도화 매력학당',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '프리미엄 궁합 리포트 | 백도화 매력학당',
    description:
      '두 사람은 왜 끌리고, 어디에서 부딪힐까요? 선천코드를 바탕으로 서로의 관계 성향과 갈등 패턴을 살펴보고, 더 나은 관계를 위한 맞춤 전략을 제안합니다.',
    images: ['/image/baekdohwa-romantic-compatibility.webp'],
  },
}

export default function CompatibilityReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
