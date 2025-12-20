"use client";

import { useEffect, useRef } from "react";

export const ScrollVibration = () => {
    const lastScrollY = useRef(0);
    const lastVibrationTime = useRef(0);

    useEffect(() => {
        // Check if vibration is supported
        const supportsVibration = 'vibrate' in navigator;

        if (!supportsVibration) {
            return;
        }

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
            const currentTime = Date.now();

            // Only vibrate if scrolled enough and enough time has passed
            // to avoid constant vibration
            if (scrollDelta > 50 && currentTime - lastVibrationTime.current > 100) {
                // Short, subtle vibration (10-20ms feels nice)
                navigator.vibrate(15);
                lastVibrationTime.current = currentTime;
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return null;
};

export default ScrollVibration;
