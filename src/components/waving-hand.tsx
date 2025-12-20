"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export const WavingHand = () => {
    const [shouldWave, setShouldWave] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShouldWave(true);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <motion.div
            className="inline-block origin-[70%_70%]"
            animate={shouldWave ? {
                rotate: [0, 14, -8, 14, -4, 10, 0],
            } : {}}
            transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
            }}
        >
            {/* Apple/iOS style waving hand emoji */}
            <Image
                src="https://em-content.zobj.net/source/apple/391/waving-hand_1f44b.png"
                alt="👋"
                width={64}
                height={64}
                className="w-8 h-8 sm:w-12 sm:h-12 xl:w-14 xl:h-14 object-contain"
                unoptimized
            />
        </motion.div>
    );
};

export default WavingHand;
