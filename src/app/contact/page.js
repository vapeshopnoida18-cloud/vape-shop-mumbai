import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Vape Shop in Mumbai - Store Location & 24/7 Helpline",
  description:
    "Contact Vape Shop in Mumbai. Visit our retail hub at Linking Road & Hill Road Hub, Bandra West, Mumbai 400050. WhatsApp/Call: +91 70826 74286 for 30-45 min free express delivery.",
  keywords: [
    "vape shop in mumbai",
    "contact vape shop mumbai",
    "vape shop bandra west",
    "vape shop linking road mumbai",
    "vape delivery helpline mumbai",
    "vape shop mumbai phone number",
    "vape shop near me mumbai",
    "vape shop andheri west",
    "vape delivery mumbai contact",
  ],
  alternates: {
    canonical: "https://vapeshopsinmumbai.com/contact",
  },
  openGraph: {
    title: "Contact Us | Vape Shop in Mumbai - Express Delivery & Store Support",
    description:
      "Get in touch with Vape Shop in Mumbai at Linking Road & Hill Road, Bandra West. Express 30-45 min vape delivery across all Mumbai locations. Call/WhatsApp: +91 70826 74286.",
    url: "https://vapeshopsinmumbai.com/contact",
    siteName: "Vape Shop in Mumbai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Vape Shop in Mumbai",
    description:
      "Express 30-45 min vape delivery across Mumbai. Helpline: +91 70826 74286.",
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://vapeshopsinmumbai.com/contact#webpage",
        url: "https://vapeshopsinmumbai.com/contact",
        name: "Contact Vape Shop Mumbai",
        description:
          "Official contact page and retail hub of Vape Shop Mumbai at Linking Road & Hill Road Hub, Bandra West, Mumbai.",
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
              name: "Contact Us",
              item: "https://vapeshopsinmumbai.com/contact",
            },
          ],
        },
      },
      {
        "@type": "Store",
        "@id": "https://vapeshopsinmumbai.com/#store",
        name: "Vape Shop Mumbai",
        image: "https://vapeshopsinmumbai.com/logo.png",
        url: "https://vapeshopsinmumbai.com",
        telephone: "+917082674286",
        email: "vapeshopmumbai@gmail.com",
        priceRange: "₹₹",
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
            opens: "10:00",
            closes: "23:59",
          },
        ],
        areaServed: [
          "Bandra West Mumbai",
          "Andheri West Mumbai",
          "Juhu Mumbai",
          "Colaba South Mumbai",
          "Lower Parel Mumbai",
          "Worli Mumbai",
          "Powai Hiranandani",
          "Thane West",
          "Vashi Navi Mumbai",
          "Mumbai & MMR",
        ],
        paymentAccepted: "Instant UPI, UPI, Google Pay, PhonePe, Paytm",
      },
      {
        "@type": "FAQPage",
        "@id": "https://vapeshopsinmumbai.com/contact#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast is vape delivery from your Bandra West Mumbai hub?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Orders in Bandra, Khar, Andheri, and Juhu are dispatched within 20 to 30 minutes. Across South Mumbai, Powai, Thane, and Navi Mumbai, express riders reach within 30 to 45 minutes.",
            },
          },
          {
            "@type": "Question",
            name: "Can I order with Instant UPI (Google Pay, PhonePe, Paytm)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, 100% of our orders in Mumbai and Navi Mumbai support Instant UPI (Google Pay, PhonePe, Paytm) as well as direct QR code payment.",
            },
          },
          {
            "@type": "Question",
            name: "How do I verify that the vape device is 100% genuine?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every device comes in factory-sealed packaging with a scratch-off security QR code verifiable on the manufacturer portal.",
            },
          },
          {
            "@type": "Question",
            name: "What is your store location and operating timing in Mumbai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our retail hub is located at Linking Road & Hill Road Hub, Bandra West, Mumbai, Maharashtra 400050, operating daily from 10:00 AM to 12:00 Midnight.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </main>
  );
}
