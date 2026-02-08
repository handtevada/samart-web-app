"use client";

import { useEffect } from "react";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="th">
      <body className={`${prompt.variable} antialiased`}>
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
          <div className="rounded-full bg-red-50 p-6 mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-red-500"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            เกิดข้อผิดพลาดร้ายแรง (500)
          </h2>
          <p className="max-w-md text-gray-600 mb-8 text-lg">
            ขออภัย ระบบไม่สามารถโหลดหน้านี้ได้
            <br />
            กรุณาลองใหม่อีกครั้ง
          </p>
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600 shadow-md"
          >
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </body>
    </html>
  );
}
