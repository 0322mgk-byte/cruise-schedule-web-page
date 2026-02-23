import { cruiseData } from "@/data/cruise-data";

const { spots } = cruiseData.touristSpots;

export default function TouristSpots() {
    return (
        <>
            {/* Section 7 */}
            <section id="tourist-spots" className="py-12 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
                    <span className="text-sm font-medium tracking-widest uppercase text-gray-500 block">
                        Destinations
                    </span>
                    <h2 className="mt-3 md:mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                        알래스카의 대자연을 만나다
                    </h2>
                    <p className="mt-3 md:mt-4 text-xl md:text-2xl font-normal leading-relaxed text-gray-600">
                        발길 닿는 곳마다 펼쳐지는 경이로운 풍경,
                        평생 잊지 못할 감동의 순간들을 기록하세요
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 md:px-6 mt-8 md:mt-12 space-y-20 md:space-y-32">
                    {spots.map((spot, index) => (
                        <div key={index} className={`flex flex-col gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                            <div className="w-full md:w-1/2">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={spot.image}
                                        alt={spot.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-xl md:text-2xl font-semibold leading-snug text-gray-900">{spot.name}</h3>
                                <p className="mt-3 text-base md:text-lg font-normal leading-[1.7] text-gray-700">
                                    {spot.description}
                                </p>
                                <a className="mt-4 inline-flex text-sm font-medium text-gray-700 underline-offset-4 hover:underline">
                                    자세히 보기 →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
