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
      className={`fixed top-0 w-full h-12 md:h-20 z-50 transition-all duration-300 bg-[#0054a0] ${scrolled || menuOpen
        ? "md:bg-white/80 md:backdrop-blur-md md:border-b md:border-gray-200 md:shadow-sm"
        : "md:bg-transparent md:border-b md:border-white/30"
        }`}
    >
      <div className="relative h-full max-w-7xl mx-auto px-4 md:px-10 flex items-center">
        {/* Mobile Menu Button - 모바일 좌측 */}
        <button
          className="md:hidden p-2"
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen
            ? <X className="w-7 h-7 text-white" strokeWidth={1} />
            : <Menu className="w-7 h-7 text-white" strokeWidth={1} />
          }
        </button>

        {/* Logo - 모바일에서 우측, 데스크톱에서 좌측 */}
        <div className="flex-1 flex items-center">
          <Link href="/" className="flex items-center gap-2 group ml-auto md:ml-0 pr-2 md:pr-0">
            <Ship className={`hidden md:block w-6 h-6 transition-colors text-white ${scrolled || menuOpen ? "md:text-gray-900" : "md:group-hover:text-gray-200"}`} />
            <span className={`font-bold text-base md:text-2xl tracking-tight transition-colors text-white ${scrolled || menuOpen ? "md:text-gray-900" : "md:group-hover:text-gray-200"}`}>
              한세계 여행사
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-base font-medium transition-colors duration-150 ${scrolled ? "text-gray-600 hover:text-gray-900" : "text-gray-200 hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex flex-1 justify-end items-center">
          <Link
            href="#contact"
            className={`text-base font-medium h-10 px-4 inline-flex items-center justify-center rounded-full transition-colors duration-150 ${scrolled
              ? "bg-[#0054a0] text-white hover:bg-[#004080]"
              : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
          >
            예약 문의
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-900 hover:text-[#0054a0] font-medium py-3 px-4 transition-colors ${index < navItems.length - 1 ? "border-b border-gray-200" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-3 mb-2 bg-[#0054a0] text-white text-center font-semibold py-3 px-4 rounded-lg hover:bg-[#004080] transition-colors"
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
