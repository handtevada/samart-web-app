import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Samart Edu-Care Nursery | สามารถเอ็ดดูแคร์เนอสเซอรี่",
  description:
    "เนอสเซอรี่ดูแลเด็กโดยครูปฐมวัยและทีมแพทย์ พัฒนาการสมวัย ปลอดภัย อบอุ่น",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${prompt.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
