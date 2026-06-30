import Image from "next/image";
import FloatingBadge from "./FloatingBadge";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Background Glow */}
      <div
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#f3dfbf] 
          opacity-70
          blur-3xl
        "
      />

      {/* Brush Circle */}
      <div
        className="
          absolute
          h-[470px]
          w-[470px]
          rounded-full
          border-[18px]
          border-[#ead7b8]
          opacity-50
        "
      />

      {/* Illustration */}
      <div className="relative z-10">

        <Image
          src="/images/hero/illustration1.png"
          alt="Tanya Illustration"
          width={760}
          height={980}
          priority
          className="
            h-auto
            w-full
            max-w-[680px]
            select-none
            pointer-events-none
            drop-shadow-2xl
            "
        />
      </div>
      <FloatingBadge />
    </div>
  );
} 
