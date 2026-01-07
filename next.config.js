/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 이미지 최적화 설정
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 압축 설정
  compress: true,
  // 프로덕션 소스맵 비활성화 (보안)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
