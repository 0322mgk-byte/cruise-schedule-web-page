"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProductInfo() {
    const [includedOpen, setIncludedOpen] = useState(true);
    const [excludedOpen, setExcludedOpen] = useState(true);

    const includedItems = [
        "대한항공 왕복 항공료(이코노미), 공항-터미널 픽드랍",
        "에메랄드 프린세스 크루즈(인사이드, 오션뷰, 발코니)",
        "밴쿠버 1박 호텔 및 시내 관광 (입장료, 전용 차량, 한국인 기사 가이드 등)",
        "각 기항지 선사 투어 포함 (총 3곳: 주노/스캐그웨이/케치칸)",
        "크루즈 인솔자 동행, 1억 원 여행자 보험",
        "미국/캐나다 비자 발급 비용",
    ];

    const excludedItems = [
        "기타 선내 개인 비용 (선내 음료, 주류, 면세점, 카지노, 인터넷, 세탁비 등)",
        "크루즈 선내 팁(선내 봉사료): 77유로 (금액 변동 가능, 하선 시 결제)",
        "공동 경비: USD 100 (고객 중 총무 관리)",
    ];

    return (
        <section id="product-info" className="py-12 md:py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-0 md:px-6">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        상품 안내
                    </h2>
                    <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        포함 내역과 별도 지출 항목을 확인해 보세요
                    </p>
                </div>

                <div className="mt-6 md:mt-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                    {/* 포함사항 */}
                    <div className="bg-white border-y border-gray-300 md:border md:border-gray-300 md:border-t-0 md:shadow-[0_-2px_0_0_black] overflow-hidden">
                        {/* 모바일: 아코디언 헤더 */}
                        <button
                            onClick={() => setIncludedOpen(!includedOpen)}
                            className="md:hidden w-full border-b border-gray-300 px-5 py-4 flex items-center justify-between bg-gray-50"
                        >
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                                포함사항
                            </span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${includedOpen ? "rotate-180" : ""}`} />
                        </button>
                        {/* 데스크탑: 기존 헤더 */}
                        <div className="hidden md:block border-b border-gray-300 px-5 py-4">
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-lg">
                                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <circle cx="12" cy="12" r="9" />
                                </svg>
                                포함사항
                            </span>
                        </div>
                        {/* 모바일: 아코디언 콘텐츠 */}
                        <ul className={`px-5 py-5 space-y-2 ${includedOpen ? "block" : "hidden"} md:block`}>
                            {includedItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 불포함사항 */}
                    <div className="bg-white border-y border-gray-300 md:border md:border-gray-300 md:border-t-0 md:shadow-[0_-2px_0_0_black] overflow-hidden">
                        {/* 모바일: 아코디언 헤더 */}
                        <button
                            onClick={() => setExcludedOpen(!excludedOpen)}
                            className="md:hidden w-full border-b border-gray-300 px-5 py-4 flex items-center justify-between bg-gray-50"
                        >
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                불포함사항
                            </span>
                            <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${excludedOpen ? "rotate-180" : ""}`} />
                        </button>
                        {/* 데스크탑: 기존 헤더 */}
                        <div className="hidden md:block border-b border-gray-300 px-5 py-4">
                            <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-lg">
                                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                불포함사항
                            </span>
                        </div>
                        {/* 모바일: 아코디언 콘텐츠 */}
                        <ul className={`px-5 py-5 space-y-2 ${excludedOpen ? "block" : "hidden"} md:block`}>
                            {excludedItems.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
