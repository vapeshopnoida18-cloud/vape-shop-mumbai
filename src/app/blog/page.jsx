import Link from "next/link";
import Image from "next/image";
import { FiClock, FiCalendar, FiArrowRight, FiBookOpen, FiShield } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { blogs } from "@/data/blogs";
import { WHATSAPP_NUMBER } from "@/data/products";

export const metadata = {
  title: "Vape Guides, Buying Insights & Reviews | Vape Shop Mumbai",
  description:
    "Explore authentic vape guides, 2026 disposable rankings, scratch QR code verification tutorials, and 30-min Mumbai delivery insights from Vape Shop Mumbai.",
  keywords: [
    "vape shop mumbai blog",
    "vape guides mumbai",
    "best disposable vapes mumbai",
    "verify geek bar qr code",
    "vape delivery mumbai guide",
    "vape shop in mumbai",
  ],
  alternates: {
    canonical: "https://vapeshopsinmumbai.com/blog",
  },
  openGraph: {
    title: "Vape Guides, Buying Insights & Reviews | Vape Shop Mumbai",
    description:
      "Expert vape guides, authentic scratch QR verification steps, and 30-min Mumbai delivery tutorials.",
    url: "https://vapeshopsinmumbai.com/blog",
    siteName: "Vape Shop in Mumbai",
    type: "website",
  },
};

export default function BlogListingPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Vape Shop Mumbai, I am browsing your vape guides and need advice on available flavors."
  )}`;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Vape Shop Mumbai Guides & Insights",
    url: "https://vapeshopsinmumbai.com/blog",
    description:
      "Expert vape guides, authentic scratch QR verification steps, and 30-min Mumbai delivery tutorials.",
  };

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="border-b border-gray-100 bg-gray-50/60">
        <div className="site-container py-2.5 sm:py-3">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#000b42] transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-900">Guides &amp; Articles</li>
          </ol>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="site-section site-container text-center max-w-3xl mx-auto pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#000b42]/10 border border-[#000b42]/20 text-[#000b42] text-xs font-semibold mb-3">
          <FiBookOpen className="w-3.5 h-3.5" />
          <span>VAPE SHOP MUMBAI KNOWLEDGE DESK</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3">
          Vape Guides, Reviews &amp; Mumbai Delivery Insights
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Learn how to identify 100% genuine disposable vapes with scratch QR codes, discover top puff devices in 2026, and experience 30-minute doorstep delivery across Mumbai.
        </p>
      </section>

      {/* 3. Blogs Grid */}
      <section className="site-container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-3xl border border-gray-200/80 hover:border-[#000b42]/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-white bg-[#000b42] px-3 py-1 rounded-full shadow-md">
                      {blog.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 flex items-center gap-3 text-xs text-gray-200 font-medium">
                    <span className="flex items-center gap-1">
                      <FiClock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{blog.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
                      <span>{blog.publishDate}</span>
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-2">
                  <span className="text-xs text-gray-400 font-medium block">
                    By {blog.author}
                  </span>
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-[#000b42] transition-colors leading-snug">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-gray-100 mt-2">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#000b42] group-hover:text-[#00072e] pt-3"
                >
                  <span>Read In-Depth Guide</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0b192e] to-[#173357] text-white border border-[#000b42]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              24/7 MUMBAI WHATSAPP DESK
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Have Questions About Devices or Delivery Times?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Our team delivers across Bandra, Andheri, Colaba, Juhu, and Powai within 30 to 45 minutes with verified scratch QR codes.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-transform active:scale-95 shadow-lg shrink-0"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}

