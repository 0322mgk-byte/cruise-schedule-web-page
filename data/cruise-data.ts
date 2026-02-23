import type { CruisePackageData } from './types';

export const cruiseData: CruisePackageData = {
  // ─── Hero ───
  hero: {
    ctaText: "일정 확인하기",
    cruiseLine: "프린세스 크루즈 에메랄드호",
    departureDate: "2026년 08월 03일 출발",
    duration: "8박 10일",
    nights: "8박",
    description: "알래스카 크루즈 8박 10일의 상세 일정을 안내해 드립니다\n일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요",
    mobileDescription: "알래스카 크루즈 {departureDate}\n주요 일정과 기항지 정보를 지금 바로 확인하세요",
    videoSources: [
      { src: "/hero-video/hero-clip-1080p.webm", type: "video/webm" },
      { src: "/hero-video/hero-clip-1080p.mp4", type: "video/mp4" },
    ],
    mobileVideoSrc: "/hero-video/hero-clip.mp4",
  },

  // ─── Header ───
  header: {
    companyName: "한세계여행사",
    logoPath: "/header/KakaoTalk_20260220_105453762_02 1 (Traced).svg",
    logoDarkPath: "/header/KakaoTalk_20260220_105453762_02 12.png",
    mobileTitle: "상품상세정보",
    navItems: [
      { name: "시설 안내", href: "#intro" },
      { name: "일정표", href: "#schedule" },
      { name: "가격 안내", href: "#pricing" },
      { name: "규정 안내", href: "#trip-summary" },
      { name: "준비물", href: "#checklist" },
    ],
  },

  // ─── TripInfo ───
  tripInfo: {
    title: "여행 주요 일정",
    subtitle: "밴쿠버에서 알래스카까지 8박 10일의 항해",
    labels: {
      schedule: "여행 일정",
      departKorea: "한국 출발",
      arriveLocal: "현지 도착",
      departLocal: "현지 출발",
      arriveKorea: "한국 도착",
      routeRegion: "여행 지역",
      reservationStatus: "예약 현황",
      reservationCountUnit: "명",
      escort: "인솔자",
      meetingPlace: "미팅 장소",
    },
    flights: {
      outbound: [
        {
          airline: "에어캐나다 or 대한항공",
          flightCode: "AS172",
          departureTime: "17:45",
          departureDate: "08/03 (월)",
          arrivalTime: "11:35",
          arrivalDate: "08/03 (월)",
          duration: "총 9시간 55분 소요",
        },
      ],
      inbound: [
        {
          airline: "에어캐나다 or 대한항공",
          flightCode: "AS172",
          departureTime: "00:00",
          departureDate: "08/11 (화)",
          arrivalTime: "00:00",
          arrivalDate: "08/12 (수)",
          duration: "총 11시간 35분 소요",
        },
      ],
    },
    routeCities: ["밴쿠버", "해상", "주노", "스캐그웨이", "엔디캇암", "캐치칸", "해상", "밴쿠버"],
    reservationStatus: "출발확정",
    reservationCount: "16",
    escortInfo: "인솔자 1명이 동행합니다.",
    meetingPlace: "인천공항 제2터미널",
  },

  // ─── Intro (Facilities) ───
  intro: {
    title: "크루즈 시설 안내",
    description: "크루즈에서 즐길 수 있는 대표 시설을 소개합니다",
    moreText: "자세히 보기",
    facilities: [
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
      },
    ],
  },

  // ─── Features (Room Types) ───
  features: {
    title: "숙박 시설 안내",
    description: "바다 위의 호텔, 객실별 상세 시설 확인하기",
    moreText: "자세히 보기",
    rooms: [
      {
        name: "인사이드",
        image: "/section3/section3-inside.jpg",
        subtitle: "합리적인 가격의 인테리어룸",
        description: "가장 저렴한 가격의 객실인 인테리어룸은 합리적인 여행을 즐기기에 완벽한 장소입니다.",
        amenities: [
          { iconName: "Maximize2", label: "객실 크기: 약 15m² (약 4.5평)", fullWidth: true },
          { iconName: "BedDouble", label: "편안한 퀸 or 트윈 베드" },
          { iconName: "Refrigerator", label: "냉장고" },
          { iconName: "Tv", label: "평면 TV" },
          { iconName: "Bath", label: "개인 전용 욕실" },
          { iconName: "Waves", label: "면 100% 타월" },
          { iconName: "ConciergeBell", label: "24시간 무료 룸서비스" },
          { iconName: "DoorClosed", label: "옷장" },
          { iconName: "Armchair", label: "책상" },
          { iconName: "Wind", label: "헤어드라이어 및 욕실 용품" },
          { iconName: "Lock", label: "디지털 보안 금고" },
        ],
      },
      {
        name: "오션뷰",
        image: "/section3/section3-o.jpg",
        subtitle: "푸른 바다를 품은 오션뷰 룸",
        description: "그림 같은 풍경과 자연 채광이 가득한 오션뷰 룸은 광활한 바다의 아름다운 경치를 자랑합니다.",
        amenities: [
          { iconName: "Maximize2", label: "객실 크기: 약 13.5~19.1m² (약 4.1~5.8평)" },
          { iconName: "AppWindow", label: "멋진 바다의 풍경을 볼 수 있는 큰 창문" },
          { iconName: "BedDouble", label: "편안한 퀸 or 트윈 베드" },
          { iconName: "Refrigerator", label: "냉장고" },
          { iconName: "Tv", label: "평면 TV" },
          { iconName: "Bath", label: "개인 전용 욕실" },
          { iconName: "Waves", label: "면 100% 타월" },
          { iconName: "ConciergeBell", label: "24시간 무료 룸서비스" },
          { iconName: "DoorClosed", label: "옷장" },
          { iconName: "Armchair", label: "책상" },
          { iconName: "Wind", label: "헤어드라이어 및 욕실 용품" },
          { iconName: "Lock", label: "디지털 보안 금고" },
        ],
      },
      {
        name: "발코니",
        image: "/section3/section3-b.jpg",
        subtitle: "아름다운 바다를 한 눈에 볼 수 있는 야외 공간",
        description: "인상적인 바다 뷰를 자랑하는 이 객실은 바다가 한눈에 들어오는 발코니 공간을 제공합니다.",
        amenities: [
          { iconName: "Maximize2", label: "객실 크기: 약 19.9~20.6m² (약 6.0~6.2평)", fullWidth: true },
          { iconName: "Armchair", label: "의자 2개, 테이블, 발받침대를 포함한 발코니" },
          { iconName: "AppWindow", label: "바닥부터 천장까지 슬라이딩 도어" },
          { iconName: "BedDouble", label: "편안한 퀸 or 트윈 베드" },
          { iconName: "Refrigerator", label: "냉장고" },
          { iconName: "Tv", label: "평면 TV 2개" },
          { iconName: "Bath", label: "개인 전용 욕실" },
          { iconName: "Waves", label: "면 100% 타월" },
          { iconName: "ConciergeBell", label: "24시간 무료 룸서비스" },
          { iconName: "DoorClosed", label: "옷장" },
          { iconName: "Armchair", label: "책상" },
          { iconName: "Wind", label: "헤어드라이어 및 욕실 용품" },
          { iconName: "Lock", label: "디지털 보안 금고" },
        ],
      },
    ],
  },

  // ─── Details (Ship Specs) ───
  details: {
    title: "크루즈 제원",
    specs: [
      { label: "톤 수", value: "113,561톤" },
      { label: "길이", value: "289.86m" },
      { label: "승무원", value: "1,200명" },
      { label: "높이", value: "59.44m" },
      { label: "승객 정원", value: "3,080명" },
      { label: "규모", value: "19층" },
      { label: "첫 항해", value: "2007. 4. 11" },
      { label: "객실 수", value: "1,539개" },
    ],
    youtube: {
      videoId: "5wMQNxrwxM0",
      startSeconds: 492,
      endSeconds: 516,
    },
  },


  // ─── Schedule ───
  schedule: {
    labels: {
      title: "상세 일정",
      expandAll: "모두 펼침",
      collapseAll: "모두 접기",
      dayLabel: "일차",
      viewDetails: "상세보기",
      tourGuidePrefix: "영어 가이드",
      defaultTouristLocation: "[관광정보]",
      defaultTourLabel: "[기항지 투어]",
      defaultTourSublabel: "추천 선택 관광",
      defaultSeaLabel: "🚢 전일 해상",
      defaultSeaSublabel: "에메랄드 크루즈",
      tourNoticeTitle: "💡 기항지 투어 예약 시 유의사항",
      tourCode: "투어 코드",
      expectedDuration: "예상 소요 시간",
      expectedCost: "예상 비용",
      highlight: "핵심 포인트",
      note: "참고 사항",
      mapTitleSuffix: "지도",
    },
    dateRange: "2026년 8월 3일 — 8월 10일",
    durationLabel: "8박 10일",
    days: [
      // ── Day 1 ──
      {
        day: 1,
        date: "08/03(월)",
        location: "인천 → 밴쿠버",
        description: "개스타운, 캐나다 플레이스, 스탠리 공원, 차이나타운",
        items: [
          { type: "location-marker", label: "인천" },
          {
            type: "text",
            time: "17:35",
            text: "인천 국제공항 출발 - 밴쿠버 향발",
            details: [
              "교통편 : 에어캐나다 or 대한항공",
              "비행시간 : 약 9시간 55분 소요",
              "시차 : 17시간 느립니다.",
              "항공 시간 및 편수는 변경될 수 있습니다.",
            ],
            warning: "기내 좌석 배정은 항공사의 고유 권한입니다. 여행사나 인솔자가 임의로 지정해 드릴 수 없는 영역이기에, 희망하시는 좌석 배정이 어려울 수 있는 점 고객님의 너그러운 양해 부탁드립니다.",
          },
          { type: "location-marker", label: "밴쿠버", extraMarginTop: true },
          { type: "text", time: "10:30", text: "밴쿠버 국제공항 도착 후 입국 수속" },
          {
            type: "tourist-spot",
            modalId: "vancouver",
            title: "[관광 정보] 밴쿠버",
            shortTitle: "밴쿠버",
            images: [
              "/sectrion6/day1/Vancouver/connie_sf-vancouver-2238137_640.webp",
              "/sectrion6/day1/Vancouver/pexels-photo-11589790.webp",
              "/sectrion6/day1/Vancouver/Granville_Island_Entrance.webp",
            ],
            description: "캐나다 서부 최대의 도시, 밴쿠버.\n태평양과 해안 산맥 사이에 자리한 밴쿠버는 세계에서 가장 살기 좋은 도시 중 하나로 손꼽힙니다. 온화한 기후와 수려한 자연경관, 다양한 문화가 어우러진 이 도시는 매년 수백만 명의 관광객을 끌어들이고 있습니다.\n시내에는 역사와 문화가 살아 숨 쉬는 개스타운, 아름다운 항구 전망의 캐나다 플레이스, 도심 속 거대한 숲 스탠리 공원, 북미 최대 규모의 차이나타운 등 다양한 볼거리가 있습니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "밴쿠버",
          },
          {
            type: "tourist-spot",
            modalId: "gastown",
            title: "밴쿠버에서 가장 오래된 거리, 개스타운",
            shortTitle: "개스타운",
            images: [
              "/sectrion6/day1/Gastown/8185_HDR_2012-07-16_Gastown_HDR_04_2012-07-16_Gastown_HDR.webp",
              "/sectrion6/day1/Gastown/Gastown_2.webp",
              "/sectrion6/day1/Gastown/37726939631_e296f045d3_b.webp",
            ],
            description: "1867년 수다쟁이 선원 '개시 잭' 데이튼이 위스키 한 통으로 술집을 열면서 탄생한 밴쿠버의 발상지입니다. 자갈이 깔린 거리 위로 빅토리아풍 붉은 벽돌 건물이 늘어서 있고, 15분마다 증기를 내뿜는 세계 유일의 증기시계가 이 거리의 상징입니다. 감각적인 부티크와 갤러리, 분위기 좋은 레스토랑이 즐비해 산책만으로도 충분히 매력적인 곳입니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "개스타운",
          },
          {
            type: "tourist-spot",
            modalId: "canadaplace",
            title: "밴쿠버 항구의 랜드마크, 캐나다 플레이스",
            shortTitle: "캐나다 플레이스",
            images: [
              "/sectrion6/day1/Canada-Place/Canada_Place_Landing.webp",
              "/sectrion6/day1/Canada-Place/28399325036_0b8a952b24_b.webp",
              "/sectrion6/day1/Canada-Place/8215384089_ee681337b4_b.webp",
            ],
            description: "다섯 개의 거대한 흰색 돛 지붕이 밴쿠버 항구를 수놓는 상징적인 복합시설입니다. 1986년 세계박람회(EXPO 86) 캐나다관으로 건설되어 500만 명이 넘는 관람객을 맞이했으며, 지금은 알래스카 크루즈의 출발항이자 매일 정오에 캐나다 국가가 울려 퍼지는 밴쿠버의 대표 랜드마크입니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "캐나다 플레이스",
          },
          {
            type: "tourist-spot",
            modalId: "stanleypark",
            title: "도심 속 거대한 숲, 스탠리 공원",
            shortTitle: "스탠리 공원",
            images: [
              "/sectrion6/day1/Stanley-Park/Stanley Park1.webp",
              "/sectrion6/day1/Stanley-Park/Stanley Park2.webp",
              "/sectrion6/day1/Stanley-Park/Stanley Park3.webp",
            ],
            description: "400헥타르에 50만 그루의 나무가 울창한 북미 최대의 도시 공원으로, 연간 800만 명이 찾는 밴쿠버의 허파입니다. 세계에서 가장 긴 해안 산책로 시월(Seawall)을 따라 10km를 걸으면 도시 스카이라인과 북쪽 산맥이 파노라마처럼 펼쳐집니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "스탠리 공원",
          },
          {
            type: "tourist-spot",
            modalId: "chinatown",
            title: "북미에서 가장 오래된 차이나타운",
            shortTitle: "차이나타운",
            images: [
              "/sectrion6/day1/Millennium Gate/Millennium_Gate.webp",
              "/sectrion6/day1/Millennium Gate/Sam_Kee_Building.webp",
              "/sectrion6/day1/Millennium Gate/Vancouver_Chinese_Garden.webp",
            ],
            description: "1880년대 골드러시와 대륙횡단철도 건설 시대에 뿌리를 둔 캐나다 최대의 차이나타운입니다. 내셔널 지오그래픽이 세계 최고의 도시 정원으로 선정한 쑨원 고전 중국정원과, 중국-서양 혼합 양식의 독특한 건축물, 그리고 활기 넘치는 딤섬 레스토랑이 이국적인 매력을 선사합니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "차이나타운",
          },
          {
            type: "hotel",
            name: "호텔로 이동 및 휴식",
            note: "총 1개의 예정 숙박시설이 있습니다. 출발 1일 전까지 홈페이지와 유선 또는 문자를 통해 알려 드리겠습니다.",
          },
        ],
      },
      // ── Day 2 ──
      {
        day: 2,
        date: "08/04(화)",
        location: "밴쿠버",
        description: "크루즈 체크인, 안전 훈련, 밴쿠버 출항",
        items: [
          { type: "location-marker", label: "밴쿠버" },
          { type: "text", time: "08:30", text: "호텔 조식 후 크루즈 체크인" },
          {
            type: "info-card",
            modalId: "boarding",
            title: "에메랄드 프린세스호 승선 수속 안내",
            emoji: "📢",
            mobileLabel: "[승선 안내]",
            mobileSublabel: "승선 수속 안내",
            sections: [
              {
                heading: "1. 수하물 위탁 (Luggage Drop-off)",
                items: [
                  { text: "터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다." },
                  { text: "여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요." },
                ],
              },
              {
                heading: "2. 승선 수속 (Check-in & Boarding)",
                items: [
                  { text: "준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드" },
                  { text: "위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다." },
                  { text: "모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다." },
                  { text: "선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 '승선 카드'가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)" },
                ],
              },
              {
                heading: "3. 승선 후 유의사항 (After Boarding)",
                items: [
                  { text: "필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다." },
                  { text: "기항지 선택 관광: 선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)" },
                ],
              },
            ],
          },
          { type: "text", time: "10:30", text: "선상 안전 훈련 참가 및 탑투어 진행" },
          { type: "meal", text: "중식 (선내식)" },
          { type: "location-marker", label: "해상", extraMarginTop: true },
          { type: "text", time: "16:00", text: "에메랄드 프린세스는 주노를 향해 출발합니다." },
          {
            type: "tourist-spot",
            modalId: "emeraldprincess",
            title: "에메랄드 프린세스 (Emerald Princess)",
            shortTitle: "에메랄드 프린세스",
            images: [
              "/sectrion6/day2/emerald_princess_2.webp",
              "/sectrion6/day2/emerald_princess_3.webp",
              "/sectrion6/day2/emerald_princess_4.webp",
            ],
            description: "프린세스 크루즈의 대표 선박, 에메랄드 프린세스.\n총 톤수 113,561톤, 최대 3,114명의 승객을 수용하는 대형 크루즈 선박입니다. 선내에는 다양한 레스토랑과 바, 카지노, 스파, 수영장, 극장 등 풍부한 부대시설이 갖추어져 있어 항해 중에도 즐거운 시간을 보내실 수 있습니다.",
            mobileLabel: "프린세스 크루즈",
            mobileSublabel: "에메랄드 프린세스",
          },
          { type: "meal", text: "석식 (선내식)" },
          { type: "hotel", name: "에메랄드 프린세스" },
        ],
      },
      // ── Day 3 ──
      {
        day: 3,
        date: "08/05(수)",
        location: "해상",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "location-marker", label: "전일 해상" },
          {
            type: "text",
            text: "▣ 전일해상 이란?\n다음 기항지를 향해 온종일 바다 위를 항해하는 시간입니다. 다채로운 선내 이벤트와 수준 높은 공연이 쉴 틈 없이 펼쳐지며, 이동하는 순간조차 완벽한 여행이 되는 진정한 크루즈의 낭만을 경험하실 수 있습니다.",
          },
          {
            type: "cruise-at-sea",
            modalId: "cruiseinterior",
            title: "에메랄드 프린세스 전일 해상",
            images: [
              "/sectrion6/day3/day3_5.avif",
              "/sectrion6/day3/day3_8.avif",
              "/sectrion6/day3/day3_1.webp",
            ],
            description: "선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용",
            bulletPoints: [
              "프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.",
              "탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.",
              "오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.",
              "따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.",
              "요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.",
            ],
            closingText: "잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.",
            mobileLabel: "🚢 전일 해상",
            mobileSublabel: "에메랄드 크루즈",
          },
          { type: "meal", text: "조식 (선내식)" },
          { type: "meal", text: "중식 (기내식)" },
          { type: "meal", text: "석식 (선내식)" },
          { type: "hotel", name: "에메랄드 프린세스" },
        ],
      },
      // ── Day 4 ──
      {
        day: 4,
        date: "08/06(목)",
        location: "주노",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "meal", text: "조식 (선내식)" },
          { type: "meal", text: "중식 (선내식)" },
          { type: "location-marker", label: "주노", extraMarginTop: true },
          { type: "text", time: "13:00", text: "주노 도착 후 안내절차에 따라 하선" },
          {
            type: "tourist-spot",
            modalId: "juneau",
            title: "[관광 정보] 주노 (Juneau)",
            shortTitle: "주노",
            images: [
              "/sectrion6/day4/Juneau_2.webp",
              "/sectrion6/day4/Juneau_3.webp",
              "/sectrion6/day4/Juneau_4.webp",
            ],
            description: "알래스카의 주도, 주노.\n빙하와 산, 바다가 어우러진 주노는 도로로 접근할 수 없는 미국 유일의 주도입니다. 웅장한 멘덴홀 빙하와 고래 관찰, 연어가 거슬러 오르는 계곡 등 알래스카의 대자연을 가장 가까이에서 체험할 수 있는 곳입니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "주노",
          },
          { type: "text", text: "기항지 관광 프로그램 참여 또는 자유 시간" },
          { type: "shore-excursion", modalId: "shoreexcursion", title: "주노(Juneau) 추천 기항지 선택 관광", mobileLabel: "[기항지 투어]", mobileSublabel: "주노 추천 선택 관광" },
          { type: "meal", text: "석식 (선내식)" },
          {
            type: "departure-notice",
            time: "21:00",
            text: "에메랄드 프린세스는 스캐그웨이를 향해 출발합니다",
            details: [
              "현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.",
              "원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.",
            ],
          },
          { type: "hotel", name: "에메랄드 프린세스" },
        ],
      },
      // ── Day 5 ──
      {
        day: 5,
        date: "08/07(금)",
        location: "스캐그웨이",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "location-marker", label: "스캐그웨이" },
          { type: "meal", text: "조식 (선내식)" },
          { type: "text", time: "07:00", text: "스캐그웨이 도착 후 안내절차에 따라 하선" },
          {
            type: "tourist-spot",
            modalId: "skagway",
            title: "[관광 정보] 스캐그웨이 (Skagway)",
            shortTitle: "스캐그웨이",
            images: [
              "/sectrion6/day5/Skagway_1.webp",
              "/sectrion6/day5/Skagway_6.webp",
              "/sectrion6/day5/Skagway_3.webp",
            ],
            description: "골드러시의 관문, 스캐그웨이.\n1897년 클론다이크 골드러시 시대에 금을 찾아 몰려든 사람들의 출발지였던 스캐그웨이는 당시의 역사적 건물들이 그대로 보존되어 있어 마치 시간이 멈춘 듯한 매력을 선사합니다. 화이트패스 & 유콘 루트 철도를 타고 절벽과 빙하 사이를 지나는 장관은 알래스카 크루즈의 하이라이트입니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "스캐그웨이",
          },
          { type: "text", text: "기항지 관광 프로그램 참여 또는 자유 시간" },
          { type: "shore-excursion", modalId: "shoreexcursion_skagway", title: "스캐그웨이(Skagway) 추천 기항지 선택 관광", mobileLabel: "[기항지 투어]", mobileSublabel: "스캐그웨이 추천 선택 관광" },
          { type: "meal", text: "중식 (선내식)" },
          { type: "meal", text: "석식 (선내식)" },
          {
            type: "departure-notice",
            time: "20:00",
            text: "에메랄드 프린세스는 엔디캇암을 향해 출발합니다",
            details: [
              "현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.",
              "원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.",
            ],
          },
          { type: "hotel", name: "에메랄드 프린세스" },
        ],
      },
      // ── Day 6 ──
      {
        day: 6,
        date: "08/08(토)",
        location: "엔디캇 암",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "location-marker", label: "엔디캇 암" },
          { type: "text", time: "06:00", text: "에메랄드 프린세스는 엔디캇암을 항해합니다" },
          {
            type: "tourist-spot",
            modalId: "endicottarm",
            title: "[관광 정보] 엔디캇 암 (Endicott Arm)",
            shortTitle: "엔디캇 암",
            images: [
              "/sectrion6/day6/endicott_arm_1.webp",
              "/sectrion6/day6/endicott_arm_2.webp",
              "/sectrion6/day6/endicott_arm_3.webp",
            ],
            description: "알래스카의 숨겨진 보석, 엔디캇 암.\n장엄한 피오르 수로를 따라 항해하며 도스 빙하(Dawes Glacier)의 웅장한 모습을 배 위에서 감상합니다. 거대한 빙벽에서 떨어져 나온 유빙들이 수면 위를 떠다니는 환상적인 풍경을 만나실 수 있습니다.\n※ 크루즈에서 하선하지 않고 배 위에서 관람하는 일정입니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "엔디캇 암",
          },
          {
            type: "cruise-at-sea",
            modalId: "cruiseatsea",
            title: "에메랄드 프린세스 전일 해상",
            images: [
              "/sectrion6/day3/day3_5.avif",
              "/sectrion6/day3/day3_8.avif",
              "/sectrion6/day3/day3_1.webp",
            ],
            description: "선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용",
            bulletPoints: [
              "프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.",
              "탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.",
              "오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.",
              "따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.",
              "요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.",
            ],
            closingText: "잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.",
            mobileLabel: "🚢 전일 해상",
            mobileSublabel: "에메랄드 크루즈",
          },
          { type: "text", time: "11:00", text: "엔디캇 암 & 도스 빙하 지대에서 출발" },
          { type: "meal", text: "조식 (선내식)" },
          { type: "meal", text: "중식 (선내식)" },
          { type: "meal", text: "석식 (선내식)" },
          { type: "hotel", name: "에메랄드 프린세스" },
        ],
      },
      // ── Day 7 ──
      {
        day: 7,
        date: "08/09(일)",
        location: "케치칸",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "location-marker", label: "케치칸" },
          { type: "meal", text: "조식 (선내식)" },
          { type: "text", time: "07:00", text: "케치칸 도착 후 안내절차에 따라 하선" },
          {
            type: "tourist-spot",
            modalId: "ketchikan",
            title: "[관광 정보] 케치칸 (Ketchikan)",
            shortTitle: "케치칸",
            images: [
              "/sectrion6/day7/Ketchikan_1.webp",
              "/sectrion6/day7/Ketchikan_2.webp",
              "/sectrion6/day7/Ketchikan_3.webp",
            ],
            description: "알래스카의 첫 번째 도시, 케치칸.\n알래스카 남동부에 자리한 케치칸은 '세계 연어의 수도'로 불리며, 통가스 국립공원의 울창한 온대 우림과 원주민 토템폴 문화로 유명합니다. 크리크 거리의 수상 가옥과 활기찬 항구 풍경이 여행자들을 매료시키는 매력적인 항구 도시입니다.",
            mobileLabel: "[관광정보]",
            mobileSublabel: "케치칸",
          },
          { type: "text", text: "기항지 관광 프로그램 참여 또는 자유 시간" },
          { type: "shore-excursion", modalId: "shoreexcursion_ketchikan", title: "케치칸(Ketchikan) 추천 기항지 선택 관광", mobileLabel: "[기항지 투어]", mobileSublabel: "케치칸 추천 선택 관광" },
          { type: "meal", text: "중식 (선내식)" },
          {
            type: "departure-notice",
            time: "15:00",
            text: "에메랄드 프린세스는 밴쿠버를 향해 출발합니다",
            details: [
              "현지 기상 및 선사 사정에 의해 출항 시간이 예고 없이 변동될 수 있습니다.",
              "원활한 출발을 위해 늦어도 출항 1시간 전까지는 반드시 탑승을 마쳐주세요.",
            ],
          },
          { type: "meal", text: "석식 (선내식)" },
          { type: "hotel", name: "에메랄드 프린세스" },
        ],
      },
      // ── Day 8 ──
      {
        day: 8,
        date: "08/10(월)",
        location: "해상",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "location-marker", label: "전일 해상" },
          {
            type: "text",
            text: "▣ 전일해상 이란?\n다음 기항지를 향해 온종일 바다 위를 항해하는 시간입니다. 다채로운 선내 이벤트와 수준 높은 공연이 쉴 틈 없이 펼쳐지며, 이동하는 순간조차 완벽한 여행이 되는 진정한 크루즈의 낭만을 경험하실 수 있습니다.",
          },
          {
            type: "cruise-at-sea",
            modalId: "cruiseatsea",
            title: "에메랄드 프린세스 전일 해상",
            images: [
              "/sectrion6/day3/day3_5.avif",
              "/sectrion6/day3/day3_8.avif",
              "/sectrion6/day3/day3_1.webp",
            ],
            description: "선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용",
            bulletPoints: [
              "프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.",
              "탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.",
              "오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.",
              "따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.",
              "요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.",
            ],
            closingText: "잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.",
            mobileLabel: "🚢 전일 해상",
            mobileSublabel: "에메랄드 크루즈",
          },
          { type: "meal", text: "조식 (선내식)" },
          { type: "meal", text: "중식 (선내식)" },
          { type: "meal", text: "석식 (선내식)" },
          { type: "hotel", name: "에메랄드 프린세스" },
        ],
      },
      // ── Day 9 ──
      {
        day: 9,
        date: "08/11(화)",
        location: "밴쿠버",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "location-marker", label: "밴쿠버" },
          { type: "meal", text: "조식 (선내식)" },
          { type: "text", time: "07:30", text: "밴쿠버 도착 후 안내절차에 따라 하선" },
          {
            type: "info-card",
            modalId: "disembarkation",
            title: "크루즈 하선 수속 안내",
            emoji: "📢",
            mobileLabel: "[하선 안내]",
            mobileSublabel: "하선 수속 안내",
            sections: [
              {
                heading: "1. 선내 결제 비용 정산 (Settlement)",
                items: [
                  { text: "하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.", bold: "내역 확인:" },
                  { text: "승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 미화 달러 USD 사용 가능)", bold: "결제 방식:" },
                  { text: "정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.", bold: "안내 데스크:" },
                ],
              },
              {
                heading: "2. 하선 전 수하물 위탁 (Luggage Drop-off)",
                items: [
                  { text: "하선 전날 선실로 전달되는 '전용 수하물 태그'를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.", bold: "수하물 내놓기:" },
                  { text: "주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)하여 하선해 주시기 바랍니다.", isWarning: true },
                ],
              },
            ],
          },
          { type: "text", text: "밴쿠버 국제공항으로 이동" },
          {
            type: "departure-notice",
            time: "00:00",
            text: "밴쿠버 국제 공항 출발 - 인천 향발",
            details: [
              "교통편 : 에어캐나다 or 대한항공",
              "비행시간 : 약 11시간 35분 소요",
              "항공 시간 및 편수는 변경될 수 있습니다.",
            ],
            warning: "기내 좌석 배정은 항공사의 고유 권한입니다. 여행사나 인솔자가 임의로 지정해 드릴 수 없는 영역이기에, 희망하시는 좌석 배정이 어려울 수 있는 점 고객님의 너그러운 양해 부탁드립니다.",
          },
          { type: "meal", text: "석식 (기내식)" },
        ],
      },
      // ── Day 10 ──
      {
        day: 10,
        date: "08/12(수)",
        location: "인천",
        description: "상세 내용을 확인해보세요",
        items: [
          { type: "meal", text: "조식 (기내식)" },
          { type: "location-marker", label: "인천", extraMarginTop: true },
          {
            type: "text",
            time: "00:00",
            text: "인천 국제 공항 도착",
            details: [
              "인천국제공항 도착 후 개별해산",
            ],
            warning: "현지사정(항공기, 크루즈 등) 의해 일정 및 일정순서, 식사 등이 변경될 수 있습니다.",
          },
          { type: "closing-message", text: "한세계 여행사와 함께 즐거운 여행이 되셨길 바랍니다." },
        ],
      },
    ],

    // ─── Modals ───
    modals: [
      // Tourist Spot Modals
      {
        type: "tourist-spot",
        id: "vancouver",
        title: "[관광정보] 밴쿠버 (VANCOUVER)",
        images: [
          "/sectrion6/day1/Vancouver/connie_sf-vancouver-2238137_640.webp",
          "/sectrion6/day1/Vancouver/pexels-photo-11589790.webp",
          "/sectrion6/day1/Vancouver/Granville_Island_Entrance.webp",
        ],
        descriptions: [
          "캐나다 서부 최대의 도시, 밴쿠버.",
          "태평양과 해안 산맥 사이에 자리한 밴쿠버는 세계에서 가장 살기 좋은 도시 중 하나로 손꼽힙니다. 온화한 기후와 수려한 자연경관, 다양한 문화가 어우러진 이 도시는 매년 수백만 명의 관광객을 끌어들이고 있습니다.",
          "시내에는 역사와 문화가 살아 숨 쉬는 개스타운, 아름다운 항구 전망의 캐나다 플레이스, 도심 속 거대한 숲 스탠리 공원, 북미 최대 규모의 차이나타운 등 다양한 볼거리가 있습니다.",
        ],
        infoTable: [
          { label: "도시", value: "북아메리카 캐나다 밴쿠버" },
          { label: "주소", value: "" },
          { label: "홈페이지", value: "" },
          { label: "연락처", value: "" },
          { label: "입장료", value: "" },
          { label: "오픈시간", value: "" },
        ],
        googleMapQuery: "Vancouver,BC,Canada",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.34089692409!2d-123.19394895!3d49.2577143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2z67Cg7L-g67KMLCBC66eA7Yuw7Iuc7Lu464Gg67mE7JWEIOyjvCwg7LqQ64KY64uk!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
      },
      {
        type: "tourist-spot",
        id: "gastown",
        title: "밴쿠버에서 가장 오래된 거리, 개스타운 (GASTOWN)",
        images: [
          "/sectrion6/day1/Gastown/8185_HDR_2012-07-16_Gastown_HDR_04_2012-07-16_Gastown_HDR.webp",
          "/sectrion6/day1/Gastown/Gastown_2.webp",
          "/sectrion6/day1/Gastown/37726939631_e296f045d3_b.webp",
        ],
        descriptions: [
          "1867년 수다쟁이 선원 '개시 잭' 데이튼이 위스키 한 통으로 술집을 열면서 탄생한 밴쿠버의 발상지입니다.",
          "자갈이 깔린 거리 위로 빅토리아풍 붉은 벽돌 건물이 늘어서 있고, 15분마다 증기를 내뿜는 세계 유일의 증기시계(Steam Clock)가 이 거리의 상징입니다. 위스키 배럴 위에 올라선 개시 잭 동상도 놓치지 마세요.",
          "감각적인 부티크와 갤러리, 분위기 좋은 레스토랑이 즐비해 산책만으로도 충분히 매력적인 곳입니다.",
        ],
        infoTable: [
          { label: "위치", value: "밴쿠버 다운타운 동쪽, 워터프론트역 인근" },
          { label: "주소", value: "" },
          { label: "홈페이지", value: "" },
          { label: "연락처", value: "" },
          { label: "입장료", value: "무료 (야외 거리)" },
          { label: "오픈시간", value: "상시 개방" },
        ],
        googleMapQuery: "Gastown,Vancouver,BC,Canada",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10410!2d-123.1058!3d49.2844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f41ba3855%3A0xcfba5e6689bae30a!2sGastown!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
      },
      {
        type: "tourist-spot",
        id: "canadaplace",
        title: "밴쿠버 항구의 랜드마크, 캐나다 플레이스 (CANADA PLACE)",
        images: [
          "/sectrion6/day1/Canada-Place/Canada_Place_Landing.webp",
          "/sectrion6/day1/Canada-Place/28399325036_0b8a952b24_b.webp",
          "/sectrion6/day1/Canada-Place/8215384089_ee681337b4_b.webp",
        ],
        descriptions: [
          "1986년 세계박람회(EXPO 86)를 위해 건설된 캐나다관이 전신으로, 찰스 왕세자가 직접 개관했습니다. 박람회 기간 동안 500만 명 이상의 방문객을 맞이하며 큰 화제를 모았습니다.",
          "다섯 개의 흰색 돛 모양 지붕은 범선을 형상화한 것으로, 밴쿠버 해안 스카이라인의 상징입니다. 매일 정오가 되면 'Heritage Horns'라 불리는 10개의 호른이 캐나다 국가를 울려 퍼뜨립니다.",
          "현재는 알래스카 크루즈 출발 터미널, 밴쿠버 컨벤션센터, 팬퍼시픽 호텔, 그리고 시뮬레이션 비행 체험 'FlyOver Canada'가 있는 복합문화공간입니다.",
        ],
        infoTable: [
          { label: "위치", value: "999 Canada Place, Vancouver" },
          { label: "주소", value: "" },
          { label: "홈페이지", value: "" },
          { label: "연락처", value: "" },
          { label: "입장료", value: "무료 (부두 산책 기준)" },
          { label: "오픈시간", value: "상시 개방" },
        ],
        googleMapQuery: "Canada+Place,Vancouver,BC,Canada",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d-123.1143764!3d49.2890081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2z7LqQ64KY64ukIO2UjOugiOydtOyKpA!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
      },
      {
        type: "tourist-spot",
        id: "stanleypark",
        title: "도심 속 거대한 숲, 스탠리 공원 (STANLEY PARK)",
        images: [
          "/sectrion6/day1/Stanley-Park/Stanley Park1.webp",
          "/sectrion6/day1/Stanley-Park/Stanley Park2.webp",
          "/sectrion6/day1/Stanley-Park/Stanley Park3.webp",
          "/sectrion6/day1/Stanley-Park/Stanley_Park,_Vancouver_(7889964786).webp",
          "/sectrion6/day1/Stanley-Park/Stanley Park4.webp",
        ],
        descriptions: [
          "400헥타르의 부지에 50만 그루의 나무가 울창한 북미 최대의 도시 공원입니다. 수백 년 된 나무 중에는 높이 76미터에 달하는 거목도 있으며, 연간 800만 명이 찾는 밴쿠버의 자랑입니다.",
          "세계에서 가장 긴 끊기지 않는 해안 산책로 '시월(Seawall)'은 약 10km에 달하며, 걷는 데 약 3시간이 소요됩니다. 도시 스카이라인과 노스쇼어 산맥, 배라드 만의 풍경이 파노라마처럼 펼쳐집니다.",
          "공원 안에는 밴쿠버 수족관, 퍼스트 네이션 토템폴, 로스트 라군, 프로스펙트 포인트 전망대 등 다양한 볼거리가 있습니다.",
        ],
        infoTable: [
          { label: "위치", value: "밴쿠버 다운타운 서쪽 반도" },
          { label: "주소", value: "" },
          { label: "홈페이지", value: "" },
          { label: "연락처", value: "" },
          { label: "입장료", value: "무료 (공원 진입 기준)" },
          { label: "오픈시간", value: "06:00 ~ 22:00" },
        ],
        googleMapQuery: "Stanley+Park,Vancouver,BC,Canada",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10408.5!2d-123.1416!3d49.3043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548671832a35e18b%3A0x1fbd40096f5d6c43!2sStanley%20Park!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
      },
      {
        type: "tourist-spot",
        id: "chinatown",
        title: "북미에서 가장 오래된 차이나타운 (CHINATOWN)",
        images: [
          "/sectrion6/day1/Millennium Gate/Millennium_Gate.webp",
          "/sectrion6/day1/Millennium Gate/Sam_Kee_Building.webp",
          "/sectrion6/day1/Millennium Gate/Vancouver_Chinese_Garden.webp",
        ],
        descriptions: [
          "1880년대 브리티시 컬럼비아 골드러시와 대륙횡단철도 건설 시대에 형성된 캐나다 최대이자 북미에서 가장 오래된 차이나타운 중 하나입니다.",
          "내셔널 지오그래픽이 '세계 최고의 도시 정원'으로 선정한 쑨원 고전 중국정원(Dr. Sun Yat-Sen Classical Chinese Garden)이 대표적인 볼거리입니다. 중국 전통 양식과 서양 건축이 혼합된 독특한 건물들이 거리를 수놓고 있습니다.",
          "한약재 상점부터 실크 가게, 활기 넘치는 딤섬 레스토랑까지 다양한 볼거리와 먹거리가 가득한 이국적인 거리입니다.",
        ],
        infoTable: [
          { label: "위치", value: "밴쿠버 다운타운 동쪽, 펜더 스트리트 일대" },
          { label: "주소", value: "" },
          { label: "홈페이지", value: "" },
          { label: "연락처", value: "" },
          { label: "입장료", value: "무료 (거리 관광 기준)" },
          { label: "오픈시간", value: "상시 개방" },
        ],
        googleMapQuery: "Chinatown,Vancouver,BC,Canada",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d-123.1058197!3d49.2801149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717a491aa187%3A0x4cd3d8c1acdbacba!2sChinatown!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr",
      },
      {
        type: "tourist-spot",
        id: "juneau",
        title: "[관광정보] 주노 (JUNEAU)",
        images: [
          "/sectrion6/day4/Juneau_1.webp",
          "/sectrion6/day4/Juneau_2.webp",
          "/sectrion6/day4/Juneau_3.webp",
          "/sectrion6/day4/Juneau_4.webp",
          "/sectrion6/day4/Juneau_5.webp",
          "/sectrion6/day4/Juneau_6.webp",
        ],
        descriptions: [
          "알래스카의 주도, 주노.",
          "빙하와 산, 바다가 어우러진 주노는 도로로 접근할 수 없는 미국 유일의 주도입니다. 1880년 금광이 발견되면서 형성된 이 도시는 웅장한 자연경관 속에 자리 잡고 있습니다.",
          "멘덴홀 빙하(Mendenhall Glacier)는 주노에서 가장 인기 있는 관광지로, 약 19km 길이의 거대한 빙하를 가까이에서 감상할 수 있습니다. 혹등고래 관찰 투어, 연어가 거슬러 오르는 계곡, 그리고 독수리가 서식하는 원시림까지 알래스카의 대자연을 가장 가까이에서 체험할 수 있는 곳입니다.",
        ],
        infoTable: [
          { label: "도시", value: "알래스카 주노 (Juneau, Alaska)" },
          { label: "주소", value: "" },
          { label: "인구", value: "약 32,000명" },
          { label: "주요 관광지", value: "멘덴홀 빙하, 트레이시 암, 고래 관찰" },
          { label: "기후", value: "8월 평균 13°C (서늘, 비 잦음)" },
        ],
        googleMapQuery: "Juneau,Alaska,USA",
        googleMapEmbed: "https://maps.google.com/maps?q=58.3004933,-134.4201306&z=11&hl=ko&output=embed",
      },
      {
        type: "tourist-spot",
        id: "skagway",
        title: "[관광정보] 스캐그웨이 (SKAGWAY)",
        images: [
          "/sectrion6/day5/Skagway_1.webp",
          "/sectrion6/day5/Skagway_2.webp",
          "/sectrion6/day5/Skagway_3.webp",
          "/sectrion6/day5/Skagway_4.webp",
          "/sectrion6/day5/Skagway_5.webp",
          "/sectrion6/day5/Skagway_6.webp",
        ],
        descriptions: [
          "골드러시의 관문, 스캐그웨이.",
          "1897년 클론다이크 골드러시 당시 수만 명의 금 채굴꾼들이 이 작은 항구 마을을 거쳐 유콘으로 향했습니다. 현재 인구 약 1,200명의 소도시이지만, 브로드웨이 거리에 늘어선 19세기 건물들은 국립역사지구로 보존되어 당시의 분위기를 생생하게 전해줍니다.",
          "화이트패스 & 유콘 루트 철도는 1898년에 건설된 협궤 철도로, 해발 873m의 화이트패스 정상까지 깎아지른 절벽과 폭포, 빙하 계곡을 지나는 세계적으로 유명한 관광 열차입니다.",
        ],
        infoTable: [
          { label: "도시", value: "알래스카 스캐그웨이 (Skagway, Alaska)" },
          { label: "주소", value: "" },
          { label: "인구", value: "약 1,200명" },
          { label: "주요 관광지", value: "화이트패스 철도, 브로드웨이 역사지구, 유콘 현수교" },
          { label: "기후", value: "8월 평균 12°C (서늘, 비 잦음)" },
        ],
        googleMapQuery: "Skagway,Alaska,USA",
        googleMapEmbed: "https://maps.google.com/maps?q=59.4583,-135.3145&z=14&hl=ko&output=embed",
      },
      {
        type: "tourist-spot",
        id: "endicottarm",
        title: "[관광정보] 엔디캇 암 (ENDICOTT ARM)",
        images: [
          "/sectrion6/day6/endicott_arm_1.webp",
          "/sectrion6/day6/endicott_arm_2.webp",
          "/sectrion6/day6/endicott_arm_3.webp",
          "/sectrion6/day6/endicott_arm_4.webp",
        ],
        descriptions: [
          "알래스카의 숨겨진 보석, 엔디캇 암.",
          "엔디캇 암은 알래스카 남동부에 위치한 약 50km 길이의 장대한 피오르 수로입니다. 수로 끝에는 도스 빙하(Dawes Glacier)가 자리하고 있으며, 거대한 빙벽에서 떨어져 나온 유빙들이 푸른 바다 위를 떠다니는 장관을 연출합니다.",
          "크루즈 선박은 이 좁은 수로를 천천히 항해하며, 승객들은 데크에서 눈앞에 펼쳐지는 빙하와 야생동물(혹등고래, 물개, 대머리 독수리 등)을 가까이서 관찰할 수 있습니다.",
          "※ 크루즈에서 하선하지 않고 배 위에서 관람하는 일정입니다.",
        ],
        infoTable: [
          { label: "위치", value: "알래스카 남동부 엔디캇 암 (Endicott Arm, Alaska)" },
          { label: "주소", value: "" },
          { label: "주요 볼거리", value: "도스 빙하, 피오르 절벽, 유빙, 야생동물" },
          { label: "관람 방식", value: "하선 없이 선상 관람 (Scenic Cruising)" },
          { label: "기후", value: "8월 평균 10°C (바람이 강할 수 있음)" },
        ],
        googleMapQuery: "Endicott+Arm,Alaska,USA",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80000!2d-133.43!3d57.675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540468f16ef846e5%3A0x3e66b7d739fa3d0!2sEndicott%20Arm!5e0!3m2!1sko!2skr",
      },
      {
        type: "tourist-spot",
        id: "ketchikan",
        title: "[관광정보] 케치칸 (KETCHIKAN)",
        images: [
          "/sectrion6/day7/Ketchikan_1.webp",
          "/sectrion6/day7/Ketchikan_2.webp",
          "/sectrion6/day7/Ketchikan_3.webp",
          "/sectrion6/day7/Ketchikan_4.webp",
        ],
        descriptions: [
          "알래스카의 첫 번째 도시, 케치칸.",
          "알래스카 남동부 레빌라기게도 섬에 자리한 케치칸은 '세계 연어의 수도(Salmon Capital of the World)'로 불립니다. 매년 여름이면 수백만 마리의 연어가 크리크 거리 아래 개울을 거슬러 올라가는 장관을 눈앞에서 감상할 수 있습니다.",
          "세계 최대 규모의 온대 우림인 통가스 국립공원이 도시를 감싸고 있으며, 틀링깃(Tlingit) 원주민의 문화를 간직한 토템폴 유산센터와 색색의 수상 가옥이 늘어선 크리크 거리는 케치칸의 대표 명소입니다.",
        ],
        infoTable: [
          { label: "도시", value: "알래스카 케치칸 (Ketchikan, Alaska)" },
          { label: "주소", value: "" },
          { label: "인구", value: "약 8,200명" },
          { label: "주요 관광지", value: "크리크 거리, 토템폴 유산센터, 통가스 국립공원" },
          { label: "기후", value: "8월 평균 14°C (온화, 비 잦음)" },
        ],
        googleMapQuery: "Ketchikan,Alaska,USA",
        googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20000!2d-131.6461!3d55.342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x540198773a045391%3A0x6ea09e3c5e3b6c0a!2sKetchikan%2C%20AK%2C%20USA!5e0!3m2!1sko!2skr",
      },

      // Shore Excursion Modals
      {
        type: "shore-excursion",
        id: "shoreexcursion",
        title: "주노(Juneau) 추천 기항지 선택 관광",
        intro: "본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 영어 가이드로 진행됩니다.",
        tours: [
          {
            name: "멘덴홀 빙하 & 혹등고래 관찰 투어",
            tourCode: "JNU-630",
            duration: "약 5시간 30분",
            price: "성인 $269.95부터~",
            highlight: "주노의 상징인 멘덴홀 빙하를 감상하고, 소형 선박에 탑승해 알래스카 야생 혹등고래를 찾아 나서는 베스트셀러 투어입니다.",
            note: "바닷바람을 막아줄 따뜻한 겉옷 준비가 필수이며, 12세 미만 아동은 반드시 보호자와 동반해야 합니다.",
          },
          {
            name: "마운트 로버츠 트램웨이 자유 투어",
            tourCode: "JNU-140",
            duration: "약 1시간 30분",
            price: "성인 $63.00부터~",
            highlight: "케이블카(트램)를 타고 산에 올라 주노 시내와 바다의 탁 트인 파노라마 전경을 한눈에 담아보세요. 정상에 도착한 후에는 맑은 공기를 마시며 숲길을 따라 가벼운 자유 트레킹을 즐기실 수 있습니다.",
          },
          {
            name: "멘덴홀 빙하 & 알래스카 연어 바비큐 특식",
            tourCode: "JNU-120",
            duration: "약 4시간 30분",
            price: "성인 $179.95부터~",
            highlight: "웅장한 멘덴홀 빙하 방문과 더불어, 아름다운 야외 숲속 레스토랑에서 갓 구워낸 자연산 알래스카 연어와 치킨 바비큐를 무제한으로 맛볼 수 있는 오감 만족 프로그램입니다.",
            note: "식사 후 라이브 음악과 함께 주변 생태계를 산책하는 여유로운 시간이 주어집니다. 야외 활동을 위한 따뜻한 재킷을 준비해 주세요.",
          },
        ],
        notices: [
          "안내된 투어 요금 및 세부 일정은 현지 기상 상황이나 선사 사정에 따라 사전 예고 없이 변동될 수 있습니다.",
          "인기 프로그램은 조기 마감될 수 있으므로, 출발 전 프린세스 크루즈 공식 홈페이지에 접속하여 개별 신용카드로 사전 예약하시는 것을 권장합니다.",
        ],
      },
      {
        type: "shore-excursion",
        id: "shoreexcursion_skagway",
        title: "스캐그웨이(Skagway) 추천 기항지 선택 관광",
        intro: "본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 영어 가이드로 진행됩니다.",
        tours: [
          {
            name: "화이트 패스 산악 경관 열차 투어 (White Pass Scenic Railway)",
            tourCode: "SGY-200",
            duration: "약 2시간 40분",
            price: "성인 $159.95부터~",
            highlight: "19세기 골드러시 시대의 향수를 간직한 클래식 산악 열차에 탑승해 스캐그웨이의 경이로운 대자연 속으로 들어갑니다. 해발 900m(약 3,000피트)가 넘는 험준한 산맥을 가로지르며 깎아지른 절벽과 압도적인 파노라마 절경을 감상하실 수 있습니다.",
          },
          {
            name: "헬기 빙하 비행 & 알래스칸 허스키 개썰매 캠프 (Dog Sledding & Glacier Helicopter)",
            tourCode: "SGY-840",
            duration: "약 2시간",
            price: "성인 $749.95부터~",
            highlight: "헬리콥터를 타고 거대한 빙하 위를 비행하며 알래스카의 환상적인 풍광을 눈에 담는 럭셔리 투어입니다. 이후 약 300여 마리의 늠름한 알래스칸 허스키가 생활하는 눈 덮인 베이스캠프에 직접 착륙하여 잊지 못할 특별한 교감을 나눕니다.",
            note: "탑승자 체중이 110kg(250lbs) 이상일 경우 안전 및 헬기 하중 규정상 추가 요금이 발생합니다. 13세 미만 아동은 반드시 성인 보호자와 동행해야 하며, 현지 기상 악화 시 안전을 위해 헬기 운항이 취소될 수 있습니다.",
          },
        ],
        notices: [
          "안내된 투어 요금 및 세부 일정은 현지 기상 상황이나 선사 사정에 따라 사전 예고 없이 변동될 수 있습니다.",
          "인기 프로그램은 조기 마감될 수 있으므로, 출발 전 프린세스 크루즈 공식 홈페이지에 접속하여 개별 신용카드로 사전 예약하시는 것을 권장합니다.",
        ],
      },
      {
        type: "shore-excursion",
        id: "shoreexcursion_ketchikan",
        title: "케치칸(Ketchikan) 추천 기항지 선택 관광",
        intro: "본 프로그램은 프린세스 크루즈 선사에서 직접 주관하며, 전 세계 승객들과 함께 영어 가이드로 진행됩니다.",
        tours: [
          {
            name: "자연 탐험 & 던지니스 게 만찬 (Wilderness Exploration & Crab Feast)",
            tourCode: "KTN-650",
            duration: "약 4시간",
            price: "성인 $239.95부터~",
            highlight: "세계 최대 규모의 온대 우림인 통가스 국립공원을 거닐며 알래스카의 다채로운 동식물과 대자연을 탐험합니다. 상쾌한 산책 후에는 조지 인렛 롯지로 이동해 푸짐한 던지니스 게 요리를 마음껏 즐기실 수 있습니다.",
          },
          {
            name: "수륙양용 덕 투어 (Town & Harbor by Duck)",
            tourCode: "KTN-660",
            duration: "약 1시간 30분",
            price: "성인 $109.95부터~",
            highlight: "미국 해안경비대의 인증을 받은 수륙양용차 '덕(Duck)'에 탑승해 육지와 바다를 넘나들며 케치칸을 둘러봅니다. 웨일 파크, 연어 길(Salmon ladder), 크리크 거리의 옛이야기를 만나고, 통조림 공장과 수상비행장 등 항구의 활기찬 풍경까지 한 번에 감상할 수 있습니다.",
          },
          {
            name: "알래스카 럼버잭 쇼 & 게 만찬 (Lumberjack Show & Crab Feast)",
            tourCode: "KTN-315",
            duration: "약 4시간",
            price: "성인 $144.95부터~",
            highlight: "도끼 던지기, 톱질, 나무 타기 등 알래스카 전통 벌목꾼들의 박진감 넘치는 12가지 경연이 펼쳐지는 명물 '럼버잭 쇼'를 관람합니다. 흥미진진한 공연을 즐긴 뒤, 아름다운 전망의 롯지에서 풍성한 게 요리 만찬이 이어집니다.",
          },
        ],
        notices: [
          "안내된 투어 요금 및 세부 일정은 현지 기상 상황이나 선사 사정에 따라 사전 예고 없이 변동될 수 있습니다.",
          "인기 프로그램은 조기 마감될 수 있으므로, 출발 전 프린세스 크루즈 공식 홈페이지에 접속하여 개별 신용카드로 사전 예약하시는 것을 권장합니다.",
        ],
      },

      // Ship Info Modal
      {
        type: "ship-info",
        id: "emeraldprincess",
        title: "에메랄드 프린세스 (EMERALD PRINCESS)",
        images: [
          "/sectrion6/day2/emerald_princess_2.webp",
          "/sectrion6/day2/emerald_princess_3.webp",
          "/sectrion6/day2/emerald_princess_4.webp",
          "/sectrion6/day2/emerald_princess_6.webp",
          "/sectrion6/day2/emerald_princess_1.webp",
          "/sectrion6/day2/emerald_princess_5.webp",
        ],
        descriptions: [
          "프린세스 크루즈의 대표 선박, 에메랄드 프린세스.",
          "총 톤수 113,561톤, 전장 290m, 최대 3,114명의 승객을 수용하는 대형 크루즈 선박입니다. 2007년 취항한 이래 전 세계의 다양한 항로를 운항하고 있습니다.",
          "선내에는 다양한 레스토랑과 바, 카지노, 로터스 스파, 수영장 4개, 대극장 'Princess Theatre', 미니 골프장, 조깅 트랙 등 풍부한 부대시설이 갖추어져 있어 항해 중에도 다채로운 즐거움을 누리실 수 있습니다.",
        ],
        infoTable: [
          { label: "선사", value: "프린세스 크루즈 (Princess Cruises)" },
          { label: "취항", value: "2007년" },
          { label: "총 톤수", value: "113,561톤" },
          { label: "승객 정원", value: "최대 3,114명" },
          { label: "승무원", value: "약 1,200명" },
          { label: "전장", value: "290m / 19층 (데크 기준)" },
        ],
      },

      // Cruise At Sea Modals
      {
        type: "cruise-at-sea",
        id: "cruiseinterior",
        title: "에메랄드 프린세스 전일 해상",
        images: [
          "/sectrion6/day3/day3_5.avif",
          "/sectrion6/day3/day3_8.avif",
          "/sectrion6/day3/day3_1.webp",
          "/sectrion6/day3/day3_4.webp",
          "/sectrion6/day3/day3_7.avif",
          "/sectrion6/day3/day3_2.webp",
          "/sectrion6/day3/day3_3.webp",
          "/sectrion6/day3/day3_6.webp",
        ],
        descriptions: [
          "오늘은 종일 해상에서 보내는 날입니다. 에메랄드 프린세스의 다양한 시설을 마음껏 즐겨보세요.",
          "수영장 4개와 자쿠지, 로터스 스파에서 여유를 만끽하고, 대극장 'Princess Theatre'에서 브로드웨이 스타일의 공연을 관람하실 수 있습니다. 카지노에서 행운을 시험해보거나, 미니 골프와 조깅 트랙에서 상쾌한 시간을 보내보세요.",
          "메인 다이닝룸과 뷔페 레스토랑에서 세계 각국의 요리를 즐기시고, 야외 데크에서 광활한 태평양의 풍경을 감상하며 특별한 하루를 보내시기 바랍니다.",
        ],
        infoTable: [
          { label: "선박", value: "에메랄드 프린세스 (Emerald Princess)" },
          { label: "주요 시설", value: "수영장, 스파, 카지노, 극장, 미니 골프, 조깅 트랙" },
          { label: "식사", value: "메인 다이닝룸, 뷔페, 피자 바, 아이스크림 바 등" },
          { label: "드레스코드", value: "캐주얼 (스마트 캐주얼 권장)" },
        ],
      },
      {
        type: "cruise-at-sea",
        id: "cruiseatsea",
        title: "에메랄드 프린세스 전일 해상",
        images: [
          "/sectrion6/day3/day3_5.avif",
          "/sectrion6/day3/day3_8.avif",
          "/sectrion6/day3/day3_1.webp",
          "/sectrion6/day3/day3_4.webp",
          "/sectrion6/day3/day3_7.avif",
          "/sectrion6/day3/day3_2.webp",
          "/sectrion6/day3/day3_3.webp",
          "/sectrion6/day3/day3_6.webp",
        ],
        descriptions: [
          "선내 자유시간: 수준 높은 무료 공연 관람 및 다채로운 부대시설 이용",
        ],
        bulletPoints: [
          "프리미엄 스파에서 여행의 피로를 부드럽게 풀어보세요.",
          "탁 트인 야외 수영장에서 일광욕을 즐기며 여유롭게 책을 읽어보세요.",
          "오션뷰 조깅 트랙을 달리거나 최신식 피트니스 센터에서 상쾌하게 땀을 흘려보세요.",
          "따뜻한 자쿠지에 몸을 담그고 와인 한 잔의 여유를 만끽해 보세요.",
          "요가, 댄스 강좌, 빙고 등 매일 다채롭게 열리는 선내 프로그램에 참여해 보세요.",
        ],
        closingText: "잔잔한 바다 한가운데서 누리는 이 모든 휴식이 크루즈 여행의 진정한 매력입니다.",
        infoTable: [
          { label: "선박", value: "에메랄드 프린세스 (Emerald Princess)" },
          { label: "주요 시설", value: "수영장, 스파, 카지노, 극장, 미니 골프, 조깅 트랙" },
          { label: "식사", value: "메인 다이닝룸, 뷔페, 피자 바, 아이스크림 바 등" },
          { label: "드레스코드", value: "캐주얼 (스마트 캐주얼 권장)" },
        ],
      },

      // Info Modals
      {
        type: "info",
        id: "boarding",
        title: "에메랄드 프린세스호 승선 수속 안내",
        sections: [
          {
            heading: "1. 수하물 위탁 (Luggage Drop-off)",
            items: [
              { text: "터미널 도착 후 큰 수하물을 위탁하시면 배정된 선실 앞으로 안전하게 배달됩니다." },
              { text: "여권, 승선 서류, 귀중품 및 파손 주의 물품은 반드시 직접 소지하고 탑승해 주세요." },
            ],
          },
          {
            heading: "2. 승선 수속 (Check-in & Boarding)",
            items: [
              { text: "준비물: 여권, 크루즈 승선 서류, 해외 결제 가능한 신용카드" },
              { text: "위탁 수속 후 체크인 카운터에서 본인 확인 및 수속을 진행합니다." },
              { text: "모든 탑승 수속은 크루즈 출발 시간 2시간 전까지 반드시 완료되어야 합니다." },
              { text: "선실 내에는 신분증, 결제 수단, 객실 키 역할을 하는 '승선 카드'가 비치되어 있습니다. (분실 시 안내 데스크에서 재발급 가능)" },
            ],
          },
          {
            heading: "3. 승선 후 유의사항 (After Boarding)",
            items: [
              { text: "필수 안전 교육(Safety Drill): 승선 후 안내에 따라 지정된 장소에서 위급 상황 대처 교육을 이수해야 합니다." },
              { text: "기항지 선택 관광: 선사에서 운영하는 기항지 투어(영어 진행)는 조기 마감될 수 있으므로 승선 첫날 신청하시기를 권장합니다. (변경/취소 시 수수료 발생 가능)" },
            ],
          },
        ],
      },
      {
        type: "info",
        id: "disembarkation",
        title: "크루즈 하선 수속 안내",
        sections: [
          {
            heading: "1. 선내 결제 비용 정산 (Settlement)",
            items: [
              { text: "하선 전날 저녁 또는 당일 아침, 선실로 상세 결제 내역서가 배달됩니다.", bold: "내역 확인:" },
              { text: "승선 시 등록한 신용카드로 자동 청구되므로, 내역에 이상이 없다면 별도의 하선 수속 없이 편안하게 대기하시면 됩니다. (현금 결제 희망 시 미화 달러 USD 사용 가능)", bold: "결제 방식:" },
              { text: "정산서를 받지 못하셨거나 청구 내역에 문의가 있으신 경우, 승선 카드를 지참하여 고객 안내 데스크(Guest Relations)를 방문해 주세요.", bold: "안내 데스크:" },
            ],
          },
          {
            heading: "2. 하선 전 수하물 위탁 (Luggage Drop-off)",
            items: [
              { text: "하선 전날 선실로 전달되는 '전용 수하물 태그'를 가방에 부착한 뒤, 선사가 지정한 시간까지 선실 문 밖에 내어주세요. 위탁하신 짐은 하선 후 크루즈 터미널에서 찾으실 수 있습니다.", bold: "수하물 내놓기:" },
              { text: "주의 사항: 하선 당일 입을 옷, 여권, 승선 카드, 신용카드, 귀중품 및 상비약 등은 절대 위탁 수하물에 넣지 마시고 반드시 본인이 직접 소지(핸드캐리)하여 하선해 주시기 바랍니다.", isWarning: true },
            ],
          },
        ],
      },
    ],
  },

  // ─── Pricing ───
  pricing: {
    labels: {
      title: "상품 가격",
      roomSelect: "객실 선택",
      adult: "성인",
      adultAge: "(만 12세 이상)",
      child: "소아",
      childAge: "(만 12세 미만)",
      infant: "유아",
      infantAge: "(만 2세 미만)",
      totalPrice: "총 결제 예정 금액",
      surchargeNotice: "유류할증료&제세공과금 포함",
    },
    roomTabs: [
      { key: "inside", label: "인사이드", prices: { adult: "5,790,000", child: "5,790,000", infant: "5,790,000" } },
      { key: "oceanview", label: "오션뷰", prices: { adult: "5,990,000", child: "5,990,000", infant: "5,990,000" } },
      { key: "balcony", label: "발코니", prices: { adult: "6,490,000", child: "6,490,000", infant: "6,490,000" } },
    ],
    personOptions: [0, 1, 2, 3, 4],
    fuelSurcharge: 123000,
    fuelSurchargeText: "유류할증료 123,000원/제세공과금 0원 포함",
    localGuideFee: { amount: 110, currency: "EUR" },
    crewTip: {
      adult: { amount: 77, currency: "EUR" },
      child: { amount: 38.5, currency: "EUR" },
    },
    notices: [
      "유류할증료 123,000원/제세공과금 0원 포함",
      "유류할증료는 유가와 환율에 따라 수시로 변동 될 수 있습니다.",
    ],
    infoSections: [
      {
        title: "객실 이용 안내",
        items: [
          "모든 상품가는 성인 2인 1실 투숙 기준입니다.",
          "1인 객실 사용 시: 독실 추가 요금이 발생합니다. (선실 등급별 상이 / 별도 문의)",
          "3~4인실(다인실) 사용 시: 실시간 잔여 객실 확인이 필요하며, 취소 시 선사 규정에 따른 별도 페널티가 발생할 수 있습니다.",
        ],
      },
      {
        title: "소아 및 유아 안내",
        items: [
          "소아/유아 요금은 성인 2인과 같은 방을 사용하는 조건입니다. (조건 미충족 시 아동 추가 요금 발생)",
          "여행 기간 중 만 2세가 되는 경우 요금 별도 문의",
          "유아는 항공 및 기항지 투어 차량 이용 시 단독 좌석이 배정되지 않습니다.",
        ],
      },
      {
        title: "경비 및 팁(Tip) 안내",
        items: [
          "선내 승무원 경비(필수): 성인 77유로 / 소아 38.5유로",
          "현지 진행비(인솔자/기사/가이드): 110유로",
          "매너 팁: 자율적 의사로 지불하며, 미지급에 따른 불이익은 전혀 없습니다.",
        ],
      },
      {
        title: "요금 변동 및 기타",
        items: [
          "유류할증료 및 제세공과금은 유가와 환율 변동에 따라 변경될 수 있습니다.",
          "개별 항공권 발권 또는 현지 합류 고객은 일정에 따라 요금이 다르므로 별도 문의 바랍니다.",
        ],
      },
    ],
  },

  // ─── Product Info ───
  productInfo: {
    labels: {
      includedTitle: "포함사항",
      excludedTitle: "불포함사항",
    },
    title: "상품 안내",
    subtitle: "포함 내역과 별도 지출 항목을 확인해 보세요",
    includedItems: [
      "대한항공 왕복 항공료(이코노미), 공항-터미널 픽드랍",
      "에메랄드 프린세스 크루즈(인사이드, 오션뷰, 발코니)",
      "밴쿠버 1박 호텔 및 시내 관광 (입장료, 전용 차량, 한국인 기사 가이드 등)",
      "각 기항지 선사 투어 포함 (총 3곳: 주노/스캐그웨이/케치칸)",
      "크루즈 인솔자 동행, 1억 원 여행자 보험",
      "미국/캐나다 비자 발급 비용",
    ],
    excludedItems: [
      "기타 선내 개인 비용 (선내 음료, 주류, 면세점, 카지노, 인터넷, 세탁비 등)",
      "크루즈 선내 팁(선내 봉사료): 77유로 (금액 변동 가능, 하선 시 결제)",
      "공동 경비: USD 100 (고객 중 총무 관리)",
    ],
  },

  // ─── Trip Summary ───
  tripSummary: {
    labels: {
      title: "규정 및 유의사항",
      subtitle: "예약 전 꼭 확인해야 할 필수 사항입니다",
      cancellationTitle: "취소 위약금 규정",
      noticeTitle: "중요 안내사항",
    },
    cancellationItems: [
      "예약금 100만 원(환불 불가)",
      "출발일로부터 89일~60일 전 취소 시 신청금(150만 원) 위약금 부과",
      "출발일로부터 59일~30일 전 취소 시 총 여행 요금의 60% 위약금 부과",
      "출발일로부터 29일~15일 전 취소 시 총 여행 요금의 75% 위약금 부과",
      "출발일로부터 14일~출발 당일 취소 시 총 여행 요금의 100% 위약금 부과",
    ],
    importantNotices: [
      { text: "크루즈 선사는 엄격한 취소료 규정을 적용하고 있으며, 이 점 필히 양지하여 주시기 바랍니다." },
      { text: "'총 경비'는 할인된 상품 가격이 아닌 정상 상품 가격을 의미합니다." },
      { text: "No Show에 대한 환불은 적용되지 않으며, 크루즈 서류 발행 이후 모든 예약 변경에 대해 비용이 부과됩니다." },
      { text: "연휴, 연말, 휴가 기간 등에는 특별 취소료 규정이 적용되며, 예약 요청 시 별도 고지합니다." },
      { text: "여행자의 중대한 질병이나 부상, 천재지변으로 인한 취소 시에도 크루즈 취소료 규정이 적용됩니다." },
      {
        text: "취소 접수는 업무 시간 내 유선 접수만 가능합니다.",
        subItems: [
          "업무 시간: 월~금 09:30~16:30",
          "토/일 및 국가 공휴일 제외",
        ],
      },
      {
        text: "고객님들의 편안한 기항지 관광을 위해 대부분 선사 프로그램이 아닌, 당사에서 직접 준비하여 여행 프로그램을 진행합니다.",
        subItems: [
          "간혹 천재지변, 풍랑, 날씨에 따라 선사가 입/출항을 못 하는 경우가 발생할 수 있습니다.",
          "이 경우 선사 권한으로 현장에서 일정이 변경될 수 있습니다.",
          "따라서 기항지 관광에 대한 환불 처리는 불가하오니, 이 점 양해 부탁드립니다.",
        ],
      },
      {
        text: "항공사의 문제로 수하물 미도착 및 항공 연착으로 인해 항공편이 변경되는 경우가 있을 수 있습니다.",
        subItems: [
          "이 경우 여행사의 문제가 아니고 항공사의 문제로 발행되기 때문에, 여행사 보상 처리가 아닌 항공사에 보상 처리를 요청하여 해결하셔야 합니다.",
        ],
      },
    ],
  },

  // ─── Checklist ───
  checklist: {
    labels: {
      title: "준비물",
      subtitle: "쾌적한 크루즈 여행을 위해 미리 챙겨주세요",
    },
    categories: [
      {
        title: "서류 / 결제",
        items: [
          "여권 (6개월 이상 잔여기간)",
          "여권 분실 시 크루즈 탑승 불가 (긴급여권 X)",
          "항공권 / 크루즈 티켓 / 짐택 / 호텔 바우처 / 여행자보험 등은 여행사 준비",
          "신용카드는 본인 또는 동반자 명의 권장",
          "해외 사용 신용카드 (비자 / 마스터 / 다이너스 / 아멕스 등)",
          "카드가 없으면 현금 보증금(약 300~500달러 또는 유로)으로 대체 가능",
        ],
      },
      {
        title: "의상 / 개인용품",
        items: [
          "남: 셔츠 정장·넥타이 또는 턱시도",
          "여: 원피스 / 블라우스 (한복 유용)",
          "신발 (캐주얼화 / 운동화 / 슬리퍼·크록스)",
          "썬크림, 모자, 화장품, 빗, 면도기",
          "선사 정책에 따라 갈라 디너가 있을 수 있음",
          "선내 18~20도 온도 유지",
          "수영장 / 피트니스 및 도보 일정 대비",
          "등산복 / 등산화는 자제 권장",
          "우천 대비 우산 또는 우비",
        ],
      },
      {
        title: "환전",
        items: [
          "현지 화폐",
          "(카지노 이용 시) 미국 달러",
          "한국 원화는 사용 불가",
        ],
      },
      {
        title: "음식 / 간식",
        items: [
          "사탕, 과자 등 간식",
          "(취향) 튜브 고추장",
          "(취향) 컵라면",
          "(취향) 김치 (통조림 / 볶음김치)",
          "(취향) 소주 (종이팩)",
          "개인 취향에 따라 준비",
          "선내 반입 규정은 선사 기준 확인 필요",
        ],
      },
      {
        title: "가방 / 위생",
        items: [
          "앞으로 메는 소형 가방 (소매치기 예방 목적 권장)",
          "치약 / 칫솔",
          "위생팩",
          "텀블러 (물 담는 용기)",
          "선사 제공: 샴푸 / 컨디셔너 / 바디워시 / 수건",
        ],
      },
      {
        title: "상비약",
        items: [
          "소화제, 멀미약, 두통약, 감기약, 해열제, 상처연고, 밴드",
          "개인 복용약은 캐리어 / 휴대품에 분산해 넉넉히 준비 권장",
        ],
      },
      {
        title: "수화물",
        items: [
          "권장 사항: 일반적으로 1인당 2개의 위탁 수하물을 권장합니다",
          "무게: 개당 약 23kg(50lbs)을 초과하지 않는 것이 좋습니다 (승무원이 직접 운반하기 때문에 안전상의 이유로 제한)",
          "크기: 객실 내 침대 밑이나 옷장에 보관해야 하므로 너무 큰 하드케이스보다는 표준 사이즈가 유리합니다",
        ],
      },
      {
        title: "통신",
        items: [
          "해외 로밍 신청",
          "출국 전 데이터 통신 차단",
          "통신사 연락처: SK 02-6343-9000 / KT 02-2190-0901 / LGT 02-3416-7010",
          "선내 와이파이 별도 신청 (룸당 1인 권장)",
        ],
      },
      {
        title: "기타 / 주의",
        items: [
          "접는 천가방 또는 장바구니 (마지막 날 짐 꾸리기 용도로 유용)",
          "(유료) 크루즈 인터넷",
          "(유료) 주류 패키지",
          "전기 110V·220V",
          "드라이 / 커피포트는 있으나, 다른 전기제품 반입 불가",
        ],
      },
      {
        title: "반입금지",
        items: [
          "술, 진공포장되지 않은 음식물, 폭발물 / 독성물질 / 인화성 물질, 도검류, 총기류, 공구류 등",
          "주류 반입은 엄격히 금지 (1병까지는 가능)",
        ],
      },
    ],
  },

  // ─── Footer ───
  footer: {
    companyName: "한세계여행사",
    description: "꿈꾸던 크루즈 여행, 에메랄드 프린세스와 함께하세요. 최고의 서비스와 잊지 못할 추억을 약속드립니다.",
    logoPath: "/header/KakaoTalk_20260220_105453762_02 12.png",
    copyright: "© 2026 Emerald Princess Cruise. All rights reserved.",
    phone: "1588-0000",
    email: "contact@cruise.com",
    hours: "평일 09:00 - 18:00",
    address: "서울특별시 중구 세종대로 123",
    quickLinks: [
      { label: "크루즈 소개", href: "#intro" },
      { label: "시설 안내", href: "#facilities" },
      { label: "운항 일정", href: "#schedule" },
      { label: "기항지 관광", href: "#tourist-spots" },
    ],
  },

  // ─── Mobile Bottom Bar ───
  mobileBottomBar: {
    kakaoTemplate: (adults, children, infants, totalPrice) => {
      const parts = [];
      if (adults > 0) parts.push(`성인 ${adults}명`);
      if (children > 0) parts.push(`소아 ${children}명`);
      if (infants > 0) parts.push(`유아 ${infants}명`);
      return `${parts.join(", ")}, 총 예상 비용 ${totalPrice} 견적 문의합니다.`;
    },
    phoneNumber: "02-000-0000",
    kakaoUrl: "https://open.kakao.com/",
    businessHours: "평일 09:00 - 18:00",
    calculatorText: "요금 계산기",
    inquiryText: "문의하기",
    inquiryModalTitle: "문의하기",
    copyButtonText: "복사하기",
    copyCompleteText: "복사 완료!",
    kakaoButtonText: "카톡 문의",
    guideText: "일정표 잘 보셨나요? 더 궁금하신 점이나 인원별 상세 견적은 지금 보고 계신 카톡으로 편하게 말씀해 주세요!",
    processTitle: "[예약 프로세스 요약]",
    processFlow: "금액 확인 ➔ 카톡 문의 ➔ 맞춤 상담 ➔ 예약 확정"
  },
};
