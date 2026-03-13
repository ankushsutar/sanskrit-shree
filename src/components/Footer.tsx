import Link from "next/link";
import { Youtube, Instagram, Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-temple border-t border-gold/10 pt-24 pb-12 px-6 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full sacred-text flex items-center justify-center opacity-[0.01] text-[10vw]">
                शान्तिः शान्तिः शान्तिः
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-3 mb-8 group">
                            <div className="w-12 h-12 border border-gold/40 rounded-full flex items-center justify-center relative">
                                <span className="text-gold font-bold text-2xl font-noto">ॐ</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-cinzel text-xl font-black tracking-[0.2em] text-white uppercase group-hover:text-gold transition-colors duration-500">
                                    Sanskrit Shree
                                </span>
                                <span className="font-noto text-[10px] text-saffron tracking-[0.4em] uppercase font-bold">
                                    संस्कृत श्री:
                                </span>
                            </div>
                        </Link>
                        <p className="font-cormorant text-xl text-white/50 max-w-sm leading-relaxed mb-10">
                            "Where Every Song Finds Its Ancient Soul." We bridge the sacred gap
                            between ancient classical literature and modern global music.
                        </p>
                        <div className="flex items-center space-x-8">
                            {[Youtube, Instagram, Globe].map((Icon, i) => (
                                <Link key={i} href="#" className="text-gold/40 hover:text-saffron transition-all duration-300 hover:scale-110">
                                    <Icon size={24} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col mb-8">
                            <span className="font-noto text-[10px] text-saffron/40 mb-1">शीघ्र-सम्पर्काः</span>
                            <h4 className="font-cinzel text-gold text-lg font-black tracking-widest uppercase">Quick Links</h4>
                        </div>
                        <ul className="space-y-4 font-cinzel text-xs font-bold tracking-[0.2em] text-white/40">
                            <li><Link href="/" className="hover:text-white transition-colors">Home / गृहम्</Link></li>
                            <li><Link href="#songs" className="hover:text-white transition-colors">Songs / गीतिकाः</Link></li>
                            <li><Link href="#categories" className="hover:text-white transition-colors">Categories / वर्गाः</Link></li>
                            <li><Link href="#blog" className="hover:text-white transition-colors">Blog / लेखमाला</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex flex-col mb-8">
                            <span className="font-noto text-[10px] text-saffron/40 mb-1">विधिकम्</span>
                            <h4 className="font-cinzel text-gold text-lg font-black tracking-widest uppercase">Legal</h4>
                        </div>
                        <ul className="space-y-4 font-cinzel text-xs font-bold tracking-[0.2em] text-white/40">
                            <li><Link href="#about" className="hover:text-white transition-colors">Mission / लक्ष्यम्</Link></li>
                            <li><Link href="#submit" className="hover:text-white transition-colors">Submit / समर्पणम्</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy / गोपनीयता</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms / नियमाः</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-gold/5 flex flex-col md:flex-row items-center justify-between text-white/30 font-cormorant text-sm">
                    <p>© 2024 Sanskrit Shree · संस्कृत श्री:। All rights reserved.</p>
                    <p className="mt-4 md:mt-0 italic tracking-wider">Created with devotion for the Devabhasha.</p>
                </div>
            </div>
        </footer>
    );
}
