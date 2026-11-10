"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiShield,
  FiTruck,
  FiCheckCircle,
  FiChevronDown,
  FiNavigation,
  FiCreditCard,
  FiHelpCircle,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

const sectorsList = [
  { name: "Bandra West & Khar", subtext: "Central Hub", time: "20-30 mins", badge: "Direct Hub" },
  { name: "Andheri West & Lokhandwala", subtext: "Western Suburbs", time: "25-35 mins", badge: "Express" },
  { name: "Juhu & JVPD Scheme", subtext: "Coastal Hub", time: "25-35 mins", badge: "Popular" },
  { name: "Colaba & Marine Drive", subtext: "South Mumbai", time: "30-40 mins", badge: "Active" },
  { name: "Lower Parel & Worli", subtext: "South Central", time: "25-35 mins", badge: "Commercial" },
  { name: "Powai Hiranandani", subtext: "Central Belt", time: "30-45 mins", badge: "Fast Route" },
  { name: "Thane West & Majiwada", subtext: "Thane Zone", time: "35-45 mins", badge: "Available" },
  { name: "Vashi & Navi Mumbai", subtext: "Navi Mumbai Hub", time: "35-45 mins", badge: "Available" },
];

const contactFaqs = [
  {
    q: "How fast is vape delivery from your Bandra West Mumbai hub?",
    a: "Orders in Bandra, Khar, Andheri, and Juhu reach within 20 to 30 minutes. Across South Mumbai, Powai, Thane, and Navi Mumbai, our dedicated couriers deliver within 30 to 45 minutes.",
  },
  {
    q: "Can I order via WhatsApp and pay Instant UPI (Google Pay, PhonePe, Paytm)?",
    a: "Yes! 100% of orders placed through WhatsApp or phone can be paid via Instant UPI (Google Pay, PhonePe, Paytm) or direct QR code scanning.",
  },
  {
    q: "Are all vape devices 100% genuine with scratch QR codes?",
    a: "Every device from Geek Bar, Lost Mary, Yuoto, Elf Bar, Voopoo, Vaporesso, and IGET comes in factory-sealed packaging with an authentic scratch-off QR verification code that you can authenticate directly on the official brand website.",
  },
  {
    q: "Can I visit the retail store in Bandra West Mumbai?",
    a: "Yes, you can visit our retail hub at Linking Road & Hill Road Hub, Bandra West, Mumbai 400050. We are open all 7 days from 10:00 AM to 12:00 Midnight.",
  },
  {
    q: "What is the fastest way to place an urgent order?",
    a: "Clicking our 'Order on WhatsApp' button (+91 70826 74286) connects you instantly with our store team. We share live flavor menus and immediately dispatch your order via express courier.",
  },
];

const topKeywords = [
  "Vape Shop Mumbai",
  "Vape Shop Bandra West",
  "Vape Delivery Andheri West",
  "Vape Shop Juhu",
  "Vape Shop Colaba",
  "Vape Delivery South Mumbai",
  "Vape Shop Powai Hiranandani",
  "Vape Shop Thane",
  "Vape Shop Navi Mumbai",
  "Instant UPI Vapes Mumbai",
  "Geek Bar Burj 80000 Mumbai",
  "Lost Mary 70K Mumbai",
  "Yuoto Digi 15000 Mumbai",
  "Elf Bar BC5000 Mumbai",
  "Vape Shop Near Me Mumbai",
  "Late Night Vape Delivery Mumbai",
];

export default function ContactClient() {
  const [openFaq, setOpenFaq] = useState(null);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20vapes%20with%20express%20delivery.`;

  return (
    <div className="bg-[#f8fafc] text-gray-900 min-h-screen py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 space-y-6 sm:space-y-8">
        
        {/* ========================================================= */}
        {/* 1. HERO HEADER CARD (Clean, Centered, Professional) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-xs text-gray-400 mb-4 flex items-center justify-center gap-2">
              <Link href="/" className="hover:text-[#000b42] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-semibold">Contact Us</span>
            </nav>

            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#000b42] bg-blue-50/80 border border-blue-100/80 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Mumbai Sector 76 Hub • 30-45 min Express Dispatch
            </span>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mt-1">
              Contact <span className="text-[#000b42]">Vape Shop Mumbai</span>
            </h1>

            <p className="text-xs sm:text-sm text-gray-600 mt-3 max-w-2xl mx-auto leading-relaxed">
              Looking for 100% genuine disposable vapes, pod systems, or express 30-45 min doorstep delivery across Sector 76, Sector 18, Sector 62, and Mumbai & MMR? Connect with our team directly.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. THREE CONTACT CHANNELS (Modern Cards with Clear CTAs) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Card 1: WhatsApp Priority Desk */}
          <div className="bg-white rounded-3xl border border-gray-200/80 hover:border-emerald-500/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                  <FaWhatsapp className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100/70 text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Online Now (2 Min Reply)
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                WhatsApp Order &amp; Support
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Directly chat with our store team for live stock availability, flavor menus, and instant courier dispatch.
              </p>
            </div>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition-transform active:scale-98 cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 70826 74286)</span>
              </a>
              <div className="text-[11px] text-gray-400 text-center mt-2 font-medium">
                ⚡ Express 30-45 mins Delivery Across Mumbai
              </div>
            </div>
          </div>

          {/* Card 2: Phone Helpline */}
          <div className="bg-white rounded-3xl border border-gray-200/80 hover:border-[#000b42]/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#000b42] flex items-center justify-center shadow-xs">
                  <FiPhone className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100/70 text-[#000b42]">
                  <FiClock className="w-3 h-3" />
                  10:00 AM – Midnight
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                Helpline &amp; Phone Support
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                Call our direct store phone line for urgent orders, device consultations, and order status updates.
              </p>
            </div>

            <div>
              <a
                href="tel:+917082674286"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#000b42] hover:bg-[#00072e] text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition-transform active:scale-98 cursor-pointer"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Helpline: +91 70826 74286</span>
              </a>
              <div className="text-[11px] text-gray-400 text-center mt-2 font-medium">
                📞 Available 7 Days a Week
              </div>
            </div>
          </div>

          {/* Card 3: Email Support */}
          <div className="bg-white rounded-3xl border border-gray-200/80 hover:border-amber-500/60 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-xl transition-all duration-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-xs">
                  <FiMail className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100/70 text-amber-800">
                  Official Email
                </span>
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-1.5">
                Official Support Desk
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">
                For official communications, corporate inquiries, customer feedback, and wholesale queries.
              </p>
            </div>

            <div>
              <a
                href="mailto:vapeshopmumbai@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-bold text-xs py-3 px-4 rounded-xl shadow-xs transition-transform active:scale-98 cursor-pointer truncate"
              >
                <FiMail className="w-4 h-4 shrink-0" />
                <span className="truncate">vapeshopmumbai@gmail.com</span>
              </a>
              <div className="text-[11px] text-gray-400 text-center mt-2 font-medium">
                ✉️ Quick response within 2 hours
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. STORE LOCATION DETAILS + LIVE GOOGLE MAP (BIG WHITE CARD) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Location Info (6 Cols) */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#000b42] text-[11px] font-bold uppercase tracking-wider">
                <FiMapPin className="w-3.5 h-3.5" />
                Central Mumbai Store &amp; Dispatch Hub
              </span>

              <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                Vape Shop Mumbai – Bandra West Hub
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our central retail inventory is located at Linking Road & Hill Road Hub, Bandra West. Centrally connected via Western Express Highway &amp; Bandra-Worli Sea Link, enabling swift 20-30 min delivery to Western Suburbs and 30-45 min delivery across South Mumbai, Thane &amp; Navi Mumbai.
              </p>

              {/* Exact Address Box */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2 text-xs">
                <div className="font-bold text-gray-900 flex items-center gap-2">
                  <FiMapPin className="w-4 h-4 text-[#000b42]" />
                  <span>Physical Store Address:</span>
                </div>
                <p className="text-gray-700 leading-relaxed font-semibold pl-6">
                  Linking Road & Hill Road Hub, Bandra West, Mumbai, Maharashtra 400050
                </p>
                <div className="text-[11px] text-gray-500 pl-6">
                  🚇 Landmark: Near Bandra Railway Station &amp; Linking Road Shopping Promenade
                </div>
              </div>

              {/* Badges Bar */}
              <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-100 text-emerald-900 font-semibold">
                  <FiClock className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Open 7 Days till Midnight</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-[#000b42] font-semibold">
                  <FiCreditCard className="w-4 h-4 text-[#000b42] shrink-0" />
                  <span>Instant UPI (Google Pay, PhonePe, Paytm)</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Linking+Road+Bandra+West+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all shadow-xs"
                >
                  <FiNavigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>Order for Store Pickup</span>
                </a>
              </div>
            </div>

            {/* Right Map (6 Cols) */}
            <div className="lg:col-span-6">
              <div className="w-full h-72 sm:h-88 rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative bg-gray-100">
                <iframe
                  title="Vape Shop Mumbai Bandra West Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.189397682977!2d72.8273646!3d19.0553744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c917b1b3695b%3A0xe543501bf0eaec65!2sLinking%20Rd%2C%20Bandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. LOCAL DELIVERY SECTORS (Matching ServiceAreas Layout) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
              EXPRESS DELIVERY AREAS
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Express Vape Delivery Across Mumbai &amp; MMR
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Superfast doorstep dispatch to your society, office, or residence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sectorsList.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200/70 bg-gray-50/50 hover:bg-white hover:border-[#000b42]/40 hover:shadow-md transition-all p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-[#000b42] bg-blue-50 border border-blue-100/70 px-2 py-0.5 rounded-full">
                      {sec.badge}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                      <FiClock className="w-3 h-3" />
                      {sec.time}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 mb-0.5">{sec.name}</h4>
                  <p className="text-[11px] text-gray-500">{sec.subtext} • Free Delivery & Instant UPI</p>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-200/60 flex items-center justify-between">
                  <span className="text-[10px] text-emerald-600 font-semibold">100% Genuine</span>
                  <Link
                    href={`/products?search=${encodeURIComponent(sec.name.split(" ")[0])}`}
                    className="text-[11px] text-[#000b42] hover:underline font-bold inline-flex items-center gap-1"
                  >
                    <span>Order</span>
                    <FiArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 5. CONTACT PAGE FAQS (ACCORDION ON WHITE CARD) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
              STORE &amp; DELIVERY FAQS
            </span>
            <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Common questions regarding store timings, delivery speeds, and payments in Mumbai.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200/80 rounded-2xl overflow-hidden bg-gray-50/50 hover:border-gray-300 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 text-xs sm:text-sm font-semibold text-gray-900 hover:text-[#000b42] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown
                      className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#000b42]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-200/60 leading-relaxed animate-in fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 6. TOP MUMBAI SEARCH KEYWORDS (SEO EXPANDER PILLS) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#000b42]" />
            <h4 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
              Trending Google Searches in Mumbai &amp; MMR:
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {topKeywords.map((kw, idx) => (
              <Link
                key={idx}
                href="/products"
                className="text-[11px] bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 text-gray-600 hover:text-[#000b42] px-3 py-1.5 rounded-lg transition-colors font-medium"
              >
                {kw}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
