"use client";

import { useEffect, useRef, useCallback } from "react";

export function WaterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const bufferRef = useRef<{ current: Float32Array; previous: Float32Array } | null>(null);
  const mouseRef = useRef({ x: -1, y: -1, active: false });
  const flowRef = useRef(true);
  const timeRef = useRef(0);
  const widthRef = useRef(0);
  const heightRef = useRef(0);
  const dampingRef = useRef(0.97);

  const SCALE = 4; // pixel scale for performance

  const initBuffers = useCallback((w: number, h: number) => {
    const sw = Math.floor(w / SCALE);
    const sh = Math.floor(h / SCALE);
    widthRef.current = sw;
    heightRef.current = sh;
    const size = sw * sh;
    bufferRef.current = {
      current: new Float32Array(size),
      previous: new Float32Array(size),
    };
  }, []);

  const dropRipple = useCallback((cx: number, cy: number, radius: number, strength: number) => {
    const buf = bufferRef.current;
    if (!buf) return;
    const w = widthRef.current;
    const h = heightRef.current;
    const sx = Math.floor(cx / SCALE);
    const sy = Math.floor(cy / SCALE);
    for (let y = -radius; y <= radius; y++) {
      for (let x = -radius; x <= radius; x++) {
        const px = sx + x;
        const py = sy + y;
        if (px < 1 || px >= w - 1 || py < 1 || py >= h - 1) continue;
        const dist = Math.sqrt(x * x + y * y);
        if (dist < radius) {
          const fade = 1 - dist / radius;
          buf.current[py * w + px] += strength * fade;
        }
      }
    }
  }, []);

  const propagate = useCallback(() => {
    const buf = bufferRef.current;
    if (!buf) return;
    const w = widthRef.current;
    const h = heightRef.current;
    const damping = dampingRef.current;

    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const i = y * w + x;
        buf.previous[i] =
          (buf.current[i - 1] +
            buf.current[i + 1] +
            buf.current[i - w] +
            buf.current[i + w]) /
            2 -
          buf.previous[i];
        buf.previous[i] *= damping;
      }
    }

    // swap
    const temp = buf.current;
    buf.current = buf.previous;
    buf.previous = temp;
  }, []);

  const render = useCallback((ctx: CanvasRenderingContext2D) => {
    const buf = bufferRef.current;
    if (!buf) return;
    const w = widthRef.current;
    const h = heightRef.current;
    const canvas = ctx.canvas;
    const imgData = ctx.createImageData(canvas.width, canvas.height);
    const pixels = imgData.data;

    for (let y = 0; y < canvas.height; y++) {
      for (let x = 0; x < canvas.width; x++) {
        const sx = Math.floor(x / SCALE);
        const sy = Math.floor(y / SCALE);
        if (sx < 1 || sx >= w - 1 || sy < 1 || sy >= h - 1) continue;

        const i = sy * w + sx;
        const val = buf.current[i];

        const pi = (y * canvas.width + x) * 4;

        // Light blue water tint with ripple highlights
        const highlight = Math.min(255, Math.max(0, val * 8));
        const shadow = Math.min(255, Math.max(0, -val * 4));

        pixels[pi] = Math.min(255, 30 + highlight); // R
        pixels[pi + 1] = Math.min(255, 100 + highlight * 1.5); // G
        pixels[pi + 2] = Math.min(255, 200 + highlight); // B
        pixels[pi + 3] = Math.min(120, 40 + Math.abs(val) * 3 + shadow); // A
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initBuffers(rect.width, rect.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
      flowRef.current = false;
      dropRipple(mouseRef.current.x, mouseRef.current.y, 6, 80);
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      flowRef.current = true;
    };

    // Listen on the whole page
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      timeRef.current += 1;

      // Ambient flow when mouse is not active
      if (flowRef.current && timeRef.current % 3 === 0) {
        const w = widthRef.current;
        const h = heightRef.current;
        // Random drops to simulate flowing water
        const rx = Math.random() * w * SCALE;
        const ry = Math.random() * h * SCALE;
        dropRipple(rx, ry, 4, 30 + Math.random() * 20);

        // Flowing wave from left
        if (timeRef.current % 8 === 0) {
          const wy = Math.random() * h * SCALE;
          dropRipple(0, wy, 8, 50);
        }
      }

      // Mouse trail ripples
      if (mouseRef.current.active && timeRef.current % 2 === 0) {
        dropRipple(mouseRef.current.x, mouseRef.current.y, 5, 60);
      }

      propagate();
      render(ctx);
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initBuffers, dropRipple, propagate, render]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
