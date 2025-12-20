"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Sun, Moon, Coffee, Sparkles } from "lucide-react";

export const TimeGreeting: React.FC = () => {
    const [greeting, setGreeting] = useState<{
        text: string;
        icon: React.ReactNode;
    } | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const hour = new Date().getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting({
                text: "Good morning",
                icon: <Coffee className="w-3.5 h-3.5" />,
            });
        } else if (hour >= 12 && hour < 17) {
            setGreeting({
                text: "Good afternoon",
                icon: <Sun className="w-3.5 h-3.5" />,
            });
        } else if (hour >= 17 && hour < 21) {
            setGreeting({
                text: "Good evening",
                icon: <Sparkles className="w-3.5 h-3.5" />,
            });
        } else {
            setGreeting({
                text: "Good night",
                icon: <Moon className="w-3.5 h-3.5" />,
            });
        }
    }, []);

    if (!greeting || !mounted) return null;

    const content = (
        <div
            className="animate-in fade-in slide-in-from-top-2 duration-500"
            style={{
                position: 'fixed',
                top: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999,
            }}
        >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-border/50 text-xs text-muted-foreground backdrop-blur-sm">
                {greeting.icon}
                <span>{greeting.text}</span>
            </div>
        </div>
    );

    return createPortal(content, document.body);
};

export default TimeGreeting;
