import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import ProductDetailClient from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Vape Shop Mumbai",
      description: "The requested vape product was not found at Vape Shop Mumbai.",
    };
  }

  return {
    title: `${product.name} | Vape Shop in Mumbai`,
    description: `Buy original ${product.name} at Vape Shop in Mumbai with 30-45 mins free express delivery. 100% authentic with scratch QR verification, ${product.specs}, Instant UPI payment available across all Mumbai areas.`,
    keywords: [
      product.name,
      `${product.brand} Mumbai`,
      `buy ${product.name} online Mumbai`,
      "vape shop mumbai",
      "vape shop in mumbai",
      "smoke shop near me mumbai",
      "vape store mumbai",
      "free vape delivery mumbai",
      "disposable vape mumbai",
    ],
    alternates: {
      canonical: `https://vapeshopsinmumbai.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | Vape Shop in Mumbai`,
      description: `Buy authentic ${product.name} in Mumbai with 30-45 mins free express delivery across Mumbai & MMR.`,
      url: `https://vapeshopsinmumbai.com/products/${product.slug}`,
      siteName: "Vape Shop in Mumbai",
      images: [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.alt,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Vape Shop in Mumbai`,
      description: `100% authentic ${product.name} with 30-45 mins free delivery in Mumbai. Instant UPI available.`,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 3);

  // Schema.org Product JSON-LD (Fully Compliant with Google Merchant Listings)
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://vapeshopsinmumbai.com${product.image}`,
    description: product.description,
    sku: product.slug,
    mpn: String(product.id),
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewsCount,
    },
    review:
      product.reviews && product.reviews.length > 0
        ? product.reviews.map((r) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: r.author || r.name || "Verified Customer",
            },
            datePublished: "2025-01-15",
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating || 5,
              bestRating: 5,
            },
            reviewBody: r.comment || "Authentic quality and superfast delivery in Mumbai.",
          }))
        : undefined,
    offers: {
      "@type": "Offer",
      url: `https://vapeshopsinmumbai.com/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      validFrom: "2025-01-01",
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Vape Shop Mumbai",
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 2,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
        returnShippingFeesAmount: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
          addressRegion: "Maharashtra",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "d",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "d",
          },
        },
      },
    },
  };

  // Schema.org FAQPage JSON-LD
  const faqJsonLd =
    product.faqs && product.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  // Schema.org BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
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
        name: "Products",
        item: "https://vapeshopsinmumbai.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.brand,
        item: "https://vapeshopsinmumbai.com/products",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: product.name,
        item: `https://vapeshopsinmumbai.com/products/${product.slug}`,
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProductDetailClient product={product} relatedProducts={relatedProducts} />
    </main>
  );
}
