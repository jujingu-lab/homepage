import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "프로그램 | 단초샘",
  description: "이키가이, 나살롱, 골든라이프디자인, 배움성장코칭, 마음돋보기, 책쓰기 — 단초샘의 6가지 핵심 프로그램",
};

const programs = [
  {
    slug: "이키가이",
    icon: "✦",
    title: "이키가이",
    subtitle: "이키가이 브랜딩 & 챌린지",
    target: "자신만의 가치와 삶의 의미를 찾고 싶은 청장년층",
    desc: "일본의 삶의 철학 '이키가이(生き甲斐)'를 통해 나만의 쓸모와 가치, 일과 삶의 교차점을 발견합니다. 이키가이 브랜딩 워크숍과 14일 실천 다이어리 '이키가이 챌린지'로 구성됩니다.",
  },
  {
    slug: "나살롱",
    icon: "◎",
    title: "나살롱",
    subtitle: "독서 기반 내면 탐구 프로그램",
    target: "책을 통해 자신을 돌아보고 치유하고 싶은 사람",
    desc: "도서를 매개체로 자신의 내면을 깊이 들여다보고, 소그룹 안에서 진솔하게 나누는 치유·소통 프로그램입니다. 단순한 독서 모임을 넘어, 책 속 이야기를 통해 자신의 이야기를 꺼내는 시간입니다.",
  },
  {
    slug: "골든라이프디자인",
    icon: "◈",
    title: "골든라이프디자인",
    subtitle: "인생 2막 웰빙 라이프 코칭",
    target: "인생 후반기를 아름답고 후회 없이 설계하려는 중장년·시니어",
    desc: "지나온 삶의 경험을 수용하고, 앞으로의 인생 2막을 주도적으로 설계하는 코칭 프로그램입니다. 내가 원하는 삶이 무엇인지 명확히 하고, 실현 가능한 로드맵을 함께 그려나갑니다.",
  },
  {
    slug: "배움성장코칭",
    icon: "◇",
    title: "배움성장코칭",
    subtitle: "학생·학부모 맞춤 성장 코칭",
    target: "자기주도 학습을 원하는 학생 & 자녀와 건강하게 소통하고 싶은 부모",
    desc: "학생 대상으로는 잠재력을 발현시키고 자기주도적 성장을 이끄는 학습 코칭을, 부모 대상으로는 자녀와 건강하게 소통하며 함께 성장하는 학부모 코칭을 제공합니다.",
  },
  {
    slug: "마음돋보기",
    icon: "◉",
    title: "마음돋보기",
    subtitle: "그림책 정서 수업",
    target: "그림책을 통해 자신의 감정을 이해하고 마음을 치유하고 싶은 사람",
    desc: "그림책을 보며 나의 마음을 알아보고 돌보는 감성 치유 프로그램입니다. 단순해 보이는 그림 속에 담긴 깊은 감정의 언어들을 통해 자신의 내면과 만나는 시간을 갖습니다.",
  },
  {
    slug: "책쓰기",
    icon: "❖",
    title: "책쓰기",
    subtitle: "내 이야기 출간 기획 코칭",
    target: "자신의 이야기를 책으로 남기고 싶은 예비 작가",
    desc: "내 안의 경험과 진솔한 이야기를 엮어 세상에 단 하나뿐인 책으로 출간하는 기획 코칭입니다. 막연한 꿈을 현실로 만들 수 있도록 기획부터 출판까지 전 과정을 함께합니다.",
  },
  {
    slug: "My Media",
    icon: "📰",
    title: "품격있는 브랜딩, My Media",
    subtitle: "인터넷 신문사 창업 과정",
    target: "나만의 미디어를 만들고 싶은 누구나",
    desc: "인터넷 신문사 창업을 안내하는 과정입니다. 신문사 정체성 수립 부터 인터넷 신문사 솔루션 세팅, 기사 발행을 가이드합니다.",
    recruiting: "https://blog.naver.com/parks07300/224238932483",
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-16">
      <section className="bg-[var(--color-beige)] py-20 px-6 text-center">
        <FadeIn>
          <p className="text-sm tracking-widest text-[var(--color-olive)] mb-4">PROGRAMS</p>
          <h1 className="text-4xl font-bold text-[var(--color-brown-dark)] mb-4">6가지 핵심 프로그램</h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            당신이 어떤 여정 위에 있든, 단초샘과 함께하는 프로그램이 있습니다.
          </p>
        </FadeIn>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto space-y-12">
        {programs.map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.05}>
            <div className="p-8 rounded-2xl bg-white border border-[var(--color-beige-dark)] hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl text-[var(--color-brown)]">{p.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h2 className="text-2xl font-bold text-[var(--color-brown-dark)]">{p.title}</h2>
                    {"recruiting" in p && p.recruiting && (
                      <a href={p.recruiting as string} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-olive)] text-white hover:opacity-80 transition-opacity">모집 중</a>
                    )}
                  </div>
                  <p className="text-sm text-[var(--color-olive)]">{p.subtitle}</p>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] bg-[var(--color-beige)] inline-block px-3 py-1 rounded-full mb-4">
                대상: {p.target}
              </p>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">{p.desc}</p>
              <Link
                href={`/programs/${p.slug}`}
                className="text-sm text-[var(--color-brown)] underline underline-offset-4 hover:text-[var(--color-brown-dark)] transition-colors"
              >
                자세히 보기 →
              </Link>
            </div>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
