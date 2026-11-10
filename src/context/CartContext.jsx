"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { WHATSAPP_NUMBER, getProductUrl } from "@/data/products";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    setMounted(true);
    try {
      const savedCart = localStorage.getItem("vape_shop_mumbai_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch {
      // Fallback
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem("vape_shop_mumbai_cart", JSON.stringify(cart));
      } catch {
        // Fallback
      }
    }
  }, [cart, mounted]);

  // Add Item to Cart
  const addToCart = (product, quantity = 1, flavor = null) => {
    const selectedFlavor = flavor || product.defaultFlavor || "Standard";
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.flavor === selectedFlavor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.image,
            alt: product.alt,
            flavor: selectedFlavor,
            quantity: quantity,
          },
        ];
      }
    });
    // Automatically open the cart drawer on adding an item
    setIsCartOpen(true);
  };

  // Update item quantity
  const updateQuantity = (id, flavor, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.flavor === flavor) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Remove item
  const removeFromCart = (id, flavor) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.flavor === flavor))
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Derived counts & totals
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Format WhatsApp checkout link
  const getWhatsAppOrderUrl = () => {
    if (cart.length === 0) {
      return `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20want%20to%20order%20vapes%20in%20Mumbai.`;
    }

    let itemsText = cart
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}*\n   Flavor: ${item.flavor || "Default"}\n   Qty: ${item.quantity} x ₹${item.price.toLocaleString("en-IN")} = ₹${(item.quantity * item.price).toLocaleString("en-IN")}\n   🔗 Link: ${getProductUrl(item.slug)}`
      )
      .join("\n\n");

    const message = `Hi *Vape Shop Mumbai*, I would like to place an order:\n\n📦 *ORDER ITEMS:*\n${itemsText}\n\n💰 *Total Amount:* ₹${cartTotal.toLocaleString("en-IN")}\n🚚 *Delivery:* FREE 30-45 Mins Express in Mumbai & MMR\n💳 *Payment:* Instant UPI (Google Pay / PhonePe / Paytm)\n\nPlease confirm my delivery address in Mumbai.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getWhatsAppOrderUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

