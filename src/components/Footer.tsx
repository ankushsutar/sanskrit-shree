import Link from "next/link";
import Image from "next/image";
import { Youtube, Instagram, Globe } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-cream border-t border-peacock/5 pt-24 pb-12 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center space-x-6 group">
                            <div className="relative w-20 h-20">
                                <Image 
                                    src="/logo.jpg" 
                                    alt="Sanskrit Shree Logo" 
                                    fill
                                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-cairo text-lg font-bold tracking-widest text-peacock uppercase">
                                    Sanskrit Shree
                                </span>
                                <span className="font-noto text-[10px] text-gold tracking-[0.3em] uppercase font-bold">
                                    संस्कृत श्री:
                                </span>
                            </div>
                        </Link>
                        <p className="font-cairo text-xl text-peacock/60 max-w-sm leading-relaxed italic">
                            "Where Every Song Finds Its Ancient Soul." Reimagining global melodies through the eternal resonance of Sanskrit.
                        </p>
                        <div className="flex items-center space-x-6">
                            {[Youtube, Instagram, Globe].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-peacock/5 flex items-center justify-center text-peacock/40 hover:text-gold hover:border-gold transition-all duration-300">
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-cairo text-peacock text-sm font-bold tracking-[0.3em] uppercase mb-8">Ecosystem</h4>
                        <ul className="space-y-4 font-cairo text-[10px] font-bold tracking-[0.2em] text-peacock/60">
                            <li><Link href="/courses" className="hover:text-gold transition-colors">Courses / शोधप्रबन्धाः</Link></li>
                            <li><Link href="/shop" className="hover:text-gold transition-colors">Bookstore / ग्रन्थालयः</Link></li>
                            <li><Link href="/media" className="hover:text-gold transition-colors">Media Hub / श्रव्या</Link></li>
                            <li><Link href="/booking" className="hover:text-gold transition-colors">Booking / मञ्चनम्</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-cairo text-peacock text-sm font-bold tracking-[0.3em] uppercase mb-8">Connect</h4>
                        <ul className="space-y-4 font-cairo text-[10px] font-bold tracking-[0.2em] text-peacock/60">
                            <li><Link href="/sponsor" className="hover:text-gold transition-colors">Sponsor / आश्रयदानम्</Link></li>
                            <li><Link href="https://youtube.com/@SanskritShree" className="hover:text-gold transition-colors">YouTube / अङ्कीयवाहिनी</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">WhatsApp Groups</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Privacy / नियमाः</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-peacock/5 flex flex-col md:flex-row items-center justify-between text-peacock/30 font-cairo text-sm">
                    <p>© 2024 Sanskrit Shree · संस्कृत श्री:। All rights reserved.</p>
                    <p className="mt-4 md:mt-0 italic tracking-wider">Making Sanskrit accessible and alive through music.</p>
                </div>
            </div>
        </footer>
    );
}

