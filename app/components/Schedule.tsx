import { MapPin } from "lucide-react";

interface ScheduleItem {
    day: string;
    date: string;
    port: string;
    arrive: string;
    depart: string;
    description: string;
}

const scheduleData: ScheduleItem[] = [
    { day: "1일차", date: "8월 3일", port: "벤쿠버 (캐나다)", arrive: "-", depart: "16:30", description: "설레는 크루즈 여행의 시작, 벤쿠버 출항" },
    { day: "2일차", date: "8월 4일", port: "해상", arrive: "-", depart: "-", description: "크루즈 부대시설 이용 및 휴식" },
    { day: "3일차", date: "8월 5일", port: "주노 (알래스카)", arrive: "13:00", depart: "22:00", description: "알래스카의 주도, 빙하 투어 및 고래 관찰" },
    { day: "4일차", date: "8월 6일", port: "스케그웨이", arrive: "07:00", depart: "20:30", description: "골드러시의 역사가 살아있는 도시" },
    { day: "5일차", date: "8월 7일", port: "엔디캇 암", arrive: "05:00", depart: "10:00", description: "장엄한 피요르드와 빙하 절경 감상 (선상)" },
    { day: "6일차", date: "8월 8일", port: "케치칸", arrive: "10:00", depart: "18:00", description: "연어의 고향, 토템폴 파크 관광" },
    { day: "7일차", date: "8월 9일", port: "해상", arrive: "-", depart: "-", description: "마지막 해상 일정, 갈라 디너" },
    { day: "8일차", date: "8월 10일", port: "벤쿠버", arrive: "07:30", depart: "-", description: "벤쿠버 도착 및 하선" },
];

export default function Schedule() {
    return (
        <section id="schedule" className="py-20 md:py-32 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Itinerary
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        상세 운항 일정
                    </h2>
                    <p className="text-xl text-gray-600">
                        2026년 8월 3일 — 8월 10일 (8박 10일)
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[19px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gray-200 -translate-x-1/2 md:translate-x-0"></div>

                    <div className="space-y-8">
                        {scheduleData.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row gap-6 md:gap-0 items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                {/* Timeline Dot */}
                                <div className="absolute left-[19px] md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-blue-600 -translate-x-1/2 mt-1.5 z-10"></div>

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-16 text-left" : "md:pr-16 md:text-right"}`}>
                                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-3">
                                            {item.day}
                                        </span>
                                        <div className="text-sm text-gray-500 font-medium mb-1">{item.date}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center justify-start md:justify-inherit gap-2">
                                            {item.port}
                                        </h3>
                                        <div className="text-sm text-gray-600 space-y-1 mb-4">
                                            {item.arrive !== "-" && <div>도착: <span className="font-semibold text-gray-900">{item.arrive}</span></div>}
                                            {item.depart !== "-" && <div>출발: <span className="font-semibold text-gray-900">{item.depart}</span></div>}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-3">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Empty Spacer for alternating layout */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
