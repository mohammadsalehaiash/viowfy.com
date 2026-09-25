// app/contact/page.tsx
"use client";

import { useState } from "react";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

const WHATSAPP_NUMBER = "966590226787";
const EMAIL = "info@viowfy.com";

const CONTACT_METHODS = [
  {
    label: "واتساب",
    value: "+966 59 022 6787",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91S17.5 2 12.04 2zm0 18.02h-.01a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.11.82.83-3.03-.19-.31a8.08 8.08 0 0 1-1.24-4.3c0-4.48 3.65-8.13 8.15-8.13 2.17 0 4.21.85 5.75 2.39a8.07 8.07 0 0 1 2.38 5.74c0 4.48-3.65 8.13-8.13 8.13zm4.47-6.09c-.24-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.78.97-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42-.14-.01-.3-.01-.46-.01a.9.9 0 0 0-.65.3c-.22.24-.85.83-.85 2.03 0 1.2.87 2.35.99 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z" />
      </svg>
    ),
  },
  {
    label: "البريد الإلكتروني",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.5 7 8.5 6 8.5-6"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");

    // ⚠️ الطريقة الحالية تفتح تطبيق البريد مع تعبئة الرسالة تلقائيًا.
    // إذا كان عندكم API أو خدمة إرسال (مثل Resend أو Formspree)، استبدلي
    // هذا الجزء باستدعاء fetch لتلك الخدمة بدل mailto.
    const subject = encodeURIComponent(`رسالة تواصل من ${form.name}`);
    const body = encodeURIComponent(
      `الاسم: ${form.name}\nالبريد: ${form.email}\n\nالرسالة:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <>
      <Header />
      <main dir="rtl" className="bg-white">
        {/* Hero */}
        <section className="bg-[#f3f7fd] px-6 pb-16 pt-24 text-center">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-3xl font-bold text-[#0a1f5c] sm:text-4xl">
              تواصل معنا
            </h1>
            <p className="mt-4 text-base leading-loose text-slate-600">
              احكيلنا وضعك الحالي، ونرد عليك بالخطوات المناسبة لحالتك
              تحديدًا. متوسط أول رد خلال ٤٨ ساعة.
            </p>
          </div>
        </section>

        {/* المحتوى */}
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            {/* بطاقات التواصل */}
            <div className="space-y-4">
              {CONTACT_METHODS.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.label === "واتساب" ? "_blank" : undefined}
                  rel={m.label === "واتساب" ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-[#dbe5f5] bg-white p-5 transition hover:border-[#0b63e5]/40 hover:bg-[#f3f7fd]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0b63e5]/10 text-[#0b63e5] transition group-hover:bg-[#0b63e5] group-hover:text-white">
                    {m.icon}
                  </span>
                  <span>
                    <span className="block text-xs text-slate-500">
                      {m.label}
                    </span>
                    <span
                      dir="ltr"
                      className="mt-0.5 block text-right font-semibold text-[#0a1f5c]"
                    >
                      {m.value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="rounded-2xl border border-[#dbe5f5] bg-[#f3f7fd] p-5 text-sm leading-relaxed text-slate-600">
                نرد على أغلب الاستفسارات نفس اليوم عبر واتساب، وهو أسرع
                وسيلة توصلينا فيها.
              </div>
            </div>

            {/* نموذج التواصل */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#dbe5f5] bg-white p-6 shadow-[0_20px_40px_-30px_rgba(10,31,92,0.35)] sm:p-8"
            >
              <div className="grid gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-semibold text-[#0a1f5c]"
                  >
                    الاسم
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="اسمك الكامل"
                    className="w-full rounded-lg border border-[#dbe5f5] bg-[#f8fafc] px-4 py-3 text-sm text-[#0a1f5c] outline-none transition placeholder:text-slate-400 focus:border-[#0b63e5] focus:bg-white focus:ring-2 focus:ring-[#0b63e5]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold text-[#0a1f5c]"
                  >
                    البريد الإلكتروني
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    dir="ltr"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-[#dbe5f5] bg-[#f8fafc] px-4 py-3 text-right text-sm text-[#0a1f5c] outline-none transition placeholder:text-slate-400 focus:border-[#0b63e5] focus:bg-white focus:ring-2 focus:ring-[#0b63e5]/15"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-semibold text-[#0a1f5c]"
                  >
                    الرسالة
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="احكيلنا عن نشاطك التجاري ووش تحتاجين بالضبط..."
                    className="w-full resize-none rounded-lg border border-[#dbe5f5] bg-[#f8fafc] px-4 py-3 text-sm text-[#0a1f5c] outline-none transition placeholder:text-slate-400 focus:border-[#0b63e5] focus:bg-white focus:ring-2 focus:ring-[#0b63e5]/15"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#0b63e5] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0a1f5c] disabled:opacity-60"
                >
                  {status === "sent" ? "تم فتح البريد ✓" : "إرسال الرسالة"}
                </button>

                <p className="text-center text-xs text-slate-400">
                  أو راسلينا مباشرة على{" "}
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-semibold text-[#0b63e5] hover:text-[#0a1f5c]"
                  >
                    {EMAIL}
                  </a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}