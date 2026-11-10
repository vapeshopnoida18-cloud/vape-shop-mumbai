"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import {
  FiX,
  FiTrash2,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiTruck,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { products } from "@/data/products";

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    cartTotal,
    isCartOpen,
    closeCart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getWhatsAppOrderUrl,
  } = useCart();

  // Curated 3 trending bestsellers for empty cart recommendations
  const quickPicks = useMemo(() => {
    return products.slice(0, 3);
  }, []);

  // Calculate estimated total MRP to show savings
  const totalMrp = useMemo(() => {
    return cart.reduce((sum, item) => {
      const originalProduct = products.find((p) => p.id === item.id);
      const mrp = originalProduct?.mrp || item.price * 1.25;
      return sum + mrp * item.quantity;
    }, 0);
  }, [cart]);

  const totalSavings = Math.max(0, Math.round(totalMrp - cartTotal));

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Cart Drawer"
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex w-full sm:max-w-md">
        <div className="w-full bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* ========================================================= */}
          {/* 1. COMPACT HEADER */}
          {/* ========================================================= */}
          <div className="p-3.5 sm:p-4 border-b border-gray-100 bg-white sticky top-0 z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-[#000b42]/10 text-[#000b42] flex items-center justify-center shrink-0">
                <FiShoppingBag className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <h2 className="text-sm sm:text-base font-bold text-gray-900 truncate">
                    Your Cart
                  </h2>
                  <span className="px-2 py-0.5 rounded-full bg-[#000b42] text-white text-[11px] font-bold shrink-0">
                    {cartCount}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  FREE 30-45 Mins Express in Mumbai
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {cart.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-gray-400 hover:text-red-600 transition-colors px-2 py-1 rounded-md hover:bg-red-50 flex items-center gap-1 cursor-pointer font-medium"
                  title="Clear Cart"
                >
                  <FiTrash2 className="w-3 h-3" />
                  <span>Clear</span>
                </button>
              )}
              <button
                type="button"
                onClick={closeCart}
                className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all cursor-pointer"
                aria-label="Close cart"
              >
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* 2. FREE DELIVERY UNLOCKED NOTIFICATION STRIP */}
          {/* ========================================================= */}
          {cart.length > 0 && (
            <div className="bg-emerald-50/90 border-b border-emerald-100/90 px-3.5 py-2 flex items-center justify-between text-[11px] text-emerald-800">
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>
                  <strong>FREE Express Delivery</strong> unlocked for Mumbai &amp; MMR!
                </span>
              </div>
              <span className="font-bold text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded">
                30-45 mins
              </span>
            </div>
          )}

          {/* ========================================================= */}
          {/* 3. CART BODY (ITEMS OR EMPTY STATE) */}
          {/* ========================================================= */}
          <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3">
            {cart.length === 0 ? (
              /* EMPTY CART STATE */
              <div className="py-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#000b42]/10 text-[#000b42] flex items-center justify-center mb-3">
                  <FiShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  Your cart is empty
                </h3>
                <p className="text-xs text-gray-500 max-w-[240px] mb-5">
                  Explore genuine disposable vapes &amp; pod kits with fast doorstep delivery across Mumbai.
                </p>

                <button
                  type="button"
                  onClick={closeCart}
                  className="px-5 py-2.5 rounded-full bg-[#000b42] hover:bg-[#264c7c] text-white text-xs font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
                >
                  Browse All Products
                </button>

                {/* Quick Add Recommendations inside empty cart */}
                <div className="w-full mt-8 pt-6 border-t border-gray-100 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Popular Right Now
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                      Free 30-45m Delivery
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {quickPicks.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2 rounded-xl border border-gray-100 hover:border-blue-100 bg-gray-50/60 transition-colors"
                      >
                        <div className="flex items-center gap-2.5 min-w-0 pr-2">
                          <div className="relative w-12 h-12 rounded-lg bg-white border border-gray-100 overflow-hidden shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-gray-900 truncate">
                              {item.name}
                            </h4>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <span className="text-xs font-extrabold text-[#000b42]">
                                ₹{item.price.toLocaleString("en-IN")}
                              </span>
                              <span className="text-[10px] text-gray-400 line-through">
                                ₹{item.mrp.toLocaleString("en-IN")}
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => addToCart(item, 1)}
                          className="px-3 py-1.5 rounded-lg bg-white border border-[#000b42] text-[#000b42] hover:bg-[#000b42] hover:text-white text-xs font-bold transition-all shrink-0 active:scale-95 cursor-pointer"
                        >
                          + Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* ACTIVE CART ITEMS */
              <>
                <div className="space-y-2.5 divide-y divide-gray-100">
                  {cart.map((item) => {
                    const itemTotal = item.price * item.quantity;
                    return (
                      <div
                        key={`${item.id}-${item.flavor}`}
                        className="pt-2.5 first:pt-0 flex gap-3 items-center"
                      >
                        {/* Image */}
                        <div className="relative w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden shrink-0">
                          <Image
                            src={item.image}
                            alt={item.alt || item.name}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="text-xs font-bold text-gray-900 line-clamp-1">
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id, item.flavor)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1 cursor-pointer shrink-0"
                              title="Remove item"
                              aria-label="Remove item"
                            >
                              <FiTrash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-1.5 my-1">
                            <span className="text-[10px] bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded font-medium truncate max-w-[140px]">
                              Flavor: {item.flavor}
                            </span>
                            <span className="text-[10px] text-gray-400">
                              (₹{item.price.toLocaleString("en-IN")} each)
                            </span>
                          </div>

                          <div className="flex items-center justify-between pt-0.5">
                            <span className="text-xs sm:text-sm font-extrabold text-gray-900">
                              ₹{itemTotal.toLocaleString("en-IN")}
                            </span>

                            {/* Quantity Controls */}
                            <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50/80 p-0.5">
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.flavor, -1)}
                                className="w-6 h-6 rounded flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
                                aria-label="Decrease quantity"
                              >
                                <FiMinus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold text-gray-900 w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateQuantity(item.id, item.flavor, 1)}
                                className="w-6 h-6 rounded flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-900 transition-colors cursor-pointer"
                                aria-label="Increase quantity"
                              >
                                <FiPlus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* COMPACT TRUST HIGHLIGHTS (Replaces heavy stacked banners) */}
                <div className="grid grid-cols-2 gap-2 pt-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-100 flex items-center gap-2">
                    <FiTruck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-emerald-900 leading-tight">
                        30-45 Min Dispatch
                      </p>
                      <p className="text-[9px] text-emerald-700 truncate">
                        All Mumbai Areas
                      </p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center gap-2">
                    <FiShield className="w-4 h-4 text-blue-600 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold text-blue-900 leading-tight">
                        100% Genuine Box
                      </p>
                      <p className="text-[9px] text-blue-700 truncate">
                        Scratch QR Verified
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* ========================================================= */}
          {/* 4. COMPACT CHECKOUT FOOTER (STICKY) */}
          {/* ========================================================= */}
          {cart.length > 0 && (
            <div className="p-3.5 sm:p-4 border-t border-gray-100 bg-gray-50/90 space-y-2.5">
              {/* Savings pill if applicable */}
              {totalSavings > 0 && (
                <div className="bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded-lg flex items-center justify-between">
                  <span>🎉 Instant Savings Applied</span>
                  <span className="font-bold">Save ₹{totalSavings.toLocaleString("en-IN")}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Items Subtotal ({cartCount} {cartCount > 1 ? "items" : "item"})</span>
                  <span className="font-semibold text-gray-900">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Delivery Charges</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400 line-through">₹99</span>
                    <span className="font-bold text-emerald-600 text-xs bg-emerald-50 px-1.5 py-0.2 rounded">
                      FREE
                    </span>
                  </div>
                </div>
                <div className="flex justify-between text-sm sm:text-base font-extrabold text-gray-900 pt-1.5 border-t border-gray-200">
                  <span>Total Payable</span>
                  <span className="text-[#000b42]">
                    ₹{cartTotal.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              {/* Order via WhatsApp Button */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 active:scale-98 cursor-pointer text-sm"
              >
                <FaWhatsapp className="w-5 h-5 text-white shrink-0" />
                <span className="truncate">Order via WhatsApp Now</span>
              </a>

              <div className="flex items-center justify-between text-[10px] text-gray-500 pt-0.5 px-0.5">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Instant UPI / Online Pay
                </span>
                <span>Direct WhatsApp Confirmation</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
