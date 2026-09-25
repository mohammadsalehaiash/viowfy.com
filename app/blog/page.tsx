// app/blog/page.tsx
import Link from "next/link";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { POSTS } from "@/app/_components/post";

// صورة عرض المدونة (تظهر داخل الصفحة، وأيضًا كصورة معاينة عند مشاركة
// رابط الصفحة في واتساب/تويتر/فيسبوك عبر og:image أدناه).
// ⚠️ بعض منصات المعاينة (خصوصًا واتساب) لا تدعم SVG كصورة og:image
// بشكل موثوق. إذا لاحظتِ إن معاينة الرابط ما تظهر صورة عند مشاركته，
// حوّلي هذا الملف إلى PNG/JPG بنفس المقاس (١٢٠٠×٦٣٠) واستخدمي المسار
// الجديد بدل .svg هنا وفي السطر أدناه.
const COVER_IMAGE = "//blog-cover.svg";

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
        {/* Hero */}
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

        {/* قائمة المقالات */}
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-4xl gap-6">
            {POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-[#dbe5f5] p-6 transition hover:border-[#0b63e5]/40 hover:bg-[#f3f7fd] sm:p-8">
                                <div className="overflow-hidden mb-5 rounded-2xl border border-[#dbe5f5] shadow-[0_20px_40px_-25px_rgba(10,31,92,0.35)]">
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
                <h2 className="mt-3 text-xl font-bold text-[#0a1f5c] transition group-hover:text-[#0b63e5]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#0b63e5]">
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