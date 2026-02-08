import React from "react";
import {
  Quote,
  Activity,
  Hand,
  Users,
  Search,
  Zap,
  GraduationCap,
  Brain,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            รู้จักกับเรา
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            บ้านหลังที่สองที่ให้ความรัก ความอบอุ่น
            พร้อมเสริมสร้างพัฒนาการที่เหมาะสมตามวัย
          </p>
        </div>
      </section>

      {/* Philosophy & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="bg-orange-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <Quote className="absolute text-orange-200 w-32 h-32 -top-4 -left-4 opacity-50" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-snug">
                  &quot;เก่งฉลาด ดึงศักยภาพ <br />
                  <span className="text-orange-600">สู่อัจฉริยะ&quot;</span>
                </h2>
                <p className="text-lg text-gray-700 mb-6 font-medium">
                  (Smart, Clever, Unleashing Potential to Genius)
                </p>
                <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800">
                ดูแลและพัฒนาโดยทีมแพทย์และผู้เชี่ยวชาญ
              </h3>
              <p className="text-gray-600 leading-relaxed">
                เราเน้นการเรียนรู้ผ่านการเล่นอย่างมีความหมาย
                ภายใต้การดูแลด้านสุขภาพ ความปลอดภัย และโภชนาการอย่างใกล้ชิดโดย
                <strong className="text-orange-600"> นพ. สามารถ จำปี</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                และทีมงานคุณภาพระดับปริญญาตรี สาขาปฐมวัย
                ที่มุ่งเน้นกระบวนการเรียนรู้แบบ
                <span className="font-semibold text-gray-800">
                  {" "}
                  Child Centered
                </span>{" "}
                ที่ครอบคลุมทั้ง 5 ด้าน: ร่างกาย อารมณ์ จิตใจ สังคม และสติปัญญา
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum & Methodology */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Column 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                International Standard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                บูรณาการหลักสูตรการสอนจากประเทศออสเตรเลีย
                เพื่อให้เด็กคุ้นเคยกับการใช้ภาษา ทั้งภาษาไทยและภาษาอังกฤษ
                เตรียมความพร้อมสู่โลกกว้างอย่างมั่นใจ
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Brain-Based Learning
              </h3>
              <p className="text-gray-600 leading-relaxed">
                จัดการเรียนรู้บนพื้นฐานความรัก (Positive Reinforcement)
                เน้นคลื่นสมองต่ำ (Alpha Waves) เพื่อสร้างสมาธิและความสุข
                กระตุ้นการทำงานของสมองทั้งซีกซ้ายและขวาอย่างสมดุล
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 5 Principles of Learning */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              5 หลักการเรียนรู้ของเรา
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <PrincipleCard
              icon={<Activity className="w-8 h-8 text-orange-500" />}
              number="01"
              title="Active Learning"
              thaiTitle="กระตุ้นการปฏิบัติการคิด"
            />
            <PrincipleCard
              icon={<Hand className="w-8 h-8 text-orange-500" />}
              number="02"
              title="Behaving"
              thaiTitle="กระตุ้นการแสดงออก"
            />
            <PrincipleCard
              icon={<Users className="w-8 h-8 text-orange-500" />}
              number="03"
              title="Cooperative Learning"
              thaiTitle="การเรียนแบบร่วมมือ"
            />
            <PrincipleCard
              icon={<Search className="w-8 h-8 text-orange-500" />}
              number="04"
              title="Discovery Learning"
              thaiTitle="การเรียนรู้จากการค้นพบ"
            />
            <PrincipleCard
              icon={<Zap className="w-8 h-8 text-orange-500" />}
              number="05"
              title="Progress"
              thaiTitle="ให้เกิดความก้าวหน้า"
            />
          </div>
        </div>
      </section>

      {/* Our Goal/Outcome Section */}
      <section className="py-24 bg-linear-to-br from-orange-600 to-orange-500 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            &quot;เราใช้สื่อที่จับต้องได้และเครื่องมือที่เหมาะสม
            เพื่อให้เด็กมีพัฒนาการที่รวดเร็วและยั่งยืน&quot;
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            มุ่งสู่เป้าหมาย <br />
            <span className="text-orange-100 text-5xl md:text-7xl block mt-4">
              &quot;เก่ง ดี และมีความสุข&quot;
            </span>
          </h2>
          <p className="text-lg opacity-80 mt-8">
            พร้อมด้วยวุฒิภาวะที่สมบูรณ์
            และความพร้อมสำหรับการศึกษาในระดับที่สูงขึ้นต่อไป
          </p>
        </div>
      </section>
    </div>
  );
}

function PrincipleCard({
  icon,
  number,
  title,
  thaiTitle,
}: {
  icon: React.ReactNode;
  number: string;
  title: string;
  thaiTitle: string;
}) {
  return (
    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors group border border-transparent hover:border-orange-100">
      <div className="text-4xl font-black text-gray-200 group-hover:text-orange-200 transition-colors">
        {number}
      </div>
      <div>
        <div className="mb-2 p-2 bg-white rounded-lg shadow-sm w-fit group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h4 className="font-bold text-gray-900 text-lg">{title}</h4>
        <p className="text-gray-600">{thaiTitle}</p>
      </div>
    </div>
  );
}
