import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '백도화 매력학당',
    short_name: '백도화',
    description: '선천코드 분석 기반 연애·풍요 솔루션',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0015',
    theme_color: '#ff1493',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
