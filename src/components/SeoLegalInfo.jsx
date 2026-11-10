import Link from "next/link";

export default function SeoLegalInfo() {
  const cards = [
    {
      title: "Mumbai Express (30–45m)",
      titleColor: "text-[#000b42]",
      text: "Direct doorstep dispatch to Bandra West, Andheri West, Juhu, Colaba, Marine Drive, Lower Parel, Worli, Powai, and all Mumbai residential areas with instant UPI payment.",
    },
    {
      title: "Navi Mumbai & Thane Express Delivery",
      titleColor: "text-indigo-800",
      text: "Fast same-day express couriers across Vashi, Belapur, Kharghar, Nerul, Palm Beach Road, and Thane West (Ghodbunder Road, Majiwada).",
    },
    {
      title: "South Mumbai & Western Suburbs Express",
      titleColor: "text-emerald-800",
      text: "Immediate priority dispatch to Nariman Point, Cuffe Parade, Marine Lines, Churchgate, Santacruz, Juhu Scheme, Malad Mindspace, and Borivali West with 100% authentic scratch verification QR code.",
    },
  ];

  const trendingSearches = [
    "Geek Bar Burj 80K",
    "Yuoto Digi 15000",
    "Crown Bar 40K MegaMax",
    "Lost Mary 70K Fullview",
    "Elf Bar BC5000",
    "Voopoo Drag H40 Pro",
    "Vaporesso XROS 5",
    "Uwell Caliburn A2",
    "IGET Move 50000",
    "Nasty Juice Nic Salt",
    "Vape Delivery Bandra West",
    "Andheri West Lokhandwala Vape",
    "Juhu Tara Road Vape Delivery",
    "Powai Hiranandani Vapes",
    "Cash on Delivery Vapes Mumbai",
    "Late Night Vape Delivery Mumbai",
  ];

  return (
    <section
      aria-label="Vape Shop Mumbai Local Coverage and Information"
      className="site-section site-container"
    >
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Top Header */}
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-base sm:text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-2.5">
            Vape Shop Mumbai – Authentic Vapes, Pods &amp; E-Liquids Delivery
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-4xl font-normal">
            Welcome to <strong className="text-gray-900 font-semibold">Vape Shop Mumbai</strong>, your trusted online destination for 100% genuine vaping devices, disposable pod bars, refillable kits, and imported nicotine salt e-liquids in Mumbai, Navi Mumbai, and Thane. Whether you are searching for &quot;Vape Shop Mumbai&quot;, &quot;Best vape shop near me&quot;, or &quot;vape delivery in Mumbai Bandra & Andheri&quot;, we provide lightning-fast doorstep service with genuine factory scratch-code verification.
          </p>
        </div>

        {/* 3 Information Cards - Exact Reference Match */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 mb-7 sm:mb-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-gray-50/50 hover:bg-white rounded-2xl border border-gray-200/80 hover:border-[#000b42]/40 hover:shadow-md transition-all duration-200 p-4 sm:p-5 flex flex-col justify-start"
            >
              <h3 className={`text-sm sm:text-base font-bold ${card.titleColor} mb-1.5`}>
                {card.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Trending Searches - Human Craft, Clean Pill Tags */}
        <div className="pt-6 border-t border-gray-100">
          <span className="block text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
            TRENDING SEARCHES IN MUMBAI, THANE &amp; NAVI MUMBAI:
          </span>

          <div className="flex flex-wrap gap-2">
            {trendingSearches.map((item) => (
              <Link
                key={item}
                href={`/products?search=${encodeURIComponent(item)}`}
                className="inline-flex items-center text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-[#000b42] hover:border-[#000b42]/50 px-3 py-1.5 rounded-xl border border-gray-200 transition-colors shadow-2xs cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
