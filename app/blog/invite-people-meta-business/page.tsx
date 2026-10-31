// app/blog/invite-people-meta-business/page.tsx
import Link from "next/link";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

const TITLE = "كيف ترسل دعوة لشخص إلى محفظة الأعمال في ميتا خطوة بخطوة";
const DESCRIPTION =
  "دليل مصوّر لإضافة شخص (موظف أو شريك أو مزوّد خدمة) إلى محفظة الأعمال، وإعطائه صلاحيات على الأصول مثل حساب واتساب بيزنس.";
const DATE = "31 أكتوبر 2026";
const READ_TIME = "4 دقائق";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
};

type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "img"; src: string; alt: string };

const CONTENT: Block[] = [
  {
    type: "p",
    text: "إذا كنت تبي أحد يساعدك في إدارة نشاطك التجاري على ميتا، سواء موظف أو شريك أو مزوّد تقني، فلازم تدعوه أول شيء إلى محفظة الأعمال (Business Portfolio). الدعوة تتم بإيميله، وتحدد له بالضبط وش يقدر يشوف ويدير. الخطوات كلها من إعدادات الأعمال في business.facebook.com.",
  },

  { type: "h", text: "الخطوة 1: افتح صفحة الأشخاص" },
  {
    type: "p",
    text: "ادخل على الإعدادات، ثم من القائمة الجانبية اختر «المستخدمون» ثم «الأشخاص». بتشوف قائمة الأشخاص الموجودين حاليًا في المحفظة مع آخر نشاط لكل واحد وحالة وصوله.",
  },
  { type: "img", src: "/blog2/2.png", alt: "صفحة الأشخاص في إعدادات الأعمال" },

  { type: "h", text: "الخطوة 2: اضغط «دعوة الأشخاص»" },
  {
    type: "p",
    text: "الزر الأزرق في أعلى الصفحة. بتفتح لك نافذة الدعوة وفيها أربع مراحل: إدخال البريد، منح الصلاحية، تعيين الأصول، ثم المراجعة.",
  },

  { type: "h", text: "الخطوة 3: أدخل البريد الإلكتروني" },
  {
    type: "p",
    text: "اكتب إيميل الشخص اللي تبي تدعوه. ولو الوصول مؤقت، مثل مستشار أو فريق خارجي لفترة محددة، فعّل خيار «وصول مؤقت» من الإعدادات الإضافية. بعدين اضغط «التالي».",
  },
  { type: "img", src: "/blog2/3.png", alt: "إدخال البريد الإلكتروني للشخص المدعو" },

  { type: "h", text: "الخطوة 4: حدد مستوى الصلاحية" },
  {
    type: "p",
    text: "عندك خياران: «صلاحية وصول جزئية» وهي الأساسية، وتعطي الشخص وصول للأصول اللي تعيّنها له فقط، و«صلاحية الوصول الكامل» وهي تعطيه تحكم كامل بالمحفظة، ويقدر يعيّن أشخاص آخرين ويحذف المحفظة. ميتا نفسها تنصح بتقييد عدد الأشخاص اللي عندهم وصول كامل، فاعطِ الصلاحية الكاملة بس لمن تثق فيه تمامًا، واكتفِ بالجزئية لغيره.",
  },
  { type: "img", src: "/blog2/4.png", alt: "منح صلاحية الوصول إلى حافظة الأعمال" },

  { type: "h", text: "الخطوة 5: عيّن الأصول" },
  {
    type: "p",
    text: "اختر الأصل اللي تبي الشخص يشتغل عليه، مثل صفحة فيسبوك أو حساب إنستغرام أو حساب واتساب بيزنس.",
  },
  { type: "img", src: "/blog2/5.png", alt: "اختيار أصل النشاط التجاري (حساب واتساب)" },
  {
    type: "p",
    text: "بعد ما تختار الأصل تقدر تحدد صلاحياته بالتفصيل: وصول جزئي مثل عرض قوالب الرسائل فقط أو عرضها وإدارتها، أو وصول كامل يشمل إدارة الإعدادات وتعيين المستخدمين وعرض معلومات الدفع وإرسال الرسائل. ولو بغيت تشيل أصل من الدعوة، تقدر تضغط «إزالة أصل النشاط التجاري».",
  },
  { type: "img", src: "/blog2/6.png", alt: "تحديد صلاحيات الشخص على حساب واتساب" },

  { type: "h", text: "الخطوة 6: راجع وأرسل" },
  {
    type: "p",
    text: "في صفحة المراجعة بيظهر لك ملخص: الإيميل اللي بتدعوه، والمحفظة، والأصول مع مستوى الصلاحية لكل أصل. إذا كل شي صحيح اضغط «دعوة تتضمن أصلًا واحدًا» (يتغير الرقم حسب عدد الأصول)، وتنرسل الدعوة لإيميله.",
  },
  { type: "img", src: "/blog2/7.png", alt: "مراجعة الدعوة قبل الإرسال" },

  { type: "h", text: "الخطوة 7: القبول" },
  {
    type: "p",
    text: "الشخص بيوصله إيميل من ميتا فيه رابط الانضمام، ولازم يفتحه من حساب فيسبوك مرتبط بنفس الإيميل ويقبل الدعوة. بعدها يظهر اسمه في قائمة «الأشخاص» بحالة «نشط»، وتقدر تعدّل صلاحياته أو تحذفه في أي وقت من زر «التفاصيل».",
  },

  { type: "h", text: "نصائح سريعة" },
  {
    type: "p",
    text: "تأكد من كتابة الإيميل الصحيح المرتبط بحساب فيسبوك الشخص، وما تعطي وصول كامل إلا للضرورة، ولو الدعوة ما وصلت فتفقد مجلد الرسائل غير المرغوبة (Spam).",
  },
];

export default function InvitePeopleMetaBusinessPage() {
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
              <span>{DATE}</span>
              <span className="h-1 w-1 rounded-full bg-[#3eead0]" />
              <span>{READ_TIME}</span>
            </div>

            <h1 className="mt-3 text-2xl font-bold leading-[1.5] text-[#0a1f5c] sm:text-3xl">
              {TITLE}
            </h1>

            <div className="mt-8 space-y-5">
              {CONTENT.map((block, i) => {
                if (block.type === "h") {
                  return (
                    <h2
                      key={i}
                      className="pt-4 text-xl font-bold text-[#0a1f5c]"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "img") {
                  return (
                    <div
                      key={i}
                      className="overflow-hidden rounded-2xl border border-[#dbe5f5] shadow-[0_20px_40px_-25px_rgba(10,31,92,0.35)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={block.src}
                        alt={block.alt}
                        className="h-auto w-full"
                      />
                    </div>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-base leading-loose text-slate-600"
                  >
                    {block.text}
                  </p>
                );
              })}
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