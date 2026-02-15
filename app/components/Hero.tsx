"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

declare global {
    interface Window {
        YT: typeof YT;
        onYouTubeIframeAPIReady: () => void;
    }
}

const VIDEO_ID = "5wMQNxrwxM0";
const CLIP_START = 112;
const CLIP_END = 127;

export default function Hero() {
    const desktopPlayerRef = useRef<YT.Player | null>(null);
    const mobilePlayerRef = useRef<YT.Player | null>(null);
    const [mobileVideoReady, setMobileVideoReady] = useState(false);

    useEffect(() => {
        const initPlayers = () => {
            new window.YT.Player("hero-yt-player", {
                videoId: VIDEO_ID,
                playerVars: {
                    autoplay: 1, mute: 1, controls: 0, showinfo: 0, rel: 0,
                    modestbranding: 1, playsinline: 1, start: CLIP_START, end: CLIP_END,
                    disablekb: 1, fs: 0, iv_load_policy: 3,
                },
                events: {
                    onReady: (event: YT.PlayerEvent) => {
                        desktopPlayerRef.current = event.target as unknown as YT.Player;
                    },
                    onStateChange: (event: YT.OnStateChangeEvent) => {
                        if (event.data === YT.PlayerState.ENDED) {
                            desktopPlayerRef.current?.seekTo(CLIP_START, true);
                            desktopPlayerRef.current?.playVideo();
                        }
                    },
                },
            });

            new window.YT.Player("hero-yt-player-mobile", {
                videoId: VIDEO_ID,
                playerVars: {
                    autoplay: 1, mute: 1, controls: 0, showinfo: 0, rel: 0,
                    modestbranding: 1, playsinline: 1, start: CLIP_START, end: CLIP_END,
                    disablekb: 1, fs: 0, iv_load_policy: 3,
                },
                events: {
                    onReady: (event: YT.PlayerEvent) => {
                        mobilePlayerRef.current = event.target as unknown as YT.Player;
                        (event.target as any).setPlaybackQuality("large");
                    },
                    onStateChange: (event: YT.OnStateChangeEvent) => {
                        if (event.data === YT.PlayerState.PLAYING) {
                            setMobileVideoReady(true);
                        }
                        if (event.data === YT.PlayerState.ENDED) {
                            mobilePlayerRef.current?.seekTo(CLIP_START, true);
                            mobilePlayerRef.current?.playVideo();
                        }
                    },
                },
            });
        };

        if (window.YT && window.YT.Player) {
            initPlayers();
        } else {
            const prev = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                prev?.();
                initPlayers();
            };
            if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
                const tag = document.createElement("script");
                tag.src = "https://www.youtube.com/iframe_api";
                document.head.appendChild(tag);
            }
        }

        return () => {
            desktopPlayerRef.current?.destroy();
            desktopPlayerRef.current = null;
            mobilePlayerRef.current?.destroy();
            mobilePlayerRef.current = null;
        };
    }, []);

    return (
        <div id="hero">
            {/* Mobile Hero */}
            <section className="md:hidden bg-gray-100 pt-14">
                <div className="px-4 pt-12 text-center">
                    <h1 className="text-[24px] font-bold leading-tight tracking-tight text-gray-900">
                        프린세스 크루즈 에메랄드호
                    </h1>
                    <p className="mt-2 text-base font-normal leading-relaxed text-gray-600">
                        알래스카 크루즈 2026년 08월 03일 출발<br />주요 일정과 기항지 정보를 지금 바로 확인하세요
                    </p>
                </div>

                {/* 16:9 Video Card */}
                <div className="mt-6 pb-12">
                    <div className="relative w-full aspect-video overflow-hidden shadow-lg bg-gray-200">
                        {!mobileVideoReady && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gray-200">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500 animate-bounce" />
                                </div>
                                <span className="text-base text-gray-500 tracking-wider">영상 로딩 중</span>
                            </div>
                        )}
                        <div id="hero-yt-player-mobile" className="absolute inset-0 w-full h-full" />
                    </div>
                </div>
            </section>

            {/* Desktop Hero */}
            <section className="hidden md:flex relative min-h-svh items-center overflow-hidden bg-gray-900">
                {/* YouTube Video Background */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <div className="absolute inset-0 overflow-hidden hero-video-wrapper">
                        <div id="hero-yt-player" />
                    </div>
                </div>

                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-left">
                    <span className="text-2xl font-normal tracking-widest uppercase text-white"
                        style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}>
                        2026년 08월 03일 출발
                    </span>
                    <h1 className="mt-8 text-6xl font-bold leading-tight tracking-tight text-white"
                        style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}>
                        프린세스 크루즈 에메랄드호
                    </h1>
                    <p className="mt-8 text-2xl font-normal leading-relaxed text-white"
                        style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}>
                        알래스카 크루즈 8박 10일의 상세 일정을 안내해 드립니다<br />
                        일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요
                    </p>
                    <div className="mt-8">
                        <Link
                            href="#schedule"
                            className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            일정 확인하기
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                </div>
            </section>
        </div>
    );
}
