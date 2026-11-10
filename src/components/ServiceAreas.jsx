import Link from "next/link";
import { FiMapPin, FiClock, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";
import { locations } from "@/data/locations";

export default function ServiceAreas() {
  return (
    <section
      aria-label="Vape Shop Mumbai Express Delivery Service Areas"
      className="site-section site-container"
    >
      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1.5">
            VAPE SHOP MUMBAI EXPRESS DELIVERY
          </span>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-2.5">
            Vape Shop Mumbai Local Service Areas &amp; Hotspots
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Looking for authentic Vape Shop Mumbai delivery? Enjoy 100% Free Express 30-45 Min Doorstep Delivery across Bandra, Andheri, Juhu, South Mumbai, Powai, Thane, and Navi Mumbai with verified scratch QR codes.
          </p>
        </div>

        {/* Area Cards Grid with Direct Internal Links for 100% Google Indexing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {locations.map((area) => (
            <Link
              key={area.slug}
              href={`/vape-delivery/${area.slug}`}
              title={`View Vape Delivery in ${area.name}`}
              className="group relative bg-white hover:bg-gray-50/70 rounded-2xl border border-gray-200/85 hover:border-[#000b42]/40 hover:shadow-md hover:shadow-[#000b42]/8 transition-all duration-200 p-3.5 sm:p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
            >
              <div className="flex items-center gap-3 min-w-0">
                {/* Location Pin Icon */}
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#000b42]/10 text-[#000b42] group-hover:bg-[#000b42] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-xs">
                  <FiMapPin className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </div>

                {/* Title & Subtext */}
                <div className="min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-gray-900 truncate group-hover:text-[#000b42] transition-colors">
                    {area.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 mt-0.5">
                    <FiClock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="truncate">{area.subtext}</span>
                  </div>
                </div>
              </div>

              {/* Status Badge & Arrow */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  {area.deliveryTime}
                </span>
                <FiArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#000b42] group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Trust Micro-Bar */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600 font-medium">
          <span className="flex items-center gap-1.5 text-gray-700">
            <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Vape Shop Mumbai: 30-45 Mins Free Delivery Across All Locations</span>
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-1.5 text-gray-700">
            <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100% Free Shipping &amp; Instant UPI Online Payment</span>
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20what%20is%20the%20delivery%20time%20to%20my%20area%3F`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#000b42] font-semibold hover:underline"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Check My Area Delivery Time</span>
          </a>
        </div>
      </div>
    </section>
  );
}
