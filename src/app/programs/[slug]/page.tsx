import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/FadeIn";

const programs: Record<string, {
  icon: string;
  title: string;
  subtitle: string;
  target: string;
  desc: string;
  details: string[];
  cta: string;
  pdfUrl?: string;
}> = {
  이키가이: {
    icon: "✦",
    title: "이키가이",
    subtitle: "이키가이 브랜딩 & 챌린지",
    target: "자신만의 가치와 삶의 의미를 찾고 싶은 청장년층",
    desc: "일본의 삶의 철학 '이키가이(生き甲斐)'를 통해 나만의 쓸모와 가치, 일과 삶의 교차점을 발견합니다.",
    details: [
      "이키가이 4원소(좋아하는 것, 잘하는 것, 세상이 필요로 하는 것, 보상받을 수 있는 것) 탐색",
      "나만의 이키가이 지도 완성",
      "14일 실천 다이어리 '이키가이 챌린지' 제공",
      "1:1 개인 코칭 또는 소그룹 워크숍 형태 운영",
    ],
    cta: "이키가이 상담 신청하기",
  },
  나살롱: {
    icon: "◎",
    title: "나살롱",
    subtitle: "독서 기반 내면 탐구 프로그램",
    target: "책을 통해 자신을 돌아보고 치유하고 싶은 사람",
    desc: "도서를 매개체로 자신의 내면을 깊이 들여다보고, 소그룹 안에서 진솔하게 나누는 치유·소통 프로그램입니다.",
    details: [
      "매월 선정된 1권의 도서를 함께 읽고 나누기",
      "책 속 이야기를 통해 자신의 이야기 발견하기",
      "소그룹(4~8명) 형태의 안전한 나눔 공간",
      "월 1회 정기 모임 운영",
    ],
    cta: "나살롱 참여 신청하기",
  },
  골든라이프디자인: {
    icon: "◈",
    title: "골든라이프디자인",
    subtitle: "웰다잉에 이르는 웰빙 코칭",
    target: "인생 후반기를 아름답고 후회 없이 설계하려는 중장년·시니어",
    desc: "지나온 삶을 긍정적으로 수용하고, 앞으로의 인생을 나답게 주도적으로 설계하는 코칭 프로그램입니다.",
    details: [
      "지나온 삶 돌아보기 — 감사와 수용의 시간",
      "나의 강점과 자원 재발견",
      "퓨처셀프를 만나는 비전 지도 만들기",
      "나의 점을 잇는 레거시 기획",
    ],
    cta: "골든라이프 코칭 신청하기",
    pdfUrl: "/단초샘의 골든라이프디자인_과정소개.pdf",
  },
  배움성장코칭: {
    icon: "◇",
    title: "배움성장코칭",
    subtitle: "학생·학부모 맞춤 성장 코칭",
    target: "자기주도 학습을 원하는 학생 & 자녀와 건강하게 소통하고 싶은 부모",
    desc: "학생의 잠재력을 발현시키는 학습 코칭과 부모-자녀 소통을 돕는 학부모 코칭을 함께 제공합니다.",
    details: [
      "[학생] 학습 유형 및 강점 파악",
      "[학생] 자기주도 학습 습관 형성 코칭",
      "[학부모] 자녀와의 대화법 및 소통 코칭",
      "[학부모] 자녀 성장 단계 이해 및 지원 방법",
    ],
    cta: "배움성장코칭 신청하기",
  },
  마음돋보기: {
    icon: "◉",
    title: "마음돋보기",
    subtitle: "그림책 정서 수업",
    target: "그림책을 통해 자신의 감정을 이해하고 마음을 치유하고 싶은 사람",
    desc: "그림책을 보며 나의 마음을 알아보고 돌보는 감성 치유 프로그램입니다.",
    details: [
      "정서 발달에 선별된 그림책 활용",
      "그림과 이야기 속 감정 언어 탐색",
      "나의 감정 인식 및 수용 연습",
      "성인 대상 / 아동 대상 수업 분리 운영",
    ],
    cta: "마음돋보기 수업 신청하기",
  },
  책쓰기: {
    icon: "❖",
    title: "책쓰기",
    subtitle: "내 이야기 출간 기획 코칭",
    target: "자신의 이야기를 책으로 남기고 싶은 예비 작가",
    desc: "내 안의 경험과 진솔한 이야기를 엮어 세상에 단 하나뿐인 책으로 출간하는 기획 코칭입니다.",
    details: [
      "책 주제 및 콘셉트 발굴 코칭",
      "목차 구성 및 원고 작성 가이드",
      "독자 설정 및 차별화 전략",
      "전자책 종이책 자가 출판 프로세스 안내",
    ],
    cta: "책쓰기 코칭 신청하기",
  },
  "My Media": {
    icon: "📰",
    title: "품격있는 브랜딩, My Media",
    subtitle: "인터넷 신문사 창업 과정",
    target: "나만의 미디어를 만들고 싶은 누구나",
    desc: "인터넷 신문사 창업을 안내하는 과정입니다. 신문사 정체성 수립 부터 인터넷 신문사 솔루션 세팅, 기사 발행을 가이드합니다.",
    details: [
      "신문사 정체성 및 브랜딩 수립",
      "인터넷 신문사 솔루션 세팅",
      "기사 작성 및 발행 가이드",
      "미디어 운영 전략 코칭",
    ],
    cta: "My Media 상담 신청하기",
  },
};

export async function generateStaticParams() {
  return Object.keys(programs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs[decodeURIComponent(slug)];
  if (!program) return {};
  return {
    title: `${program.title} | 단초샘`,
    description: program.desc,
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs[decodeURIComponent(slug)];
  if (!program) notFound();

  return (
    <div className="pt-16">
      <section className="bg-[var(--color-beige)] py-20 px-6 text-center">
        <FadeIn>
          <span className="text-5xl block mb-4 text-[var(--color-brown)]">{program.icon}</span>
          <p className="text-sm tracking-widest text-[var(--color-olive)] mb-2">{program.subtitle}</p>
          <h1 className="text-4xl font-bold text-[var(--color-brown-dark)] mb-4">{program.title}</h1>
          <p className="text-xs bg-[var(--color-beige-dark)] inline-block px-4 py-2 rounded-full text-[var(--color-text-muted)]">
            대상: {program.target}
          </p>
        </FadeIn>
      </section>

      <section className="py-24 px-6 max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-12 break-keep">{program.desc}</p>

          <h2 className="text-xl font-bold text-[var(--color-brown-dark)] mb-6">프로그램 구성</h2>
          <ul className="space-y-4 mb-12">
            {program.details.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <span className="text-[var(--color-olive)] mt-1 shrink-0">✦</span>
                <span className="text-[var(--color-text-muted)]">{d}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[var(--color-brown)] text-white font-medium text-center hover:bg-[var(--color-brown-dark)] transition-colors"
            >
              {program.cta}
            </Link>
            {program.pdfUrl && (
              <a
                href={program.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-[var(--color-brown)] text-[var(--color-brown)] font-medium text-center hover:bg-[var(--color-beige)] transition-colors"
              >
                상세 과정소개(PDF) 보기
              </a>
            )}
            <Link
              href="/programs"
              className="px-8 py-4 rounded-full border border-[var(--color-brown)] text-[var(--color-brown)] font-medium text-center hover:bg-[var(--color-beige)] transition-colors"
            >
              다른 프로그램 보기
            </Link>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
