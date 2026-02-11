export default function Intro() {
    return (
        <section id="intro" className="py-20 md:py-32 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
                <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                    Premium Experience
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-16">
                    크루즈 시설
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2670&auto=format&fit=crop"
                            alt="Interior"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">인테리어</span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2670&auto=format&fit=crop"
                            alt="Dining"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">다이닝</span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2664&auto=format&fit=crop"
                            alt="Pool"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">수영장</span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2698&auto=format&fit=crop"
                            alt="Lounge"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">라운지</span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2670&auto=format&fit=crop"
                            alt="Deck"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">데크</span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <img
                            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop"
                            alt="Ocean View"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-4 left-4 text-white text-lg font-semibold">오션 뷰</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
