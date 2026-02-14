export default function Intro() {
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

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8">
                        <div className="relative aspect-[11/10] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 group">
                            <img
                                src="/section2/unnamed.jpg"
                                alt="대극장"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-5 left-6 text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                <span className="text-white text-lg font-semibold block">대극장</span>
                                <span className="text-white/80 text-sm font-medium block mt-1">화려한 공연이 펼쳐지는 선상 극장</span>
                                <span className="text-white text-sm font-medium mt-3 inline-flex items-center gap-1 transition-all duration-300 cursor-pointer"><span className="group-hover:underline underline-offset-4">자세히 보기</span><span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></span>
                            </div>
                        </div>
                        <div className="relative aspect-[11/10] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 group">
                            <img
                                src="/section2/PR-Sun-VB-Piazza03-523x360.webp"
                                alt="중앙 로비"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-5 left-6 text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                <span className="text-white text-lg font-semibold block">중앙 로비</span>
                                <span className="text-white/80 text-sm font-medium block mt-1">우아한 분위기의 크루즈 중심 공간</span>
                                <span className="text-white text-sm font-medium mt-3 inline-flex items-center gap-1 transition-all duration-300 cursor-pointer"><span className="group-hover:underline underline-offset-4">자세히 보기</span><span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></span>
                            </div>
                        </div>
                        <div className="relative aspect-[11/10] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 group">
                            <img
                                src="/section2/LODGE4_MYD_No Camp Discovery_EDIT1_4x5-Portrait.webp"
                                alt="패밀리 엔터테인먼트"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-5 left-6 text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                <span className="text-white text-lg font-semibold block">패밀리 엔터테인먼트</span>
                                <span className="text-white/80 text-sm font-medium block mt-1">온 가족이 함께 즐기는 놀이 공간</span>
                                <span className="text-white text-sm font-medium mt-3 inline-flex items-center gap-1 transition-all duration-300 cursor-pointer"><span className="group-hover:underline underline-offset-4">자세히 보기</span><span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></span>
                            </div>
                        </div>
                        <div className="relative aspect-[11/10] rounded-lg overflow-hidden bg-gray-100 shadow-md hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 group">
                            <img
                                src="/section2/onship-spa-massage.avif"
                                alt="아우라 스파"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-5 left-6 text-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                                <span className="text-white text-lg font-semibold block">아우라 스파</span>
                                <span className="text-white/80 text-sm font-medium block mt-1">바다 위에서 누리는 힐링 테라피</span>
                                <span className="text-white text-sm font-medium mt-3 inline-flex items-center gap-1 transition-all duration-300 cursor-pointer"><span className="group-hover:underline underline-offset-4">자세히 보기</span><span className="transition-transform duration-300 group-hover:translate-x-2">&rsaquo;</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
