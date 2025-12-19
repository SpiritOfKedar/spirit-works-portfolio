"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Coffee, Sparkles } from "lucide-react";

export const TimeGreeting: React.FC = () => {
    const [greeting, setGreeting] = useState<{
        text: string;
        icon: React.ReactNode;
    } | null>(null);

    useEffect(() => {
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

    if (!greeting) return null;

    return (
        <div className="fixed top-4 right-4 z-40 animate-in fade-in slide-in-from-right-2 duration-500">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-foreground/5 border border-border/50 text-xs text-muted-foreground">
                {greeting.icon}
                <span>{greeting.text}</span>
            </div>
        </div>
    );
};

export default TimeGreeting;
