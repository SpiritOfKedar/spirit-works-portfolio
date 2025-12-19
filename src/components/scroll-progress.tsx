"use client";

import React, { useEffect, useState } from "react";

export const ScrollProgress: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrollPercent);
            setIsVisible(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 right-0 h-[3px] z-[100] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
                }`}
        >
            {/* Background track */}
            <div className="absolute inset-0 bg-foreground/5" />
            {/* Progress bar with gradient */}
            <div
                className="h-full relative overflow-hidden"
                style={{ width: `${progress}%` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-foreground to-foreground/50" />
                {/* Shine effect */}
                <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    style={{
                        transform: "translateX(-100%)",
                        animation: progress > 0 ? "shine 2s ease-in-out infinite" : "none",
                    }}
                />
            </div>
            <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
        </div>
    );
};

export default ScrollProgress;
