import Link from "next/link";
import { Ship, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16 md:py-24 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Ship className="w-8 h-8 text-blue-500" />
                            <span className="font-bold text-xl tracking-tight">Emerald Princess</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            꿈꾸던 크루즈 여행, 에메랄드 프린세스와 함께하세요.
                            최고의 서비스와 잊지 못할 추억을 약속드립니다.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">바로가기</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="#intro" className="hover:text-white transition-colors">크루즈 소개</Link></li>
                            <li><Link href="#facilities" className="hover:text-white transition-colors">시설 안내</Link></li>
                            <li><Link href="#schedule" className="hover:text-white transition-colors">운항 일정</Link></li>
                            <li><Link href="#tourist-spots" className="hover:text-white transition-colors">기항지 관광</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">고객 센터</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li>전화: 1588-0000</li>
                            <li>이메일: contact@cruise.com</li>
                            <li>운영시간: 평일 09:00 - 18:00</li>
                            <li>주소: 서울특별시 중구 세종대로 123</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">뉴스레터 구독</h4>
                        <p className="text-gray-400 text-sm mb-4">
                            최신 프로모션과 여행 정보를 받아보세요.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="이메일 주소"
                                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                                구독
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Emerald Princess Cruise. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
