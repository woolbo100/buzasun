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

    // 1단계: 문 열림 & 금빛 가루/블러 확산 시작
    setDoorState('opening');

    // 2단계: 문이 열리고 금빛이 부드럽게 녹아든 후 (약 1.35초) 스크롤 복구
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
      {/* 1. 대문 3D 입체 컨테이너 (문의 크기를 1.16배로 확대하여 웅장함 극대화) */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          perspective: '1400px', // 3D 원근감
        }}
      >
        {/* 전체 대문 크기 확대 래퍼 (문 손잡이와 문짝이 화면의 대부분을 웅장하게 채움) */}
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
      {/* 2. 자연스러운 황금빛 안개 블러 & 흩날리는 금빛 가루 효과 */}
      {/* ============================================================ */}
      {/* (1) 부드러운 소프트 골드 블룸 (서서히 피어나서 사르르 녹아 사라짐) */}
      <div
        className={`absolute inset-0 pointer-events-none z-20 transition-all ${
          isOpening ? 'gold-mist-active' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255, 235, 185, 0.5) 0%, rgba(220, 185, 140, 0.3) 35%, rgba(180, 120, 90, 0.12) 65%, transparent 80%)',
          filter: 'blur(16px)',
        }}
      />

      {/* (2) 신비로운 금빛 가루 입자들 (Gold Sparkle Dust) */}
      {isOpening && (
        <div className="absolute inset-0 pointer-events-none z-25 overflow-hidden">
          {/* 가루 파티클 1 */}
          <div
            className="particle-dust"
            style={{
              top: '48%',
              left: '49%',
              width: '6px',
              height: '6px',
              animation: 'sparkleFly1 1.4s cubic-bezier(0.2, 0.8, 0.3, 1) forwards',
            }}
          />
          {/* 가루 파티클 2 */}
          <div
            className="particle-dust"
            style={{
              top: '46%',
              left: '51%',
              width: '8px',
              height: '8px',
              animation: 'sparkleFly2 1.5s cubic-bezier(0.2, 0.8, 0.3, 1) 0.1s forwards',
            }}
          />
          {/* 가루 파티클 3 */}
          <div
            className="particle-dust"
            style={{
              top: '52%',
              left: '48%',
              width: '5px',
              height: '5px',
              animation: 'sparkleFly3 1.3s cubic-bezier(0.2, 0.8, 0.3, 1) 0.15s forwards',
            }}
          />
          {/* 가루 파티클 4 */}
          <div
            className="particle-dust"
            style={{
              top: '44%',
              left: '52%',
              width: '7px',
              height: '7px',
              animation: 'sparkleFly4 1.45s cubic-bezier(0.2, 0.8, 0.3, 1) 0.05s forwards',
            }}
          />
          {/* 가루 파티클 5 */}
          <div
            className="particle-dust"
            style={{
              top: '50%',
              left: '50%',
              width: '10px',
              height: '10px',
              animation: 'sparkleFly5 1.55s cubic-bezier(0.2, 0.8, 0.3, 1) 0.2s forwards',
            }}
          />
          {/* 가루 파티클 6 */}
          <div
            className="particle-dust"
            style={{
              top: '47%',
              left: '50%',
              width: '4px',
              height: '4px',
              animation: 'sparkleFly6 1.35s cubic-bezier(0.2, 0.8, 0.3, 1) 0.1s forwards',
            }}
          />
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

      {/* 스타일 및 키프레임 */}
      <style jsx global>{`
        /* 부드러운 금빛 안개 블룸 애니메이션 */
        .gold-mist-active {
          animation: goldMistBloom 1.55s cubic-bezier(0.2, 0.8, 0.3, 1) forwards;
        }

        @keyframes goldMistBloom {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          28% {
            opacity: 0.85;
            transform: scale(1.02);
          }
          65% {
            opacity: 0.45;
            transform: scale(1.12);
          }
          100% {
            opacity: 0;
            transform: scale(1.22);
          }
        }

        /* 흩날리는 금빛 가루 공통 */
        .particle-dust {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, #fff3d1 20%, #d4af37 70%, transparent 100%);
          box-shadow: 0 0 12px #ffe699, 0 0 24px #d4af37;
          pointer-events: none;
        }

        @keyframes sparkleFly1 {
          0% { transform: translate(0, 0) scale(0.4); opacity: 0; }
          30% { opacity: 1; transform: translate(-30px, -45px) scale(1.3); }
          100% { transform: translate(-70px, -110px) scale(0); opacity: 0; }
        }

        @keyframes sparkleFly2 {
          0% { transform: translate(0, 0) scale(0.4); opacity: 0; }
          30% { opacity: 1; transform: translate(35px, -50px) scale(1.2); }
          100% { transform: translate(80px, -120px) scale(0); opacity: 0; }
        }

        @keyframes sparkleFly3 {
          0% { transform: translate(0, 0) scale(0.4); opacity: 0; }
          30% { opacity: 1; transform: translate(-45px, 30px) scale(1.1); }
          100% { transform: translate(-95px, 70px) scale(0); opacity: 0; }
        }

        @keyframes sparkleFly4 {
          0% { transform: translate(0, 0) scale(0.4); opacity: 0; }
          30% { opacity: 1; transform: translate(45px, 25px) scale(1.2); }
          100% { transform: translate(100px, 60px) scale(0); opacity: 0; }
        }

        @keyframes sparkleFly5 {
          0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
          30% { opacity: 1; transform: translate(10px, -70px) scale(1.4); }
          100% { transform: translate(25px, -150px) scale(0); opacity: 0; }
        }

        @keyframes sparkleFly6 {
          0% { transform: translate(0, 0) scale(0.3); opacity: 0; }
          30% { opacity: 0.9; transform: translate(-20px, 50px) scale(1); }
          100% { transform: translate(-50px, 110px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
