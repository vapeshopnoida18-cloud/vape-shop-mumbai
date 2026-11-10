import Link from "next/link";
import Image from "next/image";
import {
  FiTruck,
  FiShield,
  FiBookOpen,
  FiHeadphones,
  FiMapPin,
  FiMail,
  FiGlobe,
  FiPhone,
  FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20vapes%20with%20express%20delivery.`;
  const callUrl = `tel:+917082674286`;

  const topValuePillars = [
    {
      icon: FiTruck,
      title: "Mumbai & MMR Express",
      desc: "30-45 mins free doorstep delivery across Bandra, Andheri, Colaba, Powai & Thane",
      badge: "Express Hub",
    },
    {
      icon: FiShield,
      title: "100% Genuine QR Verified",
      desc: "Factory-sealed scratch code authentication on every Geek Bar, Elf Bar & Lost Mary",
      badge: "Authentic",
    },
    {
      icon: FiBookOpen,
      title: "21+ Compliance & Safety",
      desc: "Mandatory adult compliance, safe lithium battery handling & responsible disposal",
      badge: "Strict 21+",
    },
    {
      icon: FiHeadphones,
      title: "24/7 Mumbai Order Helpline",
      desc: "Live stock inquiries, flavor selection assistance & real-time rider tracking on WhatsApp",
      badge: "Instant Support",
    },
  ];

  const productGuides = [
    { name: "Disposable Vapes", href: "/products?category=disposable" },
    { name: "Pod Systems & Kits", href: "/products?category=pods" },
    { name: "Vape Kits & Mods", href: "/products?category=pods" },
    { name: "Nicotine Salts & E-Liquids", href: "/products?category=nic-salts" },
    { name: "Replacement Coils & Pods", href: "/products?category=pods" },
    { name: "Vape Accessories & Chargers", href: "/products" },
  ];

  const infoLinks = [
    { name: "Vape Guides & Insights", href: "/blog" },
    { name: "Vaping Regulations in Mumbai", href: "/#legal-info" },
    { name: "Is Vaping Legal in Maharashtra?", href: "/#legal-info" },
    { name: "E-Cigarette Act Statutory Info", href: "/#legal-info" },
    { name: "Authenticity & Safety Checks", href: "/#legal-info" },
    { name: "Responsible Use & Advisory", href: "/#legal-info" },
    { name: "Frequently Asked Questions", href: "/#faq-section" },
  ];

  // Best Google High-Intent Search Keywords for Mumbai Top 1-2 Ranking
  const topGoogleKeywords = [
    { title: "Vape Shop Mumbai", href: "/" },
    { title: "Vape Shop in Mumbai", href: "/products" },
    { title: "Buy Disposable Vape Online Mumbai", href: "/products" },
    { title: "Vapes in Mumbai", href: "/products" },
    { title: "Vape Shops in Mumbai", href: "/products" },
    { title: "Vape Shop Bandra West", href: "/vape-delivery/bandra-west-mumbai" },
    { title: "Vape Shop Andheri West", href: "/vape-delivery/andheri-west-mumbai" },
    { title: "Vape Shop Juhu", href: "/vape-delivery/juhu-mumbai" },
    { title: "Vape Shop Colaba", href: "/vape-delivery/colaba-mumbai" },
    { title: "Vape Shop Marine Drive", href: "/vape-delivery/marine-drive-mumbai" },
    { title: "Vape Shop Lower Parel", href: "/vape-delivery/lower-parel-mumbai" },
    { title: "Vape Shop Dadar", href: "/vape-delivery/dadar-mumbai" },
    { title: "Vape Shop Powai", href: "/vape-delivery/powai-hiranandani-mumbai" },
    { title: "Vape Shop BKC Mumbai", href: "/vape-delivery/bandra-east-bkc-mumbai" },
    { title: "Vape Shop Versova", href: "/vape-delivery/versova-mumbai" },
    { title: "Vape Shop Goregaon", href: "/vape-delivery/goregaon-west-east-mumbai" },
    { title: "Vape Shop Malad", href: "/vape-delivery/malad-west-east-mumbai" },
    { title: "Vape Shop Borivali", href: "/vape-delivery/kandivali-borivali-mumbai" },
    { title: "Vape Shop Chembur", href: "/vape-delivery/chembur-mumbai" },
    { title: "Vape Shop Ghatkopar", href: "/vape-delivery/ghatkopar-mumbai" },
    { title: "Vape Shop Mulund", href: "/vape-delivery/mulund-mumbai" },
    { title: "Vape Shop Vashi", href: "/vape-delivery/vashi-navi-mumbai" },
    { title: "Vape Shop Navi Mumbai", href: "/vape-delivery/belapur-kharghar-navi-mumbai" },
    { title: "Vape Shop Thane", href: "/vape-delivery/thane-west-mumbai" },
    { title: "Vape Store Near Me Mumbai", href: "/products" },
    { title: "Smoke Shop Near Me Mumbai", href: "/products" },
    { title: "Buy Vape Online Mumbai", href: "/products" },
    { title: "Free Vape Delivery Mumbai", href: "/products" },
    { title: "Geek Bar Burj 80000 Mumbai", href: "/products/geek-bar-burj-80000-disposable-vape" },
    { title: "Lost Mary Mega 70000 Mumbai", href: "/products/lost-mary-mega-fullview-70000-disposable-vape" },
    { title: "Yuoto Digi 15000 Mumbai", href: "/products/yuoto-digi-15000-disposable-vape" },
    { title: "Elf Bar BC5000 Mumbai", href: "/products/ebcreate-bc5000-disposable-pod-device" },
    { title: "Voopoo Drag H40 Mumbai", href: "/products/voopoo-drag-h40-pro-pod-mod-kit" },
    { title: "Best Vape Shop Mumbai", href: "/products" },
    { title: "Vape Shop Mumbai Express 30 Min", href: "/products" },
  ];

  return (
    <footer
      aria-label="Vape Shop Mumbai Official Footer"
      className="relative bg-[#000720] text-slate-300 border-t border-slate-800/90 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-b from-[#000b42]/30 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-8 relative z-10">
        
        {/* 1. TOP VALUE PROPOSITION TILES (Unique Clean Glass Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-12">
          {topValuePillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-[#000b42]/80 via-[#000f40]/70 to-[#00072e]/90 border border-white/10 hover:border-white/25 rounded-2xl p-4 sm:p-4.5 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-white">
                    <Icon className="w-5 h-5 text-blue-300" />
                  </div>
                  <span className="text-[9px] font-bold text-blue-200 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-[13.5px] font-bold text-white mb-1 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 2. MAIN 4-COLUMN FOOTER BODY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12">
          
          {/* Column 1: Brand Logo, Description & Direct CTA Pills (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block" aria-label="Vape Shop Mumbai Home">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-48 brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  <Image
                    src="/logo.png"
                    alt="Vape Shop Mumbai Logo"
                    fill
                    sizes="192px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </div>
            </Link>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#000b42] border border-blue-500/30 text-[10.5px] tracking-wider uppercase font-bold text-blue-300">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Official Mumbai &amp; MMR Delivery Hub</span>
            </div>

            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
              Vape Shop Mumbai is Mumbai&apos;s premier verified platform for authentic disposable vapes, refillable pod mods, and imported e-liquids. With express 30-45 minute dispatch across Bandra, Andheri, Juhu, South Mumbai, Powai, Thane &amp; Navi Mumbai, every order is backed by scratch-and-verify QR authentication and doorstep UPI payment.
            </p>

            {/* Direct Action Quick Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-md hover:shadow-emerald-500/25 active:scale-95"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={callUrl}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
              >
                <FiPhone className="w-4 h-4 text-blue-300" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* Column 2: PRODUCT CATALOG (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="relative inline-block pb-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Product Catalog
              </h3>
              <div className="w-8 h-0.5 bg-blue-400 mt-1.5 rounded-full" />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {productGuides.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between group hover:text-white transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                    <FiChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: INFORMATION & GUIDES (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="relative inline-block pb-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Information &amp; Guides
              </h3>
              <div className="w-8 h-0.5 bg-blue-400 mt-1.5 rounded-full" />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {infoLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between group hover:text-white transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {item.name}
                    </span>
                    <FiChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-blue-400 transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: GET IN TOUCH & LOGISTICS (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="relative inline-block pb-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                Mumbai Logistics Hub
              </h3>
              <div className="w-8 h-0.5 bg-blue-400 mt-1.5 rounded-full" />
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              {/* Address */}
              <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                <FiMapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed text-[11.5px]">
                  Linking Road &amp; Hill Road Hub, Bandra West, Mumbai, Maharashtra 400050
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:vapeshopmumbai@gmail.com"
                  className="text-slate-300 hover:text-white transition-colors underline-offset-2 hover:underline"
                >
                  vapeshopmumbai@gmail.com
                </a>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2.5">
                <FiGlobe className="w-4 h-4 text-blue-400 shrink-0" />
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  www.vapeshopsinmumbai.com
                </Link>
              </div>

              {/* Helpline Phone */}
              <div className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:+917082674286"
                  className="text-slate-300 hover:text-emerald-400 font-semibold transition-colors"
                >
                  +91 70826 74286 (Mumbai Helpline)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. BEST GOOGLE SEARCHING KEYWORDS (Curated High-Value Mumbai Local Tags) */}
        <div className="border-t border-slate-800/90 pt-6 pb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Trending Google Searches in Mumbai &amp; MMR:
            </h4>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {topGoogleKeywords.map((kw, idx) => (
              <Link
                key={idx}
                href={kw.href}
                className="text-[11px] bg-slate-900/90 hover:bg-[#000b42] border border-slate-800/80 hover:border-blue-500/50 text-slate-400 hover:text-white px-2.5 py-1 rounded-lg transition-all duration-150"
              >
                {kw.title}
              </Link>
            ))}
          </div>
        </div>

        {/* 4. BOTTOM COPYRIGHT & LEGAL DISCLAIMER BAR */}
        <div className="border-t border-slate-800/90 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Vape Shop Mumbai. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-400 text-[11px] sm:text-xs">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>

          <div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-semibold px-4 py-2 rounded-xl shadow-lg transition-transform active:scale-95 cursor-pointer text-xs"
            >
              <FaWhatsapp className="w-3.5 h-3.5 text-white" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
