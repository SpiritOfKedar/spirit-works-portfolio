"use client";

import React, { useState, useEffect } from "react";

export const KeyboardHint: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Hide after 8 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="hidden sm:block fixed bottom-6 left-6 z-40 animate-in fade-in slide-in-from-left-2 duration-500">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border text-sm text-muted-foreground shadow-sm">
                <span>Press</span>
                <div className="flex items-center gap-0.5">
                    <kbd className="px-1.5 py-0.5 bg-background rounded border border-border text-xs font-mono">
                        ⌘
                    </kbd>
                    <kbd className="px-1.5 py-0.5 bg-background rounded border border-border text-xs font-mono">
                        K
                    </kbd>
                </div>
                <span>to navigate</span>
                <button
                    onClick={() => setIsVisible(false)}
                    className="ml-1 text-muted-foreground/60 hover:text-muted-foreground"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default KeyboardHint;
