import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Baby,
  Stethoscope,
  Utensils,
  Video,
  Car,
  Heart,
  Brain,
  Users,
  Smile,
  Award,
  Images,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-linear-to-br from-orange-50 to-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-block mb-4 px-4 py-1.5 bg-white text-orange-600 rounded-full text-sm font-semibold shadow-sm border border-orange-100">
            รังสิต-นครนายก 57 คลอง 2
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            เลือกเนอสเซอรี่ที่เหมาะกับลูกคุณ
            <br className="hidden md:block" />
            <span className="text-orange-500">เลือกสามารถเอ็ดดูแคร์เนอสเซอรี่</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Samart Edu-Care Nursery - สถานที่ที่ลูกน้อยของคุณจะได้รับการดูแลอย่างดีที่สุด
            ด้วยความรักและความเข้าใจในพัฒนาการของเด็กปฐมวัย
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://m.me/samarteducarenursery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              Messenger
            </Link>
            <Link
              href="https://line.me/ti/p/~kalaya1967"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 hover:shadow-lg transition-all"
            >
              Line
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-3 bg-white text-orange-500 border-2 border-orange-500 rounded-full font-bold text-lg hover:bg-orange-50 transition-all"
            >
              ดูบริการของเรา
            </Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ทำไมต้องเลือกเรา</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Users className="w-10 h-10 text-orange-500" />}
              title="ทีมผู้เชี่ยวชาญ"
              description="ดูแลโดยครูปฐมวัยและนายแพทย์ผู้เชี่ยวชาญ เพื่อพัฒนาการที่สมวัย"
            />
            <FeatureCard
              icon={<Utensils className="w-10 h-10 text-orange-500" />}
              title="โภชนาการที่ดีเลิศ"
              description="เมนูอาหารพัฒนาและดูแลโดย นพ.สามารถ จำปี สะอาด ถูกหลักอนามัย"
            />
            <FeatureCard
              icon={<Video className="w-10 h-10 text-orange-500" />}
              title="ความปลอดภัยสูงสุด"
              description="มีกล้องวงจรปิด (CCTV) ทั่วบริเวณ เพื่อความอุ่นใจของคุณพ่อคุณแม่"
            />
            <FeatureCard
              icon={<Car className="w-10 h-10 text-orange-500" />}
              title="สะดวกสบาย"
              description="สถานที่เดินทางง่ายในซอยรังสิต-นครนายก 57 มีที่จอดรถสะดวก"
            />
          </div>

          {/* CCTV Video Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              ชมตัวอย่างระบบรักษาความปลอดภัย CCTV
            </h3>
            <div className="flex justify-center px-4">
              <div className="w-full max-w-140 shadow-xl rounded-2xl overflow-hidden border-4 border-white bg-gray-100">
                <div className="relative pt-[56.25%]">
                  <iframe
                    src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fsamarteducarenursery%2Fvideos%2F2070428239837605%2F&show_text=false&width=560&t=0"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">บริการของเรา</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              เรามุ่งเน้นการดูแลที่ครอบคลุม ทั้งด้านร่างกาย อารมณ์ จิตใจ สังคม และสติปัญญา
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ServiceCard
              title="เตรียมหนูน้อยก่อนไปโรงเรียน"
              subtitle="อายุ 2-4 ปี"
              items={[
                "ส่งเสริมทักษะพื้นฐานทางวิชาการ",
                "ฝึกการเข้าสังคมและการอยู่ร่วมกับผู้อื่น",
                "กิจกรรมเสริมสร้างจินตนาการ",
                "พัฒนากล้ามเนื้อมัดเล็กและใหญ่",
              ]}
              highlight={true}
            />

            <ServiceCard
              title="ดูแลเด็กเล็ก"
              subtitle="อายุ 3 เดือน - 2 ปี"
              items={[
                "ดูแลโดยครูพี่เลี้ยงที่ผ่านการอบรม",
                "กำกับดูแลสุขภาพโดยแพทย์",
                "ส่งเสริมพัฒนาการตามวัย",
                "ดูแลความสะอาดและสุขอนามัยอย่างเคร่งครัด",
              ]}
              highlight={false}
            />

            <ServiceCard
              title="โปรแกรมปรับพฤติกรรม"
              subtitle="รายบุคคล"
              items={[
                "กิจกรรมเชิงบวกเพื่อปรับพฤติกรรม",
                "ลดพฤติกรรมที่ไม่พึงประสงค์",
                "เสริมสร้างความมั่นใจในตนเอง",
                "ให้คำปรึกษาโดยผู้เชี่ยวชาญ",
              ]}
              highlight={false}
            />
          </div>
        </div>
      </section>

      {/* Development Focus */}
      <section className="py-16 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-orange-100 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-orange-50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">พัฒนาการรอบด้าน</h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    หลักสูตรและกิจกรรมของเราถูกออกแบบมาเพื่อส่งเสริมพัฒนาการของเด็กในทุกๆ
                    ด้านอย่างสมดุล:
                  </p>
                  <ul className="space-y-4">
                    <FocusItem
                      icon={<Heart className="w-6 h-6 text-red-500" />}
                      text="ร่างกายแข็งแรง สมบูรณ์ตามวัย"
                    />
                    <FocusItem
                      icon={<Smile className="w-6 h-6 text-yellow-500" />}
                      text="อารมณ์แจ่มใส ร่าเริง มีความสุข"
                    />
                    <FocusItem
                      icon={<Brain className="w-6 h-6 text-blue-500" />}
                      text="สติปัญญา พัฒนาการคิดและการเรียนรู้"
                    />
                    <FocusItem
                      icon={<Users className="w-6 h-6 text-green-500" />}
                      text="สังคม เรียนรู้การอยู่ร่วมกับผู้อื่น"
                    />
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-6 rounded-2xl text-center">
                  <Stethoscope className="w-12 h-12 text-orange-500 mx-auto mb-3" />
                  <span className="font-semibold text-gray-700">Medical Care</span>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl text-center mt-8">
                  <Baby className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                  <span className="font-semibold text-gray-700">Child Center</span>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl text-center">
                  <Smile className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <span className="font-semibold text-gray-700">Happiness</span>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl text-center mt-8">
                  <Brain className="w-12 h-12 text-purple-500 mx-auto mb-3" />
                  <span className="font-semibold text-gray-700">Learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Images className="w-10 h-10 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">คลังรูปภาพกิจกรรม</h2>
            <p className="text-xl text-gray-600 mb-10">
              ชมภาพบรรยากาศความน่ารัก ความสนุกสนาน และกิจกรรมการเรียนรู้ต่างๆ ของเด็กๆ
              ได้ที่อัลบั้มรูปภาพของเราบน Facebook
            </p>
            <Link
              href="https://www.facebook.com/samarteducarenursery/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 hover:shadow-lg transition-all"
            >
              <Images className="w-5 h-5" />
              <span>ดูรูปภาพทั้งหมด</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-linear-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 -ml-10 -mt-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-6 backdrop-blur-sm">
                <Award className="w-12 h-12 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-8">การรับรองมาตรฐาน</h2>

              <div className="flex flex-col lg:flex-row items-center gap-8 w-full max-w-6xl">
                {/* Text Content */}
                <div className="flex-1 bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md border border-white/20 w-full text-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    กิจกรรมด้านเศรษฐกิจและการดำเนินชีวิต หมวด ก
                  </h3>
                  <p className="text-orange-50 text-lg mb-6">
                    (ศูนย์พัฒนาเด็กเล็ก เด็กก่อนวัยเรียน)
                  </p>
                  <div className="inline-block bg-white text-orange-600 px-6 py-2 rounded-full font-bold text-lg shadow-sm mb-8">
                    สะอาดปลอดภัย ป้องกันโรค COVID-19
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-lg font-semibold mb-1">สามารถเอ็ดดูแคร์เนอสเซอรี่</p>
                    <p className="text-sm text-white/80">
                      ผ่านมาตรฐาน รับรองโดย กรมอนามัย กระทรวงสาธารณสุข
                    </p>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="flex-1 w-full flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md shadow-2xl rounded-lg overflow-hidden border-4 border-white transition-transform hover:scale-105 duration-300">
                    <Image
                      src="/img/certificate.jpg"
                      alt="ใบรับรองมาตรฐาน Clean Together กรมอนามัย"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow border border-transparent hover:border-orange-100 group">
      <div className="mb-4 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ServiceCard({
  title,
  subtitle,
  items,
  highlight,
}: {
  title: string;
  subtitle: string;
  items: string[];
  highlight: boolean;
}) {
  return (
    <div
      className={`p-8 rounded-3xl transition-all ${
        highlight
          ? "bg-orange-500 text-white shadow-xl scale-105 z-10"
          : "bg-white text-gray-800 shadow-md hover:shadow-lg border border-orange-50"
      }`}
    >
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <span
        className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 ${
          highlight ? "bg-white/20 text-white" : "bg-orange-100 text-orange-600"
        }`}
      >
        {subtitle}
      </span>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div
              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                highlight ? "bg-white" : "bg-orange-500"
              }`}
            />
            <span className={highlight ? "text-orange-50" : "text-gray-600"}>{item}</span>
          </li>
        ))}
      </ul>
      <a href="https://m.me/samarteducarenursery" target="_blank" rel="noopener noreferrer">
        <button
          className={`mt-8 w-full py-2.5 rounded-xl cursor-pointer font-semibold transition-colors ${
            highlight
              ? "bg-white text-orange-600 hover:bg-orange-50"
              : "bg-orange-50 text-orange-600 hover:bg-orange-100"
          }`}
        >
          สอบถามข้อมูล
        </button>
      </a>
    </div>
  );
}

function FocusItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
      <div className="bg-white p-2 rounded-lg shadow-sm">{icon}</div>
      <span className="font-medium text-gray-700">{text}</span>
    </li>
  );
}
