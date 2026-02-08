"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
      <div className="rounded-full bg-red-50 p-6 mb-6">
        <AlertCircle className="h-16 w-16 text-red-500" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        เกิดข้อผิดพลาดบางอย่าง (500)
      </h2>
      <p className="max-w-md text-gray-600 mb-8 text-lg">
        ขออภัยในความไม่สะดวก ระบบเกิดปัญหาขัดข้องชั่วคราว
        <br />
        กรุณาลองใหม่อีกครั้งในภายหลัง
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600 shadow-md"
        >
          <RotateCw size={20} />
          ลองใหม่อีกครั้ง
        </button>
        <Link
          href="/"
          className="rounded-lg border-2 border-gray-200 px-6 py-3 font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </div>
  );
}
