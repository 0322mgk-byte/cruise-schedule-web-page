const spots = [
    {
        name: "주노 (Juneau)",
        description: "알래스카의 주도이자, 빙하를 가장 가까이에서 볼 수 있는 곳. 맨덴홀 빙하 트레킹과 고래 관찰 투어가 인기입니다.",
        image: "https://images.unsplash.com/photo-1518182170546-07fb612d7c0f?q=80&w=2670&auto=format&fit=crop"
    },
    {
        name: "스케그웨이 (Skagway)",
        description: "골드러시 시대의 흔적이 그대로 남아있는 역사적인 마을. 화이트 패스 & 유콘 루트 철도 여행으로 대자연을 만끽하세요.",
        image: "https://images.unsplash.com/photo-1548858226-c21146604245?q=80&w=2670&auto=format&fit=crop"
    },
    {
        name: "엔디캇 암 (Endicott Arm)",
        description: "피요르드의 절경을 감상하며 항해하는 코스. 거대한 빙벽과 유빙 사이를 지나는 신비로운 경험을 선사합니다.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop"
    },
    {
        name: "케치칸 (Ketchikan)",
        description: "세계 연어의 수도. 원주민의 토템폴 문화와 크릭 스트리트의 수상 가옥들이 독특한 풍경을 자아냅니다.",
        image: "https://images.unsplash.com/photo-1517066928509-58079cd3645e?q=80&w=2759&auto=format&fit=crop"
    }
];

export default function TouristSpots() {
    return (
        <section id="tourist-spots" className="py-20 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3 block">
                        Destinations
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        알래스카의 대자연을 만나다
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        발길 닿는 곳마다 펼쳐지는 경이로운 풍경.<br className="hidden md:block" />
                        평생 잊지 못할 감동의 순간들을 기록하세요.
                    </p>
                </div>

                <div className="space-y-20 md:space-y-32">
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
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">{spot.name}</h3>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                                    {spot.description}
                                </p>
                                <button className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 hover:text-blue-800 hover:border-blue-800 transition-colors">
                                    자세히 보기
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
