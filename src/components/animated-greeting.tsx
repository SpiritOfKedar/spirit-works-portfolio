"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedGreetingProps {
    text: string;
    className?: string;
    delay?: number;
}

const AnimatedGreeting = ({
    text,
    className,
    delay = 0,
}: AnimatedGreetingProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    // Typewriter effect
    useEffect(() => {
        const timeout = setTimeout(() => {
            let currentIndex = 0;
            const typingInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    setIsTypingComplete(true);
                    // Hide cursor after typing is complete
                    setTimeout(() => setShowCursor(false), 1500);
                }
            }, 80);

            return () => clearInterval(typingInterval);
        }, delay * 1000);

        return () => clearTimeout(timeout);
    }, [text, delay]);

    return (
        <div className={cn("relative", className)}>
            {/* Glass container for text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay }}
                className="relative"
            >
                {/* Main text */}
                <span className="text-foreground">
                    {displayedText}
                </span>

                {/* Glowing cursor with glass effect */}
                {showCursor && (
                    <motion.span
                        className="inline-block ml-0.5"
                        animate={{
                            opacity: [1, 1, 0, 0],
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            times: [0, 0.49, 0.5, 1],
                        }}
                    >
                        <span className="relative">
                            <span className="text-foreground/60">|</span>
                            {/* Subtle glow effect */}
                            <span className="absolute inset-0 text-foreground/30 blur-[2px]">|</span>
                        </span>
                    </motion.span>
                )}
            </motion.div>

            {/* Subtle shimmer effect on complete */}
            {isTypingComplete && (
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{
                        duration: 1.5,
                        delay: 0.3,
                        ease: "easeInOut",
                    }}
                >
                    <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                </motion.div>
            )}
        </div>
    );
};

export default AnimatedGreeting;
