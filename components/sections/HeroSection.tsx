import Image from "next/image";
import heroImg from "@/public/hero.webp";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100svh-5rem)] flex flex-col justify-center py-6 sm:py-10 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full my-auto">
        {/* Left Column: Headline, copy, CTA (Immediate LCP paint without opacity delay) */}
        <div className="lg:col-span-6 space-y-5 sm:space-y-6 lg:space-y-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-medium tracking-tight leading-[1.15] text-brandDark">
            Bangun Digital yang Bekerja untuk Bisnis Anda
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
            Landing page untuk mendapatkan leads, website untuk membangun kepercayaan, dan software untuk membuat bisnis bekerja lebih efisien.
          </p>
          <div className="pt-1">
            <a
              href="#quote"
              className="inline-block px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-normal bg-brandDark text-white rounded-2xl hover:bg-gray-800 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Mulai Konsultasi Gratis
            </a>
          </div>
        </div>

        {/* Right Column: Hero Image (Optimized WebP, fetchpriority high, enlarged & static) */}
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="w-full flex justify-center">
            <Image
              src={heroImg}
              alt="Ilustrasi Solusi Digital Truegrid"
              priority
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl max-h-[46vh] sm:max-h-[50vh] lg:max-h-[540px] xl:max-h-[580px] h-auto object-contain select-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
