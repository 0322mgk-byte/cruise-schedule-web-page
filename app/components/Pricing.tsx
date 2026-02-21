"use client";

import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";

export default function Pricing() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
        history.pushState({ modal: "pricing-info" }, "");
    };
    const closeModal = () => {
        if (showModal) {
            setShowModal(false);
            history.back();
        }
    };

    useEffect(() => {
        const onPopState = () => {
            setShowModal(false);
        };
        window.addEventListener("popstate", onPopState);
        return () => window.removeEventListener("popstate", onPopState);
    }, []);

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [showModal]);

    return (
        <>
            {/* Section 8 - Mobile */}
            <section className="md:hidden py-12 bg-white">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 text-center leading-tight tracking-normal px-5">
                        상품 가격
                    </h2>

                    <div className="mt-6 border-y border-gray-300 shadow-[0_-1px_0_0_black]">
                        <table className="w-full text-base">
                            <thead>
                                <tr className="border-b border-gray-300">
                                    <th className="bg-gray-50 px-2 py-3 text-center font-semibold text-gray-700 border-r border-gray-300 w-1/3">
                                        <div>성인</div>
                                        <div className="text-sm font-normal text-gray-500 mt-0.5">만 12세 이상</div>
                                    </th>
                                    <th className="bg-gray-50 px-2 py-3 text-center font-semibold text-gray-700 border-r border-gray-300 w-1/3">
                                        <div>소아</div>
                                        <div className="text-sm font-normal text-gray-500 mt-0.5">만 12세 미만</div>
                                    </th>
                                    <th className="bg-gray-50 px-2 py-3 text-center font-semibold text-gray-700 w-1/3">
                                        <div>유아</div>
                                        <div className="text-sm font-normal text-gray-500 mt-0.5">만 2세 미만</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-2 py-4 text-center border-r border-gray-300">
                                        <div className="font-bold text-red-600 text-base">4,890,000</div>
                                        <div className="text-sm text-gray-500 mt-1 leading-tight">유류할증료<br />0원 포함</div>
                                    </td>
                                    <td className="px-2 py-4 text-center border-r border-gray-300">
                                        <div className="font-bold text-red-600 text-base">4,890,000</div>
                                        <div className="text-sm text-gray-500 mt-1 leading-tight">유류할증료<br />0원 포함</div>
                                    </td>
                                    <td className="px-2 py-4 text-center">
                                        <div className="font-bold text-red-600 text-base">4,890,000</div>
                                        <div className="text-sm text-gray-500 mt-1 leading-tight">유류할증료<br />0원 포함</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <button
                        onClick={openModal}
                        className="mt-4 mx-4 w-[calc(100%-2rem)] flex items-center justify-center gap-1.5 py-3 border border-gray-300 text-base font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                        독실료 및 추가요금 안내
                        <ExternalLink className="w-4 h-4" />
                    </button>
                </div>

                {/* 모바일 추가요금 안내 모달 */}
                {showModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="relative z-10 bg-white w-full h-full overflow-y-auto">
                            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 py-3">
                                <h3 className="text-base font-bold">독실료 및 추가요금 안내</h3>
                                <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-4 pb-28 space-y-6 text-sm text-gray-700 leading-relaxed">
                                {/* 객실 이용 안내 */}
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-3">객실 이용 안내</h4>
                                    <div className="space-y-2">
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>모든 상품가는 성인 2인 1실 투숙 기준입니다.</span></p>
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>1인 객실 사용 시: 독실 추가 요금이 발생합니다. (선실 등급별 상이 / 별도 문의)</span></p>
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>3~4인실(다인실) 사용 시: 실시간 잔여 객실 확인이 필요하며, 취소 시 선사 규정에 따른 별도 페널티가 발생할 수 있습니다.</span></p>
                                    </div>
                                </div>

                                {/* 소아 및 유아 안내 */}
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-3">소아 및 유아 안내</h4>
                                    <div className="space-y-2">
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>소아/유아 요금은 성인 2인과 같은 방을 사용하는 조건입니다. (조건 미충족 시 아동 추가 요금 발생)</span></p>
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>여행 기간 중 만 2세가 되는 경우 요금 별도 문의</span></p>
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>유아는 항공 및 기항지 투어 차량 이용 시 단독 좌석이 배정되지 않습니다.</span></p>
                                    </div>
                                </div>

                                {/* 경비 및 팁 안내 */}
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-3">경비 및 팁(Tip) 안내</h4>
                                    <div className="space-y-2">
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>선내 승무원 경비(필수): 성인 77유로 / 소아 38.5유로</span></p>
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>현지 진행비(인솔자/기사/가이드): 110유로</span></p>
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>매너 팁: 자율적 의사로 지불하며, 미지급에 따른 불이익은 전혀 없습니다.</span></p>
                                    </div>
                                </div>

                                {/* 요금 변동 및 기타 */}
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-3">요금 변동 및 기타</h4>
                                    <div className="space-y-2">
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>유류할증료 및 제세공과금은 유가와 환율 변동에 따라 변경될 수 있습니다.</span></p>
                                        <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[1px]">▣</span><span>개별 항공권 발권 또는 현지 합류 고객은 일정에 따라 요금이 다르므로 별도 문의 바랍니다.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Section 8 - Desktop */}
            <section id="pricing" className="hidden md:block py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                            상품 가격
                        </h2>
                    </div>

                    <div className="mt-10 max-w-5xl mx-auto">
                        <div className="border border-gray-300 border-t-0 shadow-[0_-1px_0_0_black]">
                            <table className="w-full text-base">
                                <tbody>
                                    {/* 헤더 행 */}
                                    <tr className="border-b border-gray-300">
                                        <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-36 whitespace-nowrap align-middle text-center border-r border-gray-300">
                                            구분
                                        </td>
                                        <td className="bg-gray-50 px-5 py-4 border-r border-gray-300 text-center font-semibold text-gray-700">
                                            <div>성인</div>
                                            <div className="text-sm font-normal text-gray-500 mt-0.5">만 12세 이상</div>
                                        </td>
                                        <td className="bg-gray-50 px-5 py-4 border-r border-gray-300 text-center font-semibold text-gray-700">
                                            <div>아동</div>
                                            <div className="text-sm font-normal text-gray-500 mt-0.5">만 12세 미만 <span className="relative inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-gray-400 text-[10px] font-semibold leading-none align-text-top cursor-pointer group">?<span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-48 bg-white border border-gray-400 rounded shadow-[0_4px_20px_rgba(0,0,0,0.15)] px-4 py-3 text-left text-xs text-gray-700 font-normal hidden group-hover:block z-10"><div className="font-semibold">아동(만 12세 미만)</div><div className="mt-1.5">2014.04.05 ~ 2024.04.04</div></span></span></div>
                                        </td>
                                        <td className="bg-gray-50 px-5 py-4 text-center font-semibold text-gray-700">
                                            <div>유아</div>
                                            <div className="text-sm font-normal text-gray-500 mt-0.5">만 2세 미만 <span className="relative inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-400 text-gray-400 text-[10px] font-semibold leading-none align-text-top cursor-pointer group">?<span className="absolute -right-14 top-full mt-2 w-80 bg-white border border-gray-400 rounded shadow-[0_4px_20px_rgba(0,0,0,0.15)] px-4 py-3 text-left text-xs text-gray-700 font-normal hidden group-hover:block z-10"><div className="font-semibold">유아(만 2세 미만)</div><div className="mt-1.5">2024.04.05 ~ 2026.04.04</div><div className="mt-1.5 text-gray-500">※ 여행기간 중 만 2세가 되는 유아의 경우, 항공사 요금 규정에 따른 차액이 발생할 수 있으니 별도문의바랍니다.</div></span></span></div>
                                        </td>
                                    </tr>
                                    {/* 기본상품 행 */}
                                    <tr>
                                        <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-6 w-36 whitespace-nowrap align-middle text-center border-r border-gray-300">
                                            기본상품
                                        </td>
                                        <td className="bg-white px-5 py-6 border-r border-gray-300 text-center">
                                            <div className="font-bold text-lg text-gray-900">4,890,000원</div>
                                            <div className="text-sm text-gray-500 mt-0.5">유류할증료 123,000원/제세공과금 0원 포함</div>
                                        </td>
                                        <td className="bg-white px-5 py-6 border-r border-gray-300 text-center">
                                            <div className="font-bold text-lg text-gray-900">4,890,000원</div>
                                            <div className="text-sm text-gray-500 mt-0.5">유류할증료 123,000원/제세공과금 0원 포함</div>
                                        </td>
                                        <td className="bg-white px-5 py-6 text-center">
                                            <div className="font-bold text-lg text-gray-900">4,890,000원</div>
                                            <div className="text-sm text-gray-500 mt-0.5">유류할증료 0원/제세공과금 0원 포함</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-6 border border-gray-300 border-t-0 shadow-[0_-1px_0_0_black]">
                            <table className="w-full text-base">
                                <tbody>
                                    <tr className="border-b border-gray-300">
                                        <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-36 whitespace-nowrap align-middle text-center border-r border-gray-300 text-base">
                                            객실 이용 안내
                                        </td>
                                        <td className="bg-white px-5 py-4 leading-relaxed text-gray-600">
                                            <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>모든 상품가는 성인 2인 1실 투숙 기준입니다.</span></p>
                                            <p className="mt-2 flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>1인 객실 사용 시: 독실 추가 요금이 발생합니다. (선실 등급별 상이 / 별도 문의)</span></p>
                                            <p className="mt-2 flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>3~4인실(다인실) 사용 시: 실시간 잔여 객실 확인이 필요하며, 취소 시 선사 규정에 따른 별도 페널티가 발생할 수 있습니다.</span></p>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-36 whitespace-nowrap align-middle text-center border-r border-gray-300 text-base">
                                            소아 및<br />유아 안내
                                        </td>
                                        <td className="bg-white px-5 py-4 leading-relaxed text-gray-600">
                                            <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>소아/유아 요금은 성인 2인과 같은 방을 사용하는 조건입니다. (조건 미충족 시 아동 추가 요금 발생)</span></p>
                                            <p className="mt-2 flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>여행 기간 중 만 2세가 되는 경우 요금 별도 문의</span></p>
                                            <p className="mt-2 flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>유아는 항공 및 기항지 투어 차량 이용 시 단독 좌석이 배정되지 않습니다.</span></p>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-300">
                                        <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-36 whitespace-nowrap align-middle text-center border-r border-gray-300 text-base">
                                            경비 및<br />팁(Tip) 안내
                                        </td>
                                        <td className="bg-white px-5 py-4 leading-relaxed text-gray-600">
                                            <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>선내 승무원 경비(필수): 성인 77유로 / 소아 38.5유로</span></p>
                                            <p className="mt-2 flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>현지 진행비(인솔자/기사/가이드): 110유로</span></p>
                                            <p className="mt-2 flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>매너 팁: 자율적 의사로 지불하며, 미지급에 따른 불이익은 전혀 없습니다.</span></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-36 whitespace-nowrap align-middle text-center border-r border-gray-300 text-base">
                                            요금 변동<br />및 기타
                                        </td>
                                        <td className="bg-white px-5 py-4 leading-relaxed text-gray-600">
                                            <p className="flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>유류할증료 및 제세공과금은 유가와 환율 변동에 따라 변경될 수 있습니다.</span></p>
                                            <p className="mt-2 flex items-start gap-2"><span className="text-gray-400 text-sm flex-shrink-0 mt-[3px]">▣</span><span>개별 항공권 발권 또는 현지 합류 고객은 일정에 따라 요금이 다르므로 별도 문의 바랍니다.</span></p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
