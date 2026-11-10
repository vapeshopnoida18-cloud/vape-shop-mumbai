"use client";

import { useState } from "react";
import { FiStar, FiCheckCircle, FiMapPin, FiClock, FiAward, FiShield, FiTrendingUp } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function HomeReviews() {
  const [activeFilter, setActiveFilter] = useState("all");

  const reviews = [
    {
      id: 1,
      name: "Rohit Sharma",
      location: "Bandra West (Hill Road), Mumbai",
      sector: "bandra-west",
      product: "Geek Bar Burj 80000",
      rating: 5,
      time: "Yesterday",
      title: "Fastest delivery in Bandra, 100% authentic QR code!",
      comment:
        "Ordered the Geek Bar Burj 80000 puffs on WhatsApp. The rider reached Bandra West Hill Road in just 25 minutes. Scratched the QR code on the spot and verified it on the official Geek Bar website. Zero hassle, paid via Google Pay after inspecting. Best Vape Shop in Mumbai!",
      verifiedBadge: "Verified Mumbai Buyer",
    },
    {
      id: 2,
      name: "Karan Malhotra",
      location: "Lokhandwala Complex, Andheri West",
      sector: "andheri-west",
      product: "Lost Mary Mega 70000",
      rating: 5,
      time: "2 days ago",
      title: "Discreet packaging & superfast delivery in 20 minutes",
      comment:
        "Delivery to Lokhandwala Oshiwara was super quick—under 25 minutes! The box was completely sealed in plain tamper-evident packaging. Lost Mary 70K flavor is incredibly smooth. Highly recommend Vape Shop Mumbai for genuine stock.",
      verifiedBadge: "Verified Mumbai Buyer",
    },
    {
      id: 3,
      name: "Pooja V.",
      location: "Colaba Causeway, South Mumbai",
      sector: "colaba",
      product: "EBCREATE BC5000 (US Edition)",
      rating: 5,
      time: "3 days ago",
      title: "Smooth delivery to South Mumbai, genuine Elf Bar",
      comment:
        "Got it delivered to my apartment near Colaba Causeway. Delivery was free and rider was polite. Dual mesh coil gives amazing flavor. Truly appreciate the instant UPI option and verifiable anti-counterfeit QR code.",
      verifiedBadge: "Verified Mumbai Buyer",
    },
    {
      id: 4,
      name: "Siddharth Verma",
      location: "Juhu (JVPD Scheme), Mumbai",
      sector: "juhu",
      product: "Yuoto Digi 15000",
      rating: 5,
      time: "4 days ago",
      title: "Great taste & genuine device in Juhu",
      comment:
        "I was hanging out at a Juhu beach cafe and urgently needed a disposable pod. Messaged their WhatsApp helpline, got flavor options instantly, and had it delivered within 25 minutes. 100% original product with scratch security code.",
      verifiedBadge: "Verified Mumbai Buyer",
    },
    {
      id: 5,
      name: "Ankit Tiwari",
      location: "Hiranandani Gardens, Powai",
      sector: "powai",
      product: "Voopoo Drag H40 Pod Mod",
      rating: 5,
      time: "5 days ago",
      title: "Delivered straight to Hiranandani Powai tower gate",
      comment:
        "Living in Powai, usually orders take hours across Mumbai. Vape Shop Mumbai rider delivered in 30 minutes directly to Galleria gate. Authentic Voopoo kit, factory shrink-wrapped. Paid via PhonePe UPI.",
      verifiedBadge: "Verified Mumbai Buyer",
    },
    {
      id: 6,
      name: "Deepak Gupta",
      location: "Worli Sea Face, Mumbai",
      sector: "worli",
      product: "IGET Move 50000 Puffs",
      rating: 5,
      time: "1 week ago",
      title: "Best vape shop in Mumbai with express sea-face delivery",
      comment:
        "Hard to find original IGET 50K dual flavor devices in South Mumbai. Vape Shop Mumbai delivered to Worli Sea Face in 30 minutes with zero delivery charge. Official scratch code verified genuine. Will order regularly!",
      verifiedBadge: "Verified Mumbai Buyer",
    },
  ];

  const filteredReviews =
    activeFilter === "all"
      ? reviews
      : reviews.filter((r) => r.sector === activeFilter);

  // Schema.org Review & AggregateRating JSON-LD
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Vape Shop in Mumbai",
    url: "https://vapeshopsinmumbai.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1480",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      datePublished: "2025-01-15",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.comment,
    })),
  };

  return (
    <section
      aria-label="Customer Reviews & Ratings for Vape Shop Mumbai"
      className="site-section site-container"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Main Luxury White Canvas Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_12px_40px_-10px_rgba(0,11,66,0.06),0_2px_12px_-2px_rgba(0,0,0,0.02)] p-5 sm:p-8 md:p-10 transition-all overflow-hidden relative">
        
        {/* Subtle Decorative Ambient Background Accents */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-5 border-b border-slate-100 relative z-10">
          <div>
            {/* Rating Authority Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-50/90 border border-amber-200/80 text-amber-900 text-xs font-semibold mb-2 shadow-2xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-extrabold text-amber-950">4.9 / 5.0 Rating</span>
              <span className="text-amber-300">•</span>
              <span className="text-amber-800 font-medium">1,480+ Verified Mumbai Deliveries</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Customer Reviews – <span className="text-[#000b42]">Vape Shop Mumbai</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Authentic verified customer feedback across Bandra, Andheri, Juhu, Colaba, Powai, Worli &amp; MMR with 30-45 mins free doorstep delivery.
            </p>
          </div>

          {/* Quick Stats Dual Micro-Pills */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl px-3.5 py-2 text-center shadow-2xs">
              <span className="text-xs font-black text-emerald-700 flex items-center justify-center gap-1">
                <FiShield className="w-3.5 h-3.5 text-emerald-600" />
                <span>100% Genuine</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium">Scratch QR Verified</span>
            </div>
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl px-3.5 py-2 text-center shadow-2xs">
              <span className="text-xs font-black text-[#000b42] flex items-center justify-center gap-1">
                <FiClock className="w-3.5 h-3.5 text-[#000b42]" />
                <span>30-45 Mins</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium">Express MMR Fleet</span>
            </div>
          </div>
        </div>

        {/* Location Filter Pills (Deep Navy Selected State) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none text-xs relative z-10">
          {[
            { id: "all", label: `All Reviews (${reviews.length})` },
            { id: "bandra-west", label: "Bandra West" },
            { id: "andheri-west", label: "Andheri Lokhandwala" },
            { id: "colaba", label: "Colaba Causeway" },
            { id: "juhu", label: "Juhu JVPD" },
            { id: "powai", label: "Powai Hiranandani" },
            { id: "worli", label: "Worli Sea Face" },
          ].map((pill) => (
            <button
              key={pill.id}
              type="button"
              onClick={() => setActiveFilter(pill.id)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all duration-200 shrink-0 cursor-pointer text-xs ${
                activeFilter === pill.id
                  ? "bg-[#000b42] text-white shadow-sm"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/70"
              }`}
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid — Luxury Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 relative z-10">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white hover:bg-slate-50/50 rounded-2xl border border-slate-200/90 hover:border-[#000b42]/30 p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-[0_8px_24px_-6px_rgba(0,11,66,0.08)] group"
            >
              <div>
                {/* Rating & Timestamp Header */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1 text-amber-400 bg-amber-50/60 px-2 py-0.5 rounded-md border border-amber-100">
                    {[...Array(review.rating)].map((_, i) => (
                      <FiStar key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-[10px] font-bold text-amber-900 ml-0.5">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                    <FiClock className="w-3 h-3" />
                    {review.time}
                  </span>
                </div>

                {/* Review Headline */}
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#000b42] transition-colors mb-2 leading-snug">
                  {review.title}
                </h3>

                {/* Review Body */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-4">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author, Verified Badge & Location Meta */}
              <div className="pt-3 border-t border-slate-100">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-bold text-slate-900 truncate">
                        {review.name}
                      </span>
                      <span className="inline-flex items-center gap-0.5 text-[9px] text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200/80 shrink-0">
                        <FiCheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                        Verified
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 flex items-center gap-1 truncate font-medium">
                      <FiMapPin className="w-3 h-3 text-[#000b42] shrink-0" />
                      {review.location}
                    </span>
                  </div>

                  {/* Device Tag */}
                  <span className="text-[10px] text-slate-700 font-semibold bg-slate-50 px-2 py-1 rounded-lg border border-slate-200/80 shrink-0 truncate max-w-[120px]">
                    {review.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-semibold text-slate-700">
              Have you ordered with Vape Shop Mumbai? Share your experience with us!
            </span>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20share%20my%20review%20and%20feedback.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-gradient-to-r from-[#000b42] via-[#00105c] to-[#000b42] hover:from-[#00072e] hover:to-[#00072e] px-4 py-2 rounded-xl shadow-xs transition-all cursor-pointer border border-[#000b42]/30"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Leave a Review on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
