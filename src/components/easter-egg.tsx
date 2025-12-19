"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Sparkles } from "lucide-react";
import { createPortal } from "react-dom";

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

export const EasterEgg: React.FC = () => {
    const [triggered, setTriggered] = useState(false);
    const [sequence, setSequence] = useState<string[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const newSequence = [...sequence, e.code].slice(-10);
        setSequence(newSequence);

        if (newSequence.join(",") === KONAMI_CODE.join(",")) {
            setTriggered(true);
            setSequence([]);
            setTimeout(() => setTriggered(false), 4000);
        }
    }, [sequence]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    if (!mounted || !triggered) return null;

    const content = (
        <div className="fixed inset-0 z-[9998] pointer-events-none flex items-center justify-center">
            {/* Confetti effect */}
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full animate-confetti"
                    style={{
                        left: `${Math.random() * 100}%`,
                        backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
                        animationDelay: `${Math.random() * 0.5}s`,
                        animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                />
            ))}

            {/* Message */}
            <div className="bg-background border border-border rounded-2xl px-8 py-6 shadow-2xl animate-in zoom-in duration-300 text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h2 className="text-2xl font-bold mb-2">🎉 You found it!</h2>
                <p className="text-muted-foreground">
                    Thanks for exploring my portfolio!
                </p>
            </div>

            <style jsx global>{`
        @keyframes confetti {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .animate-confetti {
          animation: confetti 3s ease-out forwards;
        }
      `}</style>
        </div>
    );

    return createPortal(content, document.body);
};

export default EasterEgg;
