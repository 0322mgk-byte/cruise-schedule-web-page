"use client";

import { useState } from "react";

const features = [
    {
        name: "인사이드",
        image: "/section3/section3-inside.jpg",
    },
    {
        name: "오션뷰",
        image: "/section3/section3-o.jpg",
    },
    {
        name: "발코니",
        image: "/section3/section3-b.jpg",
    },
];

export default function Features() {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const goPrev = () => {
        if (selectedIndex === null) return;
        setSelectedIndex(selectedIndex === 0 ? features.length - 1 : selectedIndex - 1);
    };

    const goNext = () => {
        if (selectedIndex === null) return;
        setSelectedIndex(selectedIndex === features.length - 1 ? 0 : selectedIndex + 1);
    };

    return (
        <>
            {/* Section 4 */}
            <section id="facilities" className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        숙박 시설 안내
                    </h2>
                    <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        바다 위의 호텔, 객실별 상세 시설 확인하기
                    </p>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center overflow-hidden cursor-pointer"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={feature.image}
                                        alt={feature.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-base md:text-lg font-semibold leading-snug text-gray-900">{feature.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {selectedIndex !== null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <div
                            className="relative max-w-4xl w-full mx-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute -top-10 right-0 text-white text-3xl font-light hover:opacity-70 transition-opacity z-10"
                                onClick={() => setSelectedIndex(null)}
                            >
                                &times;
                            </button>
                            <img
                                src={features[selectedIndex].image}
                                alt={features[selectedIndex].name}
                                className="w-full rounded-lg shadow-2xl"
                            />
                            <p className="text-center text-white text-xl font-semibold mt-4">{features[selectedIndex].name}</p>

                            <button
                                className="absolute left-2 md:left-[-48px] top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:opacity-70 transition-opacity"
                                onClick={goPrev}
                            >
                                &#8249;
                            </button>
                            <button
                                className="absolute right-2 md:right-[-48px] top-1/2 -translate-y-1/2 text-white text-5xl font-light hover:opacity-70 transition-opacity"
                                onClick={goNext}
                            >
                                &#8250;
                            </button>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
