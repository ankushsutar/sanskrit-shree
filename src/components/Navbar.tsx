"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", sanskrit: "गृहम्", href: "/" },
    { name: "Songs", sanskrit: "गीतिकाः", href: "#songs" },
    { name: "Categories", sanskrit: "वर्गाः", href: "#categories" },
    { name: "Blog", sanskrit: "लेखमाला", href: "#blog" },
    { name: "About", sanskrit: "अस्माकम्", href: "#about" },
    { name: "Submit", sanskrit: "समर्पणम्", href: "#submit" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isMounted) return <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent" />;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4",
                isScrolled ? "bg-temple/90 backdrop-blur-xl border-b border-gold/20 shadow-2xl shadow-black/50" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border border-gold/40 rounded-full flex items-center justify-center relative"
                    >
                        <div className="absolute inset-0 bg-gold/5 rounded-full animate-pulse" />
                        <span className="text-gold font-bold text-2xl relative z-10 font-noto drop-shadow-[0_0_8px_rgba(228,182,50,0.5)]">ॐ</span>
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="font-cinzel text-xl font-black tracking-[0.2em] text-white uppercase group-hover:text-gold transition-colors duration-500">
                            Sanskrit Shree
                        </span>
                        <span className="font-noto text-[10px] text-saffron tracking-[0.4em] uppercase font-bold">
                            संस्कृत श्री:
                        </span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex flex-col items-center group relative py-2"
                        >
                            <span className="font-noto text-xs text-saffron/60 group-hover:text-saffron transition-colors duration-300 mb-0.5">
                                {link.sanskrit}
                            </span>
                            <span className="font-cinzel text-sm font-bold tracking-widest text-white/70 group-hover:text-white transition-colors duration-300">
                                {link.name}
                            </span>
                            <motion.span
                                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-right from-transparent via-gold to-transparent"
                                whileHover={{ width: "100%" }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-gold p-2 hover:bg-gold/10 rounded-full transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-temple/98 backdrop-blur-2xl border-b border-gold/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-8 space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex items-center space-x-4 group"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="font-noto text-xl text-saffron/40">{link.sanskrit}</span>
                                    <span className="font-cinzel text-2xl text-white group-hover:text-gold transition-colors">
                                        {link.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
