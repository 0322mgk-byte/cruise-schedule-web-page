"use client";

import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const facilities = [
    {
        name: "엔터테인먼트",
        images: [
            "/section2/princess-theater-majestic-princess-performers-on-stage.webp",
            "/section2/LODGE4_MYD_No Camp Discovery_EDIT1_4x5-Portrait.webp",
            "/section2/image_1024x_ (1).avif",
            "/section2/Princess_Cruises_Royal_Class_Interior_cyber_cafe.webp",
            "/section2/Princess_Cruises_Coral_Class_op_casino_lg.webp",
            "/section2/image_1024x_ (5).avif",
            "/section2/image_1024x_ (6).avif",
        ],
        alt: "대극장",
        subtitle: "낮부터 밤까지 이어지는 다채로운 즐길 거리",
        description:
            "에메랄드 프린세스호에서는 남녀노소 누구나 지루할 틈이 없습니다. 대극장에서 펼쳐지는 스펙터클한 공연을 관람하거나, 카지노와 스카이워커 나이트클럽에서 화려한 밤바다의 낭만을 즐겨보세요. 아이들을 위한 안전하고 신나는 전용 놀이 공간과 언제든 외부와 소통할 수 있는 인터넷 카페까지, 모든 세대의 취향을 완벽하게 만족시키는 다이내믹한 즐거움이 기다리고 있습니다.",
        highlights: [],
    },
    {
        name: "아웃도어 & 레저",
        images: [
            "/section2/outdoor-leisure/image_1024x_.avif",
            "/section2/outdoor-leisure/image_1024x_ (2).avif",
            "/section2/outdoor-leisure/image_1024x_ (3).avif",
            "/section2/outdoor-leisure/PR-Discovery-VB-FinessCenter-660x320.webp",
            "/section2/image_1024x_ (4).avif",
            "/section2/5c9fdbae4b2a4239992269.avif",
            "/section2/7f66d36dbb564927b8dbafb00f942839.avif",
        ],
        alt: "패밀리 엔터테인먼트",
        subtitle: "바다 위에서 즐기는 활력 넘치는 액티비티",
        description:
            "상쾌한 바닷바람과 함께 크루즈 위에서 건강한 에너지를 채워보세요. 끝없이 펼쳐진 수평선을 감상하며 땀 흘릴 수 있는 야외 조깅 트랙과 최신식 피트니스 센터부터 여유로운 휴식을 선사하는 야외 수영장, 그리고 일행과 가볍게 내기를 즐기기 좋은 미니 골프 코스까지. 탁 트인 바다를 배경으로 몸과 마음이 모두 상쾌해지는 다양한 야외 액티비티가 준비되어 있습니다.",
        highlights: [],
    },
    {
        name: "힐링 & 웰니스",
        images: [
            "/section2/onship-spa-massage.avif",
            "/section2/deck-crew-drinks-sanctuary-collection_1x1-Square.avif",
            "/section2/wellness-spa-salon-treatment.avif",
            "/section2/wellness-massage-deck_1x1-Square.avif",
            "/section2/wellness-couple-massage.avif",
        ],
        alt: "아우라 스파",
        subtitle: "바다 위에서 누리는 힐링 테라피",
        description:
            "로터스 스파에서 전문 테라피스트의 마사지와 페이셜 트리트먼트로 깊은 휴식을 경험하세요. 사우나, 스팀룸, 일본식 온천탕까지 갖추고 있어 항해 중 최고의 힐링을 선사합니다.",
        highlights: [],
    },
];

export default function Intro() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [imageIndex, setImageIndex] = useState(0);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setImageIndex(0);
    };
    const closeModal = () => setSelectedIndex(null);

    const currentImages = selectedIndex !== null ? facilities[selectedIndex].images : [];
    const prevImage = () => setImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    const nextImage = () => setImageIndex((prev) => (prev + 1) % currentImages.length);

    const touchStartX = useRef(0);
    const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? nextImage() : prevImage();
        }
    };

    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selectedIndex]);

    return (
        <>
            {/* Section 3 */}
            <section id="intro" className="py-12 md:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        크루즈 시설 안내
                    </h2>
                    <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        크루즈에서 즐길 수 있는 대표 시설을 소개합니다
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
                        {facilities.map((facility, index) => (
                            <div
                                key={index}
                                className="relative aspect-[11/10] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
                                onClick={() => openModal(index)}
                            >
                                <img
                                    src={facility.images[0]}
                                    alt={facility.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-5 left-6 text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                    <span className="text-white text-lg font-semibold block">{facility.name}</span>
                                    <span className="text-white/80 text-sm font-medium block mt-1">{facility.subtitle}</span>
                                    <span className="text-white text-sm font-medium mt-3 inline-flex items-center gap-1 transition-all duration-300">
                                        <span className="group-hover:underline underline-offset-4">자세히 보기</span>
                                        <span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 시설 상세 팝업 */}
                {selectedIndex !== null && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
                        <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-4xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
                            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
                                <h3 className="text-base md:text-lg font-bold">[시설 안내] {facilities[selectedIndex].name}</h3>
                                <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                                    <X className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                            <div className="p-4 md:p-6">
                                <div
                                    className="relative w-full aspect-[16/9] bg-gray-200 overflow-hidden group/carousel"
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <div
                                        className="flex h-full transition-transform duration-300 ease-in-out"
                                        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
                                    >
                                        {currentImages.map((src, i) => (
                                            <img
                                                key={i}
                                                src={src}
                                                alt={`${facilities[selectedIndex].name} ${i + 1}`}
                                                className="w-full h-full object-cover flex-shrink-0"
                                            />
                                        ))}
                                    </div>
                                    {currentImages.length > 1 && (
                                        <>
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-opacity"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center transition-opacity"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                                {currentImages.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setImageIndex(i)}
                                                        className={`w-2 h-2 rounded-full transition-colors ${i === imageIndex ? "bg-white" : "bg-white/50"}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed space-y-3 text-left">
                                    <h4 className="text-base md:text-lg font-bold text-gray-900">{facilities[selectedIndex].subtitle}</h4>
                                    <p>{facilities[selectedIndex].description}</p>
                                    {facilities[selectedIndex].highlights.length > 0 && (
                                        <div className="border-t border-gray-200 mt-4">
                                            {facilities[selectedIndex].highlights.map((item, i) => {
                                                const Icon = item.icon;
                                                return (
                                                    <div key={i} className="flex items-center gap-3 px-4 py-3 border-b border-gray-200">
                                                        <Icon className="w-5 h-5 text-[#0054a0] flex-shrink-0" />
                                                        <span className="text-sm text-gray-700">{item.label}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
