"use client";

import { useRef, useEffect } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const STAR_COUNT = 150;
const MAX_SPEED = 0.2;
const MAX_SIZE = 1.5;

const createStar = (width: number, height: number): Star => ({
  x: Math.random() * width,
  y: Math.random() * height,
  size: Math.random() * MAX_SIZE + 0.5,
  speed: Math.random() * MAX_SPEED + 0.02,
  opacity: Math.random() * 0.6 + 0.2,
});

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      stars = Array.from({ length: STAR_COUNT }, () =>
        createStar(canvas.width, canvas.height),
      );
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.y -= star.speed;

        if (star.y < -star.size) {
          star.y = canvas.height + star.size;
          star.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 4,
        );

        gradient.addColorStop(0, `rgba(168, 85, 247, ${star.opacity})`);
        gradient.addColorStop(0.3, `rgba(168, 85, 247, ${star.opacity * 0.4})`);
        gradient.addColorStop(1, "rgba(168, 85, 247, 0)");

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0" style={{ zIndex: 0 }} />
  );
};

export default Starfield;
