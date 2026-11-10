"use client";

import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);
  const [mounted, setMounted] = useState(false);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("vape_shop_mumbai_wishlist");
      if (saved) {
        setWishlist(JSON.parse(saved));
      }
    } catch {
      // Fallback
    }
  }, []);

  // Persist to localStorage
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("vape_shop_mumbai_wishlist", JSON.stringify(wishlist));
      } catch {
        // Fallback
      }
    }
  }, [wishlist, mounted]);

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          brand: product.brand,
          price: product.price,
          mrp: product.mrp,
          discount: product.discount,
          image: product.image,
          alt: product.alt,
        },
      ];
    });
  };

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}

