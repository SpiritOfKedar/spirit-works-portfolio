"use client";

import React, { useState, useEffect } from "react";

export const PageLoader: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => setIsVisible(false), 1000);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[10000] flex items-center justify-center ${isLoading ? "opacity-100 scale-100" : "opacity-0 scale-110"
                }`}
            style={{
                background: "hsl(var(--background))",
                transition: "opacity 1s cubic-bezier(0.4, 0, 0.2, 1), transform 1s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            {/* Noise texture overlay */}
            <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Animated gradient background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary gradient orb */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, transparent 60%)",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        filter: "blur(60px)",
                        animation: "pulse 4s ease-in-out infinite",
                    }}
                />

                {/* Secondary floating orbs */}
                <div
                    className="absolute w-[400px] h-[400px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(236, 72, 153, 0.06) 0%, transparent 60%)",
                        top: "20%",
                        left: "30%",
                        transform: "translate(-50%, -50%)",
                        filter: "blur(80px)",
                        animation: "float 6s ease-in-out infinite",
                    }}
                />
                <div
                    className="absolute w-[350px] h-[350px] rounded-full"
                    style={{
                        background: "radial-gradient(circle, rgba(34, 211, 238, 0.06) 0%, transparent 60%)",
                        bottom: "20%",
                        right: "20%",
                        filter: "blur(70px)",
                        animation: "float 5s ease-in-out infinite reverse",
                    }}
                />
            </div>

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Main loader content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* Animated circles */}
                <div className="relative w-28 h-28">
                    {/* Outer glow */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)",
                            filter: "blur(20px)",
                            animation: "pulse 2s ease-in-out infinite",
                        }}
                    />

                    {/* Rotating outer ring */}
                    <div
                        className="absolute inset-0 rounded-full border-2 border-foreground/10"
                        style={{
                            animation: "spin 10s linear infinite",
                        }}
                    >
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground/20 blur-[1px]" />
                    </div>

                    {/* Counter-rotating middle ring */}
                    <div
                        className="absolute inset-3 rounded-full border border-foreground/15"
                        style={{
                            animation: "spin 7s linear infinite reverse",
                        }}
                    >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground/30" />
                    </div>

                    {/* Inner pulsing circle */}
                    <div
                        className="absolute inset-6 rounded-full bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.08] backdrop-blur-sm flex items-center justify-center"
                        style={{
                            animation: "pulse 2s ease-in-out infinite",
                            boxShadow: "inset 0 0 20px rgba(0,0,0,0.03)",
                        }}
                    >
                        {/* Initials */}
                        <span
                            className="text-2xl font-bold tracking-tight"
                            style={{
                                background: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.5) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            KB
                        </span>
                    </div>

                    {/* Orbiting dots */}
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute inset-0"
                            style={{
                                animation: `spin ${4 + i * 0.5}s linear infinite`,
                                animationDelay: `${i * 0.2}s`,
                            }}
                        >
                            <div
                                className="absolute rounded-full bg-foreground/50"
                                style={{
                                    width: `${4 - i * 0.5}px`,
                                    height: `${4 - i * 0.5}px`,
                                    top: "50%",
                                    left: "-2px",
                                    transform: "translateY(-50%)",
                                    boxShadow: "0 0 4px rgba(0,0,0,0.1)",
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
      `}</style>
        </div>
    );
};

export default PageLoader;
