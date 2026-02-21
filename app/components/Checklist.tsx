"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const checklistData = [
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
];

function AccordionItem({ section, index, openSet, toggle, isLast }: {
    section: typeof checklistData[number];
    index: number;
    openSet: Set<number>;
    toggle: (index: number) => void;
    isLast?: boolean;
}) {
    const isOpen = openSet.has(index);
    return (
        <div className={!isLast ? "border-b border-gray-200" : ""}>
            <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-4 px-5 md:px-6 text-left cursor-pointer group/item transition-colors hover:bg-gray-50"
            >
                <span className="text-base md:text-lg font-bold text-gray-800">
                    {section.title}
                </span>
                <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 text-gray-400 group-hover/item:text-gray-600 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className="overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                }}
            >
                <ul className="pb-5 px-5 md:px-6 space-y-2.5">
                    {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                            <span className="text-gray-400 flex-shrink-0 text-xs mt-1.5">●</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function MobileAccordionItem({ section, index, openSet, toggle, isLast }: {
    section: typeof checklistData[number];
    index: number;
    openSet: Set<number>;
    toggle: (index: number) => void;
    isLast?: boolean;
}) {
    const isOpen = openSet.has(index);
    return (
        <div className="bg-white border-t border-gray-300 overflow-hidden">
            <button
                onClick={() => toggle(index)}
                className="w-full border-b border-gray-300 px-5 py-3 flex items-center justify-between bg-gray-50"
            >
                <span className="font-bold text-gray-900 text-base">
                    {section.title}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <ul className={`px-5 py-5 space-y-2.5 ${isOpen ? "block" : "hidden"}`}>
                {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 leading-relaxed">
                        <span className="text-gray-400 flex-shrink-0">▣</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Checklist() {
    const [openSet, setOpenSet] = useState<Set<number>>(new Set());
    const mobileBtnAnchorRef = useRef<HTMLParagraphElement>(null);
    const mobileBtnRef = useRef<HTMLDivElement>(null);
    const mobileAccordionRef = useRef<HTMLDivElement>(null);

    const isAllOpen = openSet.size === checklistData.length;

    const toggle = (index: number) => {
        setOpenSet((prev) => {
            const next = new Set(prev);
            if (next.has(index)) next.delete(index);
            else next.add(index);
            return next;
        });
    };

    const toggleAll = () => {
        if (isAllOpen) {
            setOpenSet(new Set());
        } else {
            setOpenSet(new Set(checklistData.map((_, i) => i)));
        }
    };

    const toggleAllMobile = () => {
        if (isAllOpen) {
            setOpenSet(new Set());
            const section = mobileAccordionRef.current;
            if (section) {
                const headerHeight = 56;
                const offset = 12;
                const top = section.getBoundingClientRect().top + window.scrollY - headerHeight - offset;
                window.scrollTo({ top, behavior: "instant" });
            }
        } else {
            setOpenSet(new Set(checklistData.map((_, i) => i)));
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 768) return;
            const anchor = mobileBtnAnchorRef.current;
            const section = mobileAccordionRef.current;
            const btn = mobileBtnRef.current;
            if (!anchor || !section || !btn) return;

            const stickyTop = 68;
            const btnHeight = btn.offsetHeight;
            const anchorTop = anchor.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;

            if (anchorTop > stickyTop) {
                btn.style.position = 'fixed';
                btn.style.top = `${stickyTop}px`;
                btn.style.right = '16px';
                btn.style.bottom = 'auto';
                btn.style.opacity = '0';
                btn.style.pointerEvents = 'none';
            } else if (sectionBottom > stickyTop + btnHeight) {
                btn.style.position = 'fixed';
                btn.style.top = `${stickyTop}px`;
                btn.style.right = '16px';
                btn.style.bottom = 'auto';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            } else {
                btn.style.position = 'absolute';
                btn.style.top = 'auto';
                btn.style.right = '16px';
                btn.style.bottom = '0';
                btn.style.opacity = '1';
                btn.style.pointerEvents = 'auto';
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const leftItems = checklistData
        .map((section, index) => ({ section, index }))
        .filter((_, i) => i % 2 === 0);
    const rightItems = checklistData
        .map((section, index) => ({ section, index }))
        .filter((_, i) => i % 2 === 1);

    return (
        <section id="checklist" className="py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-0 md:px-6">
                <div className="text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight tracking-normal">
                        준비물
                    </h2>
                    <p ref={mobileBtnAnchorRef} className="mt-2 md:mt-3 text-base md:text-lg font-normal leading-relaxed text-gray-600">
                        쾌적한 크루즈 여행을 위해 미리 챙겨주세요
                    </p>
                </div>

                {/* 모바일: 개별 카드 아코디언 */}
                <div ref={mobileAccordionRef} className="mt-6 md:hidden max-w-5xl mx-auto grid grid-cols-1 gap-3 relative">
                    {/* 모바일: 모두펼침 버튼 (DOM 직접 조작) */}
                    <div ref={mobileBtnRef} className="md:hidden z-10" style={{ position: 'fixed', top: '68px', right: '16px', opacity: 0, pointerEvents: 'none' }}>
                        <button
                            onClick={toggleAllMobile}
                            className="bg-white border border-gray-300 text-gray-700 text-sm font-medium px-3 py-1.5 cursor-pointer flex items-center gap-1"
                        >
                            {isAllOpen ? "모두접기" : "모두펼침"}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isAllOpen ? "rotate-180" : ""}`} />
                        </button>
                    </div>
                    {checklistData.map((section, index) => (
                        <MobileAccordionItem key={index} section={section} index={index} openSet={openSet} toggle={toggle} isLast={index === checklistData.length - 1} />
                    ))}
                </div>

                {/* 데스크톱: 독립 2열 */}
                <div className="mt-10 max-w-5xl mx-auto hidden md:block relative">
                    <button
                        onClick={toggleAll}
                        className="absolute -top-8 right-0 text-sm md:text-base text-gray-500 hover:text-gray-700 transition-colors cursor-pointer flex items-center gap-1"
                    >
                        {isAllOpen ? "모두 접기" : "모두 펼침"}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isAllOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className="flex items-start gap-x-10">
                    {[leftItems, rightItems].map((columnItems, col) => (
                        <div key={col} className="flex-1 bg-white border border-gray-200 border-t-0 shadow-[0_-1px_0_0_black]">
                            {columnItems.map(({ section, index }, i) => (
                                <AccordionItem key={index} section={section} index={index} openSet={openSet} toggle={toggle} isLast={i === columnItems.length - 1} />
                            ))}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
