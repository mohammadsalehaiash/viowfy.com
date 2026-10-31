// app/blog/page.tsx
import Link from "next/link";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { POSTS } from "@/app/_components/post";

// ⚠️ بعض منصات المعاينة (خصوصًا واتساب) لا تدعم SVG كصورة og:image.
// لو ما ظهرت المعاينة، حوّليها إلى PNG/JPG بمقاس 1200×630.
const COVER_IMAGE = "/blog-cover.svg";

export const metadata = {
  title: "المدونة | فيوفاي",
  description:
    "مقالات ودلائل حول توثيق الأنشطة التجارية في ميتا، وربط واتساب بيزنس API.",
  openGraph: {
    images: [{ url: COVER_IMAGE, width: 1200, height: 630 }],
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main dir="rtl" className="bg-white">
        <section className="bg-[#f3f7fd] px-6 pb-14 pt-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="mt-8 text-3xl font-bold text-[#0a1f5c] sm:text-4xl">
              المدونة
            </h1>
            <p className="mt-4 text-base leading-loose text-slate-600">
              مقالات ودلائل حول توثيق الأنشطة التجارية في ميتا، وربط
              واتساب بيزنس API، وكل ما يخص التكاملات التقنية معها.
            </p>
          </div>
        </section>

        <section className="px-6 py-16">
          {/* جوال: عمود واحد | تابلت: عمودين | سطح المكتب: ٣ في الصف والباقي ينزل */}
          <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-[#dbe5f5] p-5 transition hover:border-[#0b63e5]/40 hover:bg-[#f3f7fd]"
              >
                <div className="mb-5 overflow-hidden rounded-xl border border-[#dbe5f5] shadow-[0_20px_40px_-25px_rgba(10,31,92,0.35)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/blog-header-image.svg"
                    alt="فيوفاي - توثيق ميتا وربط واتساب بيزنس API"
                    className="h-auto w-full"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#3eead0]" />
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-3 text-lg font-bold leading-snug text-[#0a1f5c] transition group-hover:text-[#0b63e5]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[#0b63e5]">
                  اقرأ المقال ←
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}