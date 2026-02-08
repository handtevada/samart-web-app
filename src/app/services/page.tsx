import Link from "next/link";
import {
  Clock,
  Calendar,
  Users,
  BookOpen,
  Baby,
  Brain,
  Stethoscope,
  Heart,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-orange-600 font-semibold shadow-sm border border-orange-100 mb-6">
            <Baby className="w-5 h-5" />
            <span>รับดูแลเด็กอายุ 3 เดือน - 6 ปี</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            บริการและหลักสูตรของเรา
            <br />
            <span className="text-orange-500">Our Services & Curriculum</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            ดูแลและพัฒนาทักษะรอบด้านสำหรับลูกน้อยของคุณ
            <br />
            ด้วยความรักและความเข้าใจในพัฒนาการตามวัย
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              รูปแบบการให้บริการ
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">
              ปรับเปลี่ยนได้ตามความต้องการของครอบครัว
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Age Groups */}
            <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-lg shadow-orange-50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Baby className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ช่วงอายุที่รับดูแล
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>เด็กเล็ก (3 เดือนขึ้นไป)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                  <span>เด็กก่อนวัยเรียน (1-4 ปี)</span>
                </li>
              </ul>
            </div>

            {/* Service Options */}
            <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-lg shadow-orange-50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                รูปแบบที่มีให้เลือก
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>รายเดือน (เต็มวัน)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>รายเดือน (ครึ่งวัน)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>รายวัน</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500" />
                  <span>รายชั่วโมง</span>
                </li>
              </ul>
            </div>

            {/* Operating Days */}
            <div className="bg-white p-6 rounded-3xl border border-orange-100 shadow-lg shadow-orange-50 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">วันทำการ</h3>
              <div className="space-y-3 text-gray-600">
                <p className="font-semibold text-lg text-orange-600">
                  จันทร์ – ศุกร์
                </p>
                <p>หยุดวันเสาร์ – อาทิตย์</p>
                <p className="text-sm text-gray-400 mt-4">
                  *วันหยุดนักขัตฤกษ์อาจมีการเปลี่ยนแปลง
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              จุดเด่นของหลักสูตร
            </h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600">Curriculum Highlights</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm">
              <div className="shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  บูรณาการหลักสูตรออสเตรเลีย
                </h3>
                <p className="text-gray-600">
                  สร้างความคุ้นเคยทั้งภาษาไทยและอังกฤษ
                  เพื่อเตรียมพร้อมสำหรับการศึกษาในอนาคต
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm">
              <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Brain-Based Learning
                </h3>
                <p className="text-gray-600">
                  พัฒนาสมองทั้งซีกซ้ายและขวา ประสาทสัมผัส และจิตใต้สำนึก
                  ผ่านความสนุกสนาน
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm">
              <div className="shrink-0 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  พัฒนาการแบบองค์รวม
                </h3>
                <p className="text-gray-600">
                  เน้นพัฒนาการด้านร่างกาย อารมณ์ จิตใจ สังคม และสติปัญญา
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm">
              <div className="shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  ดูแลโดยทีมแพทย์และผู้เชี่ยวชาญ
                </h3>
                <p className="text-gray-600">
                  สุขภาพ ความปลอดภัย และโภชนาการ ควบคุมดูแลโดย{" "}
                  <strong>นพ.สามารถ จำปี</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caregiver Ratios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-linear-to-br from-orange-400 to-orange-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10 text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                อัตราส่วนผู้ดูแลต่อเด็ก
              </h2>
              <p className="text-orange-100">
                ให้การดูแลโดยบุคลากรที่สำเร็จการศึกษาระดับปริญญาตรี
                สาขาการศึกษาปฐมวัย
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">1:3</div>
                <div className="text-orange-100 font-medium">
                  อายุ 6 เดือน – 1 ปี
                </div>
                <Users className="w-8 h-8 mx-auto mt-4 opacity-80" />
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">1:5</div>
                <div className="text-orange-100 font-medium">อายุ 1 - 3 ปี</div>
                <Users className="w-8 h-8 mx-auto mt-4 opacity-80" />
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">1:10</div>
                <div className="text-orange-100 font-medium">อายุ 3 - 6 ปี</div>
                <Users className="w-8 h-8 mx-auto mt-4 opacity-80" />
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm">
                <GraduationCap className="w-4 h-4" />
                <span>การันตีมาตรฐานวิชาชีพ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Opening Hours & CTA */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 bg-white rounded-full shadow-md mb-6">
            <Clock className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">เวลาทำการ</h2>
          <p className="text-2xl text-orange-600 font-bold mb-8">
            07:00 – 17:00
          </p>
          <p className="text-gray-600 mb-10">
            จันทร์ – ศุกร์ (หยุดวันเสาร์ – อาทิตย์)
          </p>

          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-orange-500 text-white rounded-full font-bold text-lg hover:bg-orange-600 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            ติดต่อเยี่ยมชมสถานที่
          </Link>
        </div>
      </section>
    </div>
  );
}
