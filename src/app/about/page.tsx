import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "단초샘 소개 | 단초샘",
  description: "단초샘의 코칭 철학과 이력, 저서를 소개합니다.",
};

const books = [
  { title: "내 아이 공부를 설계하는 법", subtitle: "학습 플래너 코칭으로 자기주도학습 완성하기", year: "2026.03.11", cover: "/books/내아이공부를설계하는법 표지.png", link: "https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=E282637454&start=pnaverebook" },
  { title: "그릿 스위치를 켜라", subtitle: "자기주도학습 시크릿", year: "2025.08.20", cover: "/books/그릿 종이책 표지.jpg", link: "https://smartstore.naver.com/yes24book/products/12315148377?NaPm=ct%3Dmn1lhdt4%7Cci%3D295666949c2958d329df65c265e7d1eaf0467491%7Ctr%3Dboksl1%7Csn%3D3145439%7Chk%3Df0e74d9808a05ccc46e9dfd2543163fb858528cc&nl-au=247e82838c414dd992f4154ab8361da4" },
  { title: "전업주부 12년차 엄마, 강사 되다", subtitle: "", year: "2025.05.30", cover: "/books/엄마강사되다책표지.jpeg", link: "https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=E282635349&start=pnaverebook" },
  { title: "이키가이로 찾는 당신만의 인생지도", subtitle: "공저", year: "2025.02.07", cover: "/books/이키가이책표지.jpeg", link: "https://product.kyobobook.co.kr/detail/S000215787846" },
  { title: "우주를 잃어버린 너에게", subtitle: "", year: "2024.11.13", cover: "/books/우주를 잃어버린 너에게 표지.png", link: "https://www.aladin.co.kr/shop/wproduct.aspx?ISBN=E952534410&start=pnaverebook" },
  { title: "마음부축", subtitle: "", year: "2021.11.01", cover: "/books/마음부축_page0_image.png", link: "https://ebook-product.kyobobook.co.kr/dig/epd/ebook/4801168402998?LINK=NVE" },
];

const careers = [
  { label: "안산시 부모 교육 강사" },
  { label: "인성 교육 지도사" },
  { label: "그림책 심리 지도사" },
  { label: "웰다잉 문화 복지사" },
  { label: "학습 코칭 지도사" },
  { label: "독서 지도사" },
  { label: "인터넷 신문사 '에듀마인 부모저널' 대표", link: "https://www.edumine.kr" },
  { label: "작가" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* 헤더 */}
      <section className="bg-[var(--color-beige)] py-20 px-6 text-center">
        <FadeIn>
          <p className="text-sm tracking-widest text-[var(--color-olive)] mb-4">ABOUT</p>
          <h1 className="text-4xl font-bold text-[var(--color-brown-dark)] mb-4">단초샘을 소개합니다</h1>
          <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
            나다움의 가치를 믿고, 그 여정을 함께 걸어온 코칭 지도사입니다.
          </p>
        </FadeIn>
      </section>

      {/* 철학 */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[var(--color-brown-dark)] mb-6">코칭 철학</h2>
          <div className="prose prose-lg max-w-none text-[var(--color-text-muted)] leading-8 space-y-4">
            <p>
              저는 사람이 태어날 때부터 저마다의 고유한 빛을 가지고 있다고 믿습니다.
              그 빛은 삶의 무게와 타인의 시선 속에 가려지기도 하지만, 결코 사라지지 않습니다.
            </p>
            <p>
              단초샘의 모든 프로그램은 이 질문에서 출발합니다. <strong>&ldquo;지금 나는 나답게 살고 있는가?&rdquo;</strong>
            </p>
            <p>
              저는 코치로서 답을 드리지 않습니다. 대신, 스스로 답을 찾아가는 여정에서 든든한 동반자가 되겠습니다.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 소셜 링크 */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl font-bold text-[var(--color-brown-dark)] mb-8">채널 & 연락처</h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.threads.com/@gyu1288" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-beige-dark)] bg-white hover:shadow-sm transition-shadow text-[var(--color-text-muted)] text-sm">
              <span>🧵</span> 쓰레드
            </a>
            <a href="https://blog.naver.com/jujingu99" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-beige-dark)] bg-white hover:shadow-sm transition-shadow text-[var(--color-text-muted)] text-sm">
              <span>📝</span> 네이버 블로그
            </a>
            <a href="https://www.youtube.com/@dian65" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-beige-dark)] bg-white hover:shadow-sm transition-shadow text-[var(--color-text-muted)] text-sm">
              <span>▶</span> 유튜브
            </a>
            <a href="mailto:jujingu99@naver.com" className="flex items-center gap-2 px-5 py-3 rounded-full border border-[var(--color-beige-dark)] bg-white hover:shadow-sm transition-shadow text-[var(--color-text-muted)] text-sm">
              <span>✉</span> jujingu99@naver.com
            </a>
          </div>
        </FadeIn>
      </section>

      {/* 이력 + 저서 */}
      <section className="bg-[var(--color-beige)] py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[var(--color-brown-dark)] mb-8">주요 이력</h2>
            <ul className="space-y-4">
              {careers.map((c) => (
                <li key={c.label} className="flex items-start gap-3 text-[var(--color-text-muted)]">
                  <span className="text-[var(--color-olive)] mt-1">✦</span>
                  {c.link ? (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[var(--color-brown)] transition-colors">{c.label}</a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold text-[var(--color-brown-dark)] mb-8">저서</h2>
            <ul className="space-y-4">
              {books.map((b) => (
                <li key={b.title} className="flex gap-4 p-4 rounded-xl bg-white border border-[var(--color-beige-dark)]">
                  <img src={b.cover} alt={b.title} className="w-16 h-24 object-cover rounded-md shrink-0" />
                  <div className="flex flex-col justify-center gap-1">
                    <p className="font-bold text-[var(--color-text)]">{b.title}</p>
                    {b.subtitle && <p className="text-sm text-[var(--color-text-muted)]">{b.subtitle}</p>}
                    <p className="text-sm text-[var(--color-olive)]">{b.year}</p>
                    {b.link && (
                      <a href={b.link} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-brown)] underline underline-offset-2 hover:text-[var(--color-brown-dark)] mt-1 w-fit">
                        구매하기 →
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
