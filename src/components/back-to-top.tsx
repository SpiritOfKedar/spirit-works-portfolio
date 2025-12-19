"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

            setIsVisible(scrollTop > 400);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    // Calculate the circle progress
    const circumference = 2 * Math.PI * 18;
    const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 group animate-in fade-in slide-in-from-bottom-4 duration-300"
            aria-label="Back to top"
        >
            {/* Progress ring */}
            <svg className="w-12 h-12 -rotate-90 transform">
                {/* Background circle */}
                <circle
                    cx="24"
                    cy="24"
                    r="18"
                    className="fill-background stroke-foreground/10"
                    strokeWidth="2"
                />
                {/* Progress circle */}
                <circle
                    cx="24"
                    cy="24"
                    r="18"
                    className="fill-none stroke-foreground transition-all duration-200"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
            {/* Arrow icon */}
            <div className="absolute inset-0 flex items-center justify-center">
                <ArrowUp className="w-4 h-4 text-foreground group-hover:-translate-y-0.5 transition-transform duration-200" />
            </div>
        </button>
    );
};

export default BackToTop;
