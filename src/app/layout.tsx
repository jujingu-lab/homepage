import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const notoSerif = Noto_Serif_KR({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSans = Noto_Sans_KR({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  verification: {
    other: {
      "naver-site-verification": "3505d54a4ab6ef2fc7cb525a7ae069254fe25365",
    },
  },
  title: "단초샘 | 나다움을 찾는 코칭과 교육",
  description:
    "단초샘과 함께 나다움을 발견하세요. 이키가이 브랜딩, 나살롱, 골든라이프디자인, 배움성장코칭, 마음돋보기, 책쓰기 등 6가지 핵심 프로그램을 소개합니다.",
  keywords: [
    "단초샘",
    "나다움",
    "이키가이 브랜딩",
    "배움성장코칭",
    "나살롱",
    "골든라이프디자인",
    "마음돋보기",
    "책쓰기",
    "에듀마인 부모저널",
    "라이프코칭",
  ],
  openGraph: {
    title: "단초샘 | 나다움을 찾는 코칭과 교육",
    description: "자신의 본질을 찾고 잠재력을 발현시켜 온전한 나의 삶을 살아가는 것, 단초샘이 함께합니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSerif.variable} ${notoSans.variable} antialiased`}>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
