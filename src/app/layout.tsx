import type { Metadata } from "next";
import { Cinzel_Decorative, Noto_Sans_Devanagari, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    variable: "--font-cinzel",
});

const noto = Noto_Sans_Devanagari({
    subsets: ["devanagari", "latin"],
    weight: ["400", "700"],
    variable: "--font-noto",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-cormorant",
});

export const metadata: Metadata = {
    title: "Sanskrit Shree | Where Every Song Finds Its Ancient Soul",
    description: "Reimagining popular songs from all languages as classical Sanskrit compositions.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${cinzel.variable} ${noto.variable} ${cormorant.variable} antialiased bg-background text-white selection:bg-gold/30`}
            >
                {children}
            </body>
        </html>
    );
}
