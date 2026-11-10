import Link from "next/link";
import { FiShoppingBag, FiPhoneCall, FiChevronRight, FiTrendingUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function QuickFeatures() {
  const phoneNumber = "+917082674286";
  const displayPhone = "+91 70826 74286";
  const whatsappUrl = `https://wa.me/917082674286?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20vapes%20in%20Mumbai.`;

  const features = [
    {
      id: 1,
      badge: "AUTHENTIC & VERIFIED",
      title: "Genuine Vapes",
      href: "/products",
      icon: FiShoppingBag,
      iconBg: "bg-white/10 text-white",
      badgeColor: "text-blue-200",
      isExternal: false,
    },
    {
      id: 2,
      badge: "24/7 HELPLINE MUMBAI",
      title: `Call ${displayPhone}`,
      mobileTitle: "Call 24/7 Support",
      href: `tel:${phoneNumber}`,
      icon: FiPhoneCall,
      iconBg: "bg-white/10 text-white",
      badgeColor: "text-blue-200",
      isExternal: true,
    },
    {
      id: 3,
      badge: "EXPRESS 30-45 MIN",
      title: "WhatsApp Order",
      href: whatsappUrl,
      icon: FaWhatsapp,
      iconBg: "bg-emerald-500/20 text-emerald-400",
      badgeColor: "text-emerald-300",
      hasLiveDot: true,
      isExternal: true,
    },
    {
      id: 4,
      badge: "TOP TRENDING DISPOSABLES",
      title: "Disposable Vapes",
      href: "/products?category=disposable",
      icon: FiTrendingUp,
      iconBg: "bg-cyan-500/20 text-cyan-300",
      badgeColor: "text-cyan-200",
      isExternal: false,
    },
  ];

  return (
    <section
      aria-label="Vape Shop Mumbai Express Services & Quick Support"
      className="site-section site-container"
    >
      {/* 2-Column on Mobile, 4-Column on Desktop with Luxurious Navy Theme */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 md:gap-5">
        {features.map((item) => {
          const Icon = item.icon;
          const CardContent = (
            <div className="h-full bg-gradient-to-br from-[#000b42] via-[#00105c] to-[#00072e] rounded-xl sm:rounded-2xl border border-white/10 shadow-[0_8px_24px_-4px_rgba(0,11,66,0.35)] hover:shadow-[0_12px_32px_-4px_rgba(0,11,66,0.55)] hover:border-white/25 transition-all duration-300 p-3 sm:p-4.5 flex items-center justify-between gap-2.5 group cursor-pointer relative overflow-hidden">
              {/* Subtle Ambient Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Left Side: Icon Pill & Texts */}
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 relative z-10">
                {/* Rounded Icon Badge with Soft Glow */}
                <div
                  className={`relative w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl ${item.iconBg} border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-inner`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  {item.hasLiveDot && (
                    <span className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-emerald-400 border-2 border-[#000b42] rounded-full animate-pulse" />
                  )}
                </div>

                {/* Subtitle & Title */}
                <div className="min-w-0">
                  <span className={`block text-[9px] sm:text-[10px] font-bold tracking-wider ${item.badgeColor} uppercase truncate`}>
                    {item.badge}
                  </span>
                  <h3 className="text-xs sm:text-[14px] md:text-[15px] font-bold text-white group-hover:text-blue-100 transition-colors truncate">
                    <span className="sm:hidden">{item.mobileTitle || item.title}</span>
                    <span className="hidden sm:inline">{item.title}</span>
                  </h3>
                </div>
              </div>

              {/* Right Side: Circular Chevron Button */}
              <div className="hidden sm:flex w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-white text-white/70 group-hover:text-[#000b42] items-center justify-center shrink-0 transition-all duration-300 group-hover:translate-x-0.5 border border-white/10 shadow-xs relative z-10">
                <FiChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </div>
          );

          return item.isExternal ? (
            <a
              key={item.id}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block focus:outline-none h-full"
              aria-label={`${item.badge} - ${item.title} - Vape Shop Mumbai`}
            >
              {CardContent}
            </a>
          ) : (
            <Link
              key={item.id}
              href={item.href}
              className="block focus:outline-none h-full"
              aria-label={`${item.badge} - ${item.title} - Vape Shop Mumbai`}
            >
              {CardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
