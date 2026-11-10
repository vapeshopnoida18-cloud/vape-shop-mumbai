import Link from "next/link";
import Image from "next/image";
import { FiClock, FiArrowRight, FiBookOpen, FiShield, FiTag } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { blogs } from "@/data/blogs";
import { WHATSAPP_NUMBER } from "@/data/products";

export default function HomeBlogs() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Vape Shop Mumbai, I read your vape buyer guide and have a question about flavors and express delivery."
  )}`;

  return (
    <section
      aria-label="Vape Shop Mumbai Guides and News"
      className="site-section site-container"
    >
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_12px_40px_-10px_rgba(0,11,66,0.06),0_2px_12px_-2px_rgba(0,0,0,0.02)] p-5 sm:p-8 md:p-10 transition-all overflow-hidden relative">
        
        {/* Subtle Decorative Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-b from-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 pb-5 border-b border-slate-100 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#000b42]/10 border border-[#000b42]/20 text-[#000b42] text-[11px] sm:text-xs font-bold mb-2 shadow-2xs">
              <FiBookOpen className="w-3.5 h-3.5" />
              <span>VAPE SHOP MUMBAI KNOWLEDGE HUB</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Latest Vape Guides &amp; <span className="text-[#000b42]">Mumbai Buyer Insights</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
              Authentic scratch QR verification steps, 2026 top disposable vapes, and 30-min doorstep delivery guides curated for Mumbai vapers.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#000b42] text-slate-800 hover:text-white border border-slate-200/80 hover:border-[#000b42] text-xs font-bold transition-all duration-200 shadow-2xs group"
            >
              <span>Explore All Guides</span>
              <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Cards Modern E-Commerce Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative z-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white rounded-2xl border border-slate-200/80 hover:border-[#000b42]/35 shadow-2xs hover:shadow-[0_12px_28px_-6px_rgba(0,11,66,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              <div>
                {/* Product-Focused Curated Media Canvas */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100/70 p-3 border-b border-slate-100 flex items-center justify-center">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain p-2 group-hover:scale-108 transition-transform duration-500"
                  />
                  
                  {/* Category Pill Tag (Floating Glass Tag) */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[9px] font-bold text-white bg-[#000b42] px-2.5 py-1 rounded-lg border border-white/20 shadow-2xs tracking-wide uppercase">
                      {blog.category}
                    </span>
                  </div>

                  {/* Read Time Tag with Ambient Glass Pill */}
                  <div className="absolute bottom-2.5 right-2.5 z-10 flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-200/80 text-[10px] text-slate-700 font-semibold shadow-2xs">
                    <FiClock className="w-2.5 h-2.5 text-[#000b42]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-4.5">
                  <span className="text-[10px] text-slate-400 font-semibold block mb-1.5 uppercase tracking-wider">
                    {blog.publishDate} • {blog.author}
                  </span>

                  <h3 className="text-sm sm:text-[14px] font-bold text-slate-900 group-hover:text-[#000b42] transition-colors leading-[1.35] line-clamp-2 mb-2">
                    <Link href={`/blog/${blog.slug}`} className="hover:underline">
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer with Clean Read CTA */}
              <div className="p-4 sm:p-4.5 pt-0 border-t border-slate-100 mt-2">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex items-center justify-between w-full text-xs font-bold text-[#000b42] group-hover:text-[#00072e] pt-2.5 group/link"
                >
                  <span className="group-hover/link:underline">Read Full Article</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Trust CTA Micro-Bar */}
        <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 relative z-10">
          <div className="flex items-center gap-2">
            <FiShield className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-700">
              Need personal recommendation on which disposable vape fits your taste?
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white bg-gradient-to-r from-[#000b42] via-[#00105c] to-[#000b42] hover:from-[#00072e] hover:to-[#00072e] px-4 py-2 rounded-xl transition-all shadow-xs cursor-pointer border border-[#000b42]/30"
          >
            <FaWhatsapp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ask Our Mumbai Experts on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}

