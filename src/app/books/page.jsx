// app/books/page.jsx
"use client";

import { ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// --- Constants ---
const bookImgPath = "/assets/book.avif";
const whatsappNumber = "+923365495060";

// --- Utility Classes ---
const BRAND_ACCENT = 'bg-brand-accent';
const BRAND_ACCENT_TEXT = 'text-brand-accent';
const BRAND_PRIMARY_TEXT = 'text-brand-primary-text';
const BRAND_SUBTLE_HOVER = 'border-brand-subtle-hover';

// --- Hardcoded Local Books (from public/books/) ---
const LOCAL_BOOKS = [
  { id: 1, title: "راہِ محبت", price: "PKR 800", pdf: "/books/Raah-i-Mohabbat.pdf" },
  { id: 2, title: "اصلاحی مجالس", price: "PKR 600", pdf: "/books/Islahi-Majalis.pdf" },
  { id: 3, title: "آئینۂ ایمان", price: "PKR 600", pdf: "/books/Aina-Iman.pdf" },
  { id: 4, title: "کتاب القسم", price: "PKR 600", pdf: "/books/Kitab-ul-Qasam.pdf" },
  { id: 5, title: "عقیدہ اور عقیدت", price: "PKR 600", pdf: "/books/Aqeedah-Aur-Aqeedat.pdf" },
  // Add more manually or generate via build script
];

export default function Books() {
  const [books] = useState(LOCAL_BOOKS);

  return (
    <div className="bg-brand-light-bg min-h-screen py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h3 className={`text-3xl md:text-4xl font-extrabold ${BRAND_PRIMARY_TEXT} relative inline-block`}>
          کتابیں 
          <span className={`absolute -bottom-2 start-1/2 -translate-x-1/2 w-24 h-1 ${BRAND_ACCENT} rounded-full`}></span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {books.map((book, idx) => (
          <motion.div
            key={book.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className={`bg-white rounded-2xl shadow hover:shadow-lg border ${BRAND_SUBTLE_HOVER} p-6 flex flex-col md:flex-row gap-6`}
          >
            <div className="w-full md:w-1/3 flex justify-center flex-shrink-0">
              <Image
                src={bookImgPath}
                alt={book.title}
                width={160}
                height={220}
                className="object-cover rounded-lg border border-gray-300"
              />
            </div>

            <div className="flex-1 text-right">
              <h3 className={`text-xl font-bold ${BRAND_ACCENT_TEXT} mb-1`}>
                {book.title}
              </h3>
              <p className="text-sm text-gray-700 font-semibold mb-4">
                قیمت: {book.price}
              </p>

              <div className="flex gap-3 justify-start">
                <Link
                  href={`https://wa.me/${whatsappNumber}?text=میں ${encodeURIComponent(book.title)} کتاب خریدنا چاہتا ہوں، قیمت ${encodeURIComponent(book.price)}۔`}
                  target="_blank"
                  className="flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-green-700"
                >
                  <ShoppingCart size={16} /> خریدیں
                </Link>

                <Link
                  href={`/pdf-viewer?book=${encodeURIComponent(book.title)}&price=${encodeURIComponent(book.price)}&pdf=${encodeURIComponent(book.pdf)}`}
                  className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow hover:bg-blue-700"
                >
                  <Eye size={16} /> پی ڈی ایف دیکھیں
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}