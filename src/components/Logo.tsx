import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { w: 140, h: 40 },
    md: { w: 180, h: 50 },
    lg: { w: 220, h: 60 },
  };

  const s = sizes[size];

  return (
    <Link href="/" className={`group inline-flex items-center shrink-0 ${className}`}>
      <Image
        src="/logos/LOGO JACÓ LOCAÇÃO.png"
        alt="Jaco Locação"
        width={s.w}
        height={s.h}
        unoptimized
        className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
      />
    </Link>
  );
}
