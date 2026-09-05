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

    // 1단계: 문 열림 & 몽환적인 금빛 블러 안개 확산 시작
    setDoorState('opening');

    // 2단계: 문이 완전히 젖혀지고 금빛 안개가 사르르 녹아든 시점 (약 1.35초) 스크롤 복구
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
      {/* 1. 대문 3D 입체 컨테이너 (1.18배 웅장한 대문 스케일) */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          perspective: '1400px', // 3D 원근감
        }}
      >
        {/* 전체 대문 크기 확대 래퍼 */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            transform: 'scale(1.18)',
            transformOrigin: 'center 48%',
          }}
        >
          {/* (1) 왼쪽 대문 패널 (Left Door Panel) */}
          <div
            className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden z-10"
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
            className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden z-10"
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
      {/* 2. 자연스럽게 번져 퍼지는 몽환적인 금빛 블러 안개 효과 (No Round Dots!) */}
      {/* ============================================================ */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {/* (1) 중심 전체를 포근하게 감싸는 메인 골드 블룸 */}
          <div className="soft-gold-bloom" />

          {/* (2) 좌우로 부드럽게 번져나가는 타원형 금빛 빛무리 1 (Center Flare) */}
          <div className="soft-mist-flare flare-1" />

          {/* (3) 왼쪽으로 부드럽게 흐르는 샴페인 로즈골드 안개 2 (Left Flow) */}
          <div className="soft-mist-flare flare-2" />

          {/* (4) 오른쪽으로 부드럽게 흐르는 웜골드 안개 3 (Right Flow) */}
          <div className="soft-mist-flare flare-3" />

          {/* (5) 상단으로 아지랑이처럼 솟아오르는 은은한 빛 번짐 4 (Upper Bloom) */}
          <div className="soft-mist-flare flare-4" />

          {/* (6) 부드러운 블러가 먹은 은은한 금빛 아우라 미스트 (Center Aura) */}
          <div className="soft-mist-flare flare-5" />
        </div>
      )}

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

      {/* 스타일 및 키프레임 (부드러운 블러 번짐 광채) */}
      <style jsx global>{`
        /* 1. 화면 중앙 소프트 골드 블룸 */
        .soft-gold-bloom {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 50% 50%,
            rgba(255, 240, 205, 0.45) 0%,
            rgba(225, 185, 140, 0.28) 35%,
            rgba(180, 115, 90, 0.1) 65%,
            transparent 85%
          );
          filter: blur(20px);
          animation: mainBloomFade 1.6s cubic-bezier(0.2, 0.8, 0.35, 1) forwards;
        }

        @keyframes mainBloomFade {
          0% {
            opacity: 0;
            transform: scale(0.85);
          }
          28% {
            opacity: 0.9;
            transform: scale(1.02);
          }
          65% {
            opacity: 0.4;
            transform: scale(1.15);
          }
          100% {
            opacity: 0;
            transform: scale(1.25);
          }
        }

        /* 2. 블러로 부드럽게 퍼지는 안개형 빛무리(Mist Flare) 공통 */
        .soft-mist-flare {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          transform-origin: center center;
        }

        /* 중앙 횡방향 빛 번짐 */
        .flare-1 {
          top: 48%;
          left: 50%;
          width: 220px;
          height: 120px;
          margin-top: -60px;
          margin-left: -110px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 245, 215, 0.75) 0%,
            rgba(235, 195, 135, 0.4) 45%,
            transparent 75%
          );
          filter: blur(22px);
          animation: flareAnimCenter 1.5s cubic-bezier(0.2, 0.8, 0.3, 1) forwards;
        }

        /* 좌측으로 번져나가는 안개 */
        .flare-2 {
          top: 46%;
          left: 46%;
          width: 170px;
          height: 140px;
          margin-top: -70px;
          margin-left: -85px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 230, 190, 0.6) 0%,
            rgba(215, 165, 135, 0.3) 50%,
            transparent 75%
          );
          filter: blur(20px);
          animation: flareAnimLeft 1.55s cubic-bezier(0.2, 0.8, 0.3, 1) 0.05s forwards;
        }

        /* 우측으로 번져나가는 안개 */
        .flare-3 {
          top: 47%;
          left: 54%;
          width: 180px;
          height: 130px;
          margin-top: -65px;
          margin-left: -90px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 235, 195, 0.6) 0%,
            rgba(220, 175, 125, 0.3) 50%,
            transparent 75%
          );
          filter: blur(20px);
          animation: flareAnimRight 1.55s cubic-bezier(0.2, 0.8, 0.3, 1) 0.05s forwards;
        }

        /* 상단 아지랑이 빛무리 */
        .flare-4 {
          top: 40%;
          left: 50%;
          width: 190px;
          height: 150px;
          margin-top: -75px;
          margin-left: -95px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 240, 210, 0.5) 0%,
            rgba(200, 150, 120, 0.25) 50%,
            transparent 75%
          );
          filter: blur(24px);
          animation: flareAnimUp 1.6s cubic-bezier(0.2, 0.8, 0.3, 1) 0.1s forwards;
        }

        /* 중심 코어 은은한 빛 안개 */
        .flare-5 {
          top: 49%;
          left: 50%;
          width: 120px;
          height: 90px;
          margin-top: -45px;
          margin-left: -60px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 250, 230, 0.85) 0%,
            rgba(240, 205, 150, 0.45) 40%,
            transparent 70%
          );
          filter: blur(14px);
          animation: flareAnimCenterCore 1.4s cubic-bezier(0.2, 0.8, 0.3, 1) forwards;
        }

        @keyframes flareAnimCenter {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          30% {
            opacity: 0.9;
            transform: scale(1.1);
          }
          70% {
            opacity: 0.35;
            transform: scale(1.4) translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: scale(1.6) translateY(-20px);
          }
        }

        @keyframes flareAnimLeft {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          30% {
            opacity: 0.8;
            transform: scale(1.05) translateX(-25px);
          }
          70% {
            opacity: 0.3;
            transform: scale(1.3) translateX(-60px);
          }
          100% {
            opacity: 0;
            transform: scale(1.5) translateX(-90px);
          }
        }

        @keyframes flareAnimRight {
          0% {
            opacity: 0;
            transform: scale(0.6);
          }
          30% {
            opacity: 0.8;
            transform: scale(1.05) translateX(25px);
          }
          70% {
            opacity: 0.3;
            transform: scale(1.3) translateX(60px);
          }
          100% {
            opacity: 0;
            transform: scale(1.5) translateX(90px);
          }
        }

        @keyframes flareAnimUp {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          30% {
            opacity: 0.75;
            transform: scale(1.1) translateY(-20px);
          }
          70% {
            opacity: 0.25;
            transform: scale(1.35) translateY(-50px);
          }
          100% {
            opacity: 0;
            transform: scale(1.5) translateY(-80px);
          }
        }

        @keyframes flareAnimCenterCore {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          25% {
            opacity: 0.95;
            transform: scale(1.0);
          }
          65% {
            opacity: 0.4;
            transform: scale(1.3);
          }
          100% {
            opacity: 0;
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
}
