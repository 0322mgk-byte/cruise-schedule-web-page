import { cruiseData } from "@/data/cruise-data";

export default function TripInfo() {
    const { subtitle, flights, routeCities, reservationStatus, reservationCount, escortInfo, meetingPlace } = cruiseData.tripInfo;
    const { duration } = cruiseData.hero;

    const tripData = [
        {
            label: "여행 일정",
            value: (
                <div>
                    <div className="px-5 py-2 md:py-4 border-b border-gray-300">
                        <span className="font-normal leading-relaxed text-gray-600">{flights.outbound[0].departureDate} {flights.outbound[0].departureTime} 출발 &nbsp;&nbsp;|&nbsp;&nbsp; {duration} <br className="md:hidden" /><span className="hidden md:inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>✈️ {flights.outbound[0].airline}</span>
                    </div>
                    <div className="px-5 py-2 md:py-4 space-y-1">
                        {/* 모바일 */}
                        <div className="md:hidden">
                            {flights.outbound.map((leg, i) => (
                                <div key={`out-${i}`}>
                                    <div className="font-normal leading-relaxed text-gray-600"><span className="mr-2">한국출발</span>{leg.departureDate} {leg.departureTime}</div>
                                    <div className="font-normal leading-relaxed text-gray-600"><span className="mr-2">현지도착</span>{leg.arrivalDate} {leg.arrivalTime}</div>
                                    <div className="text-gray-500 text-sm mt-0.5 mb-3">&rarr; {leg.duration}</div>
                                </div>
                            ))}
                            {flights.inbound.map((leg, i) => (
                                <div key={`in-${i}`}>
                                    <div className="font-normal leading-relaxed text-gray-600"><span className="mr-2">현지출발</span>{leg.departureDate} {leg.departureTime}</div>
                                    <div className="font-normal leading-relaxed text-gray-600"><span className="mr-2">한국도착</span>{leg.arrivalDate} {leg.arrivalTime}</div>
                                    <div className="text-gray-500 text-sm mt-0.5 mb-1">&rarr; {leg.duration}</div>
                                </div>
                            ))}
                        </div>
                        {/* 데스크탑 */}
                        <div className="hidden md:block space-y-1 font-normal leading-relaxed text-gray-600">
                            {flights.outbound.map((leg, i) => (
                                <div key={`out-${i}`}>한국 출발 &nbsp;{leg.departureDate} {leg.departureTime} &nbsp;&nbsp;&rarr; &nbsp;&nbsp;현지 도착 &nbsp;{leg.arrivalDate} {leg.arrivalTime} &nbsp;&nbsp;&nbsp;{leg.flightCode} &nbsp;&nbsp;{leg.duration}</div>
                            ))}
                            {flights.inbound.map((leg, i) => (
                                <div key={`in-${i}`}>현지 출발 &nbsp;{leg.departureDate} {leg.departureTime} &nbsp;&nbsp;&rarr; &nbsp;&nbsp;한국 도착 &nbsp;{leg.arrivalDate} {leg.arrivalTime} &nbsp;&nbsp;&nbsp;{leg.flightCode} &nbsp;&nbsp;{leg.duration}</div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        },
        {
            label: "여행 지역",
            value: (
                <div className="flex items-center flex-wrap gap-1">
                    {routeCities.map((city, i, arr) => (
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
                    <span className="inline-block bg-red-500 text-white text-xs md:text-base font-bold px-4 py-1 rounded-full">{reservationStatus}</span>
                    <span className="text-gray-800 font-semibold text-base md:text-base">예약 <span className="text-red-500 text-xl md:text-base font-bold">{reservationCount}</span>명</span>
                </div>
            ),
        },
        { label: "인솔자", value: <span className="font-normal leading-relaxed text-gray-600">{escortInfo}</span> },
        { label: "미팅 장소", value: <span className="font-normal leading-relaxed text-gray-600">{meetingPlace}</span> },
    ];

    return (
        <>
            {/* Section 2 */}
            <section id="trip-info" className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-0 md:px-6">
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                            여행 주요 일정
                        </h2>
                        <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                            {subtitle || `${routeCities[0]}에서 ${routeCities[routeCities.length - 1]}까지 ${duration}의 항해`}
                        </p>
                    </div>

                    <div className="mt-6 md:mt-10 max-w-5xl mx-auto">
                        <div className="border border-gray-300 border-t-0 shadow-[0_-1px_0_0_black] overflow-hidden">
                            <table className="w-full text-left text-sm md:text-base">
                                <tbody>
                                    {tripData.map((item, index) => (
                                        <tr
                                            key={index}
                                            className={index < tripData.length - 1 ? "border-b border-gray-300" : ""}
                                        >
                                            <td className="bg-gray-50 font-semibold text-gray-700 px-4 py-4 w-24 md:w-36 text-sm md:text-base whitespace-nowrap align-middle text-center border-r border-gray-300">
                                                {item.label}
                                            </td>
                                            <td className={`bg-white leading-relaxed ${index === 0 ? "p-0" : "px-5 py-2 md:py-4"}`}>
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
