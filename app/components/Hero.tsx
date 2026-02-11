"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

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
    const playerRef = useRef<YT.Player | null>(null);

    useEffect(() => {
        const initPlayer = () => {
            playerRef.current = new window.YT.Player("hero-yt-player", {
                videoId: VIDEO_ID,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    modestbranding: 1,
                    playsinline: 1,
                    start: CLIP_START,
                    end: CLIP_END,
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                },
                events: {
                    onStateChange: (event: YT.OnStateChangeEvent) => {
                        if (event.data === YT.PlayerState.ENDED) {
                            playerRef.current?.seekTo(CLIP_START, true);
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
        <section id="hero" className="relative min-h-svh flex items-center overflow-hidden bg-gray-900">
            {/* YouTube Video Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div className="absolute inset-0 overflow-hidden hero-video-wrapper">
                    <div id="hero-yt-player" />
                </div>
            </div>

            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                <p className="text-2xl md:text-3xl font-bold leading-snug text-white mb-8"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}>
                    2026년 08월 03일 출발
                </p>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-8"
                    style={{ textShadow: "0 4px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}>
                    프린세스 크루즈 에메랄드호
                </h1>

                <p className="max-w-2xl text-xl md:text-2xl font-medium leading-relaxed text-white mb-8"
                    style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}>
                    알래스카 크루즈 8박 10일의 상세 일정을 안내해 드립니다<br />
                    일자별 주요 일정과 기항지 정보를 지금 바로 확인하세요
                </p>

                <div className="flex justify-start">
                    <Link
                        href="#schedule"
                        className="h-14 px-8 inline-flex items-center justify-center text-base font-semibold bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/30"
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
    );
}
