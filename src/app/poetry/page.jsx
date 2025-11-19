"use client";

import { useState } from "react";
import { Copy, Share2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Poetry() {
  const [activeLang, setActiveLang] = useState("urdu");

  const languages = [
    "urdu",
    "english",
    "pashto",
    "arabic",
    "farsi",
    "turkish",
    "sindhi",
    "punjabi",
  ];

  const poems = [
    // --- Urdu ---
    {
      id: 1,
      title: "لب پہ آتی ہے دعا",
      poet: "علامہ اقبال",
      lang: "urdu",
      lines: [
        "لب پہ آتی ہے دعا بن کے تمنا میری",
        "زندگی شمع کی صورت ہو خدایا میری",
      ],
    },
    {
      id: 2,
      title: "خودی کا سر نہاں",
      poet: "علامہ اقبال",
      lang: "urdu",
      lines: [
        "خودی کا سر نہاں لا الہ الا اللہ",
        "خودی ہے تیغ، فساں لا الہ الا اللہ",
      ],
    },
    {
      id: 3,
      title: "اے خدا",
      poet: "احمد فراز",
      lang: "urdu",
      lines: [
        "اے خدا دل ہے پریشاں تیری دنیا میں",
        "کر دے آسان یہ مشکل میری دنیا میں",
      ],
    },
    {
      id: 4,
      title: "نعت شریف",
      poet: "نامعلوم",
      lang: "urdu",
      lines: ["وہ سوئے لالہ زار پھرتے ہیں", "تیرے دن اے بہار پھرتے ہیں"],
    },

    // --- English ---
    {
      id: 5,
      title: "Hope is the Thing",
      poet: "Emily Dickinson",
      lang: "english",
      lines: [
        "Hope is the thing with feathers",
        "That perches in the soul –",
      ],
    },
    {
      id: 6,
      title: "The Road Not Taken",
      poet: "Robert Frost",
      lang: "english",
      lines: [
        "Two roads diverged in a yellow wood,",
        "And sorry I could not travel both",
      ],
    },

    // --- Pashto ---
    {
      id: 7,
      title: "زما یاره",
      poet: "رحمان بابا",
      lang: "pashto",
      lines: [
        "زما یاره زما د زړه قرار دی",
        "بې د یاره ژوند لکه د غم دار دی",
      ],
    },

    // --- Arabic ---
    {
      id: 8,
      title: "قصيدة البردة",
      poet: "الإمام البوصيري",
      lang: "arabic",
      lines: [
        "محمد سيد الكونين والثقلين",
        "والفريقين من عرب ومن عجم",
      ],
    },

    // --- Farsi ---
    {
      id: 9,
      title: "بنی آدم",
      poet: "سعدی شیرازی",
      lang: "farsi",
      lines: [
        "بنی آدم اعضای یکدیگرند",
        "که در آفرينش ز یک گوهرند",
      ],
    },

    // --- Turkish ---
    {
      id: 10,
      title: "İstiklâl Marşı",
      poet: "Mehmet Akif Ersoy",
      lang: "turkish",
      lines: [
        "Korkma, sönmez bu şafaklarda yüzen al sancak;",
        "Sönmeden yurdumun üstünde tüten en son ocak.",
      ],
    },

    // --- Sindhi ---
    {
      id: 11,
      title: "سنڌڙي، تون وڏيءَ مهربان آهين،",
      poet: "شيخ اياز",
      lang: "sindhi",
      lines: [
        "سنڌڙي، تون وڏيءَ مهربان آهين،",
        "تو سان ئي منھنجو سارو جهان آهي.",
      ],
    },

    // --- Punjabi ---
    {
      id: 12,
      title: "اج آکھاں وارث شاہ نو",
      poet: "امرتا پریتم",
      lang: "punjabi",
      lines: [
        "اج آکھاں وارث شاہ نو، کتوں قبراں وچوں بول",
        "تے اج کتاب عشق دا کوئی اگلا ورقہ پھول",
      ],
    },
  ];

  const filtered = poems.filter((p) => p.lang === activeLang);

  return (
    <div className="bg-brand-light-bg min-h-screen py-10 px-3 sm:px-6 lg:px-12">
      {/* ✅ Title */}
      <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-primary-text relative inline-block">
          اشعار (تحریری)
          <span className="absolute -bottom-2 start-1/2 -translate-x-1/2 w-20 sm:w-24 h-1 bg-brand-accent rounded-full"></span>
        </h3>
      </div>

      {/* ✅ Language Tabs */}
      <div className="flex justify-center flex-wrap gap-2 mb-8 sm:mb-12">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveLang(lang)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base transition font-medium ${
              activeLang === lang
                ? "bg-brand-accent text-white shadow"
                : "bg-white text-brand-accent border border-brand-accent hover:bg-brand-subtle-hover"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ✅ Poetry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {filtered.map((poem, idx) => (
          <motion.div
            key={poem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition border border-brand-subtle-hover overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-accent text-white px-3 sm:px-4 py-2 flex justify-between items-center">
              <h3 className="font-bold text-sm sm:text-base">{poem.title}</h3>
              <span className="bg-white text-brand-accent px-2 py-0.5 text-xs rounded-full font-medium">
                {poem.lang.toUpperCase()}
              </span>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 text-center">
              <p className="text-xs sm:text-sm text-gray-500 mb-2">
                شاعر: {poem.poet}
              </p>
              {poem.lines.map((line, i) => (
                <p
                  key={i}
                  className="text-base sm:text-lg leading-relaxed text-gray-800"
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Footer */}
            <div className="px-3 sm:px-4 py-2 sm:py-3 flex justify-start gap-2 border-t">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Copy size={18} className="text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Share2 size={18} className="text-gray-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
