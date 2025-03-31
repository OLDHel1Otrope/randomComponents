"use client";
import { useEffect, useRef } from "react";

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  speed: number;
  opacity: number;
}

const RandomLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const animationFrameRef = useRef<number>();

  const createRandomLine = (width: number, height: number): Line => {
    return {
      x1: Math.random() * width,
      y1: Math.random() * height,
      x2: Math.random() * width,
      y2: Math.random() * height,
      speed: 0.5 + Math.random() * 2,
      opacity: 0.1 + Math.random() * 0.3,
    };
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize lines
    const numLines = Math.floor((canvas.width * canvas.height) / 10000);
    linesRef.current = Array.from({ length: numLines }, () =>
      createRandomLine(canvas.width, canvas.height)
    );

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  };

  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Clear canvas with fade effect
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw and update lines
    linesRef.current.forEach((line) => {
      // Update line positions
      line.x1 += line.speed;
      line.y1 += line.speed;
      line.x2 += line.speed;
      line.y2 += line.speed;

      // Reset line if it goes off screen
      if (
        line.x1 > canvas.width ||
        line.y1 > canvas.height ||
        line.x2 > canvas.width ||
        line.y2 > canvas.height
      ) {
        Object.assign(line, createRandomLine(canvas.width, canvas.height));
      }

      // Draw line
      ctx.beginPath();
      ctx.moveTo(line.x1, line.y1);
      ctx.lineTo(line.x2, line.y2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${line.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const cleanup = initCanvas();
    animate();

    return () => {
      cleanup?.();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-black"
      style={{ zIndex: -1 }}
    />
  );
};

export default RandomLines; 