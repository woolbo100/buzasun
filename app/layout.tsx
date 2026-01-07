import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'),
  title: {
    default: '백도화 매력학당 | 선천코드 분석 기반 연애·풍요 솔루션',
    template: '%s | 백도화 매력학당',
  },
  description: '백도화 매력학당 - 선천코드 분석을 통한 에너지 패턴과 매력 주파수를 발견하는 고급스러운 솔루션',
  keywords: ['백도화', '매력학당', '선천코드', '에너지 패턴', '매력 주파수', '연애 솔루션', '풍요 솔루션'],
  authors: [{ name: '백도화 매력학당' }],
  creator: '백도화 매력학당',
  publisher: '백도화 매력학당',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: '/',
    siteName: '백도화 매력학당',
    title: '백도화 매력학당 | 선천코드 분석 기반 연애·풍요 솔루션',
    description: '선천코드 분석을 통한 에너지 패턴과 매력 주파수를 발견하는 고급스러운 솔루션',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '백도화 매력학당',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '백도화 매력학당 | 선천코드 분석 기반 연애·풍요 솔루션',
    description: '선천코드 분석을 통한 에너지 패턴과 매력 주파수를 발견하는 고급스러운 솔루션',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
