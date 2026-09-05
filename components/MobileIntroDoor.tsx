'use client';

import React, { useState, useEffect } from 'react';

interface MobileIntroDoorProps {
  onComplete?: () => void;
}

export default function MobileIntroDoor({ onComplete }: MobileIntroDoorProps) {
  // 모바일 여부 및 최초 방문자 여부 체크 완료 상태
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  // 애니메이션 진행 단계
  // 'idle': 대기(닫힌 문 + 입장 버튼)
  // 'opening': 문 열림 + 중앙 황금빛 폭발 + 활짝 열린 문 줌인 연출 (약 1.45초)
  // 'fadingOut': 인트로 오버레이 전체 부드러운 페이드아웃 (약 0.4초)
  // 'finished': 종료 후 완전 제거
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'opening' | 'fadingOut' | 'finished'>('idle');

  // 이미지 경로
  const closedDoorImg = '/image/baekdohwa-door-closed.webp';
  const openDoorImg = '/image/baekdohwa-door-open.webp';

  useEffect(() => {
    // 1. 모바일 화면(768px 이하) & 최초 방문 검사
    const checkEligibility = () => {
      const isMobile = window.innerWidth <= 768;
      let hasSeen = false;
      try {
        hasSeen = Boolean(localStorage.getItem('baekdohwa_intro_seen'));
      } catch (err) {
        hasSeen = false;
      }

      if (isMobile && !hasSeen) {
        setShouldShow(true);
        // 모바일 주소창 바운스 및 본문 스크롤 잠금
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // 두 이미지 브라우저 메모리에 선제적 캐싱
        const img1 = new window.Image();
        const img2 = new window.Image();
        img1.src = closedDoorImg;
        img2.src = openDoorImg;
      }
    };

    checkEligibility();

    return () => {
      // 컴포넌트 정리 시 스크롤 안전 복구
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  // "백도화 매력학당 입장하기" 버튼 클릭 시 동작
  const handleEnterClick = () => {
    if (animationPhase !== 'idle') return;

    // 1. 즉시 로컬 스토리지에 기록 (새로고침 시 재노출 방지)
    try {
      localStorage.setItem('baekdohwa_intro_seen', 'true');
    } catch (e) {
      console.error('Failed to set localStorage', e);
    }

    // 2. 문 열림 및 안쪽으로 빨려 들어가는 시네마틱 연출 시작
    setAnimationPhase('opening');

    // 3. 약 1.45초 후 전체 화면 부드러운 페이드아웃 시작
    const timer1 = setTimeout(() => {
      setAnimationPhase('fadingOut');
    }, 1450);

    // 4. 약 1.85초 후 인트로 완전 종료 및 본문 스크롤 복구
    const timer2 = setTimeout(() => {
      setAnimationPhase('finished');
      setShouldShow(false);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      if (onComplete) onComplete();
    }, 1850);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  // PC/태블릿이거나 이미 방문한 사용자이거나 종료된 경우 아무것도 렌더링하지 않음
  if (!shouldShow || animationPhase === 'finished') {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="백도화 매력학당 인트로"
      className={`fixed inset-0 flex flex-col justify-between overflow-hidden bg-[#18080f] select-none transition-opacity duration-400 ease-out ${
        animationPhase === 'fadingOut' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        zIndex: 999999, // 카카오톡 상담 버튼(z-9999) 및 모든 요소보다 최상위 보장
        height: '100dvh', // 모바일 상하단 툴바 변화 완벽 대응
        width: '100vw',
      }}
    >
      {/* 1. 배경 이미지 및 시네마틱 연출 컨테이너 */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#18080f]">
        
        {/* (1) 닫힌 문 레이어 */}
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
            animationPhase === 'idle'
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105 blur-[2px]'
          }`}
          style={{ transformOrigin: 'center 46%' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={closedDoorImg}
            alt="백도화의 닫힌 문"
            className="w-full h-full object-cover"
            style={{
              // 손잡이와 문 중앙선이 화면 정중앙에 오도록 정밀 배치
              objectPosition: 'center 46%',
            }}
          />
        </div>

        {/* (2) 활짝 열린 문 레이어 (클릭 시 180도 활짝 열려 안쪽 정원으로 쑥 빨려 들어가는 연출) */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-600 ease-out ${
            animationPhase === 'idle'
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100 intro-camera-zoom'
          }`}
          style={{ transformOrigin: 'center 46%' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={openDoorImg}
            alt="백도화의 활짝 열린 문"
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center 46%',
            }}
          />
        </div>

        {/* (3) 문 중앙에서 터져 나오는 금빛 수직 광선 (Door Crevice Light Ray) */}
        <div
          className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-600 ease-out ${
            animationPhase === 'opening'
              ? 'opacity-95 scale-y-100 scale-x-100'
              : 'opacity-0 scale-y-75 scale-x-0'
          }`}
          style={{
            width: '64px',
            background:
              'radial-gradient(ellipse at center, rgba(255, 238, 190, 0.95) 0%, rgba(215, 168, 110, 0.75) 40%, rgba(160, 95, 40, 0) 80%)',
            filter: 'blur(10px)',
            transformOrigin: 'center center',
          }}
        />

        {/* (4) 문 안쪽에서 화면 전체로 퍼지는 따뜻한 황금빛 오버레이 (Golden Aura Bloom) */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-out ${
            animationPhase === 'opening' ? 'opacity-85' : 'opacity-0'
          }`}
          style={{
            background:
              'radial-gradient(circle at center, rgba(255, 245, 220, 0.55) 0%, rgba(212, 178, 167, 0.35) 45%, rgba(26, 9, 16, 0.1) 85%)',
          }}
        />

        {/* (5) 가장자리 비네팅 (외곽을 어둡게 눌러 문의 중심부에 시선 집중) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(18, 5, 10, 0.35) 75%, rgba(10, 2, 6, 0.75) 100%)',
          }}
        />
      </div>

      {/* 2. 상단 브랜드 서브 타이틀 (은은한 장식) */}
      <div className="relative z-10 pt-9 px-6 text-center pointer-events-none">
        <span
          className={`inline-block text-[11px] tracking-[0.28em] font-light text-[#EBD5CD]/75 uppercase transition-all duration-400 ${
            animationPhase === 'idle' ? 'opacity-90 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}
        >
          BAEKDOHWA SECRET ARCHIVE
        </span>
      </div>

      {/* 3. 하단 브랜드 입장 버튼 */}
      <div className="relative z-10 pb-10 px-6 w-full max-w-[420px] mx-auto">
        <button
          type="button"
          onClick={handleEnterClick}
          disabled={animationPhase !== 'idle'}
          aria-label="백도화 매력학당 입장하기"
          className={`w-full py-4 px-6 rounded-[2px] transition-all duration-400 ease-out cursor-pointer active:scale-[0.98] ${
            animationPhase === 'idle'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
          style={{
            // 백도화 고유의 깊은 버건디 배경 + 샴페인 로즈골드 얇은 테두리
            backgroundColor: '#260B12',
            border: '1px solid rgba(212, 178, 167, 0.75)',
            boxShadow:
              '0 0 16px rgba(212, 178, 167, 0.22), inset 0 0 10px rgba(212, 178, 167, 0.08)',
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            <span
              className="text-[15.5px] font-medium tracking-[0.08em] text-[#F5E7DC]"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                textShadow: '0 1px 3px rgba(0,0,0,0.6)',
              }}
            >
              백도화 매력학당 입장하기
            </span>
            {/* 은은한 샴페인 골드 화살표 */}
            <svg
              className="w-4 h-4 text-[#D4B2A7] translate-y-[-0.5px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* 4. 애니메이션 스타일 & 접근성(모션 줄이기) 대응 */}
      <style jsx global>{`
        @keyframes cameraZoomIn {
          0% {
            transform: scale(1);
            filter: brightness(0.96);
          }
          35% {
            filter: brightness(1.08);
          }
          100% {
            transform: scale(1.15);
            filter: brightness(1.02);
          }
        }

        .intro-camera-zoom {
          animation: cameraZoomIn 1.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .intro-camera-zoom {
            animation: none !important;
            transform: scale(1) !important;
          }
        }
      `}</style>
    </div>
  );
}
