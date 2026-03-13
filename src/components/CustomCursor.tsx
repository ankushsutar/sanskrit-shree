"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);
    const ringX = useSpring(0, springConfig);
    const ringY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            ringX.set(e.clientX);
            ringY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                window.getComputedStyle(target).cursor === "pointer" ||
                target.tagName === "BUTTON" ||
                target.tagName === "A"
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY, ringX, ringY]);

    return (
        <>
            <motion.div
                className="cursor-dot hidden md:block"
                style={{
                    left: cursorX,
                    top: cursorY,
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                }}
            />
            <motion.div
                className="cursor-ring hidden md:block"
                style={{
                    left: ringX,
                    top: ringY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "#f5c842" : "#00ffe7",
                    backgroundColor: isHovering ? "rgba(245, 200, 66, 0.1)" : "rgba(245, 200, 66, 0)",
                }}
            />
        </>
    );
}
