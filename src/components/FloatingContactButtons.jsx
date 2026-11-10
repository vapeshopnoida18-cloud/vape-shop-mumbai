"use client";

import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function FloatingContactButtons() {
  const [hoveredBtn, setHoveredBtn] = useState(null);

  const phoneUrl = `tel:+917082674286`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20vapes%20with%2030-45%20min%20free%20express%20delivery.`;

  return (
    <aside
      aria-label="Quick Contact & Express Ordering"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-3 select-none"
    >
      {/* 1. Phone Call Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip on Desktop */}
        {hoveredBtn === "phone" && (
          <div className="hidden sm:flex items-center absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-gray-900 text-white text-xs font-semibold whitespace-nowrap shadow-xl border border-gray-800 animate-in fade-in slide-in-from-right-1 duration-150">
            <span>Call Helpline: +91 70826 74286</span>
            <div className="w-1.5 h-1.5 bg-gray-900 border-r border-b border-gray-800 rotate-[-45deg] absolute -right-1" />
          </div>
        )}

        <a
          href={phoneUrl}
          onMouseEnter={() => setHoveredBtn("phone")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#00072e] via-[#000b42] to-[#1a2a6e] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(50,95,152,0.4)] hover:shadow-[0_10px_30px_rgba(50,95,152,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Call Vape Shop Mumbai Helpline at +91 70826 74286"
        >
          {/* Ambient Blue Halo Glow */}
          <span className="absolute -inset-1.5 rounded-full bg-[#000b42]/20 blur-sm -z-10 group-hover:bg-[#000b42]/35 transition-all duration-300" />
          <FiPhone className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:rotate-12 transition-transform duration-200" />
        </a>
      </div>

      {/* 2. WhatsApp Floating Button with Status Indicator & Ambient Halo */}
      <div className="relative flex items-center">
        {/* Tooltip on Desktop */}
        {hoveredBtn === "whatsapp" && (
          <div className="hidden sm:flex items-center absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-emerald-950 text-emerald-300 text-xs font-semibold whitespace-nowrap shadow-xl border border-emerald-800/60 animate-in fade-in slide-in-from-right-1 duration-150">
            <span>Order on WhatsApp (60 Min Delivery)</span>
            <div className="w-1.5 h-1.5 bg-emerald-950 border-r border-b border-emerald-800/60 rotate-[-45deg] absolute -right-1" />
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn("whatsapp")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#059669] via-[#10b981] to-[#22c55e] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(16,185,129,0.45)] hover:shadow-[0_10px_32px_rgba(16,185,129,0.65)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Order vapes on WhatsApp with express Mumbai delivery"
        >
          {/* Ambient Soft Green Halo (matches reference screenshot aura) */}
          <span className="absolute -inset-2 rounded-full bg-emerald-400/30 blur-md -z-10 group-hover:bg-emerald-400/45 transition-all duration-300 animate-pulse" />

          {/* Top-Right Online Status Pulse Ring (as seen in reference screenshot) */}
          <span className="absolute top-0 right-0 w-4 h-4 rounded-full bg-[#10b981] border-2 border-white shadow-xs flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </span>

          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-200" />
        </a>
      </div>
    </aside>
  );
}
