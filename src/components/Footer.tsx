import React from "react";
import Link from "next/link";
import { Baby, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 pt-16 border-t border-gray-200">
      <div className="container mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Baby className="h-6 w-6 text-orange-500" />
              <span className="font-bold text-xl text-gray-900">
                SAMART EDU-CARE
              </span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              ดูแลลูกน้อยด้วยความรักและความเชี่ยวชาญ สถานที่ปลอดภัย
              พัฒนาการสมวัย
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                <span>
                  ซอยรังสิต-นครนายก 57 <br />
                  ถ.รังสิต-นครนายก ตำบลประชาธิปัตย์ <br />
                  อำเภอธัญบุรี ปทุมธานี 12130
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:0615461614" className="hover:text-orange-600">
                  061-546-1614
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <span>จันทร์ - ศุกร์: 07:00 - 17:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
              <Link href="/services" className="hover:text-orange-500">
                Services
              </Link>
              <Link href="/about" className="hover:text-orange-500">
                About Us
              </Link>
              <Link
                href="https://www.facebook.com/samarteducarenursery"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                Promotion
              </Link>
              <Link href="/careers" className="hover:text-orange-500">
                Careers
              </Link>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-orange-500 py-4">
        <div className="container mx-auto px-4 text-white text-center text-sm">
          ©2026 Samart Edu-Care Nursery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
