"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const programs = ["이키가이", "나살롱", "골든라이프디자인", "배움성장코칭", "마음돋보기", "책쓰기", "아직 모르겠어요"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    program: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_l15gt2c",
        "template_n5cj81a",
        {
          name: form.name,
          email: form.contact,
          message: `연락처: ${form.contact}\n관심 프로그램: ${form.program || "미선택"}\n\n문의 내용:\n${form.message}`,
          title: `[상담신청] ${form.name} - ${form.program || "프로그램 미선택"}`,
        },
        "_BhBj4g9nPwINrVA0"
      );
      setSubmitted(true);
    } catch {
      alert("전송 중 오류가 발생했습니다. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-16">
        <span className="text-5xl block mb-6">✦</span>
        <h2 className="text-2xl font-bold text-[var(--color-brown-dark)] mb-4">신청이 완료되었습니다</h2>
        <p className="text-[var(--color-text-muted)]">
          빠른 시간 내에 연락드리겠습니다. 감사합니다.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
          이름 <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="홍길동"
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-beige-dark)] bg-white focus:outline-none focus:border-[var(--color-brown)] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
          연락처 (전화 또는 이메일) <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          name="contact"
          required
          value={form.contact}
          onChange={handleChange}
          placeholder="010-0000-0000 또는 email@example.com"
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-beige-dark)] bg-white focus:outline-none focus:border-[var(--color-brown)] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
          관심 프로그램
        </label>
        <select
          name="program"
          value={form.program}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-beige-dark)] bg-white focus:outline-none focus:border-[var(--color-brown)] transition-colors"
        >
          <option value="">선택해 주세요</option>
          {programs.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
          문의 내용
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="궁금하신 점이나 현재 상황을 자유롭게 적어주세요."
          className="w-full px-4 py-3 rounded-xl border border-[var(--color-beige-dark)] bg-white focus:outline-none focus:border-[var(--color-brown)] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-full bg-[var(--color-brown)] text-white font-bold hover:bg-[var(--color-brown-dark)] transition-colors disabled:opacity-60"
      >
        {loading ? "전송 중..." : "상담 신청하기"}
      </button>

      <p className="text-xs text-center text-[var(--color-text-muted)]">
        입력하신 정보는 상담 목적으로만 사용됩니다.
      </p>
    </form>
  );
}
