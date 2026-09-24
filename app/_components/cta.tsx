import { EMAIL, WHATSAPP } from "@/app/_components/content";

export default function CTA() {
  return (
    <section dir="rtl" className="bg-white px-5 pb-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-bl from-brand via-navy to-navy-deep p-10 text-white md:p-16">
        <h2 className="max-w-xl text-3xl font-extrabold leading-snug md:text-4xl">جاهز توثّق نشاطك التجاري؟</h2>
        <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">
          احجز استشارة مجانية مدتها 15 دقيقة، نراجع فيها حسابك الحالي ونوضح لك خطوات التوثيق المناسبة لحالتك.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`https://wa.me/${WHATSAPP}`} className="rounded-xl bg-mint px-6 py-3.5 font-bold text-navy-deep transition hover:bg-white">
            تواصل عبر واتساب
          </a>
          <a href={`mailto:${EMAIL}`} className="rounded-xl px-6 py-3.5 font-semibold text-white ring-1 ring-white/40 transition hover:bg-white/10">
            راسلنا عبر البريد
          </a>
        </div>
      </div>
    </section>
  );
}