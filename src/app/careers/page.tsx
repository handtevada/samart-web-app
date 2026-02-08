import React from "react";
import {
  Briefcase,
  User,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Heart,
  Music,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            ร่วมงานกับเรา
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            มาร่วมเป็นส่วนหนึ่งของครอบครัวเรา เพื่อบ่มเพาะและพัฒนาอนาคตของชาติ
          </p>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="w-8 h-8 text-orange-500 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">
            ตำแหน่งที่เปิดรับสมัคร
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Position 1: Activity Leader Teacher */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="bg-orange-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white">
                ครูผู้นำกิจกรรม (Activity Leader Teacher)
              </h3>
              <p className="text-orange-100 font-medium">
                Samart Edu-Care Nursery
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4 mr-1 text-orange-500" /> 5-6
                  วัน/สัปดาห์
                </span>
                <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <User className="w-4 h-4 mr-1 text-orange-500" /> หญิง, 22+
                </span>
                <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <GraduationCap className="w-4 h-4 mr-1 text-orange-500" />{" "}
                  ปริญญาตรี
                </span>
              </div>

              <div>
                <h4 className="flex items-center text-lg font-semibold text-orange-600 mb-3">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  หน้าที่ความรับผิดชอบ
                </h4>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ml-5">
                  <li>สอนโดยใช้หลักสูตร Samart Edu-Care</li>
                  <li>ดูแลความเป็นอยู่และสวัสดิภาพของเด็กๆ</li>
                  <li>อธิบายหลักสูตรและโปรแกรมการเรียนให้ผู้ปกครองเข้าใจได้</li>
                  <li>ดูแลความสะอาดและความพร้อมของสถานที่</li>
                  <li>
                    ทำงาน 5-6 วัน/สัปดาห์ (จันทร์-ศุกร์ และเสาร์หรืออาทิตย์)
                  </li>
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="flex items-center text-lg font-semibold text-orange-600 mb-3">
                  <User className="w-5 h-5 mr-2" />
                  คุณสมบัติ
                </h4>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ml-5">
                  <li>เพศหญิง อายุ 22 ปีขึ้นไป</li>
                  <li>
                    วุฒิปริญญาตรี (สาขาศึกษาศาสตร์, ปฐมวัย, จิตวิทยาเด็ก
                    หรือที่เกี่ยวข้อง จะพิจารณาเป็นพิเศษ)
                  </li>
                  <li>
                    หากมีประสบการณ์ในโรงเรียนอนุบาลหรือเนอสเซอรี่จะพิจารณาเป็นพิเศษ
                  </li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 mr-2 mt-1 shrink-0 text-pink-500" />
                    <span>รักเด็ก และเข้าใจพัฒนาการเด็กปฐมวัย</span>
                  </li>
                  <li className="flex items-start">
                    <Music className="w-4 h-4 mr-2 mt-1 shrink-0 text-purple-500" />
                    <span>ร้องเพลงได้ดี จังหวะแม่นยำ</span>
                  </li>
                  <li>
                    มีใจรักงานบริการ ใจเย็น สุภาพ บุคลิกดี สุขภาพแข็งแรง อดทน
                    และร่าเริง
                  </li>
                  <li>สามารถสื่อสารภาษาอังกฤษได้</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Position 2: Assistant Teacher / Nanny */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="bg-orange-500 px-6 py-4">
              <h3 className="text-xl font-bold text-white">
                ครูผู้ช่วย / พี่เลี้ยง (Assistant Teacher / Nanny)
              </h3>
              <p className="text-orange-100 font-medium">
                Samart Edu-Care Nursery
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <Clock className="w-4 h-4 mr-1 text-orange-500" /> 5
                  วัน/สัปดาห์
                </span>
                <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <User className="w-4 h-4 mr-1 text-orange-500" /> หญิง, 18+
                </span>
                <span className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                  <GraduationCap className="w-4 h-4 mr-1 text-orange-500" /> ม.6
                  ขึ้นไป
                </span>
              </div>

              <div>
                <h4 className="flex items-center text-lg font-semibold text-orange-600 mb-3">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  หน้าที่ความรับผิดชอบ
                </h4>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ml-5">
                  <li>ดูแลกิจวัตรประจำวันและสวัสดิภาพของเด็กๆ</li>
                  <li>ดูแลความสะอาดและความพร้อมของสถานที่</li>
                  <li>ทำงาน 5 วัน/สัปดาห์ (จันทร์-ศุกร์)</li>
                </ul>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="flex items-center text-lg font-semibold text-orange-600 mb-3">
                  <User className="w-5 h-5 mr-2" />
                  คุณสมบัติ
                </h4>
                <ul className="space-y-2 text-gray-700 list-disc list-outside ml-5">
                  <li>เพศหญิง อายุ 18 ปีขึ้นไป</li>
                  <li>วุฒิ ม.6 หรือเทียบเท่าขึ้นไป</li>
                  <li>หากมีประสบการณ์หรือผ่านการอบรมจะพิจารณาเป็นพิเศษ</li>
                  <li className="flex items-start">
                    <Heart className="w-4 h-4 mr-2 mt-1 shrink-0 text-pink-500" />
                    <span>รักเด็ก และเข้าใจพัฒนาการเด็กปฐมวัย</span>
                  </li>
                  <li>
                    มีใจรักงานบริการ ใจเย็น สุภาพ บุคลิกดี สุขภาพแข็งแรง อดทน
                    และร่าเริง
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-orange-100">
          <div className="bg-orange-600 py-6 px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              สนใจร่วมงานกับเรา?
            </h2>
            <p className="text-orange-100">
              ยินดีรับสมัครแบบ Walk-in Interview เข้ามาพูดคุยกันก่อนได้ค่ะ
            </p>
          </div>

          <div className="p-8 space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 space-y-4">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">
                  ข้อมูลการติดต่อ
                </h3>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-1 shrink-0" />
                  <p className="text-gray-600">
                    เลขที่ 9 ซอยรังสิต-นครนายก 57, <br />
                    ถนนรังสิต-นครนายก, ต.ประชาธิปัตย์, <br />
                    อ.ธัญบุรี, จ.ปทุมธานี 12130
                  </p>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                  <a
                    href="tel:0615461614"
                    className="text-gray-600 hover:text-orange-600 transition-colors"
                  >
                    061-546-1614
                  </a>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="font-semibold text-gray-900 border-b border-gray-100 pb-2">
                  ช่องทางออนไลน์
                </h3>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                  <a
                    href="mailto:samarteducarenursery@gmail.com"
                    className="text-gray-600"
                  >
                    สอบถามทางอีเมล
                  </a>
                </div>

                <div className="flex items-center">
                  <Facebook className="w-5 h-5 text-orange-500 mr-3 shrink-0" />
                  <a
                    href="https://www.facebook.com/samarteducarenursery"
                    className="text-gray-600"
                  >
                    ติดตามข่าวสารผ่านหน้าเพจ Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm border border-orange-100">
              <iframe
                src="https://maps.google.com/maps?q=Samart+Edu-Care+Nursery,+9+Soi+Rangsit-Nakhon+Nayok+57,+Prachathipat,+Thanyaburi,+Pathum+Thani&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Samart Edu-Care Nursery Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
