import { Suspense } from "react";
import ProductsCatalogClient from "@/components/ProductsCatalogClient";

export const metadata = {
  title: "All Vape Devices & Disposables | Vape Shop in Mumbai",
  description:
    "Explore authentic disposable vapes (up to 80,000 puffs), refillable pod kits & nic salts at Vape Shop in Mumbai. Free 30-45 min express delivery across Bandra, Andheri, Juhu, South Mumbai, Powai, Thane & MMR with instant UPI.",
  keywords: [
    "vape shop mumbai",
    "vape shop in mumbai",
    "vape shops in mumbai",
    "smoke shop near me mumbai",
    "vape stores near me mumbai",
    "buy vape online mumbai",
    "free vape delivery mumbai",
    "disposable vapes mumbai",
    "geek bar mumbai",
    "ebcreate bc5000 mumbai",
    "yuoto vape mumbai",
    "geekvape coils mumbai",
    "vape delivery bandra",
    "vape delivery andheri",
    "vape delivery colaba",
  ],
  alternates: {
    canonical: "https://vapeshopsinmumbai.com/products",
  },
  openGraph: {
    title: "All Vape Devices & Disposables | Vape Shop in Mumbai",
    description:
      "Browse disposable vapes, refillable pod kits, coils & nic salts at Vape Shop in Mumbai. 100% authentic with free 30-45 mins express delivery across Mumbai & MMR.",
    url: "https://vapeshopsinmumbai.com/products",
    siteName: "Vape Shop in Mumbai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Vape Devices & Disposables | Vape Shop in Mumbai",
    description:
      "Buy 100% genuine disposable vapes & pod kits with free 30-45 mins express delivery in Mumbai.",
  },
};

export default function ProductsPage() {
  const catalogJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vape Products Catalog - Vape Shop Mumbai",
    url: "https://vapeshopsinmumbai.com/products",
    description:
      "Official collection of disposable vapes, pod systems, coils and accessories delivered in Mumbai with free 30-45 mins express shipping.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogJsonLd) }}
      />
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <ProductsCatalogClient />
      </Suspense>
    </main>
  );
}
