"use client";

import { useState } from "react";

export default function Malfoozat() {
  const [activeLang, setActiveLang] = useState("urdu");

  const languages = ["sindhi", "urdu", "english", "pashto", "arabic", "persian", "turkish"];

  const malfoozat = [
    {
      id: 1,
      quote: "دنیا مومن کے لئے قید خانہ ہے اور کافر کے لئے جنت۔",
      author: "نبی کریم ﷺ",
      source: "حدیث شریف",
      lang: "urdu",
    },
    {
      id: 2,
      quote: "علم وہ نہیں جو یاد کیا جائے، بلکہ علم وہ ہے جو نفع دے۔",
      author: "امام شافعی",
      source: "اقوال سلف",
      lang: "urdu",
    },
    {
      id: 3,
      quote: "Patience is a tree whose root is bitter but its fruit is sweet.",
      author: "Hazrat Ali (RA)",
      source: "Sayings",
      lang: "english",
    },
    {
      id: 4,
      quote: "اپنے رب سے ڈرو اور کسی مخلوق سے نہ ڈرو۔",
      author: "شیخ عبدالقادر جیلانی",
      source: "فتوح الغیب",
      lang: "urdu",
    },
  ];

  return (
    <div className="bg-brand-light-bg min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      {/* ✅ Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary-text">
          ملفوظات
        </h2>
        <div className="mt-2 w-20 h-1 bg-brand-accent rounded mx-auto"></div>
      </div>

      {/* ✅ Language Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={`px-6 py-2 rounded-full text-sm font-medium shadow-sm transition ${
              activeLang === lang
                ? "bg-brand-accent text-white"
                : "bg-white text-brand-accent hover:bg-brand-subtle-hover"
            }`}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
      </div>

      {/* ✅ Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {malfoozat
          .filter((m) => m.lang === activeLang)
          .map((m) => (
            <div
              key={m.id}
              className="bg-white shadow-md rounded-2xl p-6 border border-brand-border hover:shadow-lg transition"
            >
              <p className="text-lg text-gray-800 leading-relaxed mb-4">“{m.quote}”</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>
                  <strong className="text-brand-accent">مقرّر:</strong> {m.author}
                </span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  {m.lang.toUpperCase()}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">ماخذ: {m.source}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
