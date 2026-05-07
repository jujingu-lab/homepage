import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-beige)] border-t border-[var(--color-beige-dark)] mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-[var(--color-brown-dark)] mb-2">단초샘</h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            나다움을 찾고 잠재력을 발현시켜<br />온전한 나의 삶을 살아가도록<br />함께하는 코칭과 교육
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">프로그램</h4>
          <ul className="flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
            {["이키가이", "나살롱", "골든라이프디자인", "배움성장코칭", "마음돋보기", "책쓰기"].map((p) => (
              <li key={p}>
                <Link href={`/programs/${p}`} className="hover:text-[var(--color-brown)] transition-colors">
                  {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[var(--color-text)] mb-3">바로가기</h4>
          <ul className="flex flex-col gap-2 text-sm text-[var(--color-text-muted)]">
            <li><Link href="/about" className="hover:text-[var(--color-brown)] transition-colors">단초샘 소개</Link></li>
            <li><Link href="/media" className="hover:text-[var(--color-brown)] transition-colors">에듀마인 부모저널</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--color-brown)] transition-colors">상담 신청</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--color-beige-dark)] py-4 text-center text-xs text-[var(--color-text-muted)] space-y-1">
        <p>통신판매업신고 : 2026-경기안산-0719</p>
        <p>© {new Date().getFullYear()} 단초샘. All rights reserved.</p>
      </div>
    </footer>
  );
}
