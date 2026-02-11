export default function TripSummary() {
    const includedItems = [
        "대한항공 왕복 항공료(이코노미), 공항-터미널 픽드랍",
        "에메랄드 프린세스 크루즈(인사이드, 오션뷰, 발코니)",
        "벤쿠버 1박 호텔 및 시내 관광 (입장료, 전용 차량, 한국인 기사 가이드 등)",
        "각 기항지 선사 투어 포함 (총 3곳: 주노/스캐그웨이/케치칸)",
        "크루즈 인솔자 동행, 1억 원 여행자 보험",
        "미국/캐나다 비자 발급 비용",
    ];

    const excludedItems = [
        "기타 선내 개인 비용 (선내 음료, 주류, 면세점, 카지노, 인터넷, 세탁비 등)",
        "크루즈 선내 팁(선내 봉사료): 77유로 (금액 변동 가능, 하선 시 결제)",
        "공동 경비: USD 100 (고객 중 총무 관리)",
    ];

    const cancellationPolicy = [
        { period: "예약 시", penalty: "예약금 100만 원 (환불 불가)", level: 0 },
        { period: "89일 ~ 60일 전", penalty: "신청금 150만 원", level: 1 },
        { period: "59일 ~ 30일 전", penalty: "총 요금의 60%", level: 2 },
        { period: "29일 ~ 15일 전", penalty: "총 요금의 75%", level: 3 },
        { period: "14일 ~ 당일", penalty: "총 요금의 100%", level: 4 },
    ];

    const penaltyColors = [
        "text-gray-700",
        "text-orange-600",
        "text-orange-700 font-medium",
        "text-red-600 font-semibold",
        "text-red-700 font-bold",
    ];

    return (
        <section id="trip-summary" className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* 헤더 */}
                <div className="mb-10 md:mb-16 text-center">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Trip Overview & Policy
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        여행 요약 및 규정 안내
                    </h2>
                </div>

                {/* 표 1 — 여행 일정 요약 */}
                <div className="mb-8 md:mb-12 rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-900 text-white px-4 md:px-6 py-4">
                        <h3 className="text-lg font-bold">여행 일정 요약</h3>
                    </div>
                    {/* 데스크톱 테이블 */}
                    <table className="w-full hidden md:table">
                        <tbody>
                            <tr className="border-t border-gray-200 hover:bg-blue-50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-900 w-1/5 bg-gray-100">
                                    여행 기간
                                </td>
                                <td className="px-6 py-4 text-gray-700">
                                    2026.08.03 ~ 08.12 (8박 10일)
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200 bg-gray-50 hover:bg-blue-50 transition-colors">
                                <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-100">
                                    여행 경로
                                </td>
                                <td className="px-6 py-4 text-gray-700">
                                    벤쿠버 → 해상 → 주노 → 스캐그웨이 → 엔디캇암 → 캐치칸 → 해상 → 벤쿠버
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/* 모바일 카드 */}
                    <div className="md:hidden divide-y divide-gray-200">
                        <div className="px-4 py-3 hover:bg-blue-50 transition-colors">
                            <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">여행 기간</span>
                            <span className="block text-gray-900 font-medium">2026.08.03 ~ 08.12 (8박 10일)</span>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 hover:bg-blue-50 transition-colors">
                            <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">여행 경로</span>
                            <span className="block text-sm text-gray-900 font-medium leading-relaxed">
                                벤쿠버 → 해상 → 주노 → 스캐그웨이 → 엔디캇암 → 캐치칸 → 해상 → 벤쿠버
                            </span>
                        </div>
                    </div>
                </div>

                {/* 표 2 — 포함 / 불포함 사항 */}
                <div className="mb-8 md:mb-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* 포함 사항 */}
                    <div className="rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="bg-blue-600 text-white px-4 md:px-6 py-4 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-lg font-bold">포함 사항</h3>
                        </div>
                        <ul className="divide-y divide-gray-200">
                            {includedItems.map((item, i) => (
                                <li
                                    key={i}
                                    className={`px-4 md:px-6 py-3 md:py-4 flex items-start gap-3 hover:bg-blue-50 transition-colors ${i % 2 === 1 ? "bg-gray-50" : ""}`}
                                >
                                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 불포함 사항 */}
                    <div className="rounded-2xl border border-gray-200 overflow-hidden">
                        <div className="bg-gray-900 text-white px-4 md:px-6 py-4 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h3 className="text-lg font-bold">불포함 사항</h3>
                        </div>
                        <ul className="divide-y divide-gray-200">
                            {excludedItems.map((item, i) => (
                                <li
                                    key={i}
                                    className={`px-4 md:px-6 py-3 md:py-4 flex items-start gap-3 hover:bg-blue-50 transition-colors ${i % 2 === 1 ? "bg-gray-50" : ""}`}
                                >
                                    <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 표 3 — 취소 위약금 규정 */}
                <div className="mb-8 md:mb-12 rounded-2xl border border-gray-200 overflow-hidden">
                    <div className="bg-gray-900 text-white px-4 md:px-6 py-4">
                        <h3 className="text-lg font-bold">취소 위약금 규정</h3>
                    </div>
                    {/* 데스크톱 테이블 */}
                    <table className="w-full hidden md:table">
                        <thead>
                            <tr className="bg-gray-100 text-gray-900 text-sm uppercase tracking-wider">
                                <th className="px-6 py-3 text-left font-semibold">취소 시기</th>
                                <th className="px-6 py-3 text-left font-semibold">위약금</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cancellationPolicy.map((row, i) => (
                                <tr
                                    key={i}
                                    className={`border-t border-gray-200 hover:bg-blue-50 transition-colors ${i % 2 === 1 ? "bg-gray-50" : ""}`}
                                >
                                    <td className="px-6 py-4 text-gray-900 font-medium">{row.period}</td>
                                    <td className={`px-6 py-4 ${penaltyColors[row.level]}`}>{row.penalty}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* 모바일 카드 */}
                    <div className="md:hidden divide-y divide-gray-200">
                        {cancellationPolicy.map((row, i) => (
                            <div
                                key={i}
                                className={`px-4 py-3 hover:bg-blue-50 transition-colors ${i % 2 === 1 ? "bg-gray-50" : ""}`}
                            >
                                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">취소 시기</span>
                                <span className="block text-gray-900 font-medium mb-2">{row.period}</span>
                                <span className="block text-xs text-gray-500 uppercase tracking-wider mb-1">위약금</span>
                                <span className={`block ${penaltyColors[row.level]}`}>{row.penalty}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 중요 안내사항 */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v5h-2z" />
                        </svg>
                        <h3 className="text-lg font-bold text-gray-900">중요 안내사항</h3>
                    </div>
                    <ul className="space-y-3 text-sm md:text-base text-gray-600">
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>크루즈 선사는 엄격한 취소료 규정을 적용하고 있으며, 이 점 필히 양지하여 주시기 바랍니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>&apos;총 경비&apos;는 할인된 상품 가격이 아닌 정상 상품 가격을 의미합니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>No Show에 대한 환불은 적용되지 않으며, 크루즈 서류 발행 이후 모든 예약 변경에 대해 비용이 부과됩니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>연휴, 연말, 휴가 기간 등에는 특별 취소료 규정이 적용되며, 예약 요청 시 별도 고지합니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>여행자의 중대한 질병이나 부상, 천재지변으로 인한 취소 시에도 크루즈 취소료 규정이 적용됩니다.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-gray-400 mt-1">•</span>
                            <span>
                                취소 접수는 업무 시간 내 유선 접수만 가능합니다.
                                <span className="block mt-1 text-gray-500">
                                    업무 시간: 월~금 09:30~16:30 (토/일 및 국가 공휴일 제외)
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
