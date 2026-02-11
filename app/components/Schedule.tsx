"use client";

import { Timeline } from "@/components/ui/timeline";
import { Ship, Anchor, Mountain, Fish, Waves, MapPin, Clock } from "lucide-react";

interface ScheduleItem {
    day: string;
    date: string;
    port: string;
    arrive: string;
    depart: string;
    description: string;
    highlights?: string[];
    icon: React.ReactNode;
}

const scheduleData: ScheduleItem[] = [
    {
        day: "1일차", date: "8월 3일 (월)", port: "벤쿠버 (캐나다)", arrive: "-", depart: "16:30",
        description: "설레는 크루즈 여행의 시작, 벤쿠버 출항",
        highlights: ["크루즈 터미널 체크인 및 승선", "안전 훈련 (Muster Drill)", "출항 갑판 파티와 함께 벤쿠버 항구 감상"],
        icon: <Ship className="w-5 h-5" />,
    },
    {
        day: "2일차", date: "8월 4일 (화)", port: "해상", arrive: "-", depart: "-",
        description: "크루즈 부대시설 이용 및 휴식",
        highlights: ["선내 수영장, 스파, 피트니스 센터 이용", "다양한 레스토랑에서 미식 체험", "공연 및 카지노 등 엔터테인먼트"],
        icon: <Waves className="w-5 h-5" />,
    },
    {
        day: "3일차", date: "8월 5일 (수)", port: "주노 (알래스카)", arrive: "13:00", depart: "22:00",
        description: "알래스카의 주도, 빙하 투어 및 고래 관찰",
        highlights: ["멘덴홀 빙하 트레킹", "혹등고래 관찰 투어", "다운타운 탐방 및 연어 부화장 방문"],
        icon: <Mountain className="w-5 h-5" />,
    },
    {
        day: "4일차", date: "8월 6일 (목)", port: "스케그웨이", arrive: "07:00", depart: "20:30",
        description: "골드러시의 역사가 살아있는 도시",
        highlights: ["화이트 패스 & 유콘 루트 열차 관광", "골드러시 역사 투어", "클론다이크 골드 러시 국립역사공원"],
        icon: <MapPin className="w-5 h-5" />,
    },
    {
        day: "5일차", date: "8월 7일 (금)", port: "엔디캇 암", arrive: "05:00", depart: "10:00",
        description: "장엄한 피요르드와 빙하 절경 감상 (선상)",
        highlights: ["도스 빙하 (Dawes Glacier) 선상 관람", "피요르드 절벽 사이로 크루징", "야생 동물 (바다표범, 독수리) 관찰"],
        icon: <Anchor className="w-5 h-5" />,
    },
    {
        day: "6일차", date: "8월 8일 (토)", port: "케치칸", arrive: "10:00", depart: "18:00",
        description: "연어의 고향, 토템폴 파크 관광",
        highlights: ["토템 유산 센터 방문", "크릭 스트리트 역사 거리 산책", "루비컨 트레일 하이킹 또는 카약 투어"],
        icon: <Fish className="w-5 h-5" />,
    },
    {
        day: "7일차", date: "8월 9일 (일)", port: "해상", arrive: "-", depart: "-",
        description: "마지막 해상 일정, 갈라 디너",
        highlights: ["캡틴 갈라 디너", "마지막 밤 선상 파티", "짐 정리 및 하선 준비"],
        icon: <Waves className="w-5 h-5" />,
    },
    {
        day: "8일차", date: "8월 10일 (월)", port: "벤쿠버", arrive: "07:30", depart: "-",
        description: "벤쿠버 도착 및 하선",
        highlights: ["조식 후 하선 절차 진행", "벤쿠버 시내 관광 (1박)", "스탠리 파크, 개스타운, 그랜빌 아일랜드"],
        icon: <MapPin className="w-5 h-5" />,
    },
];

export default function Schedule() {
    const timelineData = scheduleData.map((item) => ({
        title: item.day,
        content: (
            <div>
                {/* Port & Date Header */}
                <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100 text-blue-600">
                        {item.icon}
                    </div>
                    <div>
                        <h4 className="text-lg md:text-2xl font-bold text-gray-900">
                            {item.port}
                        </h4>
                        <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                </div>

                {/* Time Info */}
                {(item.arrive !== "-" || item.depart !== "-") && (
                    <div className="flex gap-4 mb-4">
                        {item.arrive !== "-" && (
                            <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                <Clock className="w-3.5 h-3.5 text-blue-500" />
                                <span>도착 <span className="font-semibold text-gray-900">{item.arrive}</span></span>
                            </div>
                        )}
                        {item.depart !== "-" && (
                            <div className="flex items-center gap-1.5 text-sm text-gray-600">
                                <Clock className="w-3.5 h-3.5 text-blue-500" />
                                <span>출발 <span className="font-semibold text-gray-900">{item.depart}</span></span>
                            </div>
                        )}
                    </div>
                )}

                {/* Description */}
                <p className="text-neutral-800 text-xs md:text-sm font-normal mb-6">
                    {item.description}
                </p>

                {/* Highlights */}
                {item.highlights && (
                    <div className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                            <div key={i} className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
                                <span className="text-blue-500">✦</span> {highlight}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        ),
    }));

    return (
        <section id="schedule">
            <Timeline data={timelineData} />
        </section>
    );
}
