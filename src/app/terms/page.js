import Link from "next/link";
import {
  FiFileText,
  FiCheckCircle,
  FiAlertCircle,
  FiTruck,
  FiShield,
  FiCreditCard,
  FiMapPin,
  FiMail,
  FiPhone,
  FiChevronRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export const metadata = {
  title: "Terms & Conditions | Vape Shop in Mumbai - Ordering & Delivery Policies",
  description:
    "Official Terms and Conditions for ordering vapes, pod kits, and e-liquids at Vape Shop in Mumbai. Details on 21+ age eligibility, 30-45 mins express dispatch, UPI, and return policy.",
  keywords: [
    "vape shop in mumbai",
    "terms and conditions vape shop mumbai",
    "vape delivery terms mumbai",
    "cod policy vape shop mumbai",
    "authenticity warranty vape mumbai",
    "age requirement vape shop mumbai",
  ],
  alternates: {
    canonical: "https://vapeshopsinmumbai.com/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Vape Shop in Mumbai",
    description:
      "Review the official terms of service for Vape Shop in Mumbai. Express 30-45 min delivery, authentic sealed products, and UPI guidelines.",
    url: "https://vapeshopsinmumbai.com/terms",
    siteName: "Vape Shop in Mumbai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Vape Shop in Mumbai",
    description:
      "Official terms of service for express vape delivery in Mumbai. 21+ only.",
  },
};

export default function TermsPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20have%20a%20question%20regarding%20terms%20or%20delivery.`;

  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions - Vape Shop Mumbai",
    url: "https://vapeshopsinmumbai.com/terms",
    description:
      "Terms and conditions for Vape Shop Mumbai covering order processing, 30-45 min delivery, UPI payments, and 21+ age compliance.",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://vapeshopsinmumbai.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Terms & Conditions",
          item: "https://vapeshopsinmumbai.com/terms",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900 py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 space-y-6 sm:space-y-8">
        {/* ========================================================= */}
        {/* 1. HERO HEADER CARD */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 text-center relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium mb-3"
            >
              <Link href="/" className="hover:text-[#000b42] transition-colors">
                Home
              </Link>
              <FiChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-gray-900 font-semibold">Terms &amp; Conditions</span>
            </nav>

            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#000b42] bg-blue-50 border border-blue-100/80 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-3">
              <FiFileText className="w-3 h-3 text-[#000b42]" />
              Store Policies &middot; Order Fulfillment &middot; Age Compliance
            </span>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mt-1">
              Terms &amp; Conditions of Service
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Operating out of Linking Road & Hill Road Hub, Bandra West, Mumbai, Maharashtra 400050.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN TERMS BODY */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                01
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Acceptance of Terms
              </h2>
            </div>
            <p>
              By browsing, accessing, or placing orders on <strong>vapeshopsinmumbai.com</strong> or interacting with our order helpline on WhatsApp (+91 70826 74286), you explicitly acknowledge and agree to comply with these Terms and Conditions. If you do not agree to these terms in full, please refrain from using this website or initiating order requests.
            </p>
          </div>

          {/* Section 2: Strict 21+ Age Requirement */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0">
                02
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Strict 21+ Age Eligibility Requirement
              </h2>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-rose-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                <FiAlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Legal Age Verification Mandatory</span>
              </div>
              <p className="text-xs leading-relaxed">
                You must be at least 21 years of age to purchase or view vaping products. By placing an order, you certify that you meet the statutory age requirement. Orders placed by or on behalf of minors are prohibited and will be cancelled without fulfillment. Delivery personnel reserve the right to verify government ID upon arrival.
              </p>
            </div>
          </div>

          {/* Section 3: Genuine Stock & Scratch Verification */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                03
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                100% Genuine Authenticity &amp; QR Verification Guarantee
              </h2>
            </div>
            <p>
              Every vaping device, pod mod kit, and imported e-liquid listed on our platform is guaranteed 100% original, brand new, and factory-sealed. We do not stock or distribute clone, duplicate, or refurbished hardware:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiShield className="w-4 h-4 text-[#000b42] shrink-0 mt-0.5" />
                <span><strong>Scratch QR Panels:</strong> All devices feature authentic security scratch panels to verify directly on the manufacturer portal.</span>
              </li>
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiShield className="w-4 h-4 text-[#000b42] shrink-0 mt-0.5" />
                <span><strong>Inspection Before Payment:</strong> Customers are encouraged to inspect the factory seal at doorstep prior to completing UPI payment.</span>
              </li>
            </ul>
          </div>

          {/* Section 4: Express Delivery & Service Areas */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                04
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                30-45 mins Express Mumbai Delivery Policy
              </h2>
            </div>
            <p>
              We operate dedicated express delivery riders from our central retail hub at Linking Road & Hill Road Hub, Bandra West. Delivery estimates:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-gray-600">
              <li><strong>Bandra West, Khar, Santa Cruz &amp; Juhu:</strong> Dispatched immediately with typical arrival in 20 to 30 minutes.</li>
              <li><strong>Andheri West, Lokhandwala, Oshiwara &amp; Versova:</strong> Direct express dispatch within 25 to 35 minutes.</li>
              <li><strong>South Mumbai (Colaba, Marine Drive, Worli &amp; Lower Parel):</strong> Dispatched via Bandra-Worli Sea Link with arrival in 25 to 35 minutes.</li>
              <li><strong>Powai Hiranandani, Thane West &amp; Navi Mumbai (Vashi):</strong> Direct express delivery within 30 to 45 minutes.</li>
              <li>Delivery timeframes are subject to severe monsoon weather, peak traffic hours, or unforeseen road diversions, which will be communicated in advance via WhatsApp.</li>
            </ul>
          </div>

          {/* Section 5: Payment & Cancellation */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                05
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Payment Options &amp; Order Cancellation
              </h2>
            </div>
            <p>
              We accept <strong>Instant UPI (Google Pay, PhonePe, Paytm)</strong> and doorstep digital payments (UPI via Google Pay, PhonePe, and Paytm). Orders can be freely modified or cancelled prior to rider dispatch by messaging our helpline at <strong>+91 70826 74286</strong>. Due to health and hygiene standards, unsealed or opened consumable products cannot be returned after successful delivery.
            </p>
          </div>

          {/* Section 6: Official Inquiries */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <FiCheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Questions Regarding Store Terms</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              For any clarification regarding store policies, warranties, or delivery inquiries, reach out to our team:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="flex items-center gap-2">
                <FiMapPin className="w-3.5 h-3.5 text-[#000b42] shrink-0" />
                <span className="truncate">Linking Road & Hill Road Hub, Bandra West, Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="w-3.5 h-3.5 text-[#000b42] shrink-0" />
                <a href="mailto:vapeshopmumbai@gmail.com" className="text-[#000b42] hover:underline truncate">
                  vapeshopmumbai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-emerald-600">
                  +91 70826 74286 (WhatsApp)
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Help Footer CTA */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-gray-900">Need immediate assistance with an order?</h4>
            <p className="text-xs text-gray-500 mt-0.5">Contact our Mumbai customer support desk directly on WhatsApp.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-xs shrink-0"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}
