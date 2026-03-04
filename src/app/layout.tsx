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
  title: "Samart Edu-Care Nursery | สามารถเอ็ดดูแคร์เนอสเซอรี่ รังสิต-นครนายก ปทุมธานี",
  description:
    "เนอสเซอรี่รังสิต รับดูแลเด็กและเตรียมอนุบาลโดยครูปฐมวัยและทีมแพทย์ พัฒนาการสมวัย ปลอดภัย อบอุ่น สถานที่สะอาด เดินทางสะดวกย่านรังสิต-ปทุมธานี",
  keywords: [
    "เนอสเซอรี่ รังสิต - นครนายก",
    "รับเลี้ยงเด็ก รังสิต - นครนายก",
    "ฝากเลี้ยงเด็ก รังสิต - นครนายก",
    "เตรียมอนุบาล รังสิต - นครนายก",
    "ศูนย์พัฒนาเด็กเล็ก รังสิต - นครนายก",
    "Samart Edu-Care Nursery",
    "สามารถเอ็ดดูแคร์",
  ],
  openGraph: {
    title: "Samart Edu-Care Nursery | เนอสเซอรี่ รังสิต-นครนายก ปทุมธานี",
    description:
      "เนอสเซอรี่รังสิต รับดูแลเด็กและเตรียมอนุบาลโดยครูปฐมวัยและทีมแพทย์ พัฒนาการสมวัย ปลอดภัย อบอุ่น สถานที่สะอาด เดินทางสะดวกย่านรังสิต-ปทุมธานี",
    locale: "th_TH",
    type: "website",
  },
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
