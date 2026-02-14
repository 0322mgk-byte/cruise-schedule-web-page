export default function TripInfo() {
    const tripData = [
        {
            label: "여행 일정",
            value: (
                <div>
                    <div className="px-5 py-4 border-b border-gray-300">
                        <span className="font-normal leading-relaxed text-gray-600">08/03 (월) 17:35 출발 | 8박 10일 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✈️ 캐나다 항공</span>
                    </div>
                    <div className="px-5 py-4 space-y-1">
                        <div className="font-normal leading-relaxed text-gray-600">한국 출발: 08/03 (월) 17:45 &nbsp;→&nbsp; 08/03 (월) 11:35 &nbsp;&nbsp;&nbsp;<span className="text-gray-400">AS172</span>&nbsp;&nbsp;&nbsp;<span className="text-gray-600">총 10시간 00분 소요</span></div>
                        <div className="font-normal leading-relaxed text-gray-600">한국 도착: 08/11 (화)  00:00 &nbsp;→&nbsp; 08/12 (수) 00:00 &nbsp;&nbsp;&nbsp;<span className="text-gray-400">AS172</span>&nbsp;&nbsp;&nbsp;<span className="text-gray-600">총 11시간 35분 소요</span></div>
                    </div>
                </div>
            )
        },
        {
            label: "여행 지역",
            value: (
                <div className="flex items-center flex-wrap gap-1">
                    {["벤쿠버", "해상", "주노", "스캐그웨이", "엔디캇암", "캐치칸", "해상", "벤쿠버"].map((city, i, arr) => (
                        <span key={i} className="flex items-center gap-1">
                            <span className="font-normal leading-relaxed text-gray-600">{city}</span>
                            {i < arr.length - 1 && <span className="text-gray-600 font-semibold mx-2">&gt;</span>}
                        </span>
                    ))}
                </div>
            ),
        },
        {
            label: "예약 현황",
            value: (
                <div className="flex items-center gap-3">
                    <span className="inline-block bg-red-500 text-white text-xs md:text-sm font-bold px-4 py-1 rounded-full">출발확정</span>
                    <span className="text-gray-800 font-semibold text-base md:text-lg">예약 <span className="text-red-500 text-xl md:text-2xl font-bold">16</span>명</span>
                </div>
            ),
        },
        { label: "인솔자", value: <span className="font-normal leading-relaxed text-gray-600">인솔자 1명이 동행합니다.</span> },
        { label: "미팅 장소", value: <span className="font-normal leading-relaxed text-gray-600">인천공항 제2터미널</span> },
    ];

    return (
        <>
            {/* Section 2 */}
            <section id="trip-info" className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                            여행 주요 일정
                        </h2>
                        <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                            밴쿠버에서 알래스카까지, 대자연을 품은 8박 10일의 항해
                        </p>
                    </div>

                    <div className="mt-6 md:mt-8 max-w-5xl mx-auto">
                        <div className="border border-gray-300 border-t-0 shadow-[0_-2px_0_0_black] overflow-hidden">
                        <table className="w-full text-left text-base">
                            <tbody>
                                {tripData.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={index < tripData.length - 1 ? "border-b border-gray-300" : ""}
                                    >
                                        <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-24 md:w-36 text-sm md:text-base whitespace-nowrap align-middle text-center border-r border-gray-300">
                                            {item.label}
                                        </td>
                                        <td className={`bg-white leading-relaxed ${index === 0 ? "p-0" : "px-5 py-4"}`}>
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
