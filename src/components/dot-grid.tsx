"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface DotGridProps {
    dotSize?: number;
    dotSpacing?: number;
    hoverRadius?: number;
    maxScale?: number;
}

export const DotGrid: React.FC<DotGridProps> = ({
    dotSize = 1,
    dotSpacing = 20,
    hoverRadius = 100,
    maxScale = 2,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
    const [dots, setDots] = useState<{ x: number; y: number; id: string }[]>([]);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Generate dots based on window size
    useEffect(() => {
        const updateDots = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            setDimensions({ width, height });

            const cols = Math.ceil(width / dotSpacing) + 1;
            const rows = Math.ceil(height / dotSpacing) + 1;

            const newDots: { x: number; y: number; id: string }[] = [];

            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    newDots.push({
                        x: col * dotSpacing,
                        y: row * dotSpacing,
                        id: `dot-${row}-${col}`,
                    });
                }
            }

            setDots(newDots);
        };

        updateDots();

        window.addEventListener("resize", updateDots);
        return () => window.removeEventListener("resize", updateDots);
    }, [dotSpacing]);

    // Track mouse position globally
    const handleMouseMove = useCallback((e: MouseEvent) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY,
        });
    }, []);

    const handleMouseLeave = useCallback(() => {
        setMousePosition({ x: -1000, y: -1000 });
    }, []);

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [handleMouseMove, handleMouseLeave]);

    // Calculate distance from mouse
    const getDistance = (dotX: number, dotY: number) => {
        return Math.sqrt(
            Math.pow(mousePosition.x - dotX, 2) + Math.pow(mousePosition.y - dotY, 2)
        );
    };

    // Smooth easing function
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    // Calculate scale based on distance from mouse
    const getScale = (distance: number) => {
        if (distance > hoverRadius) return 1;

        const normalizedDistance = 1 - (distance / hoverRadius);
        const eased = easeOutCubic(normalizedDistance);

        return 1 + (maxScale - 1) * eased;
    };

    // Calculate opacity based on distance
    const getOpacity = (distance: number) => {
        if (distance > hoverRadius) return 0.15;

        const normalizedDistance = 1 - (distance / hoverRadius);
        const eased = easeOutCubic(normalizedDistance);

        return 0.15 + 0.6 * eased;
    };

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
        >
            {/* Dots */}
            <svg
                width={dimensions.width}
                height={dimensions.height}
                className="absolute inset-0"
                style={{ overflow: "visible" }}
            >
                {dots.map((dot) => {
                    const distance = getDistance(dot.x, dot.y);
                    const scale = getScale(distance);
                    const opacity = getOpacity(distance);

                    return (
                        <circle
                            key={dot.id}
                            cx={dot.x}
                            cy={dot.y}
                            r={dotSize * scale}
                            className="fill-foreground/80"
                            opacity={opacity}
                            style={{
                                transition: "r 0.12s ease-out, opacity 0.12s ease-out",
                            }}
                        />
                    );
                })}
            </svg>
        </div>
    );
};

export default DotGrid;
