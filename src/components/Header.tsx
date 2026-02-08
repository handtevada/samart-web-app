"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Baby, Phone, Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-orange-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-xl md:text-2xl text-orange-600 flex items-center gap-2"
        >
          <Baby className="h-8 w-8" />
          <span>Samart Edu-Care Nursery</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
          <Link
            href="/"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/" ? "text-orange-600 font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/about" ? "text-orange-600 font-bold" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            href="/services"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/services" ? "text-orange-600 font-bold" : ""
            }`}
          >
            Services
          </Link>
          <Link
            href="https://m.me/samarteducarenursery"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition-colors"
          >
            Promotion
          </Link>
          <Link
            href="/careers"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/careers" ? "text-orange-600 font-bold" : ""
            }`}
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className={`hover:text-orange-500 transition-colors ${
              pathname === "/contact" ? "text-orange-600 font-bold" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:0615461614"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">Call Now: 061-546-1614</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            className="lg:hidden text-gray-600 hover:text-orange-600 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-orange-100 shadow-lg animate-in slide-in-from-top-5">
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                pathname === "/"
                  ? "text-orange-600 font-bold bg-orange-50"
                  : "text-gray-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                pathname === "/about"
                  ? "text-orange-600 font-bold bg-orange-50"
                  : "text-gray-600"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/services"
              onClick={() => setIsMenuOpen(false)}
              className={`p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                pathname === "/services"
                  ? "text-orange-600 font-bold bg-orange-50"
                  : "text-gray-600"
              }`}
            >
              Services
            </Link>
            <Link
              href="https://www.facebook.com/samarteducarenursery"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors text-gray-600"
            >
              Promotion
            </Link>
            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className={`p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                pathname === "/careers"
                  ? "text-orange-600 font-bold bg-orange-50"
                  : "text-gray-600"
              }`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`p-3 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors ${
                pathname === "/contact"
                  ? "text-orange-600 font-bold bg-orange-50"
                  : "text-gray-600"
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
