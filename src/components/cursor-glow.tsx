"use client";

import React, { useEffect, useState } from "react";

export const CursorGlow: React.FC = () => {
    const [position, setPosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="absolute rounded-full"
                style={{
                    left: position.x,
                    top: position.y,
                    width: 400,
                    height: 400,
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, rgba(var(--foreground-rgb), 0.03) 0%, transparent 70%)",
                    transition: "left 0.1s ease-out, top 0.1s ease-out",
                }}
            />
        </div>
    );
};

export default CursorGlow;
