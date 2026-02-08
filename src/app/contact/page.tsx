import React from "react";
import { MapPin, Phone, Mail, Facebook, ExternalLink } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">
            ติดต่อเรา
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            เรายินดีตอบคำถามและต้อนรับทุกท่านสู่เนอสเซอรี่ของเรา
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  ช่องทางการติดต่อ
                </h2>
                <div className="w-20 h-1 bg-orange-500 rounded-full mb-8 mx-auto md:mx-0"></div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 p-8 bg-gray-50 rounded-2xl hover:shadow-md transition-shadow">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    สถานที่ตั้ง
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-2 text-lg">
                    เลขที่ 9 ซ.รังสิต-นครนายก 57 ถ.รังสิต-นครนายก <br />
                    ต.ประชาธิปัตย์ อ.ธัญบุรี จ.ปทุมธานี 12103
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-8 bg-orange-50 rounded-2xl border border-orange-100 hover:shadow-md transition-shadow">
                <div className="bg-orange-500 p-3 rounded-full text-white shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    เบอร์โทรศัพท์
                  </h3>
                  <a
                    href="tel:0615461614"
                    className="text-3xl font-bold text-orange-600 hover:text-orange-700 transition-colors block"
                  >
                    061-546-1614
                  </a>
                  <p className="text-gray-600 mt-1 text-lg">
                    สอบถามรายละเอียดเพิ่มเติม หรือนัดหมายเข้าชม
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="mailto:samarteducarenursery@gmail.com"
                  className="flex items-center justify-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <Mail className="text-gray-600 group-hover:text-orange-600 transition-colors" />
                  <span className="font-medium text-gray-700 text-lg">
                    ส่งอีเมลหาเรา
                  </span>
                </a>
                <a
                  href="https://www.facebook.com/samarteducarenursery"
                  className="flex items-center justify-center gap-3 p-6 bg-[#1877F2]/10 rounded-xl hover:bg-[#1877F2]/20 transition-colors group"
                >
                  <Facebook className="text-[#1877F2]" />
                  <span className="font-medium text-[#1877F2] text-lg">
                    ไปยัง Fanpage Facebook
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                แผนที่เดินทาง
              </h2>
              <p className="text-gray-600 text-lg">
                ปากซอยรังสิต-นครนายก 57 คลอง 2 ประชาธิปัตย์ ธัญบุรี ปทุมธานี
              </p>
            </div>

            {/* Google Maps Placeholder */}
            <div className="w-full h-125 bg-gray-200 rounded-3xl overflow-hidden shadow-inner relative group">
              <iframe
                src="https://maps.google.com/maps?q=Samart+Edu-Care+Nursery,+9+Soi+Rangsit-Nakhon+Nayok+57,+Prachathipat,+Thanyaburi,+Pathum+Thani&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
              {/* Note: Coordinates are approximate based on the address description. 
                  In a real scenario, you'd replace the src with the exact embed link for the business. */}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (Footer Area) */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            เชิญแวะมาชมสถานที่จริง
          </h2>
          <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
            เรายินดีพาคุณเดินชมและพูดคุยเกี่ยวกับพัฒนาการของลูกน้อย
          </p>
          <a
            href="https://www.google.com/maps?ll=13.993843,100.654557&z=15&t=m&hl=en-TH&gl=US&mapclient=embed&cid=10322873044028168476" // Placeholder link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-orange-600 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all"
          >
            ขอเส้นทางใน Google Maps
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
