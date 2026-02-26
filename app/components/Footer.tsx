import Link from "next/link";
import { cruiseData } from "@/data/cruise-data";

export default function Footer() {
    const {
        companyName, logoPath, copyright, specialty, services,
        cruiseLines, ceoLabel, ceoName, ceoNameEn, addresses, mobileLabel, mobiles, emailLabel, email, mainPhoneLabel, mainPhone,
    } = cruiseData.footer;

    return (
        <footer className="bg-gray-900 text-white py-12 md:py-16 border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-10">
                    {/* 왼쪽: 회사 소개 */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            {logoPath && <img src={logoPath} alt={`${companyName} 로고`} className="h-7 md:h-8 w-auto" />}
                            <span className="font-bold text-xl tracking-tight">{companyName}</span>
                        </Link>
                        <p className="text-base font-semibold mb-1">{specialty}</p>
                        <p className="text-gray-400 text-sm mb-5">{services}</p>
                        <div className="space-y-1">
                            {cruiseLines.map((line) => (
                                <p key={line} className="text-gray-400 text-xs tracking-wide">{line}</p>
                            ))}
                        </div>
                    </div>

                    {/* 오른쪽: 대표 정보 */}
                    <div>
                        <div className="mb-6">
                            <p className="text-base font-semibold">{ceoLabel} : {ceoName}</p>
                            <p className="text-xs text-gray-500 tracking-wide">{ceoNameEn}</p>
                        </div>

                        <div className="space-y-3 text-sm text-gray-300">
                            <div>
                                {addresses.map((addr) => (
                                    <p key={addr}>{addr}</p>
                                ))}
                            </div>
                            <div>
                                <span className="text-gray-500 mr-2">{mobileLabel}</span>
                                {mobiles.join(" / ")}
                            </div>
                            <div>
                                <span className="text-gray-500 mr-2">{emailLabel}</span>
                                <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
                            </div>
                            <div>
                                <span className="text-gray-500 mr-2">{mainPhoneLabel}</span>
                                <a href={`tel:${mainPhone}`} className="hover:text-white transition-colors">{mainPhone}</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 하단 카피라이트 */}
                <div className="border-t border-white/10 pt-6">
                    <p className="text-gray-500 text-sm text-center">
                        {copyright || `© ${new Date().getFullYear()} ${companyName}. All rights reserved.`}
                    </p>
                </div>
            </div>
        </footer>
    );
}
