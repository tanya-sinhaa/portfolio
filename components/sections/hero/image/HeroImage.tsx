export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div
        className="
          absolute
          h-[520px]
          w-[520px]
          rounded-full
          bg-[var(--color-surface)]
          blur-3xl
        "
      />

      {/* Portrait Card */}
      <div
        className="
          relative
          z-10
          h-[580px]
          w-[430px]
          rounded-[36px]
          border
          border-neutral-200
          bg-white
          shadow-xl
          transition-transform
          duration-300
          hover:-translate-y-2
        "
      >
        <div className="flex h-full items-center justify-center">

          <p className="text-neutral-400">
            Your Illustration
          </p>

        </div>
      </div>

    </div>
  );
}