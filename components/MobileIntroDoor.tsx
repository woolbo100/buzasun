'use client';

import React, { useState, useEffect } from 'react';

interface MobileIntroDoorProps {
  onComplete?: () => void;
}

export default function MobileIntroDoor({ onComplete }: MobileIntroDoorProps) {
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const [doorState, setDoorState] = useState<'idle' | 'opening' | 'finished'>('idle');

  // 백도화 전통 대문 이미지
  const doorImgSrc = '/image/baekdohwa-door-closed.webp';

  useEffect(() => {
    const checkEligibility = () => {
      const isMobile = window.innerWidth <= 768;
      let hasSeen = false;
      try {
        hasSeen = Boolean(localStorage.getItem('baekdohwa_intro_seen'));
      } catch (err) {
        hasSeen = false;
      }

      // 테스트용 강제 실행 파라미터 (?intro=1 또는 ?door=1)
      let forceIntro = false;
      try {
        const urlParams = new URLSearchParams(window.location.search);
        forceIntro = urlParams.get('intro') === '1' || urlParams.get('door') === '1';
      } catch (e) {
        forceIntro = false;
      }

      if ((isMobile && !hasSeen) || forceIntro) {
        setShouldShow(true);
        // 인트로 진행 동안 본문 스크롤 잠금
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // 대문 이미지 사전 캐싱
        const img = new window.Image();
        img.src = doorImgSrc;
      }
    };

    checkEligibility();

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  // "백도화 매력학당 입장하기" 버튼 클릭 시
  const handleEnter = () => {
    if (doorState !== 'idle') return;

    try {
      localStorage.setItem('baekdohwa_intro_seen', 'true');
    } catch (e) {
      console.error('Failed to write localStorage', e);
    }

    // 1단계: 문이 좌우로 스르륵 열리기 시작
    setDoorState('opening');

    // 2단계: 문이 완전히 젖혀진 후 (약 1.35초) 스크롤 복구
    setTimeout(() => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 1350);

    // 3단계: 1.75초 후 인트로 컴포넌트 완전히 언마운트
    setTimeout(() => {
      setDoorState('finished');
      setShouldShow(false);
      if (onComplete) onComplete();
    }, 1750);
  };

  if (!shouldShow || doorState === 'finished') {
    return null;
  }

  const isOpening = doorState === 'opening';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="백도화 매력학당 인트로 대문"
      className={`fixed inset-0 select-none overflow-hidden ${
        isOpening ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={{
        zIndex: 999999,
        height: '100dvh', // 모바일 주소창 높이 완벽 대응
        width: '100vw',
      }}
    >
      {/* ============================================================ */}
      {/* 1. 문 뒤편에서 스며 나오는 은은하고 자연스러운 샴페인 골드빛 (z-0: 문 뒤 배치) */}
      {/* 문이 닫혀 있을 때는 문짝에 가려 보이지 않다가, 문이 벌어질 때 비로소 틈새로 은은하게 비침 */}
      {/* ============================================================ */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* 문 틈에서 조용히 피어오르는 소프트 앰비언트 글로우 */}
          <div className="natural-soft-glow" />
        </div>
      )}

      {/* ============================================================ */}
      {/* 2. 대문 3D 입체 컨테이너 (z-10: 빛보다 앞쪽에 위치하여 빛을 자연스럽게 가림) */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden z-10"
        style={{
          perspective: '1400px', // 3D 원근감
        }}
      >
        {/* 전체 대문 크기 1.18배 웅장한 스케일 */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: 'scale(1.18)',
            transformOrigin: 'center 48%',
          }}
        >
          {/* (1) 왼쪽 대문 패널 (Left Door Panel) */}
          <div
            className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden"
            style={{
              transformOrigin: 'left center', // 왼쪽 경첩 축
              transform: isOpening
                ? 'translateX(-104%) rotateY(-28deg)'
                : 'translateX(0) rotateY(0deg)',
              transition: 'transform 1.45s cubic-bezier(0.65, 0, 0.2, 1), opacity 0.4s ease 1.15s',
              opacity: isOpening ? 0 : 1,
              boxShadow: isOpening ? 'none' : 'inset -4px 0 16px rgba(0,0,0,0.5)',
            }}
          >
            {/* 원본 닫힌 문의 왼쪽 절반 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={doorImgSrc}
              alt="백도화 대문 왼쪽"
              className="absolute top-0 left-0 h-full object-cover pointer-events-none"
              style={{
                width: '200%',
                maxWidth: 'none',
                objectPosition: 'center 46%',
              }}
            />

            {/* 문 닫힘 시 중앙 맞물림 입체 음영 */}
            <div
              className="absolute top-0 bottom-0 right-0 w-[3px] pointer-events-none"
              style={{
                background:
                  'linear-gradient(to left, rgba(15, 5, 8, 0.65), transparent)',
              }}
            />
          </div>

          {/* (2) 오른쪽 대문 패널 (Right Door Panel) */}
          <div
            className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden"
            style={{
              transformOrigin: 'right center', // 오른쪽 경첩 축
              transform: isOpening
                ? 'translateX(104%) rotateY(28deg)'
                : 'translateX(0) rotateY(0deg)',
              transition: 'transform 1.45s cubic-bezier(0.65, 0, 0.2, 1), opacity 0.4s ease 1.15s',
              opacity: isOpening ? 0 : 1,
              boxShadow: isOpening ? 'none' : 'inset 4px 0 16px rgba(0,0,0,0.5)',
            }}
          >
            {/* 원본 닫힌 문의 오른쪽 절반 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={doorImgSrc}
              alt="백도화 대문 오른쪽"
              className="absolute top-0 right-0 h-full object-cover pointer-events-none"
              style={{
                width: '200%',
                maxWidth: 'none',
                objectPosition: 'center 46%',
              }}
            />

            {/* 문 닫힘 시 중앙 맞물림 입체 음영 */}
            <div
              className="absolute top-0 bottom-0 left-0 w-[3px] pointer-events-none"
              style={{
                background:
                  'linear-gradient(to right, rgba(15, 5, 8, 0.65), transparent)',
              }}
            />
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. 상단 브랜드 서브 타이틀 */}
      {/* ============================================================ */}
      <div className="absolute top-0 left-0 right-0 z-30 pt-9 px-6 text-center pointer-events-none">
        <span
          className={`inline-block text-[11px] tracking-[0.28em] font-light text-[#EBD5CD]/85 uppercase transition-all duration-400 ${
            isOpening ? 'opacity-0 -translate-y-3' : 'opacity-90 translate-y-0'
          }`}
          style={{ textShadow: '0 2px 5px rgba(0,0,0,0.85)' }}
        >
          BAEKDOHWA SECRET ARCHIVE
        </span>
      </div>

      {/* ============================================================ */}
      {/* 4. 하단 백도화 시그니처 버건디 브랜드 버튼 (화면 하단 고정) */}
      {/* ============================================================ */}
      <div className="absolute bottom-9 left-0 right-0 z-30 px-6 w-full max-w-[400px] mx-auto pointer-events-auto">
        <button
          type="button"
          onClick={handleEnter}
          disabled={isOpening}
          aria-label="백도화 매력학당 입장하기"
          className={`w-full py-4 px-6 rounded-[2px] transition-all duration-400 ease-out cursor-pointer active:scale-[0.98] ${
            isOpening
              ? 'opacity-0 translate-y-6 pointer-events-none'
              : 'opacity-100 translate-y-0'
          }`}
          style={{
            // 백도화의 대표 포인트 컬러인 딥 버건디 그라데이션
            background:
              'linear-gradient(135deg, #4E1424 0%, #3B0F1B 50%, #280812 100%)',
            // 은은한 샴페인 로즈골드 얇은 테두리
            border: '1px solid rgba(220, 180, 170, 0.85)',
            // 깊은 버건디 그림자 + 은은한 골드빛 글로우
            boxShadow:
              '0 4px 20px rgba(59, 15, 27, 0.7), 0 0 16px rgba(212, 178, 167, 0.3), inset 0 0 12px rgba(212, 178, 167, 0.12)',
          }}
        >
          <div className="flex items-center justify-center space-x-2">
            <span
              className="text-[15.5px] font-medium tracking-[0.08em] text-[#F8EFEA]"
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                textShadow: '0 1px 3px rgba(0,0,0,0.7)',
              }}
            >
              백도화 매력학당 입장하기
            </span>
            {/* 샴페인 골드 화살표 */}
            <svg
              className="w-4 h-4 text-[#D4B2A7] translate-y-[-0.5px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* 스타일 및 키프레임: 은은하고 자연스럽게 스며 나오는 빛 */}
      <style jsx global>{`
        /* 문 뒤에서 문이 열리는 타이밍에 맞춰 조용히 비쳐 나오는 자연스러운 빛 */
        .natural-soft-glow {
          position: absolute;
          top: 48%;
          left: 50%;
          width: 260px;
          height: 180px;
          margin-top: -90px;
          margin-left: -130px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 240, 205, 0.45) 0%,
            rgba(225, 185, 140, 0.22) 45%,
            rgba(180, 120, 90, 0.08) 70%,
            transparent 90%
          );
          filter: blur(28px);
          animation: gentleGlowReveal 1.5s cubic-bezier(0.25, 0.8, 0.35, 1) 0.18s forwards;
          opacity: 0;
        }

        @keyframes gentleGlowReveal {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          35% {
            opacity: 0.55; /* 과하지 않고 은은한 최대 밝기 */
            transform: scale(1.05);
          }
          70% {
            opacity: 0.25;
            transform: scale(1.25);
          }
          100% {
            opacity: 0;
            transform: scale(1.4);
          }
        }
      `}</style>
    </div>
  );
}
