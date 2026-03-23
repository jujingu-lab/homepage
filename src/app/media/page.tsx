import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "에듀마인 부모저널 | 단초샘",
  description: "단초샘이 연재하는 에듀마인 부모저널 교육·코칭 칼럼 모음",
};

const columns = [
  { title: "학습을 설계하라 - 하루 10분 플래너 코칭 대화법", category: "배움성장코칭", link: "https://www.edumine.kr/news/470939" },
  { title: "성적보다 강한 무기, 성공하는 아이에게 반드시 있는 그릿의 정체", category: "배움성장코칭", link: "https://www.edumine.kr/news/461888" },
  { title: "부모의 사랑에도 경계가 필요하다 - 한계 설정이 아이를 성장시킨다", category: "부모코칭", link: "https://www.edumine.kr/news/451034" },
  { title: "학습의 뿌리는 감정에서 자란다: 초등 저학년 공부정서의 힘", category: "배움성장코칭", link: "https://www.edumine.kr/news/442482" },
  { title: "중학교 수학이 무너진 아이들, 개념부터 다시 세우는 되살리기 학습법", category: "배움성장코칭", link: "https://www.edumine.kr/news/460359" },
  { title: "새학기 증후군, 불안의 구조를 읽다 - 왜 3월만 되면 아플까", category: "부모코칭", link: "https://www.edumine.kr/news/471294" },
];

export default function MediaPage() {
  return (
    <div className="pt-16">
      <section className="bg-[var(--color-beige)] py-20 px-6 text-center">
        <FadeIn>
          <p className="text-sm tracking-widest text-[var(--color-olive)] mb-4">MEDIA</p>
          <h1 className="text-4xl font-bold text-[var(--color-brown-dark)] mb-4">에듀마인 부모저널</h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto mb-6">
            단초샘이 연재하는 교육·코칭·라이프 칼럼입니다.
          </p>
          <a
            href="https://www.edumine.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full border border-[var(--color-brown)] text-[var(--color-brown)] text-sm hover:bg-[var(--color-beige-dark)] transition-colors"
          >
            에듀마인 부모저널 공식 홈페이지 방문 →
          </a>
          <p className="text-sm text-[var(--color-text-muted)] mt-4">
            광고문의는 상담신청란을 활용해주세요.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[var(--color-brown-dark)] mb-10">단초샘 추천 칼럼</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {columns.map((col, i) => (
            <FadeIn key={col.title} delay={i * 0.07}>
              <a href={col.link} target="_blank" rel="noopener noreferrer" className="block p-6 rounded-2xl bg-[var(--color-beige)] border border-[var(--color-beige-dark)] hover:shadow-md transition-shadow">
                <span className="text-xs font-medium text-[var(--color-olive)] mb-3 block">{col.category}</span>
                <h3 className="font-bold text-[var(--color-text)] leading-snug">{col.title}</h3>
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
