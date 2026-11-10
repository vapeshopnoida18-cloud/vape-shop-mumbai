"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, WHATSAPP_NUMBER, getProductUrl } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiStar,
  FiChevronRight,
  FiCheck,
  FiTruck,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantities, setQuantities] = useState({});
  const [addedEffect, setAddedEffect] = useState({});

  const handleQtyChange = (id, delta) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = current + delta;
      return { ...prev, [id]: next > 0 ? next : 1 };
    });
  };

  const handleAddToCart = (product, qty) => {
    addToCart(product, qty);
    setAddedEffect((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedEffect((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section
      aria-label="Featured Vape Devices & Disposables in Mumbai"
      className="site-section site-container"
    >
      {/* Premium Luxury Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#000b42]/10 text-[#000b42] text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#000b42]" />
            <span>Vape Shop Mumbai Curated Catalog</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Trending Vapes in <span className="text-[#000b42]">Mumbai</span>
          </h2>
          <p className="text-xs sm:text-[13.5px] text-slate-500 mt-1 max-w-xl">
            100% Genuine factory-sealed disposables, pod kits &amp; imported nic salts with 30-45 mins express free doorstep delivery across Mumbai.
          </p>
        </div>
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#000b42] hover:text-[#00072e] bg-slate-50 hover:bg-slate-100/90 px-3.5 py-2 rounded-xl border border-slate-200/80 transition-all group shrink-0"
        >
          <span>Explore All 24+ Devices</span>
          <FiChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Modern Compact E-Commerce Product Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {products.map((product) => {
          const qty = quantities[product.id] || 1;
          const isFavorited = isInWishlist(product.id);
          const isAdded = addedEffect[product.id];
          const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            `Hi *Vape Shop Mumbai*, I want to order:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price.toLocaleString("en-IN")}\n*Quantity:* ${qty}\n🔗 *Product Link:* ${getProductUrl(product.slug)}\n\nPlease confirm fast 30-45 mins express delivery in Mumbai.`
          )}`;

          return (
            <article
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/80 hover:border-[#000b42]/30 shadow-2xs hover:shadow-[0_12px_28px_-6px_rgba(0,11,66,0.12)] transition-all duration-300 flex flex-col overflow-hidden group relative"
            >
              {/* Product Media Canvas */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-50 to-white overflow-hidden p-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="block relative w-full h-full"
                  aria-label={product.name}
                >
                  <Image
                    src={product.image}
                    alt={product.alt || `${product.name} - Vape Shop Mumbai`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain p-1 group-hover:scale-108 transition-transform duration-500"
                  />
                </Link>

                {/* Top Badges Stack (Floating Glass Tags) */}
                <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start z-10 pointer-events-none">
                  {product.badge && (
                    <span className="bg-[#000b42] text-white text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wide shadow-2xs">
                      {product.badge}
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-rose-500 text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-0.5 rounded-md shadow-2xs">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Wishlist Glass Button */}
                <button
                  type="button"
                  onClick={() => toggleWishlist(product)}
                  className={`absolute top-2.5 right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-all duration-200 shadow-2xs cursor-pointer z-10 border ${
                    isFavorited
                      ? "bg-rose-500 text-white border-rose-500"
                      : "bg-white/90 backdrop-blur-md text-slate-400 hover:text-rose-500 hover:bg-white border-slate-200/80"
                  }`}
                  aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
                >
                  <FiHeart className={`w-3.5 h-3.5 ${isFavorited ? "fill-current" : ""}`} />
                </button>

                {/* Express 30m Micro Badge at Bottom Left of Image */}
                <div className="absolute bottom-2 left-2.5 flex items-center gap-1 bg-white/95 backdrop-blur-sm border border-slate-200/70 px-2 py-0.5 rounded-md text-[9px] font-semibold text-slate-600 shadow-2xs pointer-events-none">
                  <FiTruck className="w-2.5 h-2.5 text-emerald-600" />
                  <span>30–45 Mins</span>
                </div>
              </div>

              {/* Product Content Body */}
              <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between bg-white border-t border-slate-100">
                <div>
                  {/* Brand & Star Rating Header */}
                  <div className="flex items-center justify-between mb-1 gap-1">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#000b42] truncate">
                      {product.brand}
                    </span>
                    <div className="flex items-center gap-0.5 shrink-0 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-100/80">
                      <FiStar className="w-2.5 h-2.5 text-amber-500 fill-current" />
                      <span className="text-[10px] font-bold text-slate-800">{product.rating}</span>
                      <span className="text-[9px] text-slate-400">({product.reviewsCount}+)</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <Link href={`/products/${product.slug}`} className="block group/title">
                    <h3 className="text-[12px] sm:text-[13.5px] font-bold text-slate-900 group-hover/title:text-[#000b42] transition-colors line-clamp-2 leading-[1.3] mb-1">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Specs Snippet */}
                  <p className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1 mb-2.5">
                    {product.specs}
                  </p>
                </div>

                {/* Price & Modern Cart Controls */}
                <div className="pt-2 border-t border-slate-100">
                  {/* Price Tag with Savings Indicator */}
                  <div className="flex items-baseline justify-between mb-2.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-[16px] sm:text-[17px] font-black text-slate-950 tracking-tight">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] text-slate-400 line-through">
                        ₹{product.mrp.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                      In Stock
                    </span>
                  </div>

                  {/* Stepper + Add To Cart Button */}
                  <div className="flex items-center gap-1.5 mb-2">
                    {/* Stepper Pill */}
                    <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50/80 p-0.5 shrink-0">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, -1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-all cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus className="w-2.5 h-2.5" />
                      </button>
                      <span className="w-5 sm:w-6 text-center text-xs font-bold text-slate-900 select-none">
                        {qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(product.id, 1)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-all cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <FiPlus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    {/* Add to Cart CTA */}
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product, qty)}
                      className={`flex-1 inline-flex items-center justify-center gap-1.5 text-white text-[11px] sm:text-xs font-bold py-2 sm:py-2.5 px-2 rounded-xl transition-all duration-200 shadow-sm cursor-pointer active:scale-95 ${
                        isAdded
                          ? "bg-emerald-600"
                          : "bg-[#000b42] hover:bg-[#00072e] hover:shadow-[0_4px_12px_rgba(0,11,66,0.2)]"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <FiCheck className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <FiShoppingCart className="w-3.5 h-3.5" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Direct WhatsApp Ordering Link */}
                  <a
                    href={directWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50/60 hover:bg-emerald-50 py-1.5 rounded-lg border border-emerald-100 transition-all cursor-pointer"
                    aria-label={`Buy ${product.name} instantly on WhatsApp`}
                  >
                    <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Instant WhatsApp Order</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
