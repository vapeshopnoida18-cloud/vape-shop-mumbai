import Link from "next/link";
import {
  FiShield,
  FiLock,
  FiUserCheck,
  FiEye,
  FiMail,
  FiMapPin,
  FiPhone,
  FiChevronRight,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export const metadata = {
  title: "Privacy Policy | Vape Shop in Mumbai - Data Protection & Age Compliance",
  description:
    "Official Privacy Policy of Vape Shop in Mumbai. Learn how we handle customer order details, discreet express doorstep delivery, 21+ age verification, and data security.",
  keywords: [
    "vape shop in mumbai",
    "privacy policy vape shop mumbai",
    "vape delivery privacy mumbai",
    "vape shop bandra customer data",
    "discreet vape packaging mumbai",
    "age verification 21+ vape mumbai",
  ],
  alternates: {
    canonical: "https://vapeshopsinmumbai.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Vape Shop in Mumbai",
    description:
      "Privacy policy and data protection guidelines for Vape Shop in Mumbai. Discreet packaging, zero spam, and strict 21+ compliance across Mumbai & MMR.",
    url: "https://vapeshopsinmumbai.com/privacy-policy",
    siteName: "Vape Shop in Mumbai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Vape Shop in Mumbai",
    description:
      "100% confidential and discreet delivery across Mumbai & MMR.",
  },
};

export default function PrivacyPolicyPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20have%20a%20privacy%20or%20order%20query.`;

  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy - Vape Shop Mumbai",
    url: "https://vapeshopsinmumbai.com/privacy-policy",
    description:
      "Privacy policy detailing customer data protection, order confidentiality, and age verification for Vape Shop Mumbai.",
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
          name: "Privacy Policy",
          item: "https://vapeshopsinmumbai.com/privacy-policy",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900 py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
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
              <span className="text-gray-900 font-semibold">Privacy Policy</span>
            </nav>

            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#000b42] bg-blue-50 border border-blue-100/80 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-3">
              <FiLock className="w-3 h-3 text-[#000b42]" />
              Data Security &middot; Confidentiality &middot; 21+ Compliance
            </span>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mt-1">
              Privacy Policy &amp; Data Protection
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Effective Date: November 2026 &bull; Operating out of Linking Road & Hill Road Hub, Bandra West, Mumbai, Maharashtra 400050.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN POLICY CONTENT (Clean White Card Layout) */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {/* Section 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                01
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Introduction &amp; Our Commitment
              </h2>
            </div>
            <p>
              At <strong>Vape Shop Mumbai</strong> (accessible from <Link href="/" className="text-[#000b42] hover:underline font-medium">vapeshopsinmumbai.com</Link>), customer privacy and confidentiality are paramount. We understand the importance of discretion when ordering personal vaping hardware, disposable pod devices, and imported nicotine salts. This Privacy Policy details the types of information we collect, how it is used strictly to fulfill express doorstep delivery across Mumbai sectors, and how we protect your personal data.
            </p>
          </div>

          {/* Section 2 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                02
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Information We Collect &amp; Why
              </h2>
            </div>
            <p>
              We only collect personal information that you voluntarily provide when browsing our catalog, placing an order, or contacting our dispatch desk:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Delivery Details:</strong> Name, doorstep address (Mumbai Sector, Society, Landmark), and PIN code needed solely for route dispatch.</span>
              </li>
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Phone &amp; WhatsApp:</strong> Used exclusively for order confirmation, dispatch timing updates, and rider doorstep contact.</span>
              </li>
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Order Selection:</strong> Selected device, brand, puff count, flavor variant, and quantity for inventory verification.</span>
              </li>
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Payment Method:</strong> Choice of Instant UPI (Google Pay, PhonePe, Paytm) or doorstep UPI (Google Pay, PhonePe, Paytm). No financial credentials stored.</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Age Verification */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0">
                03
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Strict 21+ Age Compliance Policy
              </h2>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-rose-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                <FiUserCheck className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Zero Tolerance for Underage Sales</span>
              </div>
              <p className="text-xs leading-relaxed">
                Vape Shop Mumbai does not cater to, market to, or collect information from minors under the legal age of 21. Any order suspected to be placed by an individual under 21 years of age is subject to immediate cancellation. Our delivery couriers reserve the right to verify government-issued photo ID upon physical delivery.
              </p>
            </div>
          </div>

          {/* Section 4: Discreet Packaging */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                04
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                100% Discreet Packaging &amp; Fast Dispatch
              </h2>
            </div>
            <p>
              To protect your personal privacy, all orders dispatched from our Sector 76 Mumbai hub are packed in neutral, opaque, tamper-evident security parcels. There are no external product photos or descriptive markings on the parcel, ensuring total confidentiality at your residential society or workplace reception.
            </p>
          </div>

          {/* Section 5: Zero Third-Party Sharing */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                05
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Zero Spam &amp; No Third-Party Data Sharing
              </h2>
            </div>
            <p>
              We maintain an uncompromising privacy standard:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-gray-600">
              <li>We never sell, rent, lease, or monetize customer contact records with third-party marketing companies, telemarketers, or affiliate brokers.</li>
              <li>Your contact numbers are not subjected to automated bulk spam broadcasts. Communications are strictly transactional (order confirmation, courier coordination, receipt of delivery).</li>
              <li>Customer delivery records are routinely purged to prevent unneeded data accumulation.</li>
            </ul>
          </div>

          {/* Section 6: Official Contact */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <FiShield className="w-4 h-4 text-[#000b42]" />
              <span>Contacting Our Privacy &amp; Data Officer</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              If you have any questions regarding this Privacy Policy, wish to verify or update your delivery preferences, or request data deletion, please contact us directly:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="flex items-center gap-2">
                <FiMapPin className="w-3.5 h-3.5 text-[#000b42] shrink-0" />
                <span className="truncate">Linking Road & Hill Road Hub, Bandra West, Mumbai 400050</span>
              </div>
              <div className="flex items-center gap-2">
                <FiMail className="w-3.5 h-3.5 text-[#000b42] shrink-0" />
                <a href="mailto:vapeshopmumbai@gmail.com" className="text-[#000b42] hover:underline truncate">
                  vapeshopmumbai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <a href="tel:+917082674286" className="hover:underline font-semibold">
                  +91 70826 74286
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Help Footer CTA */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-gray-900">Have questions about order privacy or delivery?</h4>
            <p className="text-xs text-gray-500 mt-0.5">Our support staff is active on WhatsApp 7 days a week.</p>
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
