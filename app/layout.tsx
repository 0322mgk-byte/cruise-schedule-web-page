import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emerald-princess-cruises-alaska.vercel.app"),
  title: "호구 안 당하고 알래스카 VIP 가는 법",
  description:
    "짐 싸는 고생, 바가지 끝! 30% 싸게 발코니에서 빙하 1열 직관",
  openGraph: {
    title: "호구 안 당하고 알래스카 VIP 가는 법",
    description:
      "짐 싸는 고생, 바가지 끝! 30% 싸게 발코니에서 빙하 1열 직관",
    url: "https://emerald-princess-cruises-alaska.vercel.app",
    siteName: "프린세스 크루즈 에메랄드호 알래스카",
    images: [
      {
        url: "/Alaska-og.png",
        width: 1200,
        height: 630,
        alt: "프린세스 크루즈 에메랄드호 알래스카 크루즈 8박 10일",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "호구 안 당하고 알래스카 VIP 가는 법",
    description:
      "짐 싸는 고생, 바가지 끝! 30% 싸게 발코니에서 빙하 1열 직관",
    images: ["/Alaska-og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
