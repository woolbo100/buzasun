'use client';

import React, { useState, useEffect } from 'react';

interface MobileIntroDoorProps {
  onComplete?: () => void;
}

export default function MobileIntroDoor({ onComplete }: MobileIntroDoorProps) {
  // 모바일 여부 및 최초 방문자 여부 체크
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  // 애니메이션 단계: 'idle' (닫힌 문 대기) | 'opening' (좌우로 활짝 열림) | 'finished' (종료 및 언마운트)
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

    // 방문 기록 저장 (재방문 시 미노출)
    try {
      localStorage.setItem('baekdohwa_intro_seen', 'true');
    } catch (e) {
      console.error('Failed to write localStorage', e);
    }

    // 1단계: 문이 좌우로 스르륵 3D로 열리기 시작
    setDoorState('opening');

    // 2단계: 문이 완전히 열려 메인 홈이 드러난 후 (약 1.45초) 스크롤 복구 및 정리
    setTimeout(() => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 1250);

    // 3단계: 1.65초 후 인트로 컴포넌트 완전히 언마운트
    setTimeout(() => {
      setDoorState('finished');
      setShouldShow(false);
      if (onComplete) onComplete();
    }, 1650);
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
      className={`fixed inset-0 select-none overflow-hidden transition-colors duration-1000 ${
        isOpening ? 'pointer-events-none' : 'pointer-events-auto'
      }`}
      style={{
        zIndex: 999999, // 카카오톡 상담 버튼 등 모든 요소 최상위
        height: '100dvh', // 모바일 주소창 높이 완벽 대응
        width: '100vw',
        perspective: '1400px', // 3D 원근감 (입체 대문 개방 효과)
      }}
    >
      {/* 문 틈에서 터져 나오는 은은한 황금빛 광선 오버레이 */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out z-20 ${
          isOpening ? 'opacity-85' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255, 238, 195, 0.45) 0%, rgba(212, 178, 167, 0.25) 45%, transparent 75%)',
        }}
      />

      {/* 대문 중앙 세로 빛줄기 (문이 열리기 시작할 때 틈새 빛) */}
      <div
        className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-25 transition-all duration-700 ease-out ${
          isOpening ? 'opacity-90 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
        style={{
          width: '50px',
          background:
            'radial-gradient(ellipse at center, rgba(255, 245, 215, 0.9) 0%, rgba(220, 175, 120, 0.6) 40%, transparent 80%)',
          filter: 'blur(8px)',
        }}
      />

      {/* ============================================================ */}
      {/* 1. 왼쪽 대문 패널 (Left Door Panel) */}
      {/* ============================================================ */}
      <div
        className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden z-10"
        style={{
          transformOrigin: 'left center', // 왼쪽 경첩을 축으로 열림
          transform: isOpening
            ? 'translateX(-102%) rotateY(-25deg)'
            : 'translateX(0) rotateY(0deg)',
          transition: 'transform 1.35s cubic-bezier(0.7, 0, 0.25, 1), opacity 0.4s ease 1.1s',
          opacity: isOpening ? 0 : 1,
          boxShadow: isOpening ? 'none' : 'inset -4px 0 16px rgba(0,0,0,0.5)',
        }}
      >
        {/* 원본 닫힌 문의 왼쪽 절반 (width: 200%, left: 0) */}
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
              'linear-gradient(to left, rgba(15, 5, 8, 0.7), transparent)',
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* 2. 오른쪽 대문 패널 (Right Door Panel) */}
      {/* ============================================================ */}
      <div
        className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden z-10"
        style={{
          transformOrigin: 'right center', // 오른쪽 경첩을 축으로 열림
          transform: isOpening
            ? 'translateX(102%) rotateY(25deg)'
            : 'translateX(0) rotateY(0deg)',
          transition: 'transform 1.35s cubic-bezier(0.7, 0, 0.25, 1), opacity 0.4s ease 1.1s',
          opacity: isOpening ? 0 : 1,
          boxShadow: isOpening ? 'none' : 'inset 4px 0 16px rgba(0,0,0,0.5)',
        }}
      >
        {/* 원본 닫힌 문의 오른쪽 절반 (width: 200%, right: 0) */}
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
              'linear-gradient(to right, rgba(15, 5, 8, 0.7), transparent)',
          }}
        />
      </div>

      {/* ============================================================ */}
      {/* 3. 상단 브랜드 서브 텍스트 */}
      {/* ============================================================ */}
      <div className="relative z-30 pt-9 px-6 text-center pointer-events-none">
        <span
          className={`inline-block text-[11px] tracking-[0.28em] font-light text-[#EBD5CD]/80 uppercase transition-all duration-400 ${
            isOpening ? 'opacity-0 -translate-y-3' : 'opacity-90 translate-y-0'
          }`}
          style={{ textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}
        >
          BAEKDOHWA SECRET ARCHIVE
        </span>
      </div>

      {/* ============================================================ */}
      {/* 4. 하단 백도화 시그니처 버건디 브랜드 버튼 */}
      {/* ============================================================ */}
      <div className="relative z-30 pb-10 px-6 w-full max-w-[420px] mx-auto">
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
            // 버건디 깊이감 + 은은한 골드빛 글로우
            boxShadow:
              '0 4px 20px rgba(59, 15, 27, 0.65), 0 0 16px rgba(212, 178, 167, 0.3), inset 0 0 12px rgba(212, 178, 167, 0.12)',
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
    </div>
  );
}
