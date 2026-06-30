import Image from "next/image";

export default function FloatingBadge() {
  return (
    <div
      className="
        absolute
        right-8
        top-20
        z-20
        rotate-[8deg]
        transition-all
        duration-500
        hover:rotate-3
        hover:-translate-y-3
    "
    >
      {/* Strap */}
      <div className="mx-auto h-20 w-2 rounded-full bg-neutral-200" />

      {/* Clip */}
      <div className="mx-auto -mt-1 h-4 w-4 rounded-full border border-neutral-300 bg-white shadow" />

      {/* Card */}
      <div
        className="
          mt-2
          w-[180px]
          rounded-[28px]
          border
          border-white/60
          bg-white/75
          p-3
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <div className="overflow-hidden rounded-2xl">
          <Image
            src="/images/hero/profile.jpg"
            alt="Tanya"
            width={300}
            height={420}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-3 text-center">
          <h3 className="font-semibold tracking-wide">
            Tanya Sinha
          </h3>

          <p className="mt-1 text-xs text-neutral-500">
            AI • Full Stack Developer
          </p>
        </div>
      </div>
    </div>
  );
}