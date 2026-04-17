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
    <div className={`pointer-events-auto norigae-hover ${className}`} style={{ width: size }}>
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
