import { notFound } from "next/navigation";
import { locations, getLocationBySlug } from "@/data/locations";
import LocationDetailClient from "@/components/LocationDetailClient";

export function generateStaticParams() {
  return locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Vape Shop Mumbai",
      description: "Fast express vape delivery across Mumbai & MMR.",
    };
  }

  const pageUrl = `https://vapeshopsinmumbai.com/vape-delivery/${location.slug}`;

  return {
    title: location.title,
    description: location.metaDescription,
    keywords: location.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      url: pageUrl,
      siteName: "Vape Shop in Mumbai",
      images: [
        {
          url: "/herobanner/banner1.png",
          width: 1600,
          height: 658,
          alt: location.h1,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: location.title,
      description: location.metaDescription,
      images: ["/herobanner/banner1.png"],
    },
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const pageUrl = `https://vapeshopsinmumbai.com/vape-delivery/${location.slug}`;

  // Structured Data: LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: `Vape Shop Mumbai – ${location.name}`,
    image: "https://vapeshopsinmumbai.com/herobanner/banner1.png",
    url: pageUrl,
    telephone: "+917082674286",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Instant UPI, Google Pay, PhonePe, Paytm, QR Code Online Payment",
    description: location.metaDescription,
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
    areaServed: {
      "@type": "Place",
      name: location.name,
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "IN",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 2,
      returnMethod: "https://schema.org/ReturnByMail",
      returnFees: "https://schema.org/FreeReturn",
    },
  };

  // Structured Data: FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // Structured Data: BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Delivery Areas",
        item: "https://vapeshopsinmumbai.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.name,
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationDetailClient location={location} />
    </>
  );
}
