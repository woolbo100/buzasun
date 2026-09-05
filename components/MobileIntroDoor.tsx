'use client';

import React, { useState, useEffect } from 'react';

interface MobileIntroDoorProps {
  onComplete?: () => void;
}

export default function MobileIntroDoor({ onComplete }: MobileIntroDoorProps) {
  const [shouldShow, setShouldShow] = useState<boolean>(false);

  // 단계 관리:
  // 'idle': 닫힌 대문 + 입장 버튼 대기
  // 'door-opening': 문 좌우 3D 열림 시작 (문 뒤의 한옥 내부가 선명하게 드러남)
  // 'bridge-color-shift': 브리지 오버레이 색감이 베이지 -> 라벤더 -> 메인 퍼플로 스며듦
  // 'finished': 종료 및 언마운트
  const [stage, setStage] = useState<'idle' | 'door-opening' | 'bridge-color-shift' | 'finished'>('idle');

  // 오버레이 단계: 0 (골든 베이지 웜톤 틴트) -> 1 (라벤더 틴트) -> 2 (메인 딥 퍼플 심화)
  const [colorStep, setColorStep] = useState<0 | 1 | 2>(0);

  // 감성 문구 표시 제어
  const [textVisible, setTextVisible] = useState<boolean>(false);
  const [textFadeOut, setTextFadeOut] = useState<boolean>(false);

  // 최종 메인 홈으로의 크로스페이드
  const [isFinalFadeOut, setIsFinalFadeOut] = useState<boolean>(false);

  // 이미지 경로
  const doorImgSrc = '/image/baekdohwa-door-closed.webp';
  const hanokInteriorImgSrc = '/image/back.webp';

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

        // 대문 및 한옥 내부 이미지 사전 캐싱
        const img1 = new window.Image();
        img1.src = doorImgSrc;
        const img2 = new window.Image();
        img2.src = hanokInteriorImgSrc;
      }
    };

    checkEligibility();

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  // '백도화 매력학당 들어가기' 버튼 클릭 시
  const handleEnter = () => {
    if (stage !== 'idle') return;

    try {
      localStorage.setItem('baekdohwa_intro_seen', 'true');
    } catch (e) {
      console.error('Failed to write localStorage', e);
    }

    // [1] 문 좌우 3D 열림 시작 (0s)
    // 문 뒤에 한옥 내부(back.webp)가 또렷하게 배치되어 문이 열리며 시원하게 눈앞에 나타남
    setStage('door-opening');

    // [2] 문이 약 40% 벌어진 시점 (0.45s) : 감성 문구 페이드인
    setTimeout(() => {
      setTextVisible(true);
    }, 450);

    // [3] 문이 활짝 열린 직후 (0.9s) : 한옥 공간 위로 라벤더 기운이 스며들기 시작
    setTimeout(() => {
      setStage('bridge-color-shift');
      setColorStep(1); // 라벤더 틴트
    }, 900);

    // [4] 1.75s : 메인 홈과 동일한 딥 퍼플로 깊어짐
    setTimeout(() => {
      setColorStep(2); // 딥 퍼플 도달
    }, 1750);

    // [5] 2.55s : 문구 살짝 위로 이동하며 페이드아웃
    setTimeout(() => {
      setTextFadeOut(true);
    }, 2550);

    // [6] 3.05s : 같은 퍼플 톤 위에서 인트로 전체가 부드럽게 페이드아웃 (메인 홈 자연 연결)
    setTimeout(() => {
      setIsFinalFadeOut(true);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }, 3050);

    // [7] 3.55s : 인트로 완전 언마운트
    setTimeout(() => {
      setStage('finished');
      setShouldShow(false);
      if (onComplete) onComplete();
    }, 3550);
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
      className={`fixed inset-0 select-none overflow-hidden transition-opacity duration-600 ease-out ${
        isFinalFadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        zIndex: 999999,
        height: '100dvh', // 모바일 주소창 높이 완벽 대응
        width: '100vw',
      }}
    >
      {/* ============================================================ */}
      {/* [브리지 레이어]: z-0 (대문 바로 뒤에 항상 대기) */}
      {/* 한옥 내부(back.webp)의 보름달, 등불, 벚꽃 창살이 또렷이 살아있음! */}
      {/* ============================================================ */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#0d0410]">
        {/* 1. 한옥 내부 배경 이미지 (또렷한 opacity 0.92, 미세 블러 0.5px로 이미지 생생함 극대화) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hanokInteriorImgSrc}
          alt="백도화 한옥 학당 전각 내부"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            objectPosition: 'center center',
            filter: 'blur(0.5px)',
            opacity: colorStep === 2 ? 0.45 : 0.92,
            transition: 'opacity 1.2s ease',
          }}
        />

        {/* 2. 단계별 동적 오버레이 (이미지를 가리지 않고 색조 틴트만 스며들게 함) */}
        {/* (A) 초기 골든 베이지 웜톤 틴트 (한옥의 달빛과 등불이 완전히 선명하게 비침) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{
            background:
              'linear-gradient(180deg, rgba(230, 195, 155, 0.22) 0%, rgba(190, 145, 105, 0.15) 45%, rgba(20, 8, 12, 0.4) 100%)',
            opacity: colorStep === 0 ? 1 : 0,
          }}
        />

        {/* (B) 중간 라벤더-퍼플 틴트 (보라빛 기운이 한옥 내부에 은은하게 번짐) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{
            background:
              'linear-gradient(180deg, rgba(125, 75, 150, 0.38) 0%, rgba(85, 45, 110, 0.28) 45%, rgba(15, 6, 22, 0.55) 100%)',
            opacity: colorStep === 1 ? 1 : 0,
          }}
        />

        {/* (C) 최종 메인 히어로 딥 퍼플 오버레이 (메인 홈과 100% 동일한 톤으로 전환) */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26, 15, 46, 0.88) 0%, rgba(20, 10, 35, 0.93) 50%, rgba(10, 5, 20, 0.97) 100%)',
            opacity: colorStep === 2 ? 1 : 0,
          }}
        />

        {/* 3. 중앙 2줄 브리지 감성 문구 (가독성을 위한 미세 섀도우) */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-6 text-center"
        >
          <div
            className={`transition-all ease-out ${
              textVisible && !textFadeOut
                ? 'opacity-100 translate-y-0'
                : textFadeOut
                ? 'opacity-0 -translate-y-4'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDuration: textFadeOut ? '500ms' : '750ms',
            }}
          >
            <p
              className="text-[21px] md:text-[22px] leading-[1.75] tracking-[0.05em] font-light"
              style={{
                fontFamily: "'Noto Serif KR', serif",
                // 오프화이트 + 선명한 가독성 확보 섀도우
                color: '#FAF6F2',
                textShadow:
                  '0 0 16px rgba(212, 178, 167, 0.4), 0 2px 10px rgba(0, 0, 0, 0.85), 0 0 4px rgba(0, 0, 0, 0.9)',
              }}
            >
              당신이 몰랐던
              <br />
              사랑의 코드가 열립니다.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* [대문 3D 레이어]: z-10 (문 뒤의 한옥 내부를 가리고 있다가 버튼 클릭 시 3D로 열림) */}
      {/* ============================================================ */}
      <div
        className={`absolute inset-0 w-full h-full overflow-hidden z-10 pointer-events-none transition-opacity duration-350 ${
          stage === 'bridge-color-shift' ? 'opacity-0' : 'opacity-100'
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
