"use client";

import { useState } from "react";
import { Phone, ChevronUp, ChevronDown } from "lucide-react";

export default function MobileBottomBar() {
    const [expanded, setExpanded] = useState(false);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const adultPrice = 4890000;
    const childPrice = 4890000;
    const infantPrice = 4890000;

    const totalPrice = adults * adultPrice + children * childPrice + infants * infantPrice;

    const formatPrice = (price: number) =>
        price.toLocaleString("ko-KR") + "원";

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
            {/* 패널 (뒤 레이어) - 탭 포함 */}
            <div
                className="absolute bottom-0 left-0 right-0 z-10 transition-transform duration-300 ease-in-out"
                style={{
                    filter: "drop-shadow(0 -3px 6px rgba(0,0,0,0.12))",
                    transform: expanded
                        ? "translateY(-53px)"
                        : "translateY(calc(100% - 53px - 34px))",
                }}
            >
                {/* 탭 + 패널 = 하나의 도형 */}
                <div className="relative">
                    {/* 회색 외곽선 레이어 */}
                    <div
                        className="absolute inset-0 bg-gray-300"
                        style={{
                            clipPath: "polygon(0 24px, calc(50% - 31px) 24px, calc(50% - 21.7px) 0, calc(50% + 21.7px) 0, calc(50% + 31px) 24px, 100% 24px, 100% 100%, 0 100%)",
                        }}
                    />
                    {/* 흰색 채우기 레이어 (1px 안쪽) */}
                    <div
                        className="absolute bg-white"
                        style={{
                            top: "1px", left: "1px", right: "1px", bottom: "0",
                            clipPath: "polygon(0 24px, calc(50% - 30px) 24px, calc(50% - 30px) 23px, calc(50% - 20.7px) 0, calc(50% + 20.7px) 0, calc(50% + 30px) 23px, calc(50% + 30px) 24px, 100% 24px, 100% 100%, 0 100%)",
                        }}
                    />
                    {/* 하단바 뒤까지 연장 */}
                    <div className="absolute left-0 right-0 top-full h-[53px] bg-white z-10" />
                    {/* 콘텐츠 */}
                    <div className="relative z-10" style={{ paddingTop: "24px" }}>
                        {/* 탭 버튼 */}
                        <button
                            onClick={() => setExpanded(!expanded)}
                            className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center"
                            style={{ width: "62px", height: "24px" }}
                        >
                            {expanded ? (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                            ) : (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                            )}
                        </button>
                        <div className="px-5 pt-5 pb-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">인원</h3>

                        {/* 성인 */}
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <div className="text-base text-gray-700">성인 <span className="text-sm">(만 12세 이상)</span></div>
                                <div className="text-base font-normal text-gray-900 mt-0.5">{formatPrice(adults * adultPrice)}</div>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setAdults(Math.max(1, adults - 1))}
                                    className="w-9 h-9 border border-gray-300 flex items-center justify-center text-lg text-gray-500"
                                >
                                    −
                                </button>
                                <span className="w-9 h-9 border-t border-b border-gray-300 flex items-center justify-center text-base font-bold">
                                    {adults}
                                </span>
                                <button
                                    onClick={() => setAdults(adults + 1)}
                                    className="w-9 h-9 border border-gray-300 flex items-center justify-center text-lg text-gray-800"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* 아동 */}
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <div className="text-base text-gray-700">소아 <span className="text-sm">(만 12세 미만)</span></div>
                                <div className="text-base font-normal text-gray-900 mt-0.5">{formatPrice(childPrice)}</div>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setChildren(Math.max(0, children - 1))}
                                    className="w-9 h-9 border border-gray-300 flex items-center justify-center text-lg text-gray-500"
                                >
                                    −
                                </button>
                                <span className="w-9 h-9 border-t border-b border-gray-300 flex items-center justify-center text-base font-bold">
                                    {children}
                                </span>
                                <button
                                    onClick={() => setChildren(children + 1)}
                                    className="w-9 h-9 border border-gray-300 flex items-center justify-center text-lg text-gray-800"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* 유아 */}
                        <div className="flex items-center justify-between py-3">
                            <div>
                                <div className="text-base text-gray-700">유아 <span className="text-sm">(만 2세 미만)</span></div>
                                <div className="text-base font-normal text-gray-900 mt-0.5">{formatPrice(infantPrice)}</div>
                            </div>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setInfants(Math.max(0, infants - 1))}
                                    className="w-9 h-9 border border-gray-300 flex items-center justify-center text-lg text-gray-500"
                                >
                                    −
                                </button>
                                <span className="w-9 h-9 border-t border-b border-gray-300 flex items-center justify-center text-base font-bold">
                                    {infants}
                                </span>
                                <button
                                    onClick={() => setInfants(infants + 1)}
                                    className="w-9 h-9 border border-gray-300 flex items-center justify-center text-lg text-gray-800"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* 구분선 */}
                        <div className="border-t border-gray-200 mt-2 mb-3" />

                        {/* 총계 */}
                        <div className="flex items-start justify-between">
                            <div className="text-base font-bold text-gray-900">총 결제 예정 금액</div>
                            <div className="text-right">
                                <div className="text-xl font-bold text-gray-900">{formatPrice(totalPrice)}</div>
                                <div className="text-sm text-gray-500 mt-0.5">유류할증료&제세공과금 포함</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* 하단 바 (앞 레이어) */}
            <div className="relative z-20">
                <div className="flex items-stretch h-12 border border-[#003d75]">
                    <a
                        href="tel:02-000-0000"
                        className="flex items-center justify-center w-12 bg-white border-r border-[#003d75]"
                    >
                        <Phone className="w-5 h-5 text-[#0054a0]" />
                    </a>
                    <a
                        href="#contact"
                        className="flex-1 flex items-center justify-center bg-white text-[#0054a0] font-bold text-sm border-r border-[#003d75]"
                    >
                        예약 문의
                    </a>
                    <a
                        href="#contact"
                        className="flex-1 flex items-center justify-center bg-[#0054a0] text-white font-bold text-sm"
                    >
                        예약하기
                    </a>
                </div>
            </div>
        </div>
    );
}
