import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FiClock, FiCalendar, FiUser, FiArrowLeft, FiShare2, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { WHATSAPP_NUMBER } from "@/data/products";

export function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Vape Shop Mumbai",
      description: "The requested vape guide was not found.",
    };
  }

  const pageUrl = `https://vapeshopsinmumbai.com/blog/${blog.slug}`;

  return {
    title: `${blog.title} | Vape Shop Mumbai`,
    description: blog.metaDescription,
    keywords: blog.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.metaDescription,
      url: pageUrl,
      siteName: "Vape Shop in Mumbai",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.metaDescription,
      images: [blog.image],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const pageUrl = `https://vapeshopsinmumbai.com/blog/${blog.slug}`;
  const otherBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi *Vape Shop Mumbai*, I was reading your guide "${blog.title}". Can you help me order the recommended devices with express delivery in Mumbai?`
  )}`;

  // Schema.org BlogPosting / Article JSON-LD
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    image: `https://vapeshopsinmumbai.com${blog.image}`,
    datePublished: "2026-01-10T09:00:00+05:30",
    dateModified: "2026-01-15T12:00:00+05:30",
    author: {
      "@type": "Organization",
      name: blog.author,
      url: "https://vapeshopsinmumbai.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Vape Shop Mumbai",
      logo: {
        "@type": "ImageObject",
        url: "https://vapeshopsinmumbai.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  // Schema.org BreadcrumbList JSON-LD
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
        name: "Blog",
        item: "https://vapeshopsinmumbai.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.shortTitle,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
            <li>
              <Link href="/blog" className="hover:text-[#000b42] transition-colors">
                Guides &amp; Articles
              </Link>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-900 truncate max-w-xs sm:max-w-md">
              {blog.shortTitle}
            </li>
          </ol>
        </div>
      </nav>

      {/* 2. Article Header Hero */}
      <header className="site-section site-container pb-0">
        <div className="max-w-4xl mx-auto space-y-4 text-center sm:text-left">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#000b42] hover:underline mb-2"
          >
            <FiArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Guides</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-[11px] font-bold text-white bg-[#000b42] px-3 py-1 rounded-full uppercase tracking-wider">
              {blog.category}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              <FiClock className="w-3.5 h-3.5 text-gray-400" />
              <span>{blog.readTime}</span>
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="flex items-center gap-1 text-xs text-gray-500 font-medium">
              <FiCalendar className="w-3.5 h-3.5 text-gray-400" />
              <span>{blog.publishDate}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
            {blog.title}
          </h1>

          <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 text-xs text-gray-600">
            <span className="flex items-center gap-1.5 font-medium">
              <FiUser className="w-3.5 h-3.5 text-[#000b42]" />
              <span>Published by {blog.author}</span>
            </span>
          </div>
        </div>
      </header>

      {/* 3. Featured Image */}
      <div className="site-container my-6 sm:my-8">
        <div className="max-w-4xl mx-auto relative h-64 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* 4. Main Content Body + Sidebar */}
      <main className="site-container pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Article Content (8 Cols) */}
          <article className="lg:col-span-8">
            <div
              className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed space-y-4
                [&>h2]:text-xl sm:[&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:pt-4 [&>h2]:border-t [&>h2]:border-gray-100
                [&>p]:text-sm sm:[&>p]:text-base [&>p]:leading-relaxed [&>p]:text-gray-600
                [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:text-sm sm:[&>ul]:text-base [&>ul]:text-gray-600
                [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:text-sm sm:[&>ol]:text-base [&>ol]:text-gray-600
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#000b42] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-700
              "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Bottom In-Article CTA Box */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-[#0b192e] to-[#173357] text-white border border-[#000b42]/40 shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <FiCheckCircle className="w-4 h-4" />
                <span>Express Doorstep Delivery in Mumbai</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-white">
                Ready to order authentic vapes in Mumbai?
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Connect directly with our 24/7 Mumbai WhatsApp order desk. Get verified factory-sealed Geek Bar, Elf Bar, and Lost Mary with 30-45 mins free delivery and instant UPI payments.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-transform active:scale-95 shadow-lg"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  <span>Order on WhatsApp (30 Mins Delivery)</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sticky Sidebar (4 Cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Order Widget */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-5 space-y-4">
              <span className="text-[11px] font-bold text-[#000b42] uppercase tracking-wider block">
                MUMBAI EXPRESS DESK
              </span>
              <h3 className="text-sm font-bold text-gray-900 leading-snug">
                Need Help Choosing the Right Flavor?
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our knowledgeable Mumbai curators can help match your desired puff count, nic strength, and flavor profile.
              </p>
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#000b42] hover:bg-[#00072e] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Chat with an Expert</span>
              </a>
            </div>

            {/* Popular Guides */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Related Mumbai Guides
              </h3>
              <div className="space-y-3 pt-1">
                {otherBlogs.map((other) => (
                  <Link
                    key={other.id}
                    href={`/blog/${other.slug}`}
                    className="block group border-b border-gray-100 pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="text-[10px] font-semibold text-[#000b42] block mb-0.5">
                      {other.category}
                    </span>
                    <h4 className="text-xs font-bold text-gray-800 group-hover:text-[#000b42] transition-colors leading-snug">
                      {other.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Top Localities Quick Links */}
            <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                Popular Delivery Hubs
              </h3>
              <div className="flex flex-wrap gap-1.5 text-xs">
                <Link
                  href="/vape-delivery/bandra-west-mumbai"
                  className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#000b42] hover:text-white text-gray-700 transition-colors text-[11px]"
                >
                  Bandra West
                </Link>
                <Link
                  href="/vape-delivery/andheri-west-mumbai"
                  className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#000b42] hover:text-white text-gray-700 transition-colors text-[11px]"
                >
                  Andheri West
                </Link>
                <Link
                  href="/vape-delivery/juhu-mumbai"
                  className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#000b42] hover:text-white text-gray-700 transition-colors text-[11px]"
                >
                  Juhu
                </Link>
                <Link
                  href="/vape-delivery/colaba-mumbai"
                  className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#000b42] hover:text-white text-gray-700 transition-colors text-[11px]"
                >
                  Colaba
                </Link>
                <Link
                  href="/vape-delivery/powai-hiranandani-mumbai"
                  className="px-2.5 py-1 rounded-lg bg-gray-100 hover:bg-[#000b42] hover:text-white text-gray-700 transition-colors text-[11px]"
                >
                  Powai
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

