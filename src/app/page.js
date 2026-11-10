import HeroSlider from "@/components/HeroSlider";
import QuickFeatures from "@/components/QuickFeatures";
import SeoIntro from "@/components/SeoIntro";
import FeaturedProducts from "@/components/FeaturedProducts";
import HomeReviews from "@/components/HomeReviews";
import HomeBlogs from "@/components/HomeBlogs";
import VideoShowcase from "@/components/VideoShowcase";
import ServiceAreas from "@/components/ServiceAreas";
import SeoLegalInfo from "@/components/SeoLegalInfo";
import HomeFaq from "@/components/HomeFaq";

export const metadata = {
  title: "Vape Shop Mumbai: Buy Disposable Vape Online Mumbai | 30 Mins Delivery",
  description:
    "Vape Shop Mumbai is Mumbai's #1 trusted online vape store. Buy 100% authentic disposable vapes, pod systems, coils & imported nic salts with 30-45 mins free delivery across Bandra, Andheri, Juhu, Colaba, Powai, Thane & Navi Mumbai.",
  keywords: [
    "vape shop mumbai",
    "vape shop in mumbai",
    "buy disposable vape online mumbai",
    "vape shops in mumbai",
    "vapes in mumbai",
    "vape delivery mumbai",
    "vape delivery in mumbai",
    "smoke shop near me mumbai",
    "vape stores near me mumbai",
    "buy vape online mumbai",
    "best vape shop in mumbai",
    "vape shop near me mumbai",
    "vape shop bandra",
    "vape shop andheri",
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
  alternates: {
    canonical: "https://vapeshopsinmumbai.com",
  },
  openGraph: {
    title: "Vape Shop Mumbai: Buy Disposable Vape Online Mumbai | 30 Mins Delivery",
    description:
      "Vape Shop Mumbai is Mumbai's #1 trusted online vape store. Buy 100% authentic disposable vapes, pods & e-liquids with 30-45 mins free express delivery across Bandra, Andheri, South Mumbai, Powai, Thane & Navi Mumbai.",
    url: "https://vapeshopsinmumbai.com",
    siteName: "Vape Shop Mumbai",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://vapeshopsinmumbai.com/herobanner/banner1.png",
        width: 1600,
        height: 658,
        alt: "Vape Shop Mumbai - Buy Disposable Vape Online Mumbai 30 Mins Free Delivery",
      },
      {
        url: "https://vapeshopsinmumbai.com/logo.png",
        width: 512,
        height: 512,
        alt: "Vape Shop Mumbai Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Mumbai: Buy Disposable Vape Online Mumbai",
    description:
      "Buy authentic vapes from Vape Shop Mumbai with 30-45 min free express doorstep delivery across Bandra, Andheri, Colaba, Juhu, Powai & Mumbai. Instant UPI payment.",
    images: [
      "https://vapeshopsinmumbai.com/herobanner/banner1.png",
      "https://vapeshopsinmumbai.com/logo.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Banner Slider */}
      <HeroSlider />

      {/* 2. Quick Action Features (100% Genuine, 24/7 Call, WhatsApp Order, Top Trending) */}
      <QuickFeatures />

      {/* 3. High-Ranking SEO Pillar Intro (#1 Vape Shop Mumbai, Content, Trending Tags & Trust Cards) */}
      <SeoIntro />

      {/* 4. Featured Vape Devices & Disposables Product Cards */}
      <FeaturedProducts />

      {/* 5. Verified Customer Reviews & Ratings for Mumbai */}
      <HomeReviews />

      {/* 6. Authentic Verification & Scratch QR Video Showcase */}
      <VideoShowcase />

      {/* 7. Latest Vape Guides, Reviews & Mumbai Insights (SEO Powerhouse) */}
      <HomeBlogs />

      {/* 8. Key Service Areas Across Mumbai, South Bombay, Suburbs & MMR */}
      <ServiceAreas />

      {/* 9. E-Cigarette Laws, Safety & Local Information */}
      <SeoLegalInfo />

      {/* 10. Frequently Asked Questions (FAQ) with Schema.org */}
      <HomeFaq />
    </>
  );
}
