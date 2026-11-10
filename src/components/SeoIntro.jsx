import Link from "next/link";
import { FiShield, FiClock, FiPackage, FiCreditCard, FiArrowUpRight, FiCheckCircle, FiAward, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function SeoIntro() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20vapes%20in%20Mumbai.`;

  const trendingCategories = [
    { name: "Disposable Vapes", count: "5000+ Puffs", href: "/products?category=disposable" },
    { name: "Pod Systems & Kits", count: "Refillable", href: "/products?category=pods" },
    { name: "Nic Salts & E-Liquids", count: "Top Flavors", href: "/products?category=eliquids" },
    { name: "Replacement Coils", count: "Original", href: "/products?category=coils" },
  ];

  const valueProps = [
    {
      id: 1,
      title: "100% Authentic Guarantee",
      desc: "Every device comes with an official scratch-and-verify QR authentication code. 100% genuine factory-sealed stock.",
      icon: FiShield,
      iconBg: "bg-blue-50 text-[#000b42]",
      badge: "Verified Origin",
    },
    {
      id: 2,
      title: "30-45 Min Express Fleet",
      desc: "Local riders stationed across Bandra, Andheri, Juhu, Colaba, Lower Parel, Powai, Thane & Navi Mumbai.",
      icon: FiClock,
      iconBg: "bg-emerald-50 text-emerald-600",
      badge: "Hyper-Local Delivery",
    },
    {
      id: 3,
      title: "100% Discreet Packaging",
      desc: "Delivered in plain, unmarked, tamper-evident private boxes to ensure complete confidentiality at home or office.",
      icon: FiPackage,
      iconBg: "bg-indigo-50 text-indigo-600",
      badge: "Full Privacy",
    },
    {
      id: 4,
      title: "Instant UPI & QR Payment",
      desc: "Inspect your tamper-evident sealed package at your door and pay seamlessly via Google Pay, PhonePe, Paytm, or UPI.",
      icon: FiCreditCard,
      iconBg: "bg-amber-50 text-amber-600",
      badge: "Pay On Delivery",
    },
  ];

  const highlights = [
    "Express 30–45 Mins Delivery",
    "Scratch QR Authentication",
    "Pay After Physical Inspection",
    "Zero Counterfeits Policy",
  ];

  return (
    <section
      aria-label="About Vape Shop Mumbai - Authentic Devices & Express Delivery"
      className="site-section site-container"
    >
      {/* Editorial White Background Card with Deep Navy Accents & Ambient Subtle Gradients */}
      <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-8 lg:p-11 shadow-[0_12px_40px_-12px_rgba(0,11,66,0.06),0_2px_12px_-2px_rgba(0,0,0,0.02)] overflow-hidden">
        
        {/* Subtle decorative background watermarks (pure white & faint slate glow) */}
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-50/50 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-slate-50/80 blur-3xl pointer-events-none" />

        {/* 2-Column Asymmetric Premium Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & High-Intent Local SEO (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-4 sm:space-y-6">
            
            {/* Header Micro Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#000b42] text-white text-[11px] sm:text-xs font-semibold tracking-wide shadow-2xs">
                <FiAward className="w-3.5 h-3.5 text-yellow-400" />
                <span>#1 Rated in Maharashtra</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-medium border border-slate-200/80">
                <FiMapPin className="w-3.5 h-3.5 text-[#000b42]" />
                <span>Bandra · Andheri · Powai · Thane &amp; MMR</span>
              </span>
            </div>

            {/* Main H1 Heading for Top 1-2 Google Ranking */}
            <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-[1.15]">
              <span className="text-[#000b42] underline decoration-blue-300/70 decoration-4 underline-offset-4">Vape Shop Mumbai</span>: Buy Disposable Vape Online Mumbai | #1 Vape Shop in Mumbai
            </h1>

            {/* Keyword-Rich Content Tailored Exclusively for Mumbai */}
            <p className="text-xs sm:text-[15px] text-slate-600 leading-relaxed font-normal">
              Welcome to <strong className="text-slate-900 font-semibold">Vape Shop Mumbai</strong>, the leading online vape store to <strong className="text-slate-900 font-semibold">buy disposable vape online Mumbai</strong>. As the #1 trusted <strong className="text-slate-900 font-semibold">Vape Shop in Mumbai</strong> and highest-rated <strong className="text-slate-900 font-semibold">smoke shop near me</strong>, we deliver 100% factory-sealed disposable vapes, pod systems, replacement coils, and imported nic salts. Our localized express courier fleet delivers free straight to your doorstep across <strong className="text-slate-900 font-semibold">Bandra West, Bandra East, Khar, Juhu, Andheri West (Lokhandwala &amp; Oshiwara), Andheri East, Versova, Goregaon, Malad, Borivali, Colaba, Marine Drive, Lower Parel, Worli, Dadar, Powai (Hiranandani)</strong>, and throughout <strong className="text-slate-900 font-semibold">Thane &amp; Navi Mumbai (Vashi, Belapur, Kharghar)</strong> with instant UPI payment.
            </p>

            {/* Quick Feature Checklist Points */}
            <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
              {highlights.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-slate-800">
                  <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Trending Quick Links Badges */}
            <div className="pt-2">
              <span className="block text-[11px] sm:text-xs font-bold text-slate-700 tracking-wider uppercase mb-2">
                Popular Collections:
              </span>
              <div className="flex flex-wrap gap-2">
                {trendingCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#000b42] text-xs font-semibold text-slate-800 hover:text-[#000b42] shadow-2xs hover:shadow-xs transition-all duration-200 group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-[10px] text-slate-400 group-hover:text-[#000b42]/80 font-normal hidden sm:inline">
                      ({cat.count})
                    </span>
                    <FiArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#000b42] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Action CTA Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#000b42] via-[#00105c] to-[#000b42] hover:from-[#00072e] hover:to-[#00072e] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-[0_4px_16px_rgba(0,11,66,0.25)] hover:shadow-[0_6px_22px_rgba(0,11,66,0.35)] transition-all duration-200 active:scale-95 cursor-pointer text-center"
              >
                <FaWhatsapp className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Order on WhatsApp (Fastest)</span>
              </a>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-[#000b42] text-slate-800 hover:text-[#000b42] text-xs sm:text-sm font-semibold px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer text-center"
              >
                <span>Explore Catalog</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Asymmetric Feature Stack (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-3.5">
            {valueProps.map((box) => {
              const Icon = box.icon;
              return (
                <div
                  key={box.id}
                  className="bg-slate-50/80 hover:bg-white rounded-xl sm:rounded-2xl border border-slate-200/80 hover:border-[#000b42]/30 p-3.5 sm:p-4.5 shadow-2xs hover:shadow-[0_8px_24px_-6px_rgba(0,11,66,0.08)] transition-all duration-300 group flex items-start gap-3.5"
                >
                  {/* Icon Box */}
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${box.iconBg} border border-slate-200/60 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xs sm:text-[14px] font-bold text-slate-900 group-hover:text-[#000b42] transition-colors leading-snug">
                        {box.title}
                      </h3>
                      <span className="text-[9px] sm:text-[10px] font-semibold text-[#000b42] bg-blue-50/90 px-2 py-0.5 rounded-md border border-blue-100 shrink-0">
                        {box.badge}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal">
                      {box.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
