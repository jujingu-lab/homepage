"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

const navLinks = [
  { href: "/", label: "홈" },
  { href: "/about", label: "단초샘 소개" },
  { href: "/programs", label: "프로그램" },
  { href: "/media", label: "미디어" },
  { href: "https://www.youtube.com/@DANCHOSAMTV", label: "단초TV", external: true },
  { href: "/contact", label: "상담 신청" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, loading, loginWithGoogle, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-cream)]/90 backdrop-blur-sm border-b border-[var(--color-beige)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="text-xl font-bold text-[var(--color-brown-dark)]" style={{ fontFamily: "var(--font-serif), serif" }}>
            단초샘
          </span>
          <span className="text-xs text-[var(--color-text-muted)]">나다움을 찾는 여정</span>
        </Link>

        {/* 데스크탑 Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brown)] transition-colors"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-brown)] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          {/* 로그인/유저 영역 */}
          {!loading && (
            user ? (
              <div className="flex items-center gap-3">
                {user.photoURL && (
                  <Image
                    src={user.photoURL}
                    alt={user.displayName ?? "프로필"}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-[var(--color-text-muted)]">{user.displayName}</span>
                <button
                  onClick={logout}
                  className="text-sm px-4 py-2 rounded-full border border-[var(--color-brown)] text-[var(--color-brown)] hover:bg-[var(--color-beige)] transition-colors"
                >
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={loginWithGoogle}
                className="text-sm px-4 py-2 rounded-full bg-[var(--color-brown)] text-white hover:bg-[var(--color-brown-dark)] transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google 로그인
              </button>
            )
          )}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-cream)] border-t border-[var(--color-beige)] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-brown)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-text)] hover:text-[var(--color-brown)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          {!loading && (
            user ? (
              <button
                onClick={logout}
                className="text-left text-[var(--color-brown)] hover:text-[var(--color-brown-dark)] transition-colors"
              >
                로그아웃 ({user.displayName})
              </button>
            ) : (
              <button
                onClick={loginWithGoogle}
                className="text-left text-[var(--color-brown)] hover:text-[var(--color-brown-dark)] transition-colors"
              >
                Google 로그인
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
}
