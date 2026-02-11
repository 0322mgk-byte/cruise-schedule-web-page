export default function Details() {
    return (
        <section id="details" className="py-20 md:py-32 bg-gray-900 text-white relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-3 block">
                            Ship Specifications
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                            크루즈 제원
                        </h2>

                        <div className="space-y-8">
                            <div className="flex flex-col md:flex-row gap-8 border-t border-gray-600 pt-8">
                                <div className="flex-1">
                                    <span className="block text-gray-200 text-sm mb-1 uppercase tracking-wider">총 톤수 / 길이</span>
                                    <span className="text-3xl font-bold text-white">113,561<span className="text-lg text-gray-500 font-normal">톤</span> / 289<span className="text-lg text-gray-500 font-normal">m</span></span>
                                </div>
                                <div className="flex-1">
                                    <span className="block text-gray-200 text-sm mb-1 uppercase tracking-wider">승객 정원</span>
                                    <span className="text-3xl font-bold text-white">3,000 <span className="text-lg text-gray-500 font-normal">명</span></span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-8 border-t border-gray-600 pt-8">
                                <div className="flex-1">
                                    <span className="block text-gray-200 text-sm mb-1 uppercase tracking-wider">승무원 수</span>
                                    <span className="text-3xl font-bold text-white">1,200 <span className="text-lg text-gray-500 font-normal">명</span></span>
                                </div>
                                <div className="flex-1">
                                    <span className="block text-gray-200 text-sm mb-1 uppercase tracking-wider">첫 취항</span>
                                    <span className="text-3xl font-bold text-white">2007</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-800 aspect-[4/3]">
                            <img
                                src="/section4/emerald-princess-kids-clubs-10-768x498.jpg"
                                alt="Emerald Princess"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
