"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";

const LocationPin = () => (
  <div className="relative flex items-center justify-center">
    {/* Outer pulse ring */}
    <div className="absolute w-8 h-8 rounded-full bg-blue-400/15 animate-ping" />
    {/* Inner glow */}
    <div className="absolute w-7 h-7 rounded-full bg-blue-500/25 animate-pulse" />
    {/* Pin SVG */}
    <svg width="24" height="30" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative drop-shadow-lg">
      <defs>
        <linearGradient id="pinGradient" x1="11" y1="0" x2="11" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path d="M11 0C4.925 0 0 4.925 0 11c0 7.5 11 17 11 17s11-9.5 11-17c0-6.075-4.925-11-11-11z" fill="url(#pinGradient)" />
      <circle cx="11" cy="11" r="4.5" fill="white" />
    </svg>
  </div>
);

interface DaySchedule {
  day: number;
  date: string;
  location: string;
  description: string;
  content?: React.ReactNode;
}

const scheduleDataBase: Omit<DaySchedule, "content">[] = [
  {
    day: 1,
    date: "08/03(월)",
    location: "인천 → 벤쿠버",
    description: "개스타운, 캐나다 플레이스, 스탠리 공원, 차이나타운",
  },
  {
    day: 2,
    date: "08/04(화)",
    location: "해상",
    description: "크루즈 부대시설 이용",
  },
  {
    day: 3,
    date: "08/05(수)",
    location: "주노 (알래스카)",
    description: "빙하 투어 및 고래 관찰",
  },
  {
    day: 4,
    date: "08/06(목)",
    location: "스케그웨이",
    description: "골드러시 역사 탐방",
  },
  {
    day: 5,
    date: "08/07(금)",
    location: "엔디캇 암",
    description: "피요르드와 빙하 절경 감상",
  },
  {
    day: 6,
    date: "08/08(토)",
    location: "케치칸",
    description: "토템폴 파크 관광",
  },
  {
    day: 7,
    date: "08/09(일)",
    location: "해상",
    description: "갈라 디너",
  },
  {
    day: 8,
    date: "08/10(월)",
    location: "벤쿠버 (캐나다)",
    description: "하선 및 시내 관광",
  },
  {
    day: 9,
    date: "08/11(화)",
    location: "벤쿠버 (캐나다)",
    description: "출발 및 귀국",
  },
  {
    day: 10,
    date: "08/12(수)",
    location: "인천",
    description: "인천 도착",
  },
];

const vancouverImages = [
  "/sectrion6/connie_sf-vancouver-2238137_640.webp",
  "/sectrion6/alex_agrico-vancouver-7450141_640.webp",
  "/sectrion6/pexels-souvenirpixels-1630883.webp",
];

const gastownImages = [
  "https://images.unsplash.com/photo-1609825488888-3a766db05542?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1570060716412-1be517e23e8a?q=80&w=640&auto=format&fit=crop",
];

const canadaPlaceImages = [
  "https://images.unsplash.com/photo-1559511260-66a68e4e7f27?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=640&auto=format&fit=crop",
];

const stanleyParkImages = [
  "https://images.unsplash.com/photo-1501436513145-30f24e19fcc8?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=640&auto=format&fit=crop",
];

const chinatownImages = [
  "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530176874971-e219486e3e1f?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=640&auto=format&fit=crop",
];

export const Timeline = () => {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleDay = (day: number) => {
    setOpenDay(openDay === day ? null : day);
  };

  const openModal = (type: string) => {
    setActiveModal(type);
    setCarouselIndex(0);
  };

  const closeModal = () => setActiveModal(null);

  const imageMap: Record<string, string[]> = {
    vancouver: vancouverImages,
    gastown: gastownImages,
    canadaplace: canadaPlaceImages,
    stanleypark: stanleyParkImages,
    chinatown: chinatownImages,
  };
  const activeImages = activeModal ? imageMap[activeModal] ?? [] : [];

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeModal]);

  const prevImage = () => setCarouselIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  const nextImage = () => setCarouselIndex((prev) => (prev + 1) % activeImages.length);

  const day1Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 인천 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">인천</span>
        </li>
        {/* Regular item */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">[17:35] 인천 국제공항 출발 - 밴쿠버 향발</span>
            <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
              <p>▣ 교통편 : 에어캐나다 or 대한항공</p>
              <p>▣ 비행시간 : 약 9시간 55분 소요</p>
              <p>▣ 시차 : 17시간 느립니다.</p>
              <p>▣ 항공 시간 및 편수는 변경될 수 있습니다.</p>
              <p className="mt-2 text-red-500">
                ※ 기내 좌석 배정은 항공사의 고유 권한입니다. 여행사나 인솔자가 임의로 지정해 드릴 수 없는 영역이기에, 희망하시는 좌석 배정이 어려울 수 있는 점 고객님의 너그러운 양해 부탁드립니다.
              </p>
            </div>
          </div>
        </li>
        {/* City marker */}
        <li className="relative flex items-center gap-3 py-1 mt-10">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">밴쿠버</span>
        </li>
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[10:30] 밴쿠버 국제공항 도착 후 입국 수속</span>
        </li>

        {/* Vancouver Info Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">[관광 정보] 밴쿠버</h4>
              <button
                onClick={() => openModal("vancouver")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <img src="/sectrion6/connie_sf-vancouver-2238137_640.webp" alt="밴쿠버 관광1" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <img src="/sectrion6/alex_agrico-vancouver-7450141_640.webp" alt="밴쿠버 관광2" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                <img src="/sectrion6/pexels-souvenirpixels-1630883.webp" alt="밴쿠버 관광3" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">캐나다 서부 최대의 도시, 밴쿠버.</p>
              <p>태평양과 해안 산맥 사이에 자리한 밴쿠버는 세계에서 가장 살기 좋은 도시 중 하나로 손꼽힙니다. 온화한 기후와 수려한 자연경관, 다양한 문화가 어우러진 이 도시는 매년 수백만 명의 관광객을 끌어들이고 있습니다.</p>
              <p>시내에는 역사와 문화가 살아 숨 쉬는 개스타운, 아름다운 항구 전망의 캐나다 플레이스, 도심 속 거대한 숲 스탠리 공원, 북미 최대 규모의 차이나타운 등 다양한 볼거리가 있습니다.</p>
            </div>
          </div>
        </li>

        {/* Vancouver Info Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("vancouver")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 text-left"
          >
            <div className="w-28 h-20 bg-gray-200 overflow-hidden flex-shrink-0">
              <img src="/sectrion6/connie_sf-vancouver-2238137_640.webp" alt="밴쿠버" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 py-3">
              <span className="text-xs text-gray-500">[관광정보]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">밴쿠버</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* Gastown Info Card - Desktop */}
        <li className="relative hidden md:block mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">밴쿠버에서 가장 오래된 거리, 개스타운</h4>
              <button
                onClick={() => openModal("gastown")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {gastownImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`개스타운 관광${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p>1867년 수다쟁이 선원 &apos;개시 잭&apos; 데이튼이 위스키 한 통으로 술집을 열면서 탄생한 밴쿠버의 발상지입니다. 자갈이 깔린 거리 위로 빅토리아풍 붉은 벽돌 건물이 늘어서 있고, 15분마다 증기를 내뿜는 세계 유일의 증기시계가 이 거리의 상징입니다. 감각적인 부티크와 갤러리, 분위기 좋은 레스토랑이 즐비해 산책만으로도 충분히 매력적인 곳입니다.</p>
            </div>
          </div>
        </li>

        {/* Gastown Info Card - Mobile */}
        <li className="relative md:hidden mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("gastown")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 text-left"
          >
            <div className="w-28 h-20 bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={gastownImages[0]} alt="개스타운" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 py-3">
              <span className="text-xs text-gray-500">밴쿠버에서 가장 오래된 거리</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">개스타운</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>
        {/* Canada Place Info Card - Desktop */}
        <li className="relative hidden md:block mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">밴쿠버 항구의 랜드마크, 캐나다 플레이스</h4>
              <button
                onClick={() => openModal("canadaplace")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {canadaPlaceImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`캐나다 플레이스 관광${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p>다섯 개의 거대한 흰색 돛 지붕이 밴쿠버 항구를 수놓는 상징적인 복합시설입니다. 1986년 세계박람회(EXPO 86) 캐나다관으로 건설되어 500만 명이 넘는 관람객을 맞이했으며, 지금은 알래스카 크루즈의 출발항이자 매일 정오에 캐나다 국가가 울려 퍼지는 밴쿠버의 대표 랜드마크입니다.</p>
            </div>
          </div>
        </li>
        {/* Canada Place Info Card - Mobile */}
        <li className="relative md:hidden mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("canadaplace")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 text-left"
          >
            <div className="w-28 h-20 bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={canadaPlaceImages[0]} alt="캐나다 플레이스" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 py-3">
              <span className="text-xs text-gray-500">밴쿠버 항구의 랜드마크</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">캐나다 플레이스</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* Stanley Park Info Card - Desktop */}
        <li className="relative hidden md:block mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">도심 속 거대한 숲, 스탠리 공원</h4>
              <button
                onClick={() => openModal("stanleypark")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {stanleyParkImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`스탠리 공원 관광${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p>400헥타르에 50만 그루의 나무가 울창한 북미 최대의 도시 공원으로, 연간 800만 명이 찾는 밴쿠버의 허파입니다. 세계에서 가장 긴 해안 산책로 시월(Seawall)을 따라 10km를 걸으면 도시 스카이라인과 북쪽 산맥이 파노라마처럼 펼쳐집니다.</p>
            </div>
          </div>
        </li>
        {/* Stanley Park Info Card - Mobile */}
        <li className="relative md:hidden mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("stanleypark")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 text-left"
          >
            <div className="w-28 h-20 bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={stanleyParkImages[0]} alt="스탠리 공원" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 py-3">
              <span className="text-xs text-gray-500">도심 속 거대한 숲</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">스탠리 공원</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* Chinatown Info Card - Desktop */}
        <li className="relative hidden md:block mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">북미에서 가장 오래된 차이나타운</h4>
              <button
                onClick={() => openModal("chinatown")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {chinatownImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`차이나타운 관광${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p>1880년대 골드러시와 대륙횡단철도 건설 시대에 뿌리를 둔 캐나다 최대의 차이나타운입니다. 내셔널 지오그래픽이 세계 최고의 도시 정원으로 선정한 쑨원 고전 중국정원과, 중국-서양 혼합 양식의 독특한 건축물, 그리고 활기 넘치는 딤섬 레스토랑이 이국적인 매력을 선사합니다.</p>
            </div>
          </div>
        </li>
        {/* Chinatown Info Card - Mobile */}
        <li className="relative md:hidden mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("chinatown")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 text-left"
          >
            <div className="w-28 h-20 bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={chinatownImages[0]} alt="차이나타운" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 py-3">
              <span className="text-xs text-gray-500">북미에서 가장 오래된</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">차이나타운</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700 inline-flex items-center gap-1.5">
              <svg className="w-[22px] h-[22px] inline-block flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="17" rx="1" fill="#9ca3af" />
                <rect x="6" y="7" width="3" height="3" rx="0.5" fill="white" />
                <rect x="10.5" y="7" width="3" height="3" rx="0.5" fill="white" />
                <rect x="15" y="7" width="3" height="3" rx="0.5" fill="white" />
                <rect x="6" y="12" width="3" height="3" rx="0.5" fill="white" />
                <rect x="10.5" y="12" width="3" height="3" rx="0.5" fill="white" />
                <rect x="15" y="12" width="3" height="3" rx="0.5" fill="white" />
                <rect x="9.5" y="17" width="5" height="4" rx="0.5" fill="white" />
              </svg>
              호텔로 이동 및 휴식
            </span>
            <p className="mt-2 text-base text-gray-500">총 1개의 예정 숙박시설이 있습니다. 출발 1일 전까지 홈페이지와 유선 또는 문자를 통해 알려 드리겠습니다.</p>
          </div>
        </li>
      </ul>
    </div>
  );

  const scheduleData: DaySchedule[] = scheduleDataBase.map((item) => ({
    ...item,
    content: item.day === 1 ? day1Content : undefined,
  }));

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
          상세 일정
        </h2>
        <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
          2026년 8월 3일 — 8월 10일 (8박 10일)
        </p>

        {/* Accordion Section */}
        <div className="mt-10 max-w-5xl mx-auto">
          <div className="space-y-6">
            {scheduleData.map((item) => (
              <div key={item.day} className="border border-gray-200 overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleDay(item.day)}
                  className="w-full flex items-center hover:bg-gray-50 transition-colors"
                >
                  {/* Left Side - Day & Date */}
                  <div className="bg-gray-600 text-white px-6 py-4 flex flex-col items-start min-w-[160px]">
                    <span className="text-lg font-medium">{item.day}일차</span>
                    <span className="text-base mt-1 opacity-90">{item.date}</span>
                  </div>

                  {/* Right Side - Location & Description */}
                  <div className="flex-1 bg-gray-100 px-6 py-4 flex items-center justify-between">
                    <div className="text-left">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {item.location}
                      </h3>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform ml-4 flex-shrink-0 ${openDay === item.day ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {openDay === item.day && (
                  <div className="bg-white px-6 py-6 border-t border-gray-200">
                    <div className="text-gray-700">
                      {item.content || "상세 일정 콘텐츠가 여기에 표시됩니다."}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vancouver Detail Modal */}
      {activeModal === "vancouver" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">[관광정보] 밴쿠버 (VANCOUVER)</h3>
              <button onClick={closeModal} className="hover:bg-blue-700 p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={vancouverImages[carouselIndex]} alt={`밴쿠버 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {vancouverImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>캐나다 서부 최대의 도시, 밴쿠버.</p>
                  <p>태평양과 해안 산맥 사이에 자리한 밴쿠버는 세계에서 가장 살기 좋은 도시 중 하나로 손꼽힙니다. 온화한 기후와 수려한 자연경관, 다양한 문화가 어우러진 이 도시는 매년 수백만 명의 관광객을 끌어들이고 있습니다.</p>
                  <p>시내에는 역사와 문화가 살아 숨 쉬는 개스타운, 아름다운 항구 전망의 캐나다 플레이스, 도심 속 거대한 숲 스탠리 공원, 북미 최대 규모의 차이나타운 등 다양한 볼거리가 있습니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">도시</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">북아메리카 캐나다 밴쿠버</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Vancouver,BC,Canada" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">홈페이지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">연락처</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">입장료</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">오픈시간</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.34089692409!2d-123.19394895!3d49.2577143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z67Cg7L-g67KMLCBC66eI7Yuw7Iuc7Lu464Ks67mE7JWEIOyjvCwg7LqQ64KY64uk!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="밴쿠버 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Gastown Detail Modal */}
      {activeModal === "gastown" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">밴쿠버에서 가장 오래된 거리, 개스타운 (GASTOWN)</h3>
              <button onClick={closeModal} className="hover:bg-blue-700 p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={gastownImages[carouselIndex]} alt={`개스타운 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {gastownImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>1867년 수다쟁이 선원 &apos;개시 잭&apos; 데이튼이 위스키 한 통으로 술집을 열면서 탄생한 밴쿠버의 발상지입니다.</p>
                  <p>자갈이 깔린 거리 위로 빅토리아풍 붉은 벽돌 건물이 늘어서 있고, 15분마다 증기를 내뿜는 세계 유일의 증기시계(Steam Clock)가 이 거리의 상징입니다. 위스키 배럴 위에 올라선 개시 잭 동상도 놓치지 마세요.</p>
                  <p>감각적인 부티크와 갤러리, 분위기 좋은 레스토랑이 즐비해 산책만으로도 충분히 매력적인 곳입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">위치</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">밴쿠버 다운타운 동쪽, 워터프론트역 인근</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Gastown,Vancouver,BC,Canada" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">홈페이지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">연락처</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">입장료</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">무료 (야외 거리)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">오픈시간</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">상시 개방</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.5!2d-123.1058!3d49.2844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f41ba3855%3A0xcfba5e6689bae30a!2sGastown!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="개스타운 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Canada Place Detail Modal */}
      {activeModal === "canadaplace" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">밴쿠버 항구의 랜드마크, 캐나다 플레이스 (CANADA PLACE)</h3>
              <button onClick={closeModal} className="hover:bg-blue-700 p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={canadaPlaceImages[carouselIndex]} alt={`캐나다 플레이스 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {canadaPlaceImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>1986년 세계박람회(EXPO 86)를 위해 건설된 캐나다관이 전신으로, 찰스 왕세자가 직접 개관했습니다. 박람회 기간 동안 500만 명 이상의 방문객을 맞이하며 큰 화제를 모았습니다.</p>
                  <p>다섯 개의 흰색 돛 모양 지붕은 범선을 형상화한 것으로, 밴쿠버 해안 스카이라인의 상징입니다. 매일 정오가 되면 &apos;Heritage Horns&apos;라 불리는 10개의 호른이 캐나다 국가를 울려 퍼뜨립니다.</p>
                  <p>현재는 알래스카 크루즈 출발 터미널, 밴쿠버 컨벤션센터, 팬퍼시픽 호텔, 그리고 시뮬레이션 비행 체험 &apos;FlyOver Canada&apos;가 있는 복합문화공간입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">위치</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">999 Canada Place, Vancouver</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Canada+Place,Vancouver,BC,Canada" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">홈페이지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">연락처</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">입장료</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">무료 (부두 산책 기준)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">오픈시간</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">상시 개방</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.3!2d-123.1139!3d49.2888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671836ea22515%3A0x2f91015701e18dc0!2sCanada%20Place!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="캐나다 플레이스 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stanley Park Detail Modal */}
      {activeModal === "stanleypark" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">도심 속 거대한 숲, 스탠리 공원 (STANLEY PARK)</h3>
              <button onClick={closeModal} className="hover:bg-blue-700 p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={stanleyParkImages[carouselIndex]} alt={`스탠리 공원 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {stanleyParkImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>400헥타르의 부지에 50만 그루의 나무가 울창한 북미 최대의 도시 공원입니다. 수백 년 된 나무 중에는 높이 76미터에 달하는 거목도 있으며, 연간 800만 명이 찾는 밴쿠버의 자랑입니다.</p>
                  <p>세계에서 가장 긴 끊기지 않는 해안 산책로 &apos;시월(Seawall)&apos;은 약 10km에 달하며, 걷는 데 약 3시간이 소요됩니다. 도시 스카이라인과 노스쇼어 산맥, 배라드 만의 풍경이 파노라마처럼 펼쳐집니다.</p>
                  <p>공원 안에는 밴쿠버 수족관, 퍼스트 네이션 토템폴, 로스트 라군, 프로스펙트 포인트 전망대 등 다양한 볼거리가 있습니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">위치</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">밴쿠버 다운타운 서쪽 반도</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Stanley+Park,Vancouver,BC,Canada" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">홈페이지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">연락처</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">입장료</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">무료 (공원 진입 기준)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">오픈시간</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">06:00 ~ 22:00</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10408.5!2d-123.1416!3d49.3043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671832a35e18b%3A0x1fbd40096f5d6c43!2sStanley%20Park!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="스탠리 공원 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Chinatown Detail Modal */}
      {activeModal === "chinatown" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-blue-600 text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">북미에서 가장 오래된 차이나타운 (CHINATOWN)</h3>
              <button onClick={closeModal} className="hover:bg-blue-700 p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={chinatownImages[carouselIndex]} alt={`차이나타운 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {chinatownImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>1880년대 브리티시 컬럼비아 골드러시와 대륙횡단철도 건설 시대에 형성된 캐나다 최대이자 북미에서 가장 오래된 차이나타운 중 하나입니다.</p>
                  <p>내셔널 지오그래픽이 &apos;세계 최고의 도시 정원&apos;으로 선정한 쑨원 고전 중국정원(Dr. Sun Yat-Sen Classical Chinese Garden)이 대표적인 볼거리입니다. 중국 전통 양식과 서양 건축이 혼합된 독특한 건물들이 거리를 수놓고 있습니다.</p>
                  <p>한약재 상점부터 실크 가게, 활기 넘치는 딤섬 레스토랑까지 다양한 볼거리와 먹거리가 가득한 이국적인 거리입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">위치</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">밴쿠버 다운타운 동쪽, 펜더 스트리트 일대</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Chinatown,Vancouver,BC,Canada" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">홈페이지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">연락처</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600"></td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">입장료</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">무료 (거리 관광 기준)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">오픈시간</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">상시 개방</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.8!2d-123.1002!3d49.2797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671792fcf543f%3A0x1820bab1c89fc29a!2sChinatown!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="차이나타운 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
