"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, Heart, ShoppingBag, Phone, ChevronDown, Mail, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Bookstore", href: "/shop" },
    { name: "Media Hub", href: "/media" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDeptOpen, setIsDeptOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full relative z-50">
            {/* Top Bar (Ogani Style) */}
            <div className="bg-[#f5f5f5] border-b border-peacock/5 py-2 hidden lg:block">
                <div className="ogani-container flex justify-between items-center text-[13px] text-peacock/70 font-semibold tracking-wider">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Mail size={14} className="text-gold" />
                            <span>contact@sanskritshree.com</span>
                        </div>
                        <div className="border-l border-peacock/10 h-3" />
                        <span className="font-medium italic">"Vidya Dadati Vinayam" - Knowledge brings humility.</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3 pr-4 border-r border-peacock/10">
                            <Link href="#" className="hover:text-gold transition-colors"><Twitter size={14} /></Link>
                            <Link href="#" className="hover:text-gold transition-colors"><Youtube size={14} /></Link>
                        </div>
                        <Link href="/login" className="flex items-center space-x-1 hover:text-gold transition-colors font-bold uppercase">
                            <span>Login</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Header (Logo & Navigation) */}
            <nav className={cn(
                "transition-all duration-300 bg-white",
                isScrolled ? "fixed top-0 left-0 right-0 shadow-md py-2" : "py-4"
            )}>
                <div className="ogani-container flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-4 group shrink-0">
                        <div className="relative w-16 h-16">
                            <Image 
                                src="/logo.jpg" 
                                alt="Sanskrit Shree Logo" 
                                fill
                                className="object-contain group-hover:scale-105 transition-transform duration-500"
                                priority
                            />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-base font-black tracking-widest text-peacock uppercase leading-none">
                                Sanskrit Shree
                            </span>
                            <span className="font-noto text-[10px] text-gold tracking-[0.2em] uppercase font-bold mt-1">
                                संस्कृत श्री:
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu Links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[13px] font-black tracking-widest text-peacock hover:text-gold transition-colors uppercase py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social/Cart Icons (Ogani Style) */}
                    <div className="flex items-center space-x-6">
                        <div className="hidden sm:flex items-center space-x-4">
                            <Link href="#" className="relative group">
                                <Heart size={20} className="text-peacock group-hover:text-gold transition-colors" />
                                <span className="absolute -top-2 -right-2 bg-maroon text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">3</span>
                            </Link>
                            <Link href="/shop" className="relative group">
                                <ShoppingBag size={20} className="text-peacock group-hover:text-gold transition-colors" />
                                <span className="absolute -top-2 -right-2 bg-maroon text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                            </Link>
                        </div>
                        <div className="hidden xl:flex flex-col items-end">
                            <span className="text-[11px] text-peacock/60 uppercase font-black tracking-tighter">Support</span>
                            <span className="text-sm font-black text-peacock">+91 98XXX XXXXX</span>
                        </div>
                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-peacock p-2 hover:bg-peacock/5 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Sub Header (Category Search - Visible only on Home or when persistent) */}
                <div className="ogani-container mt-4 hidden lg:grid grid-cols-12 gap-8 items-start">
                    {/* All Departments Dropdown */}
                    <div className="col-span-3 relative">
                        <button 
                            onClick={() => setIsDeptOpen(!isDeptOpen)}
                            className="w-full bg-peacock text-white flex items-center justify-between px-6 py-3 font-black text-[14px] uppercase tracking-wider"
                        >
                            <div className="flex items-center space-x-3">
                                <Menu size={20} />
                                <span>All Shastras</span>
                            </div>
                            <ChevronDown size={18} className={cn("transition-transform", isDeptOpen && "rotate-180")} />
                        </button>
                        <AnimatePresence>
                            {isDeptOpen && (
                                <motion.ul 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="absolute top-full left-0 right-0 bg-white border border-peacock/10 shadow-lg overflow-hidden py-2"
                                >
                                    {["Vedas & Upanishads", "Bhagavad Gita", "Stotrams & Hymns", "Sanskrit Courses", "Grammar (Vyakarana)", "Meditation & Yoga"].map((item) => (
                                        <li key={item}>
                                            <Link href="#" className="block px-6 py-2 text-[14px] text-peacock/80 hover:text-gold hover:bg-peacock/5 transition-all">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Search & Contact Bar */}
                    <div className="col-span-9 flex items-center space-x-4">
                        <div className="flex-1 flex items-center border border-peacock/10 overflow-hidden">
                            <div className="px-6 py-3 border-r border-peacock/10 flex items-center space-x-2 font-bold text-[14px] text-peacock shrink-0">
                                <span>All Resources</span>
                                <ChevronDown size={14} />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Search Shlokas, Courses, or Songs..." 
                                className="flex-1 px-6 py-3 text-[14px] outline-none"
                            />
                            <button className="bg-maroon text-white px-8 py-3 font-black text-[14px] uppercase tracking-widest hover:bg-gold transition-colors">
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="lg:hidden fixed inset-0 z-[60] bg-white w-[300px] shadow-2xl border-r border-peacock/10"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="relative w-12 h-12">
                                        <Image src="/logo.jpg" alt="Logo" fill className="object-contain" />
                                    </div>
                                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-peacock/5 rounded-full"><X size={20} /></button>
                                </div>
                                <div className="flex flex-col space-y-6">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="text-lg font-black text-peacock hover:text-gold transition-colors uppercase border-b border-peacock/5 pb-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-auto py-6 border-t border-peacock/5">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-center space-x-3 text-peacock/60 text-sm">
                                            <Mail size={16} />
                                            <span>contact@sanskritshree.com</span>
                                        </div>
                                        <div className="flex space-x-4">
                                            <Twitter size={20} className="text-peacock/60" />
                                            <Youtube size={20} className="text-peacock/60" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                {isMobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-[55]" onClick={() => setIsMobileMenuOpen(false)} />}
            </nav>
        </header>
    );
}

