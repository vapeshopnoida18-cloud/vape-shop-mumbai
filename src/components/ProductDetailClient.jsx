"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { WHATSAPP_NUMBER, getProductUrl } from "@/data/products";
import {
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingCart,
  FiStar,
  FiCheckCircle,
  FiShield,
  FiTruck,
  FiClock,
  FiBox,
  FiChevronRight,
  FiChevronDown,
  FiMapPin,
  FiCpu,
  FiBatteryCharging,
  FiLayers,
  FiAward,
  FiEye,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetailClient({ product, relatedProducts = [] }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [relatedQuantities, setRelatedQuantities] = useState({});
  const isWishlisted = isInWishlist(product.id);
  const [openFaqIndex, setOpenFaqIndex] = useState(0); // First FAQ open by default

  const handleQtyChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleRelatedQtyChange = (id, delta) => {
    setRelatedQuantities((prev) => {
      const current = prev[id] || 1;
      const next = current + delta;
      return { ...prev, [id]: next > 0 ? next : 1 };
    });
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // WhatsApp direct checkout message
  const totalPrice = product.price * quantity;
  const productPageUrl = getProductUrl(product.slug);
  const whatsappMessage = `Hi *Vape Shop Mumbai*, I want to order:\n\n*Product:* ${product.name}\n*Quantity:* ${quantity}\n*Total Price:* ₹${totalPrice.toLocaleString("en-IN")}\n🔗 *Product Link:* ${productPageUrl}\n\n📍 *Delivery Area:* [Please enter your Mumbai Area]\n🚚 *Delivery:* FREE 30-45 Mins Express in Mumbai & MMR\n💳 *Payment:* Instant UPI (Google Pay / PhonePe / Paytm)\n\nPlease confirm fast delivery & availability.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

  const toggleFaq = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white">
      {/* 1. Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50/60">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#000b42] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <FiChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li>
              <Link href="/products" className="hover:text-[#000b42] transition-colors">
                Products
              </Link>
            </li>
            <li aria-hidden="true">
              <FiChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li>
              <span className="text-gray-600 font-medium">{product.brand}</span>
            </li>
            <li aria-hidden="true">
              <FiChevronRight className="w-3.5 h-3.5 text-gray-400" />
            </li>
            <li aria-current="page" className="text-gray-900 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {product.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* 2. Main Product Showcase Section */}
      <section className="site-section site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Product Image Showcase */}
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="relative w-full aspect-square bg-gray-50/80 rounded-2xl border border-gray-200/90 shadow-[0_4px_25px_rgb(0,0,0,0.05)] overflow-hidden group">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3.5 left-3.5 bg-gray-900/85 backdrop-blur-sm text-white text-[9px] sm:text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider">
                  {product.badge}
                </div>
              )}

              {/* Wishlist Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className={`absolute top-3.5 right-3.5 w-9 h-9 sm:w-10 sm:h-10 rounded-xl backdrop-blur-xs flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer ${
                  isWishlisted
                    ? "bg-red-500 text-white"
                    : "bg-white/95 text-gray-400 hover:text-red-500"
                }`}
                aria-label={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
              >
                <FiHeart className={`w-4 h-4 sm:w-5 sm:h-5 ${isWishlisted ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Micro Trust Pills Beneath Image */}
            <div className="mt-3.5 grid grid-cols-3 gap-2 sm:gap-3 text-center">
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:border-[#000b42]/40 transition-all flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-lg bg-[#000b42]/10 text-[#000b42] flex items-center justify-center mb-1">
                  <FiShield className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">100% Genuine</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Scratch & Verify</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:border-emerald-500/40 transition-all flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                  <FiTruck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">30-45 Min Mumbai</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Free Express Delivery</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:border-amber-500/40 transition-all flex flex-col items-center justify-center">
                <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-1">
                  <FiBox className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-gray-900 leading-tight">Discreet Pack</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">Plain Brown Box</span>
              </div>
            </div>
          </div>

          {/* Right Column: Product Meta, Pricing & Order CTAs */}
          <div className="lg:col-span-6 flex flex-col">
            
            {/* Brand + Stock Status */}
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-[#000b42]/10 text-[#000b42]">
                {product.brand}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>In Stock & Ready to Dispatch</span>
              </div>
            </div>

            {/* Product H1 Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-950 tracking-tight leading-tight mb-2">
              {product.name}
              <span className="block text-base sm:text-lg font-bold text-[#000b42] mt-0.5">
                Vape Shop Mumbai Official
              </span>
            </h1>

            {/* Rating & Sold count */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-600 mb-3.5 pb-3.5 border-b border-gray-100">
              <div className="flex items-center gap-1 text-amber-500 font-bold">
                <FiStar className="w-3.5 h-3.5 fill-current" />
                <span>{product.rating}</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-gray-700 font-medium">({product.reviewsCount}+ verified reviews)</span>
              <span className="text-gray-300">|</span>
              <span className="text-emerald-700 font-semibold">{product.soldCount} delivered in Mumbai</span>
            </div>

            {/* Price Box */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50 border border-gray-200/80 mb-4">
              <div className="flex items-baseline gap-2.5">
                <span className="text-2xl sm:text-3xl font-black text-gray-950">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm sm:text-base text-gray-400 line-through">
                  ₹{product.mrp.toLocaleString("en-IN")}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] sm:text-xs font-extrabold bg-red-100 text-red-600">
                  {product.discount}
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
                Inclusive of all taxes. Free Express Doorstep Delivery in Mumbai on orders above ₹1,500.
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* 4 Feature Specification Pills */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-5">
              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200/70 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#000b42]/10 text-[#000b42] flex items-center justify-center shrink-0">
                  <FiAward className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider">Capacity</span>
                  <span className="text-xs font-bold text-gray-900 truncate block">{product.puffs}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200/70 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#000b42]/10 text-[#000b42] flex items-center justify-center shrink-0">
                  <FiCpu className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider">Coil System</span>
                  <span className="text-xs font-bold text-gray-900 truncate block">{product.coil}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200/70 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#000b42]/10 text-[#000b42] flex items-center justify-center shrink-0">
                  <FiLayers className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider">Design</span>
                  <span className="text-xs font-bold text-gray-900 truncate block">{product.shape}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200/70 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#000b42]/10 text-[#000b42] flex items-center justify-center shrink-0">
                  <FiBatteryCharging className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-wider">Recharge / Fit</span>
                  <span className="text-xs font-bold text-gray-900 truncate block">{product.charging}</span>
                </div>
              </div>
            </div>

            {/* Quantity Counter + Action Buttons (Variants Removed as requested) */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center gap-2.5">
                {/* Quantity Selector */}
                <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 px-2 py-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => handleQtyChange(-1)}
                    className="w-7 h-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <FiMinus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center text-xs sm:text-sm font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleQtyChange(1)}
                    className="w-7 h-7 rounded hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <FiPlus className="w-3 h-3" />
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#000b42] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#000b42]/20 hover:bg-[#00072e] active:scale-[0.99] transition-all cursor-pointer"
                >
                  <FiShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>

              {/* Direct Buy Now via WhatsApp CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:bg-[#1faa4b] active:scale-[0.99] transition-all"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Buy Now via WhatsApp (+91 70826 74286)</span>
              </a>
            </div>

            {/* Product Key Details Checklist */}
            {product.keyDetails && product.keyDetails.length > 0 && (
              <div className="p-3.5 sm:p-4 rounded-xl bg-gray-50/90 border border-gray-200/80">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-500 block mb-2.5">
                  Product Details & Authenticity
                </span>
                <ul className="space-y-2">
                  {product.keyDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* 3. Four Trust Pillars Strip */}
      <section className="border-y border-gray-200/80 bg-gray-50/50 site-section">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-3 sm:p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <FiShield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">100% Original</h3>
              <p className="text-[10px] sm:text-[11px] text-gray-500">Scratch & Verify QR</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#000b42] flex items-center justify-center shrink-0">
              <FiClock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">30-45 Mins Mumbai</h3>
              <p className="text-[10px] sm:text-[11px] text-gray-500">Express local delivery</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <FiBox className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">Discreet Box</h3>
              <p className="text-[10px] sm:text-[11px] text-gray-500">Plain protective pack</p>
            </div>
          </div>

          <div className="p-3 sm:p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <FiTruck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-gray-900">Instant UPI</h3>
              <p className="text-[10px] sm:text-[11px] text-gray-500">GPay, PhonePe, Paytm</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hyper-Local Mumbai Dispatch Hubs (Premium Elevated Glassmorphism UI) */}
      <section className="site-section site-container">
        <div className="relative overflow-hidden p-6 sm:p-9 rounded-3xl bg-gradient-to-br from-[#0b192e] via-[#10233e] to-[#173357] text-white border border-[#000b42]/30 shadow-[0_16px_50px_-12px_rgba(11,25,46,0.6)]">
          
          {/* Subtle Ambient Glow Behind Cards */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#000b42]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row: Single-Line Clean Heading */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8 pb-5 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 backdrop-blur-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Hyper-Local Mumbai Dispatch</span>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                Express Delivery Hubs Across Mumbai Areas
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md md:text-right">
              24/7 dedicated local dispatch network guaranteeing safe 15 to 45 mins doorstep delivery.
            </p>
          </div>

          {/* 4 Premium Glassmorphic Hub Cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Hub 1: Bandra West & Khar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 hover:border-emerald-400/50 transition-all duration-300 group/hub shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                  <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Bandra West & Khar</span>
                </span>
                <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/20 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white group-hover/hub:text-emerald-300 transition-colors mb-1">
                15 - 25 Mins
              </p>
              <p className="text-[11px] text-slate-300 font-medium">
                Linking Rd, Hill Rd, Pali Hill & Carter Rd
              </p>
            </div>

            {/* Hub 2: Andheri West & Juhu */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 hover:border-blue-400/50 transition-all duration-300 group/hub shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="flex items-center gap-1.5 text-blue-300 text-xs font-bold">
                  <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Andheri West & Juhu</span>
                </span>
                <span className="text-[10px] font-semibold text-blue-200 bg-blue-500/20 border border-blue-400/30 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white group-hover/hub:text-blue-200 transition-colors mb-1">
                20 - 30 Mins
              </p>
              <p className="text-[11px] text-slate-300 font-medium">
                Lokhandwala Complex, Oshiwara, JVPD & Versova
              </p>
            </div>

            {/* Hub 3: South Mumbai & Lower Parel */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 hover:border-indigo-400/50 transition-all duration-300 group/hub shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="flex items-center gap-1.5 text-indigo-300 text-xs font-bold">
                  <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>South Mumbai & Worli</span>
                </span>
                <span className="text-[10px] font-semibold text-indigo-200 bg-indigo-500/20 border border-indigo-400/30 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white group-hover/hub:text-indigo-200 transition-colors mb-1">
                25 - 35 Mins
              </p>
              <p className="text-[11px] text-slate-300 font-medium">
                Colaba, Marine Drive, Nariman Pt & Lower Parel
              </p>
            </div>

            {/* Hub 4: Powai & Central MMR */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.07] hover:bg-white/[0.12] backdrop-blur-md border border-white/15 hover:border-amber-400/50 transition-all duration-300 group/hub shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="flex items-center gap-1.5 text-amber-300 text-xs font-bold">
                  <FiMapPin className="w-3.5 h-3.5 shrink-0" />
                  <span>Powai & Central MMR</span>
                </span>
                <span className="text-[10px] font-semibold text-amber-200 bg-amber-500/20 border border-amber-400/30 px-2 py-0.5 rounded-full">
                  Active
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white group-hover/hub:text-amber-200 transition-colors mb-1">
                30 - 45 Mins
              </p>
              <p className="text-[11px] text-slate-300 font-medium">
                Hiranandani Powai, BKC, Ghatkopar, Thane & Vashi
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Comprehensive Guide Box (Clean Single-Line Heading) */}
      <section className="site-section site-container">
        <div className="border border-gray-200/80 rounded-2xl p-5 sm:p-8 bg-white shadow-xs">
          <div className="mb-4">
            <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
              COMPREHENSIVE GUIDE
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Authentic Vaping Experience & Device Guide
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
            Looking to buy <strong>{product.name}</strong> in Mumbai or MMR? At <strong>Vape Shop Mumbai</strong>, we stock 100% factory-sealed, genuine units backed by verified scratch-off security codes. Whether you need express delivery to Bandra, Andheri, Colaba, Juhu, Powai, Worli, or anywhere in Mumbai & MMR, our express courier service guarantees free doorstep delivery within 30 to 45 minutes with instant UPI payment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-3">
              <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">100% Genuine Scratch Code Security</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  Every pack includes an official manufacturer anti-counterfeit QR code. Simply scratch the protective film on the box and scan it to authenticate factory originality before unsealing.
                </p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-200/70 flex items-start gap-3">
              <FiAward className="w-4 h-4 text-[#000b42] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 mb-1">Pure Flavor & Battery Longevity</h3>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
                  Equipped with premium mesh coil heating elements and fast Type-C rechargeable cells, ensuring consistent vapor density, smooth throat hit, and rich flavor retention till the last puff.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-500">
            Browse our complete catalog of <Link href="/products" className="text-[#000b42] font-bold hover:underline">disposable vapes</Link> and explore the entire <Link href="/products" className="text-[#000b42] font-bold hover:underline">Vape Shop Mumbai Collection</Link> for express 30 to 45-minute delivery across Mumbai, Thane, Navi Mumbai and MMR.
          </p>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (Clean Single-Line Heading) */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="site-section site-container">
          <div className="border border-gray-200/80 rounded-2xl p-5 sm:p-8 bg-gray-50/50">
            <div className="mb-6">
              <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
                BUYER QUESTIONS & MUMBAI DELIVERY
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Frequently Asked Questions (FAQs)
              </h2>
            </div>

            <div className="space-y-2.5">
              {product.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 bg-white rounded-xl overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-3.5 sm:p-4 text-left flex items-center justify-between gap-3 font-bold text-gray-900 hover:text-[#000b42] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-bold text-[#000b42]">Q.</span>
                        <span className="text-xs sm:text-sm font-bold text-gray-900">{faq.q}</span>
                      </div>
                      <FiChevronDown
                        className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#000b42]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-3.5 sm:px-4 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. Product Verified Reviews Section (Directly at the bottom of FAQ matching Screenshot 4) */}
      {product.reviews && product.reviews.length > 0 && (
        <section className="site-section site-container">
          <div className="border border-gray-200/80 rounded-2xl p-5 sm:p-8 bg-white shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
                  REAL CUSTOMER FEEDBACK
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Verified Reviews in Mumbai & MMR
                </h2>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-800">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>4.8 / 5.0 Rating</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              {product.reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-xl bg-gray-50/70 border border-gray-200/70 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-bold text-gray-900">{rev.name}</span>
                        {rev.verified && (
                          <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600" title="Verified Customer" />
                        )}
                      </div>
                      <span className="text-[10px] text-gray-400">{rev.time}</span>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-400 mb-2">
                      {[...Array(rev.rating)].map((_, i) => (
                        <FiStar key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed mb-3">
                      &ldquo;{rev.comment}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-500 pt-2 border-t border-gray-200/50">
                    <FiMapPin className="w-3 h-3 shrink-0" />
                    <span>{rev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. You May Also Like Section (Matching Home Page Card Design & Screenshot 5) */}
      {relatedProducts.length > 0 && (
        <section className="site-section site-container border-t border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6 sm:mb-8">
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1">
                YOU MAY ALSO LIKE
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                Related Vapes in Mumbai
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#000b42] hover:text-[#00072e] transition-colors group"
            >
              <span>View All Products</span>
              <FiChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {relatedProducts.map((rel) => {
              const qty = relatedQuantities[rel.id] || 1;
              const isFavorited = isInWishlist(rel.id);
              const directWhatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                `Hi *Vape Shop Mumbai*, I want to order:\n\n*Product:* ${rel.name}\n*Price:* ₹${rel.price.toLocaleString("en-IN")}\n*Quantity:* ${qty}\n🔗 *Product Link:* ${getProductUrl(rel.slug)}\n\nPlease confirm fast free 30-45 mins express delivery in Mumbai.`
              )}`;

              return (
                <article
                  key={rel.id}
                  className="bg-white rounded-xl border border-gray-200/80 hover:shadow-xl hover:shadow-[#000b42]/8 hover:border-[#000b42]/25 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Compact Image */}
                  <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                    <Link
                      href={`/products/${rel.slug}`}
                      className="block relative w-full h-full"
                      aria-label={rel.name}
                    >
                      <Image
                        src={rel.image}
                        alt={rel.alt}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>

                    {/* Badge */}
                    {rel.badge && (
                      <span className="absolute top-2 left-2 bg-gray-900/85 backdrop-blur-sm text-white text-[8px] sm:text-[9px] font-bold px-2 py-[3px] rounded-md uppercase tracking-wide">
                        {rel.badge}
                      </span>
                    )}

                    {/* Discount */}
                    {rel.discount && (
                      <span className="absolute top-2 right-10 sm:right-11 bg-red-500 text-white text-[8px] sm:text-[9px] font-bold px-1.5 py-[3px] rounded-md">
                        {rel.discount}
                      </span>
                    )}

                    {/* Wishlist */}
                    <button
                      type="button"
                      onClick={() => toggleWishlist(rel)}
                      className={`absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center transition-all duration-200 shadow-sm cursor-pointer ${
                        isFavorited
                          ? "bg-red-500 text-white"
                          : "bg-white/90 backdrop-blur-sm text-gray-400 hover:text-red-500"
                      }`}
                      aria-label={isFavorited ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                      <FiHeart className={`w-3.5 h-3.5 ${isFavorited ? "fill-current" : ""}`} />
                    </button>

                    {/* Quick View on hover */}
                    <Link
                      href={`/products/${rel.slug}`}
                      className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 inline-flex items-center gap-1 bg-white/95 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md"
                    >
                      <FiEye className="w-3 h-3" />
                      <span>Quick View</span>
                    </Link>
                  </div>

                  {/* Card Body — Compact */}
                  <div className="p-2.5 sm:p-3 flex-1 flex flex-col justify-between">
                    {/* Top Info */}
                    <div className="mb-2">
                      {/* Brand + Stars */}
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-[#000b42]">
                          {rel.brand}
                        </span>
                        <div className="flex items-center gap-0.5">
                          <FiStar className="w-2.5 h-2.5 text-amber-400 fill-current" />
                          <span className="text-[10px] font-bold text-gray-700">{rel.rating}</span>
                          <span className="text-[9px] text-gray-400">({rel.reviewsCount}+)</span>
                        </div>
                      </div>

                      {/* Title */}
                      <Link href={`/products/${rel.slug}`} className="block">
                        <h3 className="text-[12px] sm:text-[13px] font-bold text-gray-900 hover:text-[#000b42] transition-colors line-clamp-2 leading-[1.3] mb-1">
                          {rel.name}
                        </h3>
                      </Link>

                      {/* Specs */}
                      <p className="text-[9px] sm:text-[10px] text-gray-400 line-clamp-1">
                        {rel.specs}
                      </p>
                    </div>

                    {/* Price + Actions */}
                    <div>
                      {/* Price */}
                      <div className="flex items-baseline gap-1.5 mb-2.5">
                        <span className="text-[15px] sm:text-base font-black text-gray-950">
                          ₹{rel.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[10px] text-gray-400 line-through">
                          ₹{rel.mrp.toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* Qty + Add to Cart Row */}
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="flex items-center border border-gray-200 rounded-md bg-gray-50 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleRelatedQtyChange(rel.id, -1)}
                            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <FiMinus className="w-2.5 h-2.5" />
                          </button>
                          <span className="w-5 sm:w-6 text-center text-[11px] font-bold text-gray-900 select-none">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRelatedQtyChange(rel.id, 1)}
                            className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <FiPlus className="w-2.5 h-2.5" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => addToCart(rel, qty)}
                          className="flex-1 inline-flex items-center justify-center gap-1 bg-[#000b42] hover:bg-[#00072e] text-white text-[10px] sm:text-[11px] font-bold py-[7px] sm:py-2 rounded-md shadow-sm hover:shadow transition-all active:scale-[0.97] cursor-pointer"
                        >
                          <FiShoppingCart className="w-3 h-3" />
                          <span>Add to Cart</span>
                        </button>
                      </div>

                      {/* WhatsApp */}
                      <a
                        href={directWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1 text-[10px] sm:text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 py-[5px] rounded-md transition-colors cursor-pointer"
                      >
                        <FaWhatsapp className="w-3 h-3 text-[#25D366]" />
                        <span>Buy via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
