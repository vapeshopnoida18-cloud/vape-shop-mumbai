import Link from "next/link";
import {
  FiAlertTriangle,
  FiShield,
  FiInfo,
  FiMapPin,
  FiMail,
  FiPhone,
  FiChevronRight,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export const metadata = {
  title: "Disclaimer & Legal Notice | Vape Shop in Mumbai - Statutory Health Warning",
  description:
    "Official Disclaimer and Statutory Health Notice for Vape Shop in Mumbai. Important nicotine health warnings, PECA Act 2019 legal information, and adult consumer guidance.",
  keywords: [
    "vape shop in mumbai",
    "disclaimer vape shop mumbai",
    "nicotine health warning mumbai",
    "peca act 2019 information",
    "electronic cigarettes act india",
    "vaping safety guidelines mumbai",
  ],
  alternates: {
    canonical: "https://vapeshopsinmumbai.com/disclaimer",
  },
  openGraph: {
    title: "Disclaimer & Legal Notice | Vape Shop in Mumbai",
    description:
      "Statutory health warning and legal notice regarding nicotine products and electronic cigarettes at Vape Shop in Mumbai.",
    url: "https://vapeshopsinmumbai.com/disclaimer",
    siteName: "Vape Shop in Mumbai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer & Legal Notice | Vape Shop in Mumbai",
    description:
      "Statutory health warning and legal notice for adult consumers in Mumbai.",
  },
};

export default function DisclaimerPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20have%20an%20inquiry%20regarding%20products%20or%20guidelines.`;

  const disclaimerSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Disclaimer & Legal Notice - Vape Shop Mumbai",
    url: "https://vapeshopsinmumbai.com/disclaimer",
    description:
      "Official statutory disclaimer, health notice, and regulatory information for Vape Shop Mumbai.",
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
          name: "Disclaimer",
          item: "https://vapeshopsinmumbai.com/disclaimer",
        },
      ],
    },
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-gray-900 py-6 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerSchema) }}
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
              <span className="text-gray-900 font-semibold">Disclaimer</span>
            </nav>

            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/80 px-3.5 py-1.5 rounded-full uppercase tracking-widest mb-3">
              <FiAlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              Statutory Health Warning &middot; Regulatory Information
            </span>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mt-1">
              Disclaimer &amp; Statutory Notice
            </h1>

            <p className="text-xs sm:text-sm text-gray-500 mt-2.5 max-w-2xl mx-auto leading-relaxed">
              Operating out of Linking Road & Hill Road Hub, Bandra West, Mumbai, Maharashtra 400050.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. STATUTORY NICOTINE HEALTH WARNING BANNER */}
        {/* ========================================================= */}
        <div className="bg-rose-50/90 border border-rose-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
              <FiAlertTriangle className="w-5 h-5 text-rose-600" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black text-rose-950 uppercase tracking-wide mb-1.5">
                Statutory Nicotine Health Advisory
              </h2>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed font-medium">
                WARNING: Electronic cigarettes, disposable vapes, and nicotine salt e-liquids contain nicotine, a highly addictive chemical substance. These products are intended exclusively for existing adult nicotine consumers aged 21 years or older. Nicotine is not risk-free.
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. MAIN DISCLAIMER SECTIONS */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          {/* Section 1: Non-Medical Product */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                01
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                No Medical Claims or Smoking Cessation Therapy
              </h2>
            </div>
            <p>
              The products listed on <strong>vapeshopsinmumbai.com</strong> are not medical devices, pharmaceutical products, or recognized smoking cessation therapies. They are not designed, evaluated, or approved by the Central Drugs Standard Control Organisation (CDSCO), the U.S. FDA, or the World Health Organization (WHO) to diagnose, treat, cure, or prevent any medical condition or nicotine addiction. If you are seeking smoking cessation support, consult a certified physician or call the National Tobacco Control Programme toll-free helpline.
            </p>
          </div>

          {/* Section 2: Prohibited Groups */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0">
                02
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Contraindications &amp; High-Risk Individuals
              </h2>
            </div>
            <p>
              Nicotine products should NEVER be used by:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiAlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Minors under 21 years of age or non-smokers who do not currently consume nicotine.</span>
              </li>
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiAlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Pregnant, expecting, or breastfeeding women (nicotine can cause fetal damage).</span>
              </li>
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiAlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Individuals with cardiovascular disease, hypertension, or heart arrhythmias.</span>
              </li>
              <li className="p-3.5 rounded-2xl bg-gray-50 border border-gray-200/70 flex items-start gap-2.5">
                <FiAlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Persons with severe asthma, COPD, or allergic sensitivities to propylene glycol (PG) or vegetable glycerin (VG).</span>
              </li>
            </ul>
          </div>

          {/* Section 3: Legal & Regulatory Context */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                03
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                India&apos;s Electronic Cigarettes Act, 2019 (PECA) Context
              </h2>
            </div>
            <p>
              Consumers are advised that India&apos;s Prohibition of Electronic Cigarettes Act, 2019 prohibits the commercial manufacture, import, export, transport, sale, distribution, storage, and advertisement of electronic cigarettes. This platform functions as an informative catalog, consumer guidance resource, and authentic procurement hub for existing adult smokers seeking verified information and original hardware across Mumbai, Navi Mumbai, and Mumbai & MMR.
            </p>
          </div>

          {/* Section 4: Battery & Device Safety */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#000b42] flex items-center justify-center font-bold text-xs shrink-0">
                04
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900">
                Rechargeable Battery &amp; Device Safety Guidelines
              </h2>
            </div>
            <p>
              Rechargeable vape devices contain high-drain Lithium-ion battery cells. Customers must adhere to safe operating practices:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-gray-600">
              <li>Always charge devices using certified 5V/1A or 5V/2A standard USB wall adapters. Do not use high-wattage mobile fast-chargers (65W/120W) which can degrade battery cells.</li>
              <li>Never leave recharging devices unattended or charging overnight.</li>
              <li>Keep devices away from direct sunlight, hot vehicle dashboards, and water exposure.</li>
              <li>Discontinue use immediately if a device experiences unusual heating, auto-firing, or swelling.</li>
            </ul>
          </div>

          {/* Section 5: Contact Details */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <h3 className="font-bold text-gray-900 text-sm flex items-center gap-2">
              <FiShield className="w-4 h-4 text-[#000b42]" />
              <span>Questions Regarding Health or Product Information</span>
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              If you have any questions regarding product specifications, nicotine content, or safety guidelines, reach out to our team:
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
            <h4 className="text-sm font-bold text-gray-900">Have questions about device safety or compatibility?</h4>
            <p className="text-xs text-gray-500 mt-0.5">Chat directly with our customer helpline on WhatsApp.</p>
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
