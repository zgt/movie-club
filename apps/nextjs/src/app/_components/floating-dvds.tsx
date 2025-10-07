"use client";

import { useEffect, useState } from "react";

interface DVDProps {
  size: number;
  initialX: number;
  initialY: number;
  delay: number;
  title?: string;
}

function DVD({ size, initialX, initialY, delay, title }: DVDProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: initialX, y: initialY });

  return (
    <div
      className="absolute cursor-pointer transition-all duration-300 ease-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) ${isHovered ? "translateY(-50%) scale(1.1)" : "translateY(0) scale(1)"}`,
        //transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* DVD disc */}
      <div
        className="relative rounded-full border-2 border-muted/30 bg-gradient-to-br from-background via-muted/20 to-muted/40 shadow-lg transition-all duration-300"
        style={{ width: size, height: size }}
      >
        {/* DVD surface with rainbow reflection */}
        <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10">
          {/* Concentric circles for DVD tracks */}
          <div
            className="absolute rounded-full border border-muted/20"
            style={{
              inset: size * 0.1,
            }}
          />
          <div
            className="absolute rounded-full border border-muted/15"
            style={{
              inset: size * 0.2,
            }}
          />
          <div
            className="absolute rounded-full border border-muted/10"
            style={{
              inset: size * 0.3,
            }}
          />

          {/* Center hole */}
          <div
            className="absolute left-1/2 top-1/2 rounded-full bg-background shadow-inner"
            style={{
              width: size * 0.25,
              height: size * 0.25,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            className="absolute left-1/2 top-1/2 rounded-full bg-muted/40"
            style={{
              width: size * 0.15,
              height: size * 0.15,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* Holographic shine effect */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-60" : "opacity-30"
          }`}
        />

        {/* Rainbow reflection on hover */}
        {isHovered && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-blue-500/20 to-green-500/20 opacity-40 blur-sm" />
        )}
      </div>

      {/* Floating glow effect */}
      {isHovered && (
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-md"
          style={{
            width: size * 1.5,
            height: size * 1.5,
            zIndex: -1,
          }}
        />
      )}
    </div>
  );
}

export function FloatingDVDs() {
  const dvds = [
    { size: 180, x: 5, y: 80, delay: 0 },
    { size: 180, x: 15, y: 80, delay: 200 },
    { size: 180, x: 25, y: 80, delay: 400 },
    { size: 180, x: 35, y: 80, delay: 600 },
    { size: 180, x: 45, y: 80, delay: 800 },
    { size: 180, x: 55, y: 80, delay: 1000 },
    { size: 180, x: 65, y: 80, delay: 1200 },
    { size: 180, x: 75, y: 80, delay: 1400 },
    { size: 180, x: 85, y: 80, delay: 1600 },
    { size: 180, x: 95, y: 80, delay: 1800 },
  ];

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-64">
      {/* Enable pointer events only for DVD elements */}
      <div className="pointer-events-auto relative h-full w-full">
        {dvds.map((dvd, index) => (
          <DVD
            key={index}
            size={dvd.size}
            initialX={dvd.x}
            initialY={dvd.y}
            delay={dvd.delay}
          />
        ))}
      </div>

      {/* Bottom gradient to blend DVDs into page */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
