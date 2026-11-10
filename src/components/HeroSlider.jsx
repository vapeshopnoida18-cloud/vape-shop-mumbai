"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const banners = [
  {
    id: 1,
    desktopSrc: "/herobanner/banner1.png",
    mobileSrc: "/herobanner/mobilebanner1.png",
    alt: "Vape Shop Mumbai: Buy Disposable Vape Online Mumbai with 30-45 Mins Delivery",
    href: "/products",
  },
  {
    id: 2,
    desktopSrc: "/herobanner/banner2.png",
    mobileSrc: "/herobanner/mobilebanner2.png",
    alt: "Vape Shop in Mumbai - 100% Authentic Disposable Vapes, Pod Mods & E-Liquids at Vape Shop Mumbai",
    href: "/products",
  },
];

// Infinite loop setup: [Clone of Last, ...Banners, Clone of First]
const slides = [banners[banners.length - 1], ...banners, banners[0]];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Next Slide (Continuous Forward)
  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating]);

  // Prev Slide
  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, [isAnimating]);

  // Handle seamless infinite loop jump on transition end
  const handleTransitionEnd = () => {
    setIsAnimating(false);
    if (currentIndex === slides.length - 1) {
      setIsTransitioning(false);
      setCurrentIndex(1);
    }
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(slides.length - 2);
    }
  };

  // Auto-slide every 5 seconds
  const startAutoSlide = useCallback(() => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  }, [nextSlide]);

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [startAutoSlide]);

  // Mobile Touch Swipe Handling
  const handleTouchStart = (e) => {
    stopAutoSlide();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      startAutoSlide();
      return;
    }
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
    startAutoSlide();
  };

  // Active Dot index (0 or 1)
  let activeDot = 0;
  if (currentIndex === 0) {
    activeDot = banners.length - 1;
  } else if (currentIndex === slides.length - 1) {
    activeDot = 0;
  } else {
    activeDot = currentIndex - 1;
  }

  const handleDotClick = (dotIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsTransitioning(true);
    setCurrentIndex(dotIndex + 1);
  };

  return (
    <section
      aria-label="Hero Featured Banners - Vape Shop Mumbai"
      className="relative site-container pt-3 sm:pt-4 pb-5 sm:pb-7 md:pb-8"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      {/* Main Slider Container with exact aspect ratios (1600x658 Desktop, 640x835 Mobile) */}
      <div
        className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-gray-100 touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides Track with Seamless Continuous Translation */}
        <div
          onTransitionEnd={handleTransitionEnd}
          className={`flex will-change-transform ${
            isTransitioning ? "transition-transform duration-700 ease-in-out" : "transition-none"
          }`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((banner, index) => (
            <div key={`${banner.id}-${index}`} className="relative w-full shrink-0">
              <Link
                href={banner.href}
                className="block relative w-full focus:outline-none"
                aria-label={banner.alt}
              >
                {/* Desktop & Laptop Banner */}
                <div className="hidden md:block relative w-full aspect-[1600/658]">
                  <img
                    src={banner.desktopSrc}
                    alt={banner.alt}
                    width={1600}
                    height={658}
                    className="w-full h-full object-cover object-center"
                    loading={index === 1 ? "eager" : "lazy"}
                    fetchPriority={index === 1 ? "high" : "auto"}
                  />
                </div>

                {/* Mobile & Tablet Banner */}
                <div className="block md:hidden relative w-full aspect-[640/835]">
                  <img
                    src={banner.mobileSrc}
                    alt={banner.alt}
                    width={640}
                    height={835}
                    className="w-full h-full object-cover object-center"
                    loading={index === 1 ? "eager" : "lazy"}
                    fetchPriority={index === 1 ? "high" : "auto"}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-gray-800 hover:text-[#000b42] shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer z-10 focus:outline-none"
          aria-label="Previous Slide"
        >
          <FiChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white text-gray-800 hover:text-[#000b42] shadow-md backdrop-blur-xs flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer z-10 focus:outline-none"
          aria-label="Next Slide"
        >
          <FiChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Pagination Dots */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-10 bg-black/30 backdrop-blur-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
          {banners.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => handleDotClick(dotIdx)}
              className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none ${
                activeDot === dotIdx
                  ? "w-6 sm:w-7 h-2 bg-[#000b42]"
                  : "w-2 h-2 bg-white/70 hover:bg-white"
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
              aria-current={activeDot === dotIdx ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
