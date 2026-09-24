import { STATS } from "@/app/_components/content";

const Check = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

const CARD_ROWS = [
  { label: "مراجعة المستندات", state: "done" },
  { label: "ربط Business Manager", state: "done" },
  { label: "تقديم طلب التوثيق", state: "done" },
  { label: " التحقق من النشاط", state: "wait" },
];

export default function Hero() {
  return (
    <section  dir="rtl" id="top" className="relative overflow-hidden bg-mist">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-brand ring-1 ring-line">
            <span className="h-2 w-2 rounded-full bg-mint" />
            متخصصون في توثيق الأنشطة التجارية على ميتا
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.25] text-navy md:text-5xl">
            نوثّق نشاطك التجاري على ميتا بدون تعقيد ولا رفض
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-navy/70">
            من تجهيز الأوراق إلى تفعيل شارة التوثيق، نتولى كامل إجراءات التحقق التقني لحسابك على فيسبوك وانستقرام
            وواتساب بيزنس — بخطوات واضحة ومتابعة لحق الاعتماد.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://api.whatsapp.com/send/?phone=966545692545" className="rounded-xl bg-brand px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-navy">
              ابدأ إجراءات التوثيق
            </a>
            <a href="https://api.whatsapp.com/send/?phone=966545692545" className="rounded-xl bg-white px-6 py-3.5 font-semibold text-navy ring-1 ring-line transition hover:ring-brand">
              تعرّف على آلية العمل
            </a>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-8">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 mt-1 text-sm leading-6 text-navy/60">{s.label}</dt>
                <dd className="order-1 text-2xl font-extrabold text-navy md:text-3xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* بطاقة حالة الطلب */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-mint/50 via-sky/30 to-brand/20 blur-2xl" />
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-line">
            <div className="flex items-center justify-between">
              <span className="font-bold text-navy">حالة الطلب</span>
              <span className="rounded-full bg-mint/25 px-3 py-1 text-xs font-semibold text-navy">قيد الاعتماد</span>
            </div>
            <ul className="mt-6 space-y-4">
              {CARD_ROWS.map((r) => (
                <li key={r.label} className="flex items-center gap-3">
                  <span
                    className={
                      r.state === "done"
                        ? "grid h-7 w-7 place-items-center rounded-full bg-brand text-white"
                        : "grid h-7 w-7 place-items-center rounded-full border-2 border-dashed border-sky"
                    }
                  >
                    {r.state === "done" ? <Check /> : <span className="h-2 w-2 animate-pulse rounded-full bg-sky" />}
                  </span>
                  <span className={r.state === "done" ? "text-navy" : "font-semibold text-brand"}>{r.label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-mist">
              <div className="h-full w-3/4 rounded-full bg-gradient-to-l from-mint via-sky to-brand" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}