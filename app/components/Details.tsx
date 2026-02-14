"use client";

import { useEffect, useRef } from "react";

export default function Details() {
    const playerRef = useRef<YT.Player | null>(null);

    useEffect(() => {
        const initPlayer = () => {
            playerRef.current = new window.YT.Player("details-yt-player", {
                width: "100%",
                height: "100%",
                videoId: "5wMQNxrwxM0",
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    start: 492,
                    end: 516,
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                },
                events: {
                    onReady: (event: YT.PlayerStateEvent) => {
                        (event.target as any).setPlaybackRate(1.25);
                        event.target.playVideo();
                    },
                    onStateChange: (event: YT.OnStateChangeEvent) => {
                        if (event.data === YT.PlayerState.ENDED) {
                            playerRef.current?.seekTo(492, true);
                            playerRef.current?.playVideo();
                        }
                    },
                },
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayer();
        } else {
            const prev = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                prev?.();
                initPlayer();
            };
            if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
                const tag = document.createElement("script");
                tag.src = "https://www.youtube.com/iframe_api";
                document.head.appendChild(tag);
            }
        }

        return () => {
            playerRef.current?.destroy();
            playerRef.current = null;
        };
    }, []);
    return (
        <>
            {/* Section 5 */}
            <section id="details" className="py-12 md:py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold leading-tight tracking-normal text-gray-900">
                                크루즈 제원
                            </h2>
                            <div className="mt-10 divide-y divide-gray-300 shadow-[0_-2px_0_0_#111827,0_2px_0_0_#111827] text-base md:text-lg">
                                <div className="grid grid-cols-2 gap-x-8 py-3">
                                    <div className="flex gap-2"><span className="text-gray-800">톤 수 :</span><span className="text-gray-800">113,561톤</span></div>
                                    <div className="flex gap-2"><span className="text-gray-800">길이 :</span><span className="text-gray-800">289.86m</span></div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 py-3">
                                    <div className="flex gap-2"><span className="text-gray-800">승무원 :</span><span className="text-gray-800">1,200명</span></div>
                                    <div className="flex gap-2"><span className="text-gray-800">높이 :</span><span className="text-gray-800">59.44m</span></div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 py-3">
                                    <div className="flex gap-2"><span className="text-gray-800">승객 정원 :</span><span className="text-gray-800">3,080명</span></div>
                                    <div className="flex gap-2"><span className="text-gray-800">규모 :</span><span className="text-gray-800">19층</span></div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 py-3">
                                    <div className="flex gap-2"><span className="text-gray-800">첫 항해 :</span><span className="text-gray-800">2007. 4. 11</span></div>
                                    <div className="flex gap-2"><span className="text-gray-800">객실 수 :</span><span className="text-gray-800">1,539개</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="overflow-hidden shadow-2xl border border-gray-200 bg-gray-100 aspect-video relative">
                                <div id="details-yt-player" className="absolute inset-0 w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
