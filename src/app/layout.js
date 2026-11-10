import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import FloatingContactButtons from "@/components/FloatingContactButtons";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export const metadata = {
  title: {
    default: "Vape Shop Mumbai: Buy Disposable Vape Online Mumbai | #1 Vape Shop in Mumbai",
    template: "%s | Vape Shop Mumbai",
  },
  description:
    "Vape Shop Mumbai is Mumbai's #1 trusted online vape store offering 100% authentic disposable vapes, pod kits & imported nic salts with 30-45 mins free delivery across Bandra, Andheri, Juhu, Colaba, Powai, Thane & Navi Mumbai.",
  keywords: [
    "vape shop mumbai",
    "vape shop in mumbai",
    "vape shops in mumbai",
    "buy disposable vape online mumbai",
    "vape delivery mumbai",
    "vape delivery in mumbai",
    "smoke shop near me mumbai",
    "vape stores near me mumbai",
    "vape near me mumbai",
    "buy vape online mumbai",
    "vapes in mumbai",
    "free vape delivery mumbai",
    "best vape shop in mumbai",
    "vape shop bandra",
    "vape shop bandra west",
    "vape shop andheri",
    "vape shop andheri west",
    "vape shop juhu",
    "vape shop colaba",
    "vape shop south mumbai",
    "vape shop powai",
    "vape shop thane",
    "vape shop navi mumbai",
    "disposable vape mumbai",
    "geek bar mumbai",
    "elf bar mumbai",
    "lost mary mumbai",
    "iget vape mumbai",
  ],
  metadataBase: new URL("https://vapeshopsinmumbai.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Vape Shop Mumbai | #1 Vape Shop in Mumbai – 30 Min Free Delivery",
    description:
      "Buy 100% genuine disposable vapes, pods & e-liquids from Vape Shop Mumbai. Superfast 30-45 mins free express delivery across Bandra, Andheri, South Mumbai, Powai, Thane & Navi Mumbai.",
    url: "https://vapeshopsinmumbai.com",
    siteName: "Vape Shop Mumbai",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/herobanner/banner1.png",
        width: 1600,
        height: 658,
        alt: "Vape Shop Mumbai - Buy Disposable Vape Online Mumbai",
      },
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Vape Shop Mumbai Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Mumbai: Buy Disposable Vape Online Mumbai",
    description:
      "Buy 100% genuine disposable vapes, pods & e-liquids in Mumbai with 30-45 mins free express delivery across Mumbai & MMR.",
    images: ["/herobanner/banner1.png", "/logo.png"],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Maharashtra, India",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Store",
      "@id": "https://vapeshopsinmumbai.com/#store",
      name: "Vape Shop Mumbai",
      alternateName: [
        "Vape Shop in Mumbai",
        "Vape Shops in Mumbai",
        "Best Vape Shop in Mumbai",
        "Vape Store Mumbai",
        "Vape Delivery Mumbai",
        "Smoke Shop Near Me Mumbai",
        "Buy Disposable Vape Online Mumbai",
        "Vapes in Mumbai",
        "Vape Shop Bandra",
        "Vape Shop Andheri",
      ],
      url: "https://vapeshopsinmumbai.com",
      logo: "https://vapeshopsinmumbai.com/logo.png",
      image: [
        "https://vapeshopsinmumbai.com/herobanner/banner1.png",
        "https://vapeshopsinmumbai.com/logo.png",
      ],
      telephone: "+917082674286",
      email: "vapeshopmumbai@gmail.com",
      priceRange: "₹₹",
      paymentAccepted: "UPI, Google Pay, PhonePe, Paytm, QR Code, Net Banking, Credit/Debit Card",
      currenciesAccepted: "INR",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Linking Road & Hill Road Hub, Bandra West",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400050",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "19.0596",
        longitude: "72.8295",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
      areaServed: [
        "Mumbai",
        "Bandra West",
        "Bandra East",
        "Andheri West",
        "Andheri East",
        "Juhu",
        "Colaba",
        "Marine Drive",
        "Lower Parel",
        "Worli",
        "Dadar",
        "Powai",
        "Goregaon",
        "Malad",
        "Borivali",
        "Kandivali",
        "Chembur",
        "Ghatkopar",
        "Mulund",
        "Vashi Navi Mumbai",
        "CBD Belapur",
        "Kharghar",
        "Thane",
        "Mumbai Metropolitan Region",
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1480",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://vapeshopsinmumbai.com/#website",
      url: "https://vapeshopsinmumbai.com",
      name: "Vape Shop Mumbai",
      alternateName: "Vape Shop in Mumbai",
      description:
        "Buy 100% genuine disposable vapes, pods and e-liquids at Vape Shop Mumbai with 30-45 mins free express delivery across Bandra, Andheri, South Mumbai, Powai, Thane & Navi Mumbai.",
      publisher: {
        "@id": "https://vapeshopsinmumbai.com/#store",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://vapeshopsinmumbai.com/products?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 font-sans selection:bg-[#000b42] selection:text-white">
        <CartProvider>
          <WishlistProvider>
            <Navbar />
            <CartDrawer />
            <FloatingContactButtons />
            <main className="flex-1">{children}</main>
            <Footer />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
