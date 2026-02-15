"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function TripSummary() {
    const [cancelOpen, setCancelOpen] = useState(true);
    const [noticeOpen, setNoticeOpen] = useState(true);

    const cancellationItems = [
        "예약금 100만 원(환불 불가)",
        "출발일로부터 89일~60일 전 취소 시 신청금(150만 원) 위약금 부과",
        "출발일로부터 59일~30일 전 취소 시 총 여행 요금의 60% 위약금 부과",
        "출발일로부터 29일~15일 전 취소 시 총 여행 요금의 75% 위약금 부과",
        "출발일로부터 14일~출발 당일 취소 시 총 여행 요금의 100% 위약금 부과",
    ];

    return (
        <>
            {/* Section 8 */}
            <section id="trip-summary" className="py-12 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-0 md:px-6">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                            규정 및 유의사항
                        </h2>
                        <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                            예약 전 꼭 확인해야 할 필수 사항입니다
                        </p>
                    </div>

                    {/* 모바일: 개별 아코디언 카드 */}
                    <div className="mt-6 md:hidden max-w-5xl mx-auto grid grid-cols-1 gap-3">
                        {/* 취소 위약금 규정 */}
                        <div className="bg-white border border-gray-300 overflow-hidden">
                            <button
                                onClick={() => setCancelOpen(!cancelOpen)}
                                className="w-full border-b border-gray-300 px-5 py-4 flex items-center justify-between bg-gray-50"
                            >
                                <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    취소 위약금 규정
                                </span>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${cancelOpen ? "rotate-180" : ""}`} />
                            </button>
                            <ul className={`px-5 py-5 space-y-2 ${cancelOpen ? "block" : "hidden"}`}>
                                {cancellationItems.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 중요 안내사항 */}
                        <div className="bg-white border border-gray-300 overflow-hidden">
                            <button
                                onClick={() => setNoticeOpen(!noticeOpen)}
                                className="w-full border-b border-gray-300 px-5 py-4 flex items-center justify-between bg-gray-50"
                            >
                                <span className="inline-flex items-center gap-2 font-bold text-gray-900 text-base">
                                    <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    중요 안내사항
                                </span>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${noticeOpen ? "rotate-180" : ""}`} />
                            </button>
                            <ul className={`px-5 py-5 space-y-2 ${noticeOpen ? "block" : "hidden"}`}>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>크루즈 선사는 엄격한 취소료 규정을 적용하고 있으며, 이 점 필히 양지하여 주시기 바랍니다.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>&apos;총 경비&apos;는 할인된 상품 가격이 아닌 정상 상품 가격을 의미합니다.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>No Show에 대한 환불은 적용되지 않으며, 크루즈 서류 발행 이후 모든 예약 변경에 대해 비용이 부과됩니다.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>연휴, 연말, 휴가 기간 등에는 특별 취소료 규정이 적용되며, 예약 요청 시 별도 고지합니다.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>여행자의 중대한 질병이나 부상, 천재지변으로 인한 취소 시에도 크루즈 취소료 규정이 적용됩니다.</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>
                                        취소 접수는 업무 시간 내 유선 접수만 가능합니다.
                                        <span className="block mt-1 ml-1 space-y-1">
                                            <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>업무 시간: 월~금 09:30~16:30</span>
                                            <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>토/일 및 국가 공휴일 제외</span>
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>
                                        고객님들의 편안한 기항지 관광을 위해 대부분 선사 프로그램이 아닌, 당사에서 직접 준비하여 여행 프로그램을 진행합니다.
                                        <span className="block mt-1 ml-1 space-y-1">
                                            <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>간혹 천재지변, 풍랑, 날씨에 따라 선사가 입/출항을 못 하는 경우가 발생할 수 있습니다.</span>
                                            <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>이 경우 선사 권한으로 현장에서 일정이 변경될 수 있습니다.</span>
                                            <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>따라서 기항지 관광에 대한 환불 처리는 불가하오니, 이 점 양해 부탁드립니다.</span>
                                        </span>
                                    </span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-600 leading-relaxed">
                                    <span className="text-gray-400 flex-shrink-0">▣</span>
                                    <span>
                                        항공사의 문제로 수하물 미도착 및 항공 연착으로 인해 항공편이 변경되는 경우가 있을 수 있습니다.
                                        <span className="block mt-1 ml-1 space-y-1">
                                            <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>이 경우 여행사의 문제가 아니고 항공사의 문제로 발행되기 때문에, 여행사 보상 처리가 아닌 항공사에 보상 처리를 요청하여 해결하셔야 합니다.</span>
                                        </span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 데스크탑: 원래 테이블 레이아웃 */}
                    <div className="mt-10 max-w-5xl mx-auto hidden md:block">
                        <div className="bg-white border border-gray-300 border-t-0 shadow-[0_-2px_0_0_black] overflow-hidden">
                            <div className="flex flex-row">
                                <div className="bg-white font-semibold text-gray-700 px-6 py-5 w-52 text-lg whitespace-nowrap text-left flex items-start justify-start gap-2 flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    취소 위약금 규정
                                </div>
                                <ul className="px-5 py-5 space-y-2 flex-1">
                                    {cancellationItems.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                            <span className="text-gray-400 flex-shrink-0">▣</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="border-t border-gray-300 flex flex-row">
                                <div className="bg-white font-semibold text-gray-700 px-6 py-5 w-52 text-lg whitespace-nowrap text-left flex items-start justify-start gap-2 flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                    </svg>
                                    중요 안내사항
                                </div>
                                <ul className="px-5 py-5 space-y-2 flex-1">
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>크루즈 선사는 엄격한 취소료 규정을 적용하고 있으며, 이 점 필히 양지하여 주시기 바랍니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>&apos;총 경비&apos;는 할인된 상품 가격이 아닌 정상 상품 가격을 의미합니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>No Show에 대한 환불은 적용되지 않으며, 크루즈 서류 발행 이후 모든 예약 변경에 대해 비용이 부과됩니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>연휴, 연말, 휴가 기간 등에는 특별 취소료 규정이 적용되며, 예약 요청 시 별도 고지합니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>여행자의 중대한 질병이나 부상, 천재지변으로 인한 취소 시에도 크루즈 취소료 규정이 적용됩니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>
                                            취소 접수는 업무 시간 내 유선 접수만 가능합니다.
                                            <span className="block mt-1 ml-1 space-y-1">
                                                <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>업무 시간: 월~금 09:30~16:30</span>
                                                <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>토/일 및 국가 공휴일 제외</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>
                                            고객님들의 편안한 기항지 관광을 위해 대부분 선사 프로그램이 아닌, 당사에서 직접 준비하여 여행 프로그램을 진행합니다.
                                            <span className="block mt-1 ml-1 space-y-1">
                                                <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>간혹 천재지변, 풍랑, 날씨에 따라 선사가 입/출항을 못 하는 경우가 발생할 수 있습니다.</span>
                                                <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>이 경우 선사 권한으로 현장에서 일정이 변경될 수 있습니다.</span>
                                                <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>따라서 기항지 관광에 대한 환불 처리는 불가하오니, 이 점 양해 부탁드립니다.</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2 text-base text-gray-600 leading-relaxed">
                                        <span className="text-gray-400 flex-shrink-0">▣</span>
                                        <span>
                                            항공사의 문제로 수하물 미도착 및 항공 연착으로 인해 항공편이 변경되는 경우가 있을 수 있습니다.
                                            <span className="block mt-1 ml-1 space-y-1">
                                                <span className="flex items-start gap-2"><span className="text-gray-400 flex-shrink-0">•</span>이 경우 여행사의 문제가 아니고 항공사의 문제로 발행되기 때문에, 여행사 보상 처리가 아닌 항공사에 보상 처리를 요청하여 해결하셔야 합니다.</span>
                                            </span>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
