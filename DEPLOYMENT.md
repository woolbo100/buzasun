# Vercel 배포 가이드

## 사전 준비

### 1. GitHub 저장소 생성
1. GitHub에 새 저장소 생성
2. 로컬 프로젝트를 GitHub에 푸시:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-repo.git
git push -u origin main
```

### 2. 환경 변수 설정
`.env.local` 파일 생성 (로컬 개발용):
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Vercel 배포 절차

### 방법 1: Vercel 웹 대시보드 사용 (권장)

1. **Vercel 계정 생성**
   - https://vercel.com 접속
   - GitHub 계정으로 로그인

2. **프로젝트 가져오기**
   - "Add New..." → "Project" 클릭
   - GitHub 저장소 선택
   - "Import" 클릭

3. **프로젝트 설정**
   - **Framework Preset**: Next.js (자동 감지)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (기본값)
   - **Output Directory**: `.next` (기본값)
   - **Install Command**: `npm install` (기본값)

4. **환경 변수 추가**
   - "Environment Variables" 섹션에서 추가:
     - `NEXT_PUBLIC_SITE_URL`: `https://your-project.vercel.app` (배포 후 실제 URL로 변경)

5. **배포 실행**
   - "Deploy" 버튼 클릭
   - 배포 완료 대기 (약 2-3분)

6. **배포 확인**
   - 배포 완료 후 제공되는 URL로 접속
   - 모든 페이지 정상 작동 확인

### 방법 2: Vercel CLI 사용

1. **Vercel CLI 설치**
```bash
npm i -g vercel
```

2. **로그인**
```bash
vercel login
```

3. **프로젝트 배포**
```bash
vercel
```

4. **프로덕션 배포**
```bash
vercel --prod
```

## 배포 후 확인 사항

### 1. 메타태그 확인
- [ ] Open Graph 이미지 표시 확인
- [ ] Twitter Card 표시 확인
- [ ] 각 페이지별 메타데이터 확인

### 2. 모바일 메뉴 테스트
- [ ] 모바일 화면에서 햄버거 메뉴 클릭
- [ ] 메뉴 열림/닫힘 정상 작동
- [ ] 전자책 드롭다운 메뉴 정상 작동
- [ ] 메뉴 항목 클릭 시 페이지 이동 확인

### 3. 외부 링크 확인
- [ ] 상담 링크 (`/counseling`) → 외부 폼 열림
- [ ] 리포트 링크 (`/report`) → 외부 결제 페이지 열림
- [ ] 전자책 링크 (`/ebooks`) → 외부 결제 페이지 열림
- [ ] 아이템샵 링크 (`/shop`) → 외부 결제 페이지 열림

### 4. 성능 확인
- [ ] Lighthouse 점수 확인 (Chrome DevTools)
- [ ] 페이지 로딩 속도 확인
- [ ] 이미지 최적화 확인

### 5. SEO 확인
- [ ] `/sitemap.xml` 접근 가능 확인
- [ ] `/robots.txt` 접근 가능 확인
- [ ] Google Search Console 등록 (선택)

## 커스텀 도메인 연결

1. **Vercel 대시보드에서 도메인 추가**
   - 프로젝트 → Settings → Domains
   - 도메인 입력 및 추가

2. **DNS 설정**
   - 도메인 제공업체에서 DNS 레코드 추가:
     - Type: `CNAME`
     - Name: `@` 또는 `www`
     - Value: `cname.vercel-dns.com`

3. **SSL 인증서 자동 발급**
   - Vercel이 자동으로 SSL 인증서 발급 (약 1-2분 소요)

4. **환경 변수 업데이트**
   - `NEXT_PUBLIC_SITE_URL`을 실제 도메인으로 변경
   - 재배포 필요

## 트러블슈팅

### 빌드 에러
- `npm run build` 로컬에서 먼저 확인
- Vercel 빌드 로그 확인

### 환경 변수 문제
- Vercel 대시보드에서 환경 변수 재확인
- 재배포 필요

### 이미지 최적화 에러
- `public` 폴더에 이미지 파일 확인
- 이미지 경로 확인

## 유용한 링크

- Vercel 문서: https://vercel.com/docs
- Next.js 배포 가이드: https://nextjs.org/docs/deployment
- Vercel 대시보드: https://vercel.com/dashboard
