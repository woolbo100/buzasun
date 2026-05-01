// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "백도화 매력학당 | 선천코드 분석 기반 연애·풍요 솔루션",
  description:
    "당신의 타고난 매력과 부의 그릇을 깨우세요. 선천코드 분석을 통한 맞춤형 연애·풍요 솔루션을 제안합니다. 백도화의 시크릿 아카이브.",

  // ✅ 이 주소 기준으로 SNS 미리보기가 만들어짐
  metadataBase: new URL("https://buzasun.vercel.app"),

  openGraph: {
    title: "백도화 매력학당 | 선천코드 분석 기반 연애·풍요 솔루션",
    description:
      "당신의 타고난 매력과 부의 그릇을 깨우세요. 백도화의 시크릿 아카이브.",
    type: "website",
    url: "https://buzasun.vercel.app",
    images: [
      {
        // 👉 나중에 이미지 파일만 넣으면 자동 적용됨
        url: "/images/og-image.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "백도화 매력학당 | 선천코드 분석 기반 연애·풍요 솔루션",
    description:
      "당신의 타고난 매력과 부의 그릇을 깨우세요. 백도화의 시크릿 아카이브.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
