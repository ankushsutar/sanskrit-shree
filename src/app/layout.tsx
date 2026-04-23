import type { Metadata } from "next";
import { Cinzel_Decorative, Noto_Sans_Devanagari, Cormorant_Garamond, Cairo } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-cairo",
});

const noto = Noto_Sans_Devanagari({
    subsets: ["devanagari", "latin"],
    weight: ["400", "700"],
    variable: "--font-noto",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cairo",
});

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["200", "300", "400", "600", "700", "800", "900"],
    variable: "--font-cairo",
});

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import LeadCapture from "@/components/LeadCapture";

export const metadata: Metadata = {
    title: "Sanskrit Shree | Where Every Song Finds Its Ancient Soul",
    description: "Reimagining popular songs from all languages as classical Sanskrit compositions.",
    icons: {
        icon: "/logo.jpg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${cinzel.variable} ${noto.variable} ${cormorant.variable} ${cairo.variable} antialiased bg-background text-foreground selection:bg-gold/30 uppercase`}
            >
                <Navbar />
                {children}
                <LeadCapture />
                <Footer />
            </body>
        </html>
    );
}

