"use client";

import { useEffect, useRef } from "react";

const DEVANAGARI_CHARS = ["ॐ", "श्री", "नमः", "शक्ति", "शान्तिः", "प्रेम", "ज्ञानम्", "सत्यम्", "शिवम्", "सुन्दरम्"];

export function CanvasBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const particles: Particle[] = [];
        const stars: Star[] = [];

        class Star {
            x: number;
            y: number;
            size: number;
            speed: number;
            opacity: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 1.2;
                this.speed = Math.random() * 0.15;
                this.opacity = Math.random() * 0.5 + 0.1;
            }

            update() {
                this.y -= this.speed;
                if (this.y < 0) {
                    this.y = canvas!.height;
                    this.x = Math.random() * canvas!.width;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(228, 182, 50, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        class Particle {
            x: number;
            y: number;
            char: string;
            size: number;
            speed: number;
            opacity: number;
            fadeSpeed: number;
            angle: number;
            spin: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = canvas!.height + Math.random() * 200;
                this.char = DEVANAGARI_CHARS[Math.floor(Math.random() * DEVANAGARI_CHARS.length)];
                this.size = Math.random() * 15 + 8;
                this.speed = Math.random() * 0.4 + 0.1;
                this.opacity = 0;
                this.fadeSpeed = Math.random() * 0.005 + 0.002;
                this.angle = Math.random() * Math.PI * 2;
                this.spin = (Math.random() - 0.5) * 0.01;
            }

            update() {
                this.y -= this.speed;
                this.x += Math.sin(this.angle) * 0.5;
                this.angle += 0.02;

                if (this.opacity < 0.2) {
                    this.opacity += 0.005;
                }

                if (this.y < -100) {
                    this.y = canvas!.height + 100;
                    this.x = Math.random() * canvas!.width;
                    this.opacity = 0;
                }
            }

            draw() {
                if (!ctx || this.opacity <= 0) return;
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.font = `${this.size}px Noto Sans Devanagari`;
                ctx.fillStyle = `rgba(255, 124, 17, ${this.opacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = "rgba(255, 124, 17, 0.5)";
                ctx.textAlign = "center";
                ctx.fillText(this.char, 0, 0);
                ctx.restore();
            }
        }

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            stars.length = 0;
            particles.length = 0;

            for (let i = 0; i < 100; i++) {
                stars.push(new Star());
            }
            for (let i = 0; i < 15; i++) {
                particles.push(new Particle());
            }
        };

        window.addEventListener("resize", resize);
        resize();

        const animate = () => {
            // Draw gradient background
            const gradient = ctx.createRadialGradient(
                canvas.width / 2, canvas.height / 2, 0,
                canvas.width / 2, canvas.height / 2, canvas.width
            );
            gradient.addColorStop(0, "#110f13");
            gradient.addColorStop(1, "#0d0c11");
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach((star) => {
                star.update();
                star.draw();
            });

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
        />
    );
}
