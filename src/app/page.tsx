import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const programs = [
  {
    slug: "이키가이",
    icon: "✦",
    title: "이키가이",
    desc: "나만의 쓸모와 가치를 발견하는 이키가이 브랜딩 & 챌린지",
    color: "bg-[var(--color-olive-light)]/20 border-[var(--color-olive)]",
    iconColor: "text-[var(--color-olive)]",
  },
  {
    slug: "나살롱",
    icon: "◎",
    title: "나살롱",
    desc: "책을 매개체로 내면을 들여다보고 나누는 치유·소통 프로그램",
    color: "bg-[var(--color-brown)]/10 border-[var(--color-brown)]",
    iconColor: "text-[var(--color-brown)]",
  },
  {
    slug: "골든라이프디자인",
    icon: "◈",
    title: "골든라이프디자인",
    desc: "지나온 삶을 수용하고 인생 2막을 주도적으로 설계하는 웰빙 코칭",
    color: "bg-[var(--color-olive)]/10 border-[var(--color-olive)]",
    iconColor: "text-[var(--color-olive)]",
  },
  {
    slug: "배움성장코칭",
    icon: "◇",
    title: "배움성장코칭",
    desc: "잠재력을 발현시키는 학생 학습 코칭 + 자녀와 함께 성장하는 학부모 코칭",
    color: "bg-[var(--color-brown)]/10 border-[var(--color-brown)]",
    iconColor: "text-[var(--color-brown)]",
  },
  {
    slug: "마음돋보기",
    icon: "◉",
    title: "마음돋보기",
    desc: "그림책으로 나의 마음을 알아보고 돌보는 감성 치유 프로그램",
    color: "bg-[var(--color-olive-light)]/20 border-[var(--color-olive-light)]",
    iconColor: "text-[var(--color-olive)]",
  },
  {
    slug: "책쓰기",
    icon: "❖",
    title: "책쓰기",
    desc: "내 안의 경험과 이야기를 엮어 세상에 단 하나뿐인 책으로 출간하는 코칭",
    color: "bg-[var(--color-brown)]/10 border-[var(--color-brown)]",
    iconColor: "text-[var(--color-brown)]",
  },
  {
    slug: "My Media",
    icon: "📰",
    title: "품격있는 브랜딩, My Media",
    desc: "인터넷 신문사 창업을 안내하는 과정입니다. 신문사 정체성 수립부터 솔루션 세팅, 기사 발행을 가이드합니다.",
    color: "bg-[var(--color-olive)]/10 border-[var(--color-olive)]",
    iconColor: "text-[var(--color-olive)]",
  },
];

const mediaItems = [
  { title: "아이의 자존감을 키우는 대화법 5가지", date: "2025.06", category: "부모코칭" },
  { title: "이키가이로 나만의 삶의 의미 찾기", date: "2025.05", category: "이키가이" },
  { title: "그림책으로 아이와 감정 나누기", date: "2025.04", category: "마음돋보기" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--color-beige)] to-[var(--color-cream)] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="md:col-span-7 text-center md:text-left">
            <FadeIn>
              <p className="text-sm tracking-[0.3em] text-[var(--color-olive)] uppercase mb-6">
                Danchosam · 단초샘
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-brown-dark)] mb-6 leading-tight">
                나다움을 찾아가는<br />온전한 나의 여정
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-[var(--color-text-muted)] mb-10">
                자신의 본질을 찾고 잠재력을 발현시켜<br className="hidden md:block" />
                온전한 나의 삶을 살아가도록, 단초샘이 함께합니다.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/programs"
                  className="px-8 py-4 rounded-full bg-[var(--color-brown)] text-white font-medium hover:bg-[var(--color-brown-dark)] transition-colors text-center"
                >
                  프로그램 살펴보기
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full border border-[var(--color-brown)] text-[var(--color-brown)] font-medium hover:bg-[var(--color-beige)] transition-colors text-center"
                >
                  무료 상담 신청
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="mt-12 flex justify-center md:justify-start gap-3 text-[var(--color-beige-dark)] text-3xl">
                <span>✦</span><span>◎</span><span>◈</span>
              </div>
            </FadeIn>
          </div>

          {/* Right: Image */}
          <div className="md:col-span-5 flex justify-center w-full">
            <FadeIn delay={0.4}>
              <div className="relative w-full max-w-[480px] aspect-[16/9] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/단초tv.png"
                  alt="단초TV 인터뷰"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-[var(--color-olive)] mb-3">PROGRAMS</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brown-dark)]">6가지 핵심 프로그램</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.08}>
              <Link
                href={`/programs/${p.slug}`}
                className={`block p-6 rounded-2xl border ${p.color} hover:shadow-md transition-shadow h-full`}
              >
                <span className={`text-3xl ${p.iconColor} mb-4 block`}>{p.icon}</span>
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2">{p.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{p.desc}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="bg-[var(--color-beige)] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brown-dark)] mb-8">
              &ldquo;나다움이란,<br />자신의 본질을 찾고<br />잠재력을 발현시키는 것&rdquo;
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
              단초샘은 개인이 가진 고유한 빛을 발견하고, 그것을 삶 속에 온전히 펼쳐낼 수 있도록 곁에서 함께 걷는 코치입니다.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-[var(--color-brown)] underline underline-offset-4 hover:text-[var(--color-brown-dark)] transition-colors"
            >
              단초샘 더 알아보기 →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Media Highlight */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <p className="text-sm tracking-widest text-[var(--color-olive)] mb-3">MEDIA</p>
              <h2 className="text-3xl font-bold text-[var(--color-brown-dark)]">에듀마인 부모저널</h2>
            </div>
            <Link
              href="/media"
              className="text-sm text-[var(--color-brown)] underline underline-offset-4 whitespace-nowrap"
            >
              칼럼 더보기 →
            </Link>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mediaItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-[var(--color-beige)] border border-[var(--color-beige-dark)] hover:shadow-md transition-shadow">
                <span className="text-xs text-[var(--color-olive)] font-medium mb-3 block">{item.category}</span>
                <h3 className="font-bold text-[var(--color-text)] mb-4 leading-snug">{item.title}</h3>
                <span className="text-xs text-[var(--color-text-muted)]">{item.date}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[var(--color-brown-dark)]">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-beige)] mb-6">
              지금 단초샘과 함께<br />나다움의 여정을 시작하세요
            </h2>
            <p className="text-[var(--color-beige-dark)] mb-10">
              어떤 프로그램이 나에게 맞을지 모르겠다면, 무료 상담으로 시작할 수 있습니다.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 rounded-full bg-[var(--color-beige)] text-[var(--color-brown-dark)] font-bold hover:bg-white transition-colors"
            >
              무료 상담 신청하기
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
