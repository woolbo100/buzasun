# 백도화 매력학당 웹사이트

Next.js App Router와 Tailwind CSS를 사용한 현대적인 웹사이트입니다.

## 기술 스택

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

배포 시에는 Vercel 대시보드에서 환경 변수를 설정하세요.

## 프로젝트 구조

```
my-website/
├── app/              # Next.js App Router
│   ├── layout.tsx    # 루트 레이아웃
│   ├── page.tsx      # 메인 페이지
│   ├── globals.css   # 전역 스타일
│   ├── sitemap.ts    # 사이트맵
│   └── manifest.ts   # PWA 매니페스트
├── components/       # React 컴포넌트
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── ProductCards.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── AdminModal.tsx
├── hooks/            # 커스텀 훅
│   └── useScrollAnimation.ts
├── public/           # 정적 파일
│   └── robots.txt    # 검색 엔진 설정
└── DEPLOYMENT.md     # 배포 가이드
```

## 주요 기능

- 반응형 디자인
- 스크롤 애니메이션
- 꽃잎 애니메이션 (Canvas)
- 문의 폼
- 관리자 모달
