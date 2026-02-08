import Link from "next/link";
import { FileQuestion, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 text-center">
      <div className="rounded-full bg-orange-50 p-6 mb-6">
        <FileQuestion className="h-16 w-16 text-orange-500" />
      </div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        ไม่พบหน้าที่คุณต้องการ (404)
      </h2>
      <p className="max-w-md text-gray-600 mb-8 text-lg">
        ขออภัย หน้าเว็บที่คุณพยายามเข้าถึงไม่มีอยู่จริง
        <br />
        อาจมีการย้าย หรือลบหน้านี้ออกไปแล้ว
      </p>
      <Link
        href="/"
        className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-3 font-medium text-white transition-colors hover:bg-orange-600 shadow-md"
      >
        <Home size={20} />
        กลับหน้าหลัก
      </Link>
    </div>
  );
}
