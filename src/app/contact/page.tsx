import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "상담 신청 | 단초샘",
  description: "단초샘 프로그램 무료 상담을 신청하세요.",
};

const faqs = [
  {
    q: "어떤 프로그램이 저에게 맞는지 모르겠어요.",
    a: "상담을 통해 현재 상황과 필요를 파악한 후, 가장 적합한 프로그램을 함께 찾아드립니다. 먼저 문의해 주세요.",
  },
  {
    q: "온라인으로도 진행이 가능한가요?",
    a: "네, 대부분의 프로그램은 화상(Zoom) 또는 대면 중 선택하실 수 있습니다.",
  },
  {
    q: "1:1 코칭과 그룹 프로그램 중 어떤 것이 좋을까요?",
    a: "개인의 상황에 집중하길 원하신다면 1:1 코칭을, 함께 나누며 성장하고 싶다면 소그룹 프로그램을 추천합니다.",
  },
  {
    q: "비용은 어떻게 되나요?",
    a: "프로그램마다 다르며, 상담 후 안내해 드립니다. 초기 상담은 무료로 진행됩니다.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="bg-[var(--color-beige)] py-20 px-6 text-center">
        <FadeIn>
          <p className="text-sm tracking-widest text-[var(--color-olive)] mb-4">CONTACT</p>
          <h1 className="text-4xl font-bold text-[var(--color-brown-dark)] mb-4">상담 신청</h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            편하게 문의해 주세요.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 px-6 max-w-2xl mx-auto">
        <FadeIn>
          <ContactForm />
        </FadeIn>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--color-beige)] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--color-brown-dark)] mb-10 text-center">자주 묻는 질문</h2>
          </FadeIn>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.08}>
                <div className="p-6 rounded-2xl bg-white border border-[var(--color-beige-dark)]">
                  <p className="font-bold text-[var(--color-text)] mb-3">Q. {faq.q}</p>
                  <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">A. {faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
