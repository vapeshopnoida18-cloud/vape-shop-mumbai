"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCheckCircle, FiShield, FiSmartphone, FiTruck, FiCreditCard } from "react-icons/fi";
import { FaWhatsapp, FaQrcode } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function VideoShowcase() {
  const steps = [
    {
      num: "01",
      icon: FiShield,
      title: "100% Factory Shrink-Wrap Seal",
      desc: "Every device from Vape Shop Mumbai arrives in brand-sealed shrink wrap with original manufacturer holographic security seals intact.",
    },
    {
      num: "02",
      icon: FaQrcode,
      title: "Scratch-Off Anti-Counterfeit Code",
      desc: "Gently scratch the silver security strip on the back to reveal your unique 16-digit verification code before unboxing.",
    },
    {
      num: "03",
      icon: FiCheckCircle,
      title: "Instant Phone Camera Verification",
      desc: "Scan the QR code with your smartphone. It redirects directly to the official brand website (geekbar.com, elfbar.com) to confirm 100% genuine authenticity.",
    },
    {
      num: "04",
      icon: FiTruck,
      title: "30-45 Min Free Doorstep Delivery",
      desc: "Inspect your package upon arrival and pay conveniently via Instant UPI (Google Pay, PhonePe, Paytm, QR scan) across all Mumbai & MMR areas.",
    },
  ];

  return (
    <section
      aria-label="Vape Shop Mumbai Authenticity & Scratch QR Verification Guide"
      className="site-section site-container"
    >
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] sm:text-xs font-semibold mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% GENUINE AUTHENTICITY GUARANTEE</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-3">
            How to Verify Authentic Vapes in Mumbai
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
            At Vape Shop Mumbai, we only deliver 100% original, factory-sealed devices with verifiable scratch-off QR codes. Here is our simple 4-step authenticity check before you pay:
          </p>
        </div>

        {/* 2-Column Grid: Real Product Image + 4-Step Verification Workflow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Real Website Product Banner Image (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 shadow-md bg-slate-950 aspect-[1448/1086] group">
              <Image
                src="/authentic-vapes-mumbai.png"
                alt="Shop Authentic Vapes in Mumbai - Vape Shop Mumbai"
                fill
                sizes="(max-width: 1024px) 100vw, 680px"
                className="object-contain transition-transform duration-500 group-hover:scale-102"
                priority
              />
            </div>

            {/* Quick Micro Badges Under Image */}
            <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
              <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-2.5">
                <span className="text-[11px] sm:text-xs font-bold text-gray-900 block">100% Genuine</span>
                <span className="text-[10px] text-gray-500">Scratch QR Check</span>
              </div>
              <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-2.5">
                <span className="text-[11px] sm:text-xs font-bold text-gray-900 block">30-45 Min Free</span>
                <span className="text-[10px] text-gray-500">Express Delivery</span>
              </div>
              <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-2.5">
                <span className="text-[11px] sm:text-xs font-bold text-gray-900 block">Instant UPI</span>
                <span className="text-[10px] text-gray-500">GPay, PhonePe, Paytm</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Step Verification Workflow (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="pb-1">
              <span className="text-[11px] font-bold text-[#000b42] uppercase tracking-wider block">
                PEACE OF MIND SHOPPING
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-gray-900 mt-0.5">
                4 Steps to Authenticate Your Device
              </h3>
            </div>

            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="p-3 sm:p-3.5 rounded-2xl bg-gray-50/70 border border-gray-200/80 hover:border-[#000b42]/40 hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#000b42]/10 text-[#000b42] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {s.num}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">
                        {s.title}
                      </h4>
                      <p className="text-[11px] text-gray-600 leading-relaxed mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Direct WhatsApp Order CTA Button */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20100%25%20genuine%20vapes%20with%20scratch%20QR%20code%20and%20free%20express%20delivery.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#000b42] hover:bg-[#00072e] text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl transition-all shadow-sm hover:shadow active:scale-98 cursor-pointer text-center"
              >
                <FaWhatsapp className="w-4 h-4 text-white shrink-0" />
                <span>Order Authentic Vapes on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
