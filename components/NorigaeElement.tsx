"use client";

import Image from "next/image";

interface NorigaeElementProps {
  className?: string;
  size?: number;
}

export default function NorigaeElement({ className = "", size = 120 }: NorigaeElementProps) {
  return (
    <div className={`pointer-events-auto norigae-hover ${className}`} style={{ width: size }}>
      <Image
        src="/image/노리개.png"
        alt="노리개 장식"
        width={size}
        height={size * 2}
        className="object-contain"
        priority
      />
    </div>
  );
}
