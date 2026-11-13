"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiMapPin,
  FiClock,
  FiShield,
  FiCreditCard,
  FiCheckCircle,
  FiChevronDown,
  FiShoppingCart,
  FiStar,
  FiArrowRight,
  FiPhoneCall,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { products, WHATSAPP_NUMBER, getProductUrl } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { locations } from "@/data/locations";

export default function LocationDetailClient({ location }) {
  const { addToCart } = useCart();
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const whatsappLocationUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi *Vape Shop Mumbai*, I need express vape delivery in *${location.name}*. Please share available models and delivery time.`
  )}`;

  return (
    <div className="bg-white">
      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50/60">
        <div className="site-container py-2.5 sm:py-3">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#000b42] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-[#000b42] transition-colors">
                Locations
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-900 truncate">{location.name}</li>
          </ol>
        </div>
      </nav>

      {/* 2. Hero Local Banner */}
      <section className="site-section site-container">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#0b192e] via-[#10233e] to-[#173357] text-white p-6 sm:p-10 md:p-12 border border-[#000b42]/30 shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#000b42]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Free Delivery Hub</span>
              <span className="text-white/40">|</span>
              <span className="text-emerald-300 font-bold">{location.deliveryTime} Express</span>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {location.h1}
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {location.intro}
            </p>

            {/* Quick CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={whatsappLocationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 text-sm"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Order on WhatsApp for {location.name}</span>
              </a>
            </div>

            {/* Landmark Badges */}
            <div className="pt-4 border-t border-white/15">
              <span className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Key Landmarks Covered in {location.name}:
              </span>
              <div className="flex flex-wrap gap-2">
                {location.landmarks.map((landmark) => (
                  <span
                    key={landmark}
                    className="inline-flex items-center gap-1.5 text-xs bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-gray-200"
                  >
                    <FiMapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{landmark}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Value Props Strip */}
      <section className="site-section site-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-100/60 text-[#000b42] flex items-center justify-center shrink-0">
              <FiShield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">100% Original Scratch QR</h3>
              <p className="text-xs text-gray-500 mt-0.5">Official manufacturer warranty</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-100/60 text-emerald-700 flex items-center justify-center shrink-0">
              <FiClock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">{location.deliveryTime} Free Delivery</h3>
              <p className="text-xs text-gray-500 mt-0.5">Fastest dispatch to {location.name}</p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200/80 flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-100/60 text-amber-700 flex items-center justify-center shrink-0">
              <FiCreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900">Instant UPI Payment</h3>
              <p className="text-xs text-gray-500 mt-0.5">GPay, PhonePe, Paytm &amp; QR</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Available for Location */}
      <section className="site-section site-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8">
          <div>
            <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
              BESTSELLERS IN {location.name.toUpperCase()}
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Featured Devices Ready for Free Dispatch
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#000b42] hover:underline"
          >
            <span>View All 20 Devices</span>
            <FiArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {products.slice(0, 8).map((product) => {
            const productUrl = getProductUrl(product.slug);
            const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              `Hi *Vape Shop Mumbai*, I want to order *${product.name}* (₹${product.price}) for delivery in *${location.name}*. Please confirm delivery.`
            )}`;

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200/85 hover:border-[#000b42]/40 hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group"
              >
                <Link href={productUrl} className="block relative aspect-square bg-gray-50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.alt || product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                      FREE DELIVERY
                    </span>
                  </div>
                </Link>

                <div className="p-3 sm:p-4 flex flex-col flex-1">
                  <div className="flex items-center gap-1 text-amber-500 mb-1">
                    <FiStar className="w-3.5 h-3.5 fill-current" />
                    <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                    <span className="text-[10px] text-gray-400">({product.reviewsCount})</span>
                  </div>

                  <Link href={productUrl}>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#000b42] transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-auto pt-3">
                    <div className="flex items-baseline gap-1.5 mb-2.5">
                      <span className="text-base sm:text-lg font-black text-gray-950">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      {product.mrp && (
                        <span className="text-xs text-gray-400 line-through">
                          ₹{product.mrp.toLocaleString("en-IN")}
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => addToCart(product, 1)}
                        className="w-full flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-colors cursor-pointer"
                        title="Add to Cart"
                      >
                        <FiShoppingCart className="w-3.5 h-3.5" />
                        <span>Cart</span>
                      </button>

                      <a
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-1 py-2 px-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-xs"
                      >
                        <FaWhatsapp className="w-3.5 h-3.5 text-white" />
                        <span>Order</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Frequently Asked Questions */}
      <section className="site-section site-container">
        <div className="bg-gray-50/70 rounded-3xl border border-gray-200/80 p-5 sm:p-8 md:p-10">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Vape Delivery in {location.name}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {location.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-3 p-4 text-left font-bold text-xs sm:text-sm text-gray-900 hover:text-[#000b42] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#000b42]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Other Locations Quick Hub */}
      <section className="site-section site-container pb-12">
        <div className="text-center max-w-2xl mx-auto mb-5">
          <span className="text-[11px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
            EXPLORE ALL DELIVERY HUBS
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            Other Mumbai &amp; MMR Locations We Serve
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {locations
            .filter((l) => l.slug !== location.slug)
            .map((loc) => (
              <Link
                key={loc.slug}
                href={`/vape-delivery/${loc.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-gray-100 border border-gray-200 text-xs text-gray-700 font-semibold transition-all hover:border-[#000b42] hover:text-[#000b42]"
              >
                <FiMapPin className="w-3 h-3 text-[#000b42]" />
                <span>{loc.name}</span>
                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1.5 rounded">
                  {loc.deliveryTime}
                </span>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

