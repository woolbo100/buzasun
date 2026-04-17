"use client";

import Image from "next/image";

interface NorigaeElementProps {
  className?: string;
  size?: number;
  src?: string;
}

export default function NorigaeElement({ 
  className = "", 
  size = 120, 
  src = "/image/nlg.png" 
}: NorigaeElementProps) {
  return (
    <div 
      className={`pointer-events-auto norigae-hover transition-all duration-500 cursor-pointer ${className}`} 
      style={{ 
        width: size,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = 'brightness(1.15) drop-shadow(0 0 30px rgba(212, 178, 167, 0.65))'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = ''
      }}
    >
      <Image
        src={src}
        alt="노리개 장식"
        width={size}
        height={size * 2}
        className="object-contain"
        priority
      />
    </div>
  );
}
