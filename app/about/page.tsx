import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/_components/footer";

// صفحة "من نحن" — تصميم جديد بالكامل مبني على هوية لونية زرقاء/نيفي
// (Brand / Navy / Mint). عدّلي النصوص أدناه حسب قصة شركتكم الفعلية
// والأرقام الحقيقية قبل النشر.

const FACTS = [
  { value: "B2B", label: "أنشطة تجارية فقط" },
  { value: "ميتا", label: "تخصص واحد لا غير" },
  { value: "٤٨س", label: "متوسط أول رد" },
];

const PROCESS = [
  {
    n: "١",
    title: "نفهم وضعك الحالي",
    text: "نراجع حساب النشاط في ميتا كما هو، ونحدد بالضبط وين تتوقف الأمور ووش ناقص للاعتماد.",
  },
  {
    n: "٢",
    title: "نجهز ونربط",
    text: "نحضّر المستندات المطلوبة أو نبني الربط التقني (API، Pixel، Webhooks)، حسب طبيعة طلبك.",
  },
  {
    n: "٣",
    title: "نتابع حتى الاعتماد",
    text: "نقدّم الطلب لميتا ونضل نتابعه يوميًا، ونردّ على أي استفسار منهم بدل ما ننتظرك تتابع بنفسك.",
  },
];

const VALUES = [
  {
    title: "تخصص واحد، لا تشتت",
    text: "ميتا وتكاملاتها هي كل شغلنا، مو خدمة إضافية جنب خدمات تسويقية ثانية.",
  },
  {
    title: "شفافية بالحالة",
    text: "تعرف وين وصل طلبك أول بأول، بدون لخبطة أو انتظار بدون رد.",
  },
  {
    title: "معالجة الرفض من جذوره",
    text: "لو سبق ورفضوا طلبك، نحدد السبب الحقيقي قبل ما نعيد التقديم من جديد.",
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="bg-white">
      {/* Hero */}
      <section className="bg-[#f3f7fd] px-6 pb-16 pt-24">
        <div className="mx-auto grid max-w-5xl gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h1 className="text-3xl font-bold leading-[1.45] text-[#0a1f5c] sm:text-4xl">
              نحن فيوفاي
            </h1>
            <p className="mt-6 max-w-xl text-base leading-loose text-slate-600">
              متخصصون في توثيق الأنشطة التجارية على منصات ميتا، وربط
              واتساب بيزنس API وأي تكامل تقني ثاني معها. تسلّمنا الملف
              كامل، ونتابعه معك أول بأول لين يوصل للاعتماد.
            </p>
            <Link
              href="/#services"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#0b63e5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a1f5c]"
            >
               خدماتنا
            </Link>

            <dl className="mt-10 flex max-w-md items-center gap-6 border-t border-[#dbe5f5] pt-6">
              {FACTS.map((f, i) => (
                <div
                  key={f.label}
                  className={
                    i > 0 ? "border-e border-[#dbe5f5] ps-6" : ""
                  }
                >
                  <dt className="text-xl font-bold text-[#0b63e5]">
                    {f.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed text-slate-500">
                    {f.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* صورة الهيرو — عدّلي المسار /images/hero.jpg لمسار صورتكم الفعلي */}
          <div className="relative aspect-[4/4] w-full overflow-hidden rounded-2xl border border-[#dbe5f5] bg-white shadow-[0_20px_40px_-25px_rgba(10,31,92,0.35)]">
            <Image
              src="/about.png"
              alt="فيوفاي"
              fill
              sizes="(min-width: 710px) 20vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* القصة */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[#0a1f5c]">
            ليش بدأنا أصلاً
          </h2>
          <p className="mt-5 border-e-2 border-[#0b63e5]/25 pe-5 text-base leading-loose text-slate-600">
            كثير من الأنشطة التجارية تتعثر بتوثيق حسابها بميتا أو ربط
            واتساب بيزنس API — مو لأن الفكرة صعبة، لكن لأن الخطوات
            متفرقة والمتطلبات تتغيّر باستمرار. بنينا فيوفاي على أساس
            وحد بسيط: تسلّمنا الملف كامل، وإحنا نتابعه معك خطوة خطوة
            لين يوصل للاعتماد، بدل ما نسلّمك تعليمات وتخليك لحالك تتابع
            مع ميتا.
          </p>
        </div>
      </section>

      {/* آلية العمل */}
      <section className="bg-[#f3f7fd] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#0a1f5c]">كيف نشتغل</h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-3">
            {PROCESS.map((step) => (
              <div key={step.n}>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0b63e5]/30 text-sm font-semibold text-[#0b63e5]">
                  {step.n}
                </span>
                <h3 className="mt-3 font-semibold text-[#0a1f5c]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* القيم */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-[#0a1f5c]">وش يميّزنا</h2>
          <div className="mt-8 divide-y divide-[#dbe5f5] border-y border-[#dbe5f5]">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:items-start"
              >
                <h3 className="flex items-center gap-2 font-semibold text-[#0a1f5c]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#3eead0]" />
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* دعوة تواصل */}
      <section className="bg-gradient-to-b from-[#0a1f5c] to-[#06143d] px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-white">
          عندك نشاط تجاري وتبي توثّقه؟
        </h2>
        <p className="mx-auto mt-3 max-w-md text-[#dbe5f5]">
          احكيلنا وضعك الحالي، ونرد عليك بالخطوات المناسبة لحالتك تحديدًا.
        </p>
        {/* رابط التواصل: عدّليه ليربط على واتساب أو نموذج التواصل عندكم */}
        <Link
          href="/#contact"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#3eead0] px-6 py-3 text-sm font-semibold text-[#06143d] transition hover:bg-[#33d9c0]">
          تواصل معنا
        </Link>
      </section>

      <Footer />
    </main>
  );
}