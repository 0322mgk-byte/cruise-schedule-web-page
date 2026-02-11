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
        <section id="facilities" className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Onboard Facilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        숙박 시설 안내
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center overflow-hidden cursor-pointer"
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
                                <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
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
                            className="w-full rounded-2xl shadow-2xl"
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
    );
}
