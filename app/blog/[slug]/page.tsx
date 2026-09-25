// app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import { POSTS, getPostBySlug } from "@/app/_components/post";

// يبني رابط ثابت لكل مقال عند البناء (Static Generation)
export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main dir="rtl" className="bg-white">
        <article className="px-6 py-20">
          <div className="mx-auto max-w-2xl">
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#0b63e5] hover:text-[#0a1f5c]"
            >
              ← الرجوع للمدونة
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs text-slate-500">
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-[#3eead0]" />
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-3 text-2xl font-bold leading-[1.5] text-[#0a1f5c] sm:text-3xl">
              {post.title}
            </h1>

            <div className="mt-8 space-y-5">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-base leading-loose text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* دعوة تواصل */}
        <section className="bg-gradient-to-b from-[#0a1f5c] to-[#06143d] px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">
            عندك نشاط تجاري وتبي توثّقه؟
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[#dbe5f5]">
            احكيلنا وضعك الحالي، ونرد عليك بالخطوات المناسبة لحالتك تحديدًا.
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#3eead0] px-6 py-3 text-sm font-semibold text-[#06143d] transition hover:bg-[#33d9c0]"
          >
            تواصل معنا
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}