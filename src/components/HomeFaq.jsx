"use client";

import { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      q: "Where is the best authentic Vape Shop in Mumbai located?",
      a: "Vape Shop Mumbai is headquartered near Linking Road, Bandra West. As the #1 trusted Vape Shop in Mumbai, we offer 100% authentic disposable vapes (up to 80,000 puffs), refillable pod mods, replacement coils, and imported nic salts with 30-45 minutes free express home delivery across Bandra, Andheri, Juhu, South Mumbai, Powai, Thane, and Navi Mumbai.",
    },
    {
      q: "Is there an authentic Vape Shop Mumbai or smoke shop near me with free delivery?",
      a: "Yes! If you are searching for a trusted Vape Shop Mumbai, 'vape shop near me', 'smoke shop near me', or 'buy vape near me' in Mumbai, Vape Shop Mumbai provides superfast 30-45 minutes free doorstep delivery across Bandra West, Bandra East, Andheri West, Andheri East, Juhu, Colaba, Marine Drive, Lower Parel, Worli, Dadar, Powai, Thane, and Navi Mumbai with instant UPI payments.",
    },
    {
      q: "How fast is Vape Shop Mumbai express delivery across areas?",
      a: "Orders placed with Vape Shop Mumbai are dispatched within 10-15 minutes of WhatsApp confirmation. Deliveries to Bandra, Andheri, Juhu, and South Mumbai arrive in just 25 to 35 minutes with 100% Free Express Shipping. Deliveries across Thane and Navi Mumbai arrive within 35 to 45 minutes.",
    },
    {
      q: "How can I pay for my order at Vape Shop Mumbai?",
      a: "Vape Shop Mumbai offers seamless, instant digital payments via UPI (Google Pay, PhonePe, Paytm, BHIM), direct bank transfer, and QR code scan at the time of order confirmation. Delivery across Mumbai is 100% FREE on all orders.",
    },
    {
      q: "Are all products from Vape Shop Mumbai 100% genuine with factory scratch QR codes?",
      a: "Yes, every disposable vape and pod kit from Vape Shop Mumbai comes in factory shrink-wrapped packaging with an authentic scratch-off QR verification code that you can verify directly on the official brand website.",
    },
    {
      q: "Does Vape Shop Mumbai deliver to Navi Mumbai and Thane?",
      a: "Yes! While our primary express hub is in Bandra & Western Mumbai with 30 min delivery, our dedicated Mumbai & MMR courier fleet also delivers across Vashi, Belapur, Kharghar (Navi Mumbai) and Thane West on the same day.",
    },
    {
      q: "How can I contact Vape Shop Mumbai helpline?",
      a: "You can reach Vape Shop Mumbai directly via WhatsApp or phone call at +91 70826 74286 for quick menu inquiries, stock availability, and instant 30-45 min free express delivery.",
    },
    {
      q: "Is vaping legal in Mumbai and Maharashtra?",
      a: "India's Prohibition of Electronic Cigarettes Act, 2019 prohibits the commercial production, sale, distribution, import, and advertisement of electronic cigarettes. These statutory health notices and regulations apply throughout Mumbai, Maharashtra, and across India. Customers must be 21+.",
    },
  ];

  // Schema.org FAQPage Structured Data for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      aria-label="Frequently Asked Questions - Vape Shop Mumbai"
      className="site-section site-container"
    >
      {/* Schema.org FAQPage structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-white rounded-3xl border border-gray-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] p-5 sm:p-8 md:p-10 transition-all">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-9">
          <span className="text-[11px] sm:text-xs font-bold text-[#000b42] uppercase tracking-widest block mb-1.5">
            FAQS
          </span>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 tracking-tight mb-2 sm:mb-2.5">
            Vape Shop Mumbai – Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Find answers to common questions about Vape Shop Mumbai searches,
            e-cigarette regulations, vaping restrictions and health information
            across Mumbai, Navi Mumbai, and Thane.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const itemNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-gray-50/70 border-[#000b42]/40 shadow-xs"
                    : "bg-white border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span
                      className={`text-xs sm:text-sm font-extrabold shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-[#000b42] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {itemNumber}
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-[15px] font-bold text-gray-900 leading-snug">
                      {faq.q}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#000b42]/10 text-[#000b42]"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <FiChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
                    <div className="pl-10 sm:pl-11 pr-2 pt-1 border-t border-gray-200/60">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mt-2.5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Micro-Bar */}
        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-600 font-medium">
          <span className="flex items-center gap-1.5 text-gray-700">
            <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Have More Questions?</span>
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Vape%20Shop%20Mumbai%2C%20I%20have%20a%20question%20about%20delivery%20in%20my%20area.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#000b42] font-semibold hover:underline"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Chat Directly on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
