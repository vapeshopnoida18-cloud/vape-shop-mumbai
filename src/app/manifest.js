export default function manifest() {
  return {
    name: "Vape Shop in Mumbai | 30-45 Min Free Delivery",
    short_name: "Vape Shop Mumbai",
    description:
      "Buy 100% genuine disposable vapes, pod systems & e-liquids in Mumbai. Superfast 30-45 mins free express doorstep delivery across Bandra, Andheri, South Mumbai, Powai, Thane & MMR with instant UPI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000b42",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
