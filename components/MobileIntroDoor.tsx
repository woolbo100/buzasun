'use client';

import React, { useState, useEffect } from 'react';

interface MobileIntroDoorProps {
  onComplete?: () => void;
}

export default function MobileIntroDoor({ onComplete }: MobileIntroDoorProps) {
  const [shouldShow, setShouldShow] = useState<boolean>(false);

  // 단계 관리:
  // 'idle' : 닫힌 문 + 입장 버튼 대기
  // 'door-opening' : 문 좌우로 열림
  // 'bridge-active' : 브리지 화면 활성화 (베이지 -> 라벤더 -> 퍼플 전환 및 문구 노출)
  // 'finished' : 완전 종료
  const [stage, setStage] = useState<'idle' | 'door-opening' | 'bridge-active' | 'finished'>('idle');

  // 브리지 배경 색상 단계: 'beige' | 'lavender' | 'purple'
  const [bridgeBgColor, setBridgeBgColor] = useState<string>('#F5EDE4');
  // 문구 노출 상태
  const [textVisible, setTextVisible] = useState<boolean>(false);
  const [textFadeOut, setTextFadeOut] = useState<boolean>(false);
  // 전체 오버레이 페이드아웃 (메인 홈과 크로스페이드)
  const [isFinalFadeOut, setIsFinalFadeOut] = useState<boolean>(false);

  // 백도화 전통 대문 이미지
  const doorImgSrc = '/image/baekdohwa-door-closed.webp';

  // 메인 히어로 상단과 100% 동일한 백도화 딥 퍼플 색상
  const HERO_PURPLE = '#140A23';
  const SOFT_LAVENDER = '#7A5B89';
  const CHAMPAGNE_BEIGE = '#F5EDE4';

  useEffect(() => {
    const checkEligibility = () => {
      const isMobile = window.innerWidth <= 768;
      let hasSeen = false;
      try {
        hasSeen = Boolean(localStorage.getItem('baekdohwa_intro_seen'));
      } catch (err) {
        hasSeen = false;
      }

      // 테스트용 파라미터 (?intro=1 또는 ?door=1)
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

  // '백도화 매력학당 들어가기' 버튼 클릭 시 전체 시퀀스 진행
  const handleEnter = () => {
    if (stage !== 'idle') return;

    // 방문 기록 저장
    try {
      localStorage.setItem('baekdohwa_intro_seen', 'true');
    } catch (e) {
      console.error('Failed to write localStorage', e);
    }

    // [1단계] 문 좌우 3D 열림 시작 (0s)
    setStage('door-opening');

    // [2단계] 문이 활짝 열리는 시점 (0.75s) : 브리지 활성화 & 문구 페이드인
    setTimeout(() => {
      setStage('bridge-active');
      setTextVisible(true);
    }, 750);

    // [3단계] 1.05s : 배경색 베이지 -> 부드러운 라벤더로 전환 시작
    setTimeout(() => {
      setBridgeBgColor(SOFT_LAVENDER);
    }, 1050);

    // [4단계] 1.85s : 배경색 라벤더 -> 메인 히어로 딥 퍼플(#140A23)로 전환
    setTimeout(() => {
      setBridgeBgColor(HERO_PURPLE);
    }, 1850);

    // [5단계] 2.75s : 문구 살짝 위로 이동하며 페이드아웃
    setTimeout(() => {
      setTextFadeOut(true);
    }, 2750);

    // [6단계] 3.15s : 동일한 퍼플 배경 위에서 전체 레이어 페이드아웃 (메인 히어로 자연 연결)
    setTimeout(() => {
      setIsFinalFadeOut(true);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 3150);

    // [7단계] 3.65s : 인트로 완전 언마운트
    setTimeout(() => {
      setStage('finished');
      setShouldShow(false);
      if (onComplete) onComplete();
    }, 3650);
  };

  if (!shouldShow || stage === 'finished') {
    return null;
  }

  const isOpening = stage !== 'idle';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="백도화 매력학당 인트로"
      className={`fixed inset-0 select-none overflow-hidden transition-opacity duration-500 ease-out ${
        isFinalFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        zIndex: 999999,
        height: '100dvh', // 모바일 주소창 높이 완벽 대응
        width: '100vw',
      }}
    >
      {/* ============================================================ */}
      {/* [브리지 레이어]: 베이지 -> 라벤더 -> 메인 퍼플로 부드럽게 흐르는 배경 */}
      {/* ============================================================ */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
        style={{
          backgroundColor: bridgeBgColor,
          transition: 'background-color 1.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* 중앙 2줄 브리지 감성 문구 */}
        <div
          className={`text-center px-6 transition-all duration-700 ease-out ${
            textVisible && !textFadeOut
              ? 'opacity-100 translate-y-0'
              : textFadeOut
              ? 'opacity-0 -translate-y-4'
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDuration: textFadeOut ? '500ms' : '800ms',
          }}
        >
          <p
            className="text-[20.5px] leading-[1.7] tracking-[0.04em] font-light"
            style={{
              fontFamily: "'Noto Serif KR', serif",
              // 오프화이트 + 은은하고 고급스러운 미세 골드 글로우
              color: '#FAF6F2',
              textShadow:
                '0 0 14px rgba(212, 178, 167, 0.35), 0 2px 6px rgba(0, 0, 0, 0.25)',
            }}
          >
            당신이 몰랐던
            <br />
            사랑의 코드가 열립니다.
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* [대문 3D 레이어]: z-10 (문 뒤의 브리지 베이지 화면을 가리고 있다가 좌우로 열림) */}
      {/* ============================================================ */}
      <div
        className={`absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none transition-opacity duration-400 ${
          stage === 'bridge-active' ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          perspective: '1400px',
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
              transition: 'transform 1.35s cubic-bezier(0.65, 0, 0.2, 1), opacity 0.35s ease 0.95s',
              opacity: isOpening ? 0 : 1,
              boxShadow: isOpening ? 'none' : 'inset -4px 0 16px rgba(0,0,0,0.5)',
            }}
          >
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
            {/* 문 중앙 맞물림 음영 */}
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
              transition: 'transform 1.35s cubic-bezier(0.65, 0, 0.2, 1), opacity 0.35s ease 0.95s',
              opacity: isOpening ? 0 : 1,
              boxShadow: isOpening ? 'none' : 'inset 4px 0 16px rgba(0,0,0,0.5)',
            }}
          >
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
            {/* 문 중앙 맞물림 음영 */}
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
      {/* 상단 브랜드 서브 타이틀 */}
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
      {/* 하단 백도화 시그니처 딥 버건디 버튼 (화면 하단 고정) */}
      {/* ============================================================ */}
      <div className="absolute bottom-9 left-0 right-0 z-30 px-6 w-full max-w-[400px] mx-auto pointer-events-auto">
        <button
          type="button"
          onClick={handleEnter}
          disabled={isOpening}
          aria-label="백도화 매력학당 들어가기"
          className={`w-full py-4 px-6 rounded-[2px] transition-all duration-400 ease-out cursor-pointer active:scale-[0.98] ${
            isOpening
              ? 'opacity-0 translate-y-6 pointer-events-none'
              : 'opacity-100 translate-y-0'
          }`}
          style={{
            // 백도화 시그니처 딥 버건디 그라데이션
            background:
              'linear-gradient(135deg, #4E1424 0%, #3B0F1B 50%, #280812 100%)',
            border: '1px solid rgba(220, 180, 170, 0.85)',
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
              백도화 매력학당 들어가기
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

      {/* prefers-reduced-motion 미디어 쿼리 대응 */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.1s !important;
            animation-duration: 0.1s !important;
          }
        }
      `}</style>
    </div>
  );
}
