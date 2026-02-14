"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Ship } from "lucide-react";

const navItems = [
  { name: "크루즈 소개", href: "#intro" },
  { name: "시설 안내", href: "#facilities" },
  { name: "상세 정보", href: "#details" },
  { name: "일정표", href: "#schedule" },
  { name: "관광지", href: "#tourist-spots" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full h-14 md:h-16 z-50 transition-all duration-300 ${scrolled || menuOpen
        ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Ship className={`w-8 h-8 transition-colors ${scrolled || menuOpen ? "text-gray-900" : "text-white group-hover:text-gray-200"}`} />
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled || menuOpen ? "text-gray-900" : "text-white group-hover:text-gray-200"}`}>
            한세계 여행사
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-150 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-200 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center ml-auto">
          <Link
            href="#contact"
            className={`text-sm font-medium h-10 px-4 inline-flex items-center justify-center rounded-full transition-colors duration-150 ${scrolled
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
          >
            예약 문의
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen
            ? <X className="w-6 h-6 text-gray-900" />
            : <Menu className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 bg-gray-900 text-white text-center font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              예약 문의
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
