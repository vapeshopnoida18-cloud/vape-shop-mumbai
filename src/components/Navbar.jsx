"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";
import { FaWhatsapp, FaMotorcycle, FaCheckCircle, FaCreditCard, FaTrophy, FaBoxOpen, FaBolt, FaTag } from "react-icons/fa";
import { products, WHATSAPP_NUMBER } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDesktopOpen, setIsDesktopOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, openCart } = useCart();
  const { wishlistCount } = useWishlist();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Guides", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Real-time product search filter
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return products.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.specs && p.specs.toLowerCase().includes(q))
      );
    });
  }, [searchQuery]);

  // Click outside and ESC key listener
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(e.target)
      ) {
        setIsDesktopOpen(false);
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target)
      ) {
        setIsMobileSearchOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDesktopOpen(false);
        setIsMobileSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsDesktopOpen(false);
      setIsMobileSearchOpen(false);
      setMobileMenuOpen(false);
      router.push(
        `/products?search=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  const handleClear = () => {
    setSearchQuery("");
    setIsDesktopOpen(false);
    setIsMobileSearchOpen(false);
  };

  const handleSelectProduct = () => {
    setIsDesktopOpen(false);
    setIsMobileSearchOpen(false);
    setMobileMenuOpen(false);
    setSearchQuery("");
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20vapes%20in%20Mumbai.`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.03)]">
      {/* 1. Premium Scrolling Announcement Ticker */}
      <div
        className="bg-[#000b42] overflow-hidden select-none py-2"
        aria-label="Vape Shop Mumbai Announcements"
        role="marquee"
      >
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 22s linear infinite" }}>
          {/* Duplicate for seamless infinite loop */}
          {[0, 1].map((set) => (
            <div key={set} className="flex items-center shrink-0" aria-hidden={set === 1 ? "true" : undefined}>
              {[
                { icon: <FaMotorcycle className="w-3.5 h-3.5 text-white/80" />, text: "30–45 Min Free Express Delivery Across Mumbai" },
                { icon: <FaCheckCircle className="w-3 h-3 text-emerald-400" />, text: "100% Authentic Vapes – Scratch QR Verified" },
                { icon: <FaCreditCard className="w-3.5 h-3.5 text-white/80" />, text: "Instant UPI · Google Pay · PhonePe · QR Accepted" },
                { icon: <FaTrophy className="w-3 h-3 text-yellow-400" />, text: "#1 Vape Shop in Mumbai – 4.9★ Rated" },
                { icon: <FaBoxOpen className="w-3.5 h-3.5 text-white/80" />, text: "Factory-Sealed Genuine Products Only" },
                { icon: <FaBolt className="w-3 h-3 text-yellow-300" />, text: "Same-Day Delivery – Bandra · Andheri · South Mumbai · Powai · Thane" },
                { icon: <FaTag className="w-3 h-3 text-white/80" />, text: "Vape Shop Mumbai – Best Prices. Best Service. Every Time." },
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium text-white/90 tracking-wide px-5">
                    {item.icon}
                    <span>{item.text}</span>
                  </span>
                  <span className="text-white/20 text-[8px]">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex[style*="marquee"] { animation: none; justify-content: center; }
        }
      `}</style>

      {/* 2. Main Premium Luxury Navbar */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 py-2 sm:py-3">
        <nav
          aria-label="Main Navigation - Vape Shop Mumbai"
          className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_-6px_rgba(0,11,66,0.08),0_2px_10px_-2px_rgba(0,0,0,0.03)] px-3 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 lg:gap-4 transition-all duration-300"
        >
          {/* Brand Logo with Strict SEO Alt Tag & Subtle Hover Elevation */}
          <Link
            href="/"
            className="flex items-center shrink-0 group focus:outline-none py-0.5"
            aria-label="Vape Shop Mumbai Homepage"
          >
            <div className="relative h-9 sm:h-11 md:h-12 w-36 sm:w-44 md:w-48 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src="/logo.png"
                alt="Vape Shop Mumbai - 100% Authentic Vapes & Fast Express Delivery"
                fill
                priority
                sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
                className="object-contain object-left filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Modern Pill Indicator & Typography */}
          <div className="hidden xl:flex items-center gap-1 p-1 bg-slate-50/90 border border-slate-200/60 rounded-xl text-[13px] font-semibold text-slate-700 shrink-0">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#000b42] text-white shadow-sm font-semibold"
                      : "text-slate-600 hover:text-[#000b42] hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Real-Time Desktop Search Bar with Premium Glass Style */}
          <div
            ref={desktopSearchRef}
            className="hidden md:flex relative items-center flex-1 min-w-[180px] max-w-xs lg:max-w-sm xl:max-w-md mx-1 lg:mx-2"
          >
            <form onSubmit={handleSearchSubmit} role="search" className="w-full">
              <div className="relative w-full flex items-center bg-slate-50/90 hover:bg-slate-100/90 border border-slate-200/90 rounded-xl pl-3 pr-1 py-1 focus-within:border-[#000b42] focus-within:ring-2 focus-within:ring-[#000b42]/10 focus-within:bg-white transition-all duration-200 shadow-2xs">
                <FiSearch className="w-3.5 h-3.5 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  role="searchbox"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsDesktopOpen(true);
                  }}
                  onFocus={() => {
                    if (searchQuery.trim()) setIsDesktopOpen(true);
                  }}
                  placeholder="Search vapes, pods..."
                  className="w-full bg-transparent text-xs sm:text-[13px] text-slate-900 placeholder-slate-400 focus:outline-none pr-1 font-medium tracking-tight"
                  aria-label="Search vapes in Mumbai"
                />

                {/* Single Clear Button */}
                {searchQuery && (
                  <button
                    type="button"
                    onClick={handleClear}
                    className="mr-1 w-4 h-4 rounded-md hover:bg-slate-200 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                    aria-label="Clear search"
                  >
                    <FiX className="w-3 h-3" />
                  </button>
                )}

                {/* Submit Search Button */}
                <button
                  type="submit"
                  className="h-7 w-7 rounded-lg bg-[#000b42] hover:bg-[#00072e] text-white flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-sm cursor-pointer"
                  aria-label="Submit search"
                >
                  <FiSearch className="w-3 h-3 text-white" />
                </button>
              </div>
            </form>

            {/* Desktop Real-Time Live Search Dropdown */}
            {isDesktopOpen && searchQuery.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                {searchResults.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50/80 border-b border-gray-100 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                      <span>Matching Products ({searchResults.length})</span>
                      <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
                        In Stock · Express Delivery
                      </span>
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                      {searchResults.slice(0, 5).map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={handleSelectProduct}
                          className="flex items-center gap-3 p-3 hover:bg-gray-50/90 transition-colors group"
                        >
                          <div className="relative w-12 h-12 rounded-lg bg-gray-50 shrink-0 overflow-hidden border border-gray-200/60 p-0.5">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="48px"
                              className="object-contain group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              <span className="text-[10px] font-bold text-[#000b42] uppercase tracking-wider">
                                {product.brand}
                              </span>
                              <span className="text-gray-300">·</span>
                              <span className="text-[10px] text-gray-500 capitalize">
                                {product.category === "eliquids"
                                  ? "E-Liquid"
                                  : product.category}
                              </span>
                            </div>
                            <p className="text-xs font-semibold text-gray-900 truncate group-hover:text-[#000b42] transition-colors">
                              {product.name}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs font-bold text-gray-900">
                                ₹{product.price.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] text-gray-400 line-through">
                                ₹{product.mrp.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                                {product.discount}
                              </span>
                            </div>
                          </div>
                          <FiChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#000b42] group-hover:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>

                    <Link
                      href={`/products?search=${encodeURIComponent(
                        searchQuery.trim()
                      )}`}
                      onClick={handleSelectProduct}
                      className="block w-full py-2.5 px-4 bg-gray-50 hover:bg-[#000b42] hover:text-white text-center text-xs font-semibold text-[#000b42] transition-colors border-t border-gray-100 cursor-pointer"
                    >
                      View all {searchResults.length} results in catalog &rarr;
                    </Link>
                  </>
                ) : (
                  <div className="p-5 text-center">
                    <p className="text-xs font-medium text-gray-600 mb-2">
                      No vapes found matching &quot;{searchQuery}&quot;
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi Vape Shop Mumbai, do you have ${searchQuery} in stock?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#000b42] hover:underline"
                    >
                      <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                      <span>Ask us on WhatsApp (Instant Reply)</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Action Icons & WhatsApp CTA */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Wishlist Icon */}
            <Link
              href="/products"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-200/90 hover:border-[#000b42] flex items-center justify-center text-slate-700 hover:text-[#000b42] relative transition-all duration-200 bg-slate-50/70 hover:bg-white shadow-2xs hover:shadow-xs cursor-pointer group"
              aria-label="Wishlist items"
            >
              <FiHeart className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 bg-[#000b42] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none ring-2 ring-white">
                {wishlistCount}
              </span>
            </Link>

            {/* Cart Icon - Interactive Real-Time Drawer Trigger */}
            <button
              type="button"
              onClick={openCart}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-200/90 hover:border-[#000b42] flex items-center justify-center text-slate-700 hover:text-[#000b42] relative transition-all duration-200 bg-slate-50/70 hover:bg-white shadow-2xs hover:shadow-xs cursor-pointer focus:outline-none group"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <FiShoppingCart className="w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 bg-[#000b42] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none ring-2 ring-white">
                {cartCount}
              </span>
            </button>

            {/* Subtle Vertical Divider */}
            <div className="hidden sm:block h-5 w-px bg-slate-200/90 mx-0.5" />

            {/* WhatsApp Order Button - Fixed Compact "Order Now" to fit perfectly inside navbar */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#000b42] via-[#00105c] to-[#000b42] hover:from-[#00072e] hover:to-[#00072e] text-white text-xs sm:text-[13px] font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl shadow-[0_3px_12px_rgba(0,11,66,0.22)] hover:shadow-[0_5px_16px_rgba(0,11,66,0.32)] transition-all duration-200 active:scale-95 cursor-pointer border border-[#000b42]/30 whitespace-nowrap"
              aria-label="Order on WhatsApp - Vape Shop Mumbai"
            >
              <FaWhatsapp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" />
              <span className="text-white tracking-wide font-medium">Order Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#000b42] hover:border-[#000b42] transition-colors duration-150 focus:outline-none cursor-pointer bg-slate-50"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <FiX className="w-5 h-5 text-gray-800" />
              ) : (
                <FiMenu className="w-5 h-5 text-gray-800" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white rounded-2xl border border-gray-200/90 shadow-xl p-4 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
            {/* Real-Time Mobile Search */}
            <div ref={mobileSearchRef} className="relative mb-4">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative flex items-center bg-gray-100/70 border border-gray-200 rounded-full pl-3.5 pr-1.5 py-1.5 focus-within:border-[#000b42] focus-within:ring-2 focus-within:ring-[#000b42]/20 focus-within:bg-white transition-all shadow-2xs">
                  <FiSearch className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    role="searchbox"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setIsMobileSearchOpen(true);
                    }}
                    onFocus={() => {
                      if (searchQuery.trim()) setIsMobileSearchOpen(true);
                    }}
                    placeholder="Search vapes, pods, e-liquids..."
                    className="w-full bg-transparent text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none pr-1"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleClear}
                      className="mr-1.5 w-5 h-5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
                      aria-label="Clear mobile search"
                    >
                      <FiX className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#000b42] text-white flex items-center justify-center shrink-0 cursor-pointer active:scale-95 transition-transform"
                  >
                    <FiSearch className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </form>

              {/* Mobile Real-Time Results Dropdown */}
              {isMobileSearchOpen && searchQuery.trim() && (
                <div className="mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                  {searchResults.length > 0 ? (
                    <>
                      <div className="px-3 py-2 bg-gray-50 border-b border-gray-100 text-[10px] font-semibold text-gray-500 uppercase tracking-wider flex justify-between">
                        <span>Found ({searchResults.length})</span>
                        <span className="text-emerald-600">In Stock</span>
                      </div>
                      <div className="max-h-60 overflow-y-auto divide-y divide-gray-50">
                        {searchResults.slice(0, 4).map((product) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                            onClick={handleSelectProduct}
                            className="flex items-center gap-2.5 p-2.5 hover:bg-gray-50 transition-colors"
                          >
                            <div className="relative w-10 h-10 rounded-md bg-gray-50 shrink-0 overflow-hidden border border-gray-200/60 p-0.5">
                              <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                sizes="40px"
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-semibold text-gray-900 truncate">
                                {product.name}
                              </p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <span className="text-xs font-bold text-gray-900">
                                  ₹{product.price.toLocaleString("en-IN")}
                                </span>
                                <span className="text-[10px] text-rose-600 font-semibold">
                                  {product.discount}
                                </span>
                              </div>
                            </div>
                            <FiChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          </Link>
                        ))}
                      </div>
                      <Link
                        href={`/products?search=${encodeURIComponent(
                          searchQuery.trim()
                        )}`}
                        onClick={handleSelectProduct}
                        className="block w-full py-2 px-3 bg-gray-50 hover:bg-[#000b42] hover:text-white text-center text-xs font-semibold text-[#000b42] transition-colors border-t border-gray-100"
                      >
                        View all {searchResults.length} results &rarr;
                      </Link>
                    </>
                  ) : (
                    <div className="p-3 text-center text-xs text-gray-500">
                      No results for &quot;{searchQuery}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-2 pb-3 border-b border-gray-100">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-[#000b42]/10 text-[#000b42] font-semibold"
                        : "text-gray-800 hover:bg-gray-50 hover:text-[#000b42]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile WhatsApp Button */}
            <div className="pt-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#000b42] hover:bg-[#00072e] text-white text-sm font-semibold py-2.5 rounded-full shadow transition-all duration-150 cursor-pointer"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span className="text-white">
                  Order on WhatsApp (60 Min Delivery)
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
