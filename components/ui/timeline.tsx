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
    location: "인천 → 밴쿠버",
    description: "개스타운, 캐나다 플레이스, 스탠리 공원, 차이나타운",
  },
  {
    day: 2,
    date: "08/04(화)",
    location: "밴쿠버",
    description: "크루즈 체크인, 안전 훈련, 밴쿠버 출항",
  },
  {
    day: 3,
    date: "08/05(수)",
    location: "해상",
    description: "상세 내용을 확인해보세요",
  },
  {
    day: 4,
    date: "08/06(목)",
    location: "주노",
    description: "상세 내용을 확인해보세요",
  },
  {
    day: 5,
    date: "08/07(금)",
    location: "스캐그웨이",
    description: "상세 내용을 확인해보세요",
  },
  {
    day: 6,
    date: "08/08(토)",
    location: "엔디캇 암",
    description: "상세 내용을 확인해보세요",
  },
  {
    day: 7,
    date: "08/09(일)",
    location: "케치칸",
    description: "상세 내용을 확인해보세요",
  },
  {
    day: 8,
    date: "08/10(월)",
    location: "해상",
    description: "상세 내용을 확인해보세요",
  },
  {
    day: 9,
    date: "08/11(화)",
    location: "밴쿠버",
    description: "상세 내용을 확인해보세요",
  },
  {
    day: 10,
    date: "08/12(수)",
    location: "인천",
    description: "상세 내용을 확인해보세요",
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

const juneauImages = [
  "https://images.pexels.com/photos/17003033/pexels-photo-17003033.jpeg?auto=compress&cs=tinysrgb&w=640",
  "https://images.pexels.com/photos/9500926/pexels-photo-9500926.jpeg?auto=compress&cs=tinysrgb&w=640",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=640&auto=format&fit=crop",
];

const cruiseInteriorImages = [
  "https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1562798719-12a70800e5cb?q=80&w=640&auto=format&fit=crop",
];

const skagwayImages = [
  "https://images.unsplash.com/photo-1641228581153-27bba8b2e410?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1725368935414-3ca2d53d17e3?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1701789125734-bf9c11ce65eb?q=80&w=640&auto=format&fit=crop",
];

const endicottArmImages = [
  "https://images.unsplash.com/photo-1713190306964-328d3081d488?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1690286629754-b395eeb9167a?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1687904525584-abf6030d00c1?q=80&w=640&auto=format&fit=crop",
];

const ketchikanImages = [
  "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=640&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580415216044-66e62e28210f?q=80&w=640&auto=format&fit=crop",
];

const emeraldPrincessImages = [
  "https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=640",
  "https://images.pexels.com/photos/3663899/pexels-photo-3663899.jpeg?auto=compress&cs=tinysrgb&w=640",
  "https://images.pexels.com/photos/5855938/pexels-photo-5855938.jpeg?auto=compress&cs=tinysrgb&w=640",
];

export const Timeline = () => {
  const [openDays, setOpenDays] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (window.innerWidth < 768) {
      setOpenDays(new Set(scheduleDataBase.map((item) => item.day)));
    }
  }, []);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleDay = (day: number) => {
    setOpenDays((prev) => {
      const next = new Set(prev);
      if (next.has(day)) {
        next.delete(day);
      } else {
        next.add(day);
      }
      return next;
    });
  };

  const openModal = (type: string) => {
    setActiveModal(type);
    setCarouselIndex(0);
    history.pushState({ modal: "timeline" }, "");
  };

  const closeModal = () => {
    if (activeModal !== null) {
      setActiveModal(null);
      history.back();
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setActiveModal(null);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const imageMap: Record<string, string[]> = {
    vancouver: vancouverImages,
    gastown: gastownImages,
    canadaplace: canadaPlaceImages,
    stanleypark: stanleyParkImages,
    chinatown: chinatownImages,
    emeraldprincess: emeraldPrincessImages,
    cruiseinterior: cruiseInteriorImages,
    juneau: juneauImages,
    skagway: skagwayImages,
    endicottarm: endicottArmImages,
    ketchikan: ketchikanImages,
    cruiseatsea: cruiseInteriorImages,
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
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src="/sectrion6/connie_sf-vancouver-2238137_640.webp" alt="밴쿠버" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
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
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={gastownImages[0]} alt="개스타운" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
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
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={canadaPlaceImages[0]} alt="캐나다 플레이스" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
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
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={stanleyParkImages[0]} alt="스탠리 공원" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
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
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={chinatownImages[0]} alt="차이나타운" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
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

  const day2Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 밴쿠버 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">밴쿠버</span>
        </li>
        {/* Regular item */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[08:30] 호텔 조식 후 크루즈 체크인</span>
        </li>

        {/* 승선 수속 안내 Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-900">📢 에메랄드 프린세스호 승선 수속 안내</h4>
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-5">
              <div>
                <p className="font-semibold text-gray-800">1. 수하물 위탁 (Luggage Drop-off)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다.</li>
                  <li>여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">2. 승선 수속 (Check-in &amp; Boarding)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드</li>
                  <li>위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다.</li>
                  <li>모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다.</li>
                  <li>선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 &apos;승선 카드&apos;가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">3. 승선 후 유의사항 (After Boarding)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.</li>
                  <li>기항지 선택 관광: 선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)</li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* 승선 수속 안내 Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("boarding")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-amber-50 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📢</span>
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[승선 안내]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">승선 수속 안내</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[10:30] 선상 안전 훈련 참가 및 탑투어 진행</span>
        </li>
        {/* 중식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">중식 (선내식)</span>
        </li>
        {/* City marker - 해상 */}
        <li className="relative flex items-center gap-3 py-1 mt-10">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">해상</span>
        </li>
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[16:00] 에메랄드 프린세스는 주노를 향해 출발합니다.</span>
        </li>

        {/* Emerald Princess Info Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">에메랄드 프린세스 (Emerald Princess)</h4>
              <button
                onClick={() => openModal("emeraldprincess")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {emeraldPrincessImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`에메랄드 프린세스 ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">프린세스 크루즈의 대표 선박, 에메랄드 프린세스.</p>
              <p>총 톤수 113,561톤, 최대 3,114명의 승객을 수용하는 대형 크루즈 선박입니다. 선내에는 다양한 레스토랑과 바, 카지노, 스파, 수영장, 극장 등 풍부한 부대시설이 갖추어져 있어 항해 중에도 즐거운 시간을 보내실 수 있습니다.</p>
            </div>
          </div>
        </li>

        {/* Emerald Princess Info Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("emeraldprincess")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={emeraldPrincessImages[0]} alt="에메랄드 프린세스" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">프린세스 크루즈</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">에메랄드 프린세스</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 석식 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (선내식)</span>
        </li>
        <li className="relative flex items-start gap-3">
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
              호텔: 에메랄드 프린세스
            </span>
          </div>
        </li>
      </ul>
    </div>
  );

  const day3Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 전일 해상 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">전일 해상</span>
        </li>

        {/* 전일해상 안내 */}
        <li className="relative flex items-start gap-3">
          <div className="text-base text-gray-600 leading-relaxed">
            <p className="text-gray-800">▣ 전일해상 이란?</p>
            <p className="mt-1">다음 기항지를 향해 온종일 바다 위를 항해하는 시간입니다. 다채로운 선내 이벤트와 수준 높은 공연이 쉴 틈 없이 펼쳐지며, 이동하는 순간조차 완벽한 여행이 되는 진정한 크루즈의 낭만을 경험하실 수 있습니다.</p>
          </div>
        </li>

        {/* Cruise Interior Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">🚢 에메랄드 프린세스 전일 해상</h4>
              <button
                onClick={() => openModal("cruiseinterior")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {cruiseInteriorImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`크루즈 내부 ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.</li>
                <li>탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.</li>
                <li>오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.</li>
                <li>따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.</li>
                <li>요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.</li>
              </ul>
              <p>잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.</p>
            </div>
          </div>
        </li>

        {/* Cruise Interior Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("cruiseinterior")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={cruiseInteriorImages[0]} alt="크루즈 내부" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">🚢 전일 해상</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">에메랄드 크루즈</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 조식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (선내식)</span>
        </li>
        {/* 중식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">중식 (기내식)</span>
        </li>
        {/* 석식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (선내식)</span>
        </li>

        {/* 호텔 */}
        <li className="relative flex items-start gap-3">
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
              호텔: 에메랄드 프린세스
            </span>
          </div>
        </li>
      </ul>
    </div>
  );

  const day4Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* 조식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (선내식)</span>
        </li>
        {/* 중식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">중식 (선내식)</span>
        </li>

        {/* City marker - 주노 */}
        <li className="relative flex items-center gap-3 py-1 mt-10">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">주노</span>
        </li>
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[13:00] 주노 도착 후 안내절차에 따라 하선</span>
        </li>

        {/* Juneau Info Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">[관광 정보] 주노 (Juneau)</h4>
              <button
                onClick={() => openModal("juneau")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {juneauImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`주노 관광${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">알래스카의 주도, 주노.</p>
              <p>빙하와 산, 바다가 어우러진 주노는 도로로 접근할 수 없는 미국 유일의 주도입니다. 웅장한 멘덴홀 빙하와 고래 관찰, 연어가 거슬러 오르는 계곡 등 알래스카의 대자연을 가장 가까이에서 체험할 수 있는 곳입니다.</p>
            </div>
          </div>
        </li>

        {/* Juneau Info Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("juneau")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={juneauImages[0]} alt="주노" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">주노</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 선사투어 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">기항지 관광 프로그램 참여 또는 자유 시간</span>
        </li>

        {/* 선사투어 안내 Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-900">⚓ 주노(Juneau) 추천 기항지 선택 관광</h4>
              <button
                onClick={() => openModal("shoreexcursion")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-5">
              <p>본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 <span className="font-semibold text-gray-800">영어 가이드</span>로 진행됩니다.</p>
              <div>
                <p className="font-semibold text-gray-800">1. 멘덴홀 빙하 &amp; 혹등고래 관찰 투어</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: JNU-630</li>
                  <li>예상 소요 시간: 약 5시간 30분</li>
                  <li>예상 비용: 성인 $269.95부터~</li>
                  <li>핵심 포인트: 주노의 상징인 멘덴홀 빙하를 감상하고, 소형 선박에 탑승해 알래스카 야생 혹등고래를 찾아 나서는 베스트셀러 투어입니다.</li>
                  <li className="text-gray-500">참고 사항: 바닷바람을 막아줄 따뜻한 겉옷 준비가 필수이며, 12세 미만 아동은 반드시 보호자와 동반해야 합니다.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">2. 마운트 로버츠 트램웨이 자유 투어</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: JNU-140</li>
                  <li>예상 소요 시간: 약 1시간 30분</li>
                  <li>예상 비용: 성인 $63.00부터~</li>
                  <li>핵심 포인트: 케이블카(트램)를 타고 산에 올라 주노 시내와 바다의 탁 트인 파노라마 전경을 한눈에 담아보세요. 정상에 도착한 후에는 맑은 공기를 마시며 숲길을 따라 가벼운 자유 트레킹을 즐기실 수 있습니다.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">3. 멘덴홀 빙하 &amp; 알래스카 연어 바비큐 특식</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: JNU-120</li>
                  <li>예상 소요 시간: 약 4시간 30분</li>
                  <li>예상 비용: 성인 $179.95부터~</li>
                  <li>핵심 포인트: 웅장한 멘덴홀 빙하 방문과 더불어, 아름다운 야외 숲속 레스토랑에서 갓 구워낸 자연산 알래스카 연어와 치킨 바비큐를 무제한으로 맛볼 수 있는 오감 만족 프로그램입니다.</li>
                  <li className="text-gray-500">참고 사항: 식사 후 라이브 음악과 함께 주변 생태계를 산책하는 여유로운 시간이 주어집니다. 야외 활동을 위한 따뜻한 재킷을 준비해 주세요.</li>
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">💡 기항지 투어 예약 시 유의사항</p>
                <ul className="mt-2 ml-4 list-disc space-y-1.5">
                  <li>기항지 선택 관광은 선사 주관 프로그램으로 운영됩니다.</li>
                  <li>안내된 투어 요금은 승선 시점 및 현지 사정에 따라 일부 변동될 수 있습니다.</li>
                  <li>승선 후 동행 인솔자가 예약을 도와드립니다.</li>
                </ul>
                <p className="mt-2 text-red-600">※ 상기 일정과 투어 내용은 선사 및 현지 상황에 따라 부득이하게 변동될 수 있습니다.</p>
              </div>
            </div>
          </div>
        </li>

        {/* 선사투어 안내 Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("shoreexcursion")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-blue-50 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">⚓</span>
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[기항지 투어]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">추천 선택 관광</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 석식 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (선내식)</span>
        </li>
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">[21:00] 에메랄드 프린세스는 스캐그웨이를 향해 출발합니다</span>
            <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
              <p>▣ 현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.</p>
              <p>▣ 원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.</p>
            </div>
          </div>
        </li>

        {/* 호텔 */}
        <li className="relative flex items-start gap-3">
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
              호텔: 에메랄드 프린세스
            </span>
          </div>
        </li>
      </ul>
    </div>
  );

  const day5Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 스캐그웨이 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">스캐그웨이</span>
        </li>

        {/* 조식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (선내식)</span>
        </li>
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[07:00] 스캐그웨이 도착 후 안내절차에 따라 하선</span>
        </li>

        {/* Skagway Info Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">[관광 정보] 스캐그웨이 (Skagway)</h4>
              <button
                onClick={() => openModal("skagway")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {skagwayImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`스캐그웨이 관광${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">골드러시의 관문, 스캐그웨이.</p>
              <p>1897년 클론다이크 골드러시 시대에 금을 찾아 몰려든 사람들의 출발지였던 스캐그웨이는 당시의 역사적 건물들이 그대로 보존되어 있어 마치 시간이 멈춘 듯한 매력을 선사합니다. 화이트패스 & 유콘 루트 철도를 타고 절벽과 빙하 사이를 지나는 장관은 알래스카 크루즈의 하이라이트입니다.</p>
            </div>
          </div>
        </li>

        {/* Skagway Info Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("skagway")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={skagwayImages[0]} alt="스캐그웨이" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">스캐그웨이</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 선사투어 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">기항지 관광 프로그램 참여 또는 자유 시간</span>
        </li>

        {/* 선사투어 안내 Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-900">⚓ 스캐그웨이(Skagway) 추천 기항지 선택 관광</h4>
              <button
                onClick={() => openModal("shoreexcursion_skagway")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-5">
              <p>본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 <span className="font-semibold text-gray-800">영어 가이드</span>로 진행됩니다.</p>
              <div>
                <p className="font-semibold text-gray-800">1. 화이트 패스 산악 경관 열차 투어 (White Pass Scenic Railway)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: SGY-200</li>
                  <li>예상 소요 시간: 약 2시간 40분</li>
                  <li>예상 비용: 성인 $159.95부터~</li>
                  <li>핵심 포인트: 19세기 골드러시 시대의 향수를 간직한 클래식 산악 열차에 탑승해 스캐그웨이의 경이로운 대자연 속으로 들어갑니다. 해발 900m(약 3,000피트)가 넘는 험준한 산맥을 가로지르며 깎아지른 절벽과 압도적인 파노라마 절경을 감상하실 수 있습니다.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">2. 헬기 빙하 비행 &amp; 알래스칸 허스키 개썰매 캠프 (Dog Sledding &amp; Glacier Helicopter)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: SGY-840</li>
                  <li>예상 소요 시간: 약 2시간</li>
                  <li>예상 비용: 성인 $749.95부터~</li>
                  <li>핵심 포인트: 헬리콥터를 타고 거대한 빙하 위를 비행하며 알래스카의 환상적인 풍광을 눈에 담는 럭셔리 투어입니다. 이후 약 300여 마리의 늠름한 알래스칸 허스키가 생활하는 눈 덮인 베이스캠프에 직접 착륙하여 잊지 못할 특별한 교감을 나눕니다.</li>
                  <li className="text-gray-500">참고 사항: 탑승자 체중이 110kg(250lbs) 이상일 경우 안전 및 헬기 하중 규정상 추가 요금이 발생합니다. 13세 미만 아동은 반드시 성인 보호자와 동행해야 하며, 현지 기상 악화 시 안전을 위해 헬기 운항이 취소될 수 있습니다.</li>
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">💡 기항지 투어 예약 시 유의사항</p>
                <ul className="mt-2 ml-4 list-disc space-y-1.5">
                  <li>기항지 선택 관광은 선사 주관 프로그램으로 운영됩니다.</li>
                  <li>안내된 투어 요금은 승선 시점 및 현지 사정에 따라 일부 변동될 수 있습니다.</li>
                  <li>승선 후 동행 인솔자가 예약을 도와드립니다.</li>
                </ul>
                <p className="mt-2 text-red-600">※ 상기 일정과 투어 내용은 선사 및 현지 상황에 따라 부득이하게 변동될 수 있습니다.</p>
              </div>
            </div>
          </div>
        </li>

        {/* 선사투어 안내 Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("shoreexcursion_skagway")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-blue-50 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">⚓</span>
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[기항지 투어]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">추천 선택 관광</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 중식 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">중식 (선내식)</span>
        </li>
        {/* 석식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (선내식)</span>
        </li>

        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">[20:00] 에메랄드 프린세스는 엔디캇암을 향해 출발합니다</span>
            <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
              <p>▣ 현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.</p>
              <p>▣ 원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.</p>
            </div>
          </div>
        </li>

        {/* 호텔 */}
        <li className="relative flex items-start gap-3">
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
              호텔: 에메랄드 프린세스
            </span>
          </div>
        </li>
      </ul>
    </div>
  );

  const day6Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 엔디캇 암 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">엔디캇 암</span>
        </li>

        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[06:00] 에메랄드 프린세스는 엔디캇암을 항해합니다</span>
        </li>

        {/* Endicott Arm Info Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">[관광 정보] 엔디캇 암 (Endicott Arm)</h4>
              <button
                onClick={() => openModal("endicottarm")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {endicottArmImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`엔디캇 암 ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">알래스카의 숨겨진 보석, 엔디캇 암.</p>
              <p>장엄한 피오르 수로를 따라 항해하며 도스 빙하(Dawes Glacier)의 웅장한 모습을 배 위에서 감상합니다. 거대한 빙벽에서 떨어져 나온 유빙들이 수면 위를 떠다니는 환상적인 풍경을 만나실 수 있습니다.</p>
              <p className="text-red-500">※ 크루즈에서 하선하지 않고 배 위에서 관람하는 일정입니다.</p>
            </div>
          </div>
        </li>

        {/* Endicott Arm Info Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("endicottarm")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={endicottArmImages[0]} alt="엔디캇 암" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">엔디캇 암</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* Cruise At Sea Card - Desktop */}
        <li className="relative hidden md:block mt-10">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">🚢 에메랄드 프린세스 전일 해상</h4>
              <button
                onClick={() => openModal("cruiseatsea")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {cruiseInteriorImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`크루즈 시설 ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.</li>
                <li>탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.</li>
                <li>오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.</li>
                <li>따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.</li>
                <li>요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.</li>
              </ul>
              <p>잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.</p>
            </div>
          </div>
        </li>

        {/* Cruise At Sea Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("cruiseatsea")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={cruiseInteriorImages[0]} alt="크루즈 시설" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">🚢 전일 해상</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">에메랄드 크루즈</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[11:00] 엔디캇 암 &amp; 도스 빙하 지대에서 출발</span>
        </li>
        {/* 조식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (선내식)</span>
        </li>
        {/* 중식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">중식 (선내식)</span>
        </li>
        {/* 석식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (선내식)</span>
        </li>

        {/* 호텔 */}
        <li className="relative flex items-start gap-3">
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
              호텔: 에메랄드 프린세스
            </span>
          </div>
        </li>
      </ul>
    </div>
  );

  const day7Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 케치칸 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">케치칸</span>
        </li>

        {/* 조식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (선내식)</span>
        </li>
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[07:00] 케치칸 도착 후 안내절차에 따라 하선</span>
        </li>

        {/* Ketchikan Info Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">[관광 정보] 케치칸 (Ketchikan)</h4>
              <button
                onClick={() => openModal("ketchikan")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {ketchikanImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`케치칸 관광${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">알래스카의 첫 번째 도시, 케치칸.</p>
              <p>알래스카 남동부에 자리한 케치칸은 &lsquo;세계 연어의 수도&rsquo;로 불리며, 통가스 국립공원의 울창한 온대 우림과 원주민 토템폴 문화로 유명합니다. 크리크 거리의 수상 가옥과 활기찬 항구 풍경이 여행자들을 매료시키는 매력적인 항구 도시입니다.</p>
            </div>
          </div>
        </li>

        {/* Ketchikan Info Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("ketchikan")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={ketchikanImages[0]} alt="케치칸" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[관광정보]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">케치칸</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 선사투어 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">기항지 관광 프로그램 참여 또는 자유 시간</span>
        </li>

        {/* 선사투어 안내 Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-900">⚓ 케치칸(Ketchikan) 추천 기항지 선택 관광</h4>
              <button
                onClick={() => openModal("shoreexcursion_ketchikan")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-5">
              <p>본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 <span className="font-semibold text-gray-800">영어 가이드</span>로 진행됩니다.</p>
              <div>
                <p className="font-semibold text-gray-800">1. 자연 탐험 &amp; 던지니스 게 만찬 (Wilderness Exploration &amp; Crab Feast)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: KTN-650</li>
                  <li>예상 소요 시간: 약 4시간</li>
                  <li>예상 비용: 성인 $239.95부터~</li>
                  <li>핵심 포인트: 세계 최대 규모의 온대 우림인 통가스 국립공원을 거닐며 알래스카의 다채로운 동식물과 대자연을 탐험합니다. 상쾌한 산책 후에는 조지 인렛 롯지로 이동해 푸짐한 던지니스 게 요리를 마음껏 즐기실 수 있습니다.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">2. 수륙양용 덕 투어 (Town &amp; Harbor by Duck)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: KTN-660</li>
                  <li>예상 소요 시간: 약 1시간 30분</li>
                  <li>예상 비용: 성인 $109.95부터~</li>
                  <li>핵심 포인트: 미국 해안경비대의 인증을 받은 수륙양용차 &lsquo;덕(Duck)&rsquo;에 탑승해 육지와 바다를 넘나들며 케치칸을 둘러봅니다. 웨일 파크, 연어 길(Salmon ladder), 크리크 거리의 옛이야기를 만나고, 통조림 공장과 수상비행장 등 항구의 활기찬 풍경까지 한 번에 감상할 수 있습니다.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">3. 알래스카 럼버잭 쇼 &amp; 게 만찬 (Lumberjack Show &amp; Crab Feast)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li>투어 코드: KTN-315</li>
                  <li>예상 소요 시간: 약 4시간</li>
                  <li>예상 비용: 성인 $144.95부터~</li>
                  <li>핵심 포인트: 도끼 던지기, 톱질, 나무 타기 등 알래스카 전통 벌목꾼들의 박진감 넘치는 12가지 경연이 펼쳐지는 명물 &lsquo;럼버잭 쇼&rsquo;를 관람합니다. 흥미진진한 공연을 즐긴 뒤, 아름다운 전망의 롯지에서 풍성한 게 요리 만찬이 이어집니다.</li>
                </ul>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-800">💡 기항지 투어 예약 시 유의사항</p>
                <ul className="mt-2 ml-4 list-disc space-y-1.5">
                  <li>기항지 선택 관광은 선사 주관 프로그램으로 운영됩니다.</li>
                  <li>안내된 투어 요금은 승선 시점 및 현지 사정에 따라 일부 변동될 수 있습니다.</li>
                  <li>승선 후 동행 인솔자가 예약을 도와드립니다.</li>
                </ul>
                <p className="mt-2 text-red-600">※ 상기 일정과 투어 내용은 선사 및 현지 상황에 따라 부득이하게 변동될 수 있습니다.</p>
              </div>
            </div>
          </div>
        </li>

        {/* 선사투어 안내 Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("shoreexcursion_ketchikan")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-blue-50 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">⚓</span>
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[기항지 투어]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">추천 선택 관광</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 중식 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">중식 (선내식)</span>
        </li>

        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">[15:00] 에메랄드 프린세스는 밴쿠버를 향해 출발합니다</span>
            <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
              <p>▣ 현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.</p>
              <p>▣ 원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.</p>
            </div>
          </div>
        </li>

        {/* 석식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (선내식)</span>
        </li>

        {/* 호텔 */}
        <li className="relative flex items-start gap-3">
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
              호텔: 에메랄드 프린세스
            </span>
          </div>
        </li>
      </ul>
    </div>
  );

  const day8Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 전일 해상 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">전일 해상</span>
        </li>

        {/* 전일해상 안내 */}
        <li className="relative flex items-start gap-3">
          <div className="text-base text-gray-600 leading-relaxed">
            <p className="text-gray-800">▣ 전일해상 이란?</p>
            <p className="mt-1">다음 기항지를 향해 온종일 바다 위를 항해하는 시간입니다. 다채로운 선내 이벤트와 수준 높은 공연이 쉴 틈 없이 펼쳐지며, 이동하는 순간조차 완벽한 여행이 되는 진정한 크루즈의 낭만을 경험하실 수 있습니다.</p>
          </div>
        </li>

        {/* Cruise At Sea Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base text-gray-900">🚢 에메랄드 프린세스 전일 해상</h4>
              <button
                onClick={() => openModal("cruiseatsea")}
                className="text-sm text-blue-500 hover:text-blue-600 hover:underline flex-shrink-0"
              >
                상세보기
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 px-5 pt-5">
              {cruiseInteriorImages.map((src, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img src={src} alt={`크루즈 시설 ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-2">
              <p className="text-gray-800">선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용</p>
              <ul className="ml-4 list-disc space-y-1">
                <li>프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.</li>
                <li>탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.</li>
                <li>오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.</li>
                <li>따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.</li>
                <li>요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.</li>
              </ul>
              <p>잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.</p>
            </div>
          </div>
        </li>

        {/* Cruise At Sea Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("cruiseatsea")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
              <img src={cruiseInteriorImages[0]} alt="크루즈 시설" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">🚢 전일 해상</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">에메랄드 크루즈</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        {/* 조식 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (선내식)</span>
        </li>
        {/* 중식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">중식 (선내식)</span>
        </li>
        {/* 석식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (선내식)</span>
        </li>

        {/* 호텔 */}
        <li className="relative flex items-start gap-3">
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
              호텔: 에메랄드 프린세스
            </span>
          </div>
        </li>
      </ul>
    </div>
  );

  const day9Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* City marker - 밴쿠버 */}
        <li className="relative flex items-center gap-3 py-1">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">밴쿠버</span>
        </li>

        {/* 조식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (선내식)</span>
        </li>
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">[07:30] 밴쿠버 도착 후 안내절차에 따라 하선</span>
        </li>

        {/* 하선 수속 안내 Card - Desktop */}
        <li className="relative hidden md:block">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div className="mt-4 border border-gray-300 bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200">
              <h4 className="text-base font-semibold text-gray-900">📢 크루즈 하선 수속 안내</h4>
            </div>
            <div className="px-5 py-4 text-base text-gray-600 leading-relaxed space-y-5">
              <div>
                <p className="font-semibold text-gray-800">1. 선내 결제 비용 정산 (Settlement)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li><span className="font-semibold text-gray-700">내역 확인:</span> 하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.</li>
                  <li><span className="font-semibold text-gray-700">결제 방식:</span> 승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 미화 달러 USD 사용 가능)</li>
                  <li><span className="font-semibold text-gray-700">안내 데스크:</span> 정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800">2. 하선 전 수하물 위탁 (Luggage Drop-off)</p>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                  <li><span className="font-semibold text-gray-700">수하물 내놓기:</span> 하선 전날 선실로 전달되는 &lsquo;전용 수하물 태그&rsquo;를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.</li>
                  <li className="text-red-500">⚠️ 주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 <span className="font-semibold">절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)</span>하여 하선해 주시기 바랍니다.</li>
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* 하선 수속 안내 Card - Mobile */}
        <li className="relative md:hidden">
          <span className="absolute -left-10 top-[26px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <button
            onClick={() => openModal("disembarkation")}
            className="mt-4 w-full border border-gray-300 bg-white shadow-sm overflow-hidden flex items-center gap-4 pl-2 py-2 text-left"
          >
            <div className="w-16 aspect-[4/3] bg-amber-50 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">📢</span>
            </div>
            <div className="flex-1">
              <span className="text-xs text-gray-500">[하선 안내]</span>
              <p className="text-base font-bold text-gray-900 mt-0.5">하선 수속 안내</p>
            </div>
            <ChevronRight className="w-6 h-6 text-gray-400 mr-4 flex-shrink-0" />
          </button>
        </li>

        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">밴쿠버 국제공항으로 이동</span>
        </li>

        {/* 출발 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">[00:00] 밴쿠버 국제 공항 출발 - 인천 향발</span>
            <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
              <p>▣ 교통편 : 에어캐나다 or 대한항공</p>
              <p>▣ 비행시간 : 약 11시간 35분 소요</p>
              <p>▣ 항공 시간 및 편수는 변경될 수 있습니다.</p>
              <p className="mt-2 text-red-500">
                ※ 기내 좌석 배정은 항공사의 고유 권한입니다. 여행사나 인솔자가 임의로 지정해 드릴 수 없는 영역이기에, 희망하시는 좌석 배정이 어려울 수 있는 점 고객님의 너그러운 양해 부탁드립니다.
              </p>
            </div>
          </div>
        </li>

        {/* 석식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">석식 (기내식)</span>
        </li>
      </ul>
    </div>
  );

  const day10Content = (
    <div className="relative pl-10">
      {/* Vertical Line */}
      <div className="absolute left-[5px] top-2 bottom-2 w-px bg-gray-300" />
      <ul className="space-y-5 text-left">
        {/* 조식 */}
        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <span className="text-base text-gray-700">조식 (기내식)</span>
        </li>

        {/* City marker - 인천 */}
        <li className="relative flex items-center gap-3 py-1 mt-10">
          <span className="absolute -left-[35px] -translate-x-1/2">
            <LocationPin />
          </span>
          <span className="text-lg font-bold text-gray-900">인천</span>
        </li>

        <li className="relative flex items-start gap-3">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-gray-300" />
          <div>
            <span className="text-base text-gray-700">[00:00] 인천 국제 공항 도착</span>
            <div className="mt-2 ml-1 space-y-1 text-base text-gray-700">
              <p>▣ 인천국제공항 도착 후 개별해산</p>
              <p className="mt-2 text-red-500">
                ※ 현지사정(항공기, 크루즈 등) 의해 일정 및 일정순서, 식사 등이 변경될 수 있습니다.
              </p>
            </div>
          </div>
        </li>

        {/* 마무리 인사 */}
        <li className="relative flex items-start gap-3 mt-10">
          <span className="absolute -left-10 top-[7px] w-[10px] h-[10px] rounded-full bg-blue-400" />
          <span className="text-base text-gray-800">한세계 여행사와 함께 즐거운 여행이 되셨길 바랍니다.</span>
        </li>
      </ul>
    </div>
  );

  const scheduleData: DaySchedule[] = scheduleDataBase.map((item) => ({
    ...item,
    content: item.day === 1 ? day1Content : item.day === 2 ? day2Content : item.day === 3 ? day3Content : item.day === 4 ? day4Content : item.day === 5 ? day5Content : item.day === 6 ? day6Content : item.day === 7 ? day7Content : item.day === 8 ? day8Content : item.day === 9 ? day9Content : item.day === 10 ? day10Content : undefined,
  }));

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-12 md:py-20 px-0 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
          상세 일정
        </h2>
        <p className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
          2026년 8월 3일 — 8월 10일 (8박 10일)
        </p>

        {/* Accordion Section */}
        <div className="mt-6 md:mt-10 max-w-5xl mx-auto">
          {/* 모바일 모두펼침/모두접기 버튼 */}
          <div className="md:hidden sticky top-[68px] z-10 flex justify-end px-4 mb-3">
            <button
              onClick={() => {
                const allDays = scheduleDataBase.map((item) => item.day);
                const allOpen = allDays.every((day) => openDays.has(day));
                if (allOpen) {
                  setOpenDays(new Set());
                } else {
                  setOpenDays(new Set(allDays));
                }
              }}
              className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1.5 rounded flex items-center gap-1"
            >
              {scheduleDataBase.every((item) => openDays.has(item.day)) ? "모두접기" : "모두펼침"}
              <ChevronDown className={`w-4 h-4 transition-transform ${scheduleDataBase.every((item) => openDays.has(item.day)) ? "rotate-180" : ""}`} />
            </button>
          </div>
          <div className="space-y-3 md:space-y-6">
            {scheduleData.map((item) => (
              <div key={item.day} className="border border-gray-200 overflow-hidden">
                {/* Accordion Header */}
                <button
                  onClick={() => toggleDay(item.day)}
                  className="w-full flex items-center hover:bg-gray-50 transition-colors"
                >
                  {/* Left Side - Day & Date */}
                  <div className="bg-gray-600 text-white px-4 md:px-6 py-3 md:py-4 flex flex-col items-center md:items-start min-w-[80px] md:min-w-[160px] justify-center">
                    <span className="text-base md:text-lg font-medium">{item.day}일차</span>
                    <span className="hidden md:block text-base mt-1 opacity-90">{item.date}</span>
                  </div>

                  {/* Right Side - Location & Description */}
                  <div className="flex-1 bg-gray-100 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                    {/* 모바일: 날짜 + 지역 한줄 */}
                    <span className="md:hidden text-base font-medium text-gray-700">
                      {item.date} {item.location}
                    </span>
                    {/* 데스크탑: 지역 + 부연설명 */}
                    <div className="hidden md:block text-left">
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        {item.location}
                      </h3>
                      <p className="text-base text-gray-600">{item.description}</p>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform ml-4 flex-shrink-0 ${openDays.has(item.day) ? "rotate-180" : ""
                        }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {openDays.has(item.day) && (
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
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">[관광정보] 밴쿠버 (VANCOUVER)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
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
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">밴쿠버에서 가장 오래된 거리, 개스타운 (GASTOWN)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
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
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">밴쿠버 항구의 랜드마크, 캐나다 플레이스 (CANADA PLACE)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
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
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">도심 속 거대한 숲, 스탠리 공원 (STANLEY PARK)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
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

      {/* Emerald Princess Detail Modal */}
      {activeModal === "emeraldprincess" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">에메랄드 프린세스 (EMERALD PRINCESS)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={emeraldPrincessImages[carouselIndex]} alt={`에메랄드 프린세스 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {emeraldPrincessImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>프린세스 크루즈의 대표 선박, 에메랄드 프린세스.</p>
                  <p>총 톤수 113,561톤, 전장 290m, 최대 3,114명의 승객을 수용하는 대형 크루즈 선박입니다. 2007년 취항한 이래 전 세계의 다양한 항로를 운항하고 있습니다.</p>
                  <p>선내에는 다양한 레스토랑과 바, 카지노, 로터스 스파, 수영장 4개, 대극장 &apos;Princess Theatre&apos;, 미니 골프장, 조깅 트랙 등 풍부한 부대시설이 갖추어져 있어 항해 중에도 다채로운 즐거움을 누리실 수 있습니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">선사</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">프린세스 크루즈 (Princess Cruises)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">취항</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">2007년</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">총 톤수</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">113,561톤</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">승객 정원</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">최대 3,114명</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">승무원</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">약 1,200명</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">전장</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">290m / 19층 (데크 기준)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Boarding Info Modal */}
      {activeModal === "boarding" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">📢 에메랄드 프린세스호 승선 수속 안내</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-sm text-gray-700 leading-relaxed space-y-5">
                <div>
                  <p className="font-semibold text-gray-800">1. 수하물 위탁 (Luggage Drop-off)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다.</li>
                    <li>여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">2. 승선 수속 (Check-in &amp; Boarding)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드</li>
                    <li>위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다.</li>
                    <li>모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다.</li>
                    <li>선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 &apos;승선 카드&apos;가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">3. 승선 후 유의사항 (After Boarding)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다.</li>
                    <li>기항지 선택 관광: 선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Disembarkation Info Modal */}
      {activeModal === "disembarkation" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">📢 크루즈 하선 수속 안내</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-sm text-gray-700 leading-relaxed space-y-5">
                <div>
                  <p className="font-semibold text-gray-800">1. 선내 결제 비용 정산 (Settlement)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li><span className="font-semibold">내역 확인:</span> 하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.</li>
                    <li><span className="font-semibold">결제 방식:</span> 승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 미화 달러 USD 사용 가능)</li>
                    <li><span className="font-semibold">안내 데스크:</span> 정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">2. 하선 전 수하물 위탁 (Luggage Drop-off)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li><span className="font-semibold">수하물 내놓기:</span> 하선 전날 선실로 전달되는 &lsquo;전용 수하물 태그&rsquo;를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.</li>
                    <li className="text-red-500">⚠️ 주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 <span className="font-semibold">절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)</span>하여 하선해 주시기 바랍니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Juneau Detail Modal */}
      {activeModal === "juneau" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">[관광정보] 주노 (JUNEAU)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={juneauImages[carouselIndex]} alt={`주노 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {juneauImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>알래스카의 주도, 주노.</p>
                  <p>빙하와 산, 바다가 어우러진 주노는 도로로 접근할 수 없는 미국 유일의 주도입니다. 1880년 금광이 발견되면서 형성된 이 도시는 웅장한 자연경관 속에 자리 잡고 있습니다.</p>
                  <p>멘덴홀 빙하(Mendenhall Glacier)는 주노에서 가장 인기 있는 관광지로, 약 19km 길이의 거대한 빙하를 가까이에서 감상할 수 있습니다. 혹등고래 관찰 투어, 연어가 거슬러 오르는 계곡, 그리고 독수리가 서식하는 원시림까지 알래스카의 대자연을 가장 가까이에서 체험할 수 있는 곳입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">도시</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">알래스카 주노 (Juneau, Alaska)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Juneau,Alaska,USA" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">인구</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">약 32,000명</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주요 관광지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">멘덴홀 빙하, 트레이시 암, 고래 관찰</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">기후</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">8월 평균 13°C (서늘, 비 잦음)</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41735.5!2d-134.4197!3d58.3005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5400e1b3b8b0e8e7%3A0x6e7f5a5e3e8e5c0a!2sJuneau%2C%20AK%2C%20USA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="주노 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shore Excursion Info Modal */}
      {activeModal === "shoreexcursion" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">⚓ 주노(Juneau) 추천 기항지 선택 관광</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-base text-gray-700 leading-relaxed space-y-5">
                <p>본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 <span className="font-semibold text-gray-800">영어 가이드</span>로 진행됩니다.</p>
                <div>
                  <p className="font-semibold text-gray-800">1. 멘덴홀 빙하 &amp; 혹등고래 관찰 투어</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: JNU-630</li>
                    <li>예상 소요 시간: 약 5시간 30분</li>
                    <li>예상 비용: 성인 $269.95부터~</li>
                    <li>핵심 포인트: 주노의 상징인 멘덴홀 빙하를 감상하고, 소형 선박에 탑승해 알래스카 야생 혹등고래를 찾아 나서는 베스트셀러 투어입니다.</li>
                    <li className="text-gray-500">참고 사항: 바닷바람을 막아줄 따뜻한 겉옷 준비가 필수이며, 12세 미만 아동은 반드시 보호자와 동반해야 합니다.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">2. 마운트 로버츠 트램웨이 자유 투어</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: JNU-140</li>
                    <li>예상 소요 시간: 약 1시간 30분</li>
                    <li>예상 비용: 성인 $63.00부터~</li>
                    <li>핵심 포인트: 케이블카(트램)를 타고 산에 올라 주노 시내와 바다의 탁 트인 파노라마 전경을 한눈에 담아보세요. 정상에 도착한 후에는 맑은 공기를 마시며 숲길을 따라 가벼운 자유 트레킹을 즐기실 수 있습니다.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">3. 멘덴홀 빙하 &amp; 알래스카 연어 바비큐 특식</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: JNU-120</li>
                    <li>예상 소요 시간: 약 4시간 30분</li>
                    <li>예상 비용: 성인 $179.95부터~</li>
                    <li>핵심 포인트: 웅장한 멘덴홀 빙하 방문과 더불어, 아름다운 야외 숲속 레스토랑에서 갓 구워낸 자연산 알래스카 연어와 치킨 바비큐를 무제한으로 맛볼 수 있는 오감 만족 프로그램입니다.</li>
                    <li className="text-gray-500">참고 사항: 식사 후 라이브 음악과 함께 주변 생태계를 산책하는 여유로운 시간이 주어집니다. 야외 활동을 위한 따뜻한 재킷을 준비해 주세요.</li>
                  </ul>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800">💡 기항지 투어 예약 시 유의사항</p>
                  <ul className="mt-2 ml-4 list-disc space-y-1.5">
                    <li>안내된 투어 요금 및 세부 일정은 현지 기상 상황이나 선사 사정에 따라 사전 예고 없이 변동될 수 있습니다.</li>
                    <li>인기 프로그램은 조기 마감될 수 있으므로, 출발 전 프린세스 크루즈 공식 홈페이지에 접속하여 개별 신용카드로 사전 예약하시는 것을 권장합니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skagway Detail Modal */}
      {activeModal === "skagway" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">[관광정보] 스캐그웨이 (SKAGWAY)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={skagwayImages[carouselIndex]} alt={`스캐그웨이 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {skagwayImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>골드러시의 관문, 스캐그웨이.</p>
                  <p>1897년 클론다이크 골드러시 당시 수만 명의 금 채굴꾼들이 이 작은 항구 마을을 거쳐 유콘으로 향했습니다. 현재 인구 약 1,200명의 소도시이지만, 브로드웨이 거리에 늘어선 19세기 건물들은 국립역사지구로 보존되어 당시의 분위기를 생생하게 전해줍니다.</p>
                  <p>화이트패스 & 유콘 루트 철도는 1898년에 건설된 협궤 철도로, 해발 873m의 화이트패스 정상까지 깎아지른 절벽과 폭포, 빙하 계곡을 지나는 세계적으로 유명한 관광 열차입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">도시</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">알래스카 스캐그웨이 (Skagway, Alaska)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Skagway,Alaska,USA" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">인구</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">약 1,200명</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주요 관광지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">화이트패스 철도, 브로드웨이 역사지구, 유콘 현수교</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">기후</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">8월 평균 12°C (서늘, 비 잦음)</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20867.75!2d-135.3145!3d59.4583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5401530e5a1c6c6f%3A0x2b3e3f8c5e5e5a0a!2sSkagway%2C%20AK%2C%20USA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="스캐그웨이 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skagway Shore Excursion Info Modal */}
      {activeModal === "shoreexcursion_skagway" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">⚓ 스캐그웨이(Skagway) 추천 기항지 선택 관광</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-base text-gray-700 leading-relaxed space-y-5">
                <p>본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 <span className="font-semibold text-gray-800">영어 가이드</span>로 진행됩니다.</p>
                <div>
                  <p className="font-semibold text-gray-800">1. 화이트 패스 산악 경관 열차 투어 (White Pass Scenic Railway)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: SGY-200</li>
                    <li>예상 소요 시간: 약 2시간 40분</li>
                    <li>예상 비용: 성인 $159.95부터~</li>
                    <li>핵심 포인트: 19세기 골드러시 시대의 향수를 간직한 클래식 산악 열차에 탑승해 스캐그웨이의 경이로운 대자연 속으로 들어갑니다. 해발 900m(약 3,000피트)가 넘는 험준한 산맥을 가로지르며 깎아지른 절벽과 압도적인 파노라마 절경을 감상하실 수 있습니다.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">2. 헬기 빙하 비행 &amp; 알래스칸 허스키 개썰매 캠프 (Dog Sledding &amp; Glacier Helicopter)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: SGY-840</li>
                    <li>예상 소요 시간: 약 2시간</li>
                    <li>예상 비용: 성인 $749.95부터~</li>
                    <li>핵심 포인트: 헬리콥터를 타고 거대한 빙하 위를 비행하며 알래스카의 환상적인 풍광을 눈에 담는 럭셔리 투어입니다. 이후 약 300여 마리의 늠름한 알래스칸 허스키가 생활하는 눈 덮인 베이스캠프에 직접 착륙하여 잊지 못할 특별한 교감을 나눕니다.</li>
                    <li className="text-gray-500">참고 사항: 탑승자 체중이 110kg(250lbs) 이상일 경우 안전 및 헬기 하중 규정상 추가 요금이 발생합니다. 13세 미만 아동은 반드시 성인 보호자와 동행해야 하며, 현지 기상 악화 시 안전을 위해 헬기 운항이 취소될 수 있습니다.</li>
                  </ul>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800">💡 기항지 투어 예약 시 유의사항</p>
                  <ul className="mt-2 ml-4 list-disc space-y-1.5">
                    <li>안내된 투어 요금 및 세부 일정은 현지 기상 상황이나 선사 사정에 따라 사전 예고 없이 변동될 수 있습니다.</li>
                    <li>인기 프로그램은 조기 마감될 수 있으므로, 출발 전 프린세스 크루즈 공식 홈페이지에 접속하여 개별 신용카드로 사전 예약하시는 것을 권장합니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ketchikan Detail Modal */}
      {activeModal === "ketchikan" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">[관광정보] 케치칸 (KETCHIKAN)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={ketchikanImages[carouselIndex]} alt={`케치칸 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {ketchikanImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>알래스카의 첫 번째 도시, 케치칸.</p>
                  <p>알래스카 남동부 레빌라기게도 섬에 자리한 케치칸은 &lsquo;세계 연어의 수도(Salmon Capital of the World)&rsquo;로 불립니다. 매년 여름이면 수백만 마리의 연어가 크리크 거리 아래 개울을 거슬러 올라가는 장관을 눈앞에서 감상할 수 있습니다.</p>
                  <p>세계 최대 규모의 온대 우림인 통가스 국립공원이 도시를 감싸고 있으며, 틀링깃(Tlingit) 원주민의 문화를 간직한 토템폴 유산센터와 색색의 수상 가옥이 늘어선 크리크 거리는 케치칸의 대표 명소입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">도시</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">알래스카 케치칸 (Ketchikan, Alaska)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Ketchikan,Alaska,USA" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">인구</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">약 8,200명</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주요 관광지</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">크리크 거리, 토템폴 유산센터, 통가스 국립공원</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">기후</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">8월 평균 14°C (온화, 비 잦음)</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41735.5!2d-131.6461!3d55.342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540198773a045391%3A0x6ea09e3c5e3b6c0a!2sKetchikan%2C%20AK%2C%20USA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="케치칸 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ketchikan Shore Excursion Info Modal */}
      {activeModal === "shoreexcursion_ketchikan" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">⚓ 케치칸(Ketchikan) 추천 기항지 선택 관광</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="text-base text-gray-700 leading-relaxed space-y-5">
                <p>본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 <span className="font-semibold text-gray-800">영어 가이드</span>로 진행됩니다.</p>
                <div>
                  <p className="font-semibold text-gray-800">1. 자연 탐험 &amp; 던지니스 게 만찬 (Wilderness Exploration &amp; Crab Feast)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: KTN-650</li>
                    <li>예상 소요 시간: 약 4시간</li>
                    <li>예상 비용: 성인 $239.95부터~</li>
                    <li>핵심 포인트: 세계 최대 규모의 온대 우림인 통가스 국립공원을 거닐며 알래스카의 다채로운 동식물과 대자연을 탐험합니다. 상쾌한 산책 후에는 조지 인렛 롯지로 이동해 푸짐한 던지니스 게 요리를 마음껏 즐기실 수 있습니다.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">2. 수륙양용 덕 투어 (Town &amp; Harbor by Duck)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: KTN-660</li>
                    <li>예상 소요 시간: 약 1시간 30분</li>
                    <li>예상 비용: 성인 $109.95부터~</li>
                    <li>핵심 포인트: 미국 해안경비대의 인증을 받은 수륙양용차 &lsquo;덕(Duck)&rsquo;에 탑승해 육지와 바다를 넘나들며 케치칸을 둘러봅니다. 웨일 파크, 연어 길(Salmon ladder), 크리크 거리의 옛이야기를 만나고, 통조림 공장과 수상비행장 등 항구의 활기찬 풍경까지 한 번에 감상할 수 있습니다.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">3. 알래스카 럼버잭 쇼 &amp; 게 만찬 (Lumberjack Show &amp; Crab Feast)</p>
                  <ul className="mt-2 space-y-1.5 ml-4 list-disc">
                    <li>투어 코드: KTN-315</li>
                    <li>예상 소요 시간: 약 4시간</li>
                    <li>예상 비용: 성인 $144.95부터~</li>
                    <li>핵심 포인트: 도끼 던지기, 톱질, 나무 타기 등 알래스카 전통 벌목꾼들의 박진감 넘치는 12가지 경연이 펼쳐지는 명물 &lsquo;럼버잭 쇼&rsquo;를 관람합니다. 흥미진진한 공연을 즐긴 뒤, 아름다운 전망의 롯지에서 풍성한 게 요리 만찬이 이어집니다.</li>
                  </ul>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-800">💡 기항지 투어 예약 시 유의사항</p>
                  <ul className="mt-2 ml-4 list-disc space-y-1.5">
                    <li>안내된 투어 요금 및 세부 일정은 현지 기상 상황이나 선사 사정에 따라 사전 예고 없이 변동될 수 있습니다.</li>
                    <li>인기 프로그램은 조기 마감될 수 있으므로, 출발 전 프린세스 크루즈 공식 홈페이지에 접속하여 개별 신용카드로 사전 예약하시는 것을 권장합니다.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Endicott Arm Detail Modal */}
      {activeModal === "endicottarm" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">[관광정보] 엔디캇 암 (ENDICOTT ARM)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={endicottArmImages[carouselIndex]} alt={`엔디캇 암 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {endicottArmImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>알래스카의 숨겨진 보석, 엔디캇 암.</p>
                  <p>엔디캇 암은 알래스카 남동부에 위치한 약 50km 길이의 장대한 피오르 수로입니다. 수로 끝에는 도스 빙하(Dawes Glacier)가 자리하고 있으며, 거대한 빙벽에서 떨어져 나온 유빙들이 푸른 바다 위를 떠다니는 장관을 연출합니다.</p>
                  <p>크루즈 선박은 이 좁은 수로를 천천히 항해하며, 승객들은 데크에서 눈앞에 펼쳐지는 빙하와 야생동물(혹등고래, 물개, 대머리 독수리 등)을 가까이서 관찰할 수 있습니다.</p>
                  <p className="text-red-500">※ 크루즈에서 하선하지 않고 배 위에서 관람하는 일정입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">위치</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">알래스카 남동부 엔디캇 암 (Endicott Arm, Alaska)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주소</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">
                      <a href="https://maps.google.com/?q=Endicott+Arm,Alaska,USA" target="_blank" rel="noopener noreferrer">
                        <img src="https://maps.google.com/favicon.ico" alt="Google Maps" className="w-6 h-6 inline-block" />
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주요 볼거리</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">도스 빙하, 피오르 절벽, 유빙, 야생동물</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">관람 방식</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">하선 없이 선상 관람 (Scenic Cruising)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">기후</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">8월 평균 10°C (바람이 강할 수 있음)</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-6 aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-133.6!3d57.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540468f16ef846e5%3A0x3e66b7d739fa3d0!2sEndicott%20Arm!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="엔디캇 암 지도"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cruise At Sea Detail Modal */}
      {activeModal === "cruiseatsea" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">🚢 에메랄드 프린세스 전일 해상</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={cruiseInteriorImages[carouselIndex]} alt={`크루즈 시설 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {cruiseInteriorImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.</li>
                    <li>탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.</li>
                    <li>오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.</li>
                    <li>따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.</li>
                    <li>요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.</li>
                  </ul>
                  <p>잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">선박</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">에메랄드 프린세스 (Emerald Princess)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주요 시설</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">수영장, 스파, 카지노, 극장, 미니 골프, 조깅 트랙</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">식사</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">메인 다이닝룸, 뷔페, 피자 바, 아이스크림 바 등</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">드레스코드</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">캐주얼 (스마트 캐주얼 권장)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Cruise Interior Detail Modal */}
      {activeModal === "cruiseinterior" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">🚢 에메랄드 프린세스 전일 해상</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
            <div className="p-4 md:p-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <div className="relative w-full md:w-1/2 aspect-[4/3] bg-gray-200 overflow-hidden flex-shrink-0">
                  <img src={cruiseInteriorImages[carouselIndex]} alt={`크루즈 내부 ${carouselIndex + 1}`} className="w-full h-full object-cover" />
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-1.5 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-1">
                    {carouselIndex + 1} / {cruiseInteriorImages.length}
                  </div>
                </div>
                <div className="flex-1 text-sm text-gray-700 leading-relaxed space-y-3">
                  <p>오늘은 종일 해상에서 보내는 날입니다. 에메랄드 프린세스의 다양한 시설을 마음껏 즐겨보세요.</p>
                  <p>수영장 4개와 자쿠지, 로터스 스파에서 여유를 만끽하고, 대극장 &apos;Princess Theatre&apos;에서 브로드웨이 스타일의 공연을 관람하실 수 있습니다. 카지노에서 행운을 시험해보거나, 미니 골프와 조깅 트랙에서 상쾌한 시간을 보내보세요.</p>
                  <p>메인 다이닝룸과 뷔페 레스토랑에서 세계 각국의 요리를 즐기시고, 야외 데크에서 광활한 태평양의 풍경을 감상하며 특별한 하루를 보내시기 바랍니다.</p>
                </div>
              </div>
              <table className="w-full mt-6 border-t border-gray-200 text-sm">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 w-20 md:w-28 text-center">선박</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">에메랄드 프린세스 (Emerald Princess)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">주요 시설</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">수영장, 스파, 카지노, 극장, 미니 골프, 조깅 트랙</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">식사</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">메인 다이닝룸, 뷔페, 피자 바, 아이스크림 바 등</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3 px-3 md:px-4 bg-gray-50 font-semibold text-gray-700 text-center">드레스코드</td>
                    <td className="py-3 px-3 md:px-4 text-gray-600">캐주얼 (스마트 캐주얼 권장)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Chinatown Detail Modal */}
      {activeModal === "chinatown" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 hidden md:block" onClick={closeModal} />
          <div className="relative z-10 bg-white w-full h-full md:h-auto md:max-w-3xl md:max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="sticky top-0 z-20 bg-[#0054a0] text-white flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
              <h3 className="text-base md:text-lg font-bold">북미에서 가장 오래된 차이나타운 (CHINATOWN)</h3>
              <button onClick={closeModal} className="hover:bg-[#004080] p-1 transition-colors">
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
