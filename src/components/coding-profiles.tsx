"use client";

import React, { useEffect, useState } from "react";
import { Trophy, Target, Flame, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LeetCodeStats {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    ranking: number;
}

interface GFGStats {
    totalProblemsSolved: number;
    currentStreak: number;
    maxStreak: number;
    codingScore: number;
}

const ProgressBar = ({
    value,
    max,
    color
}: {
    value: number;
    max: number;
    color: string;
}) => {
    const percentage = max > 0 ? (value / max) * 100 : 0;
    return (
        <div className="h-1.5 w-full bg-muted dark:bg-white/10 rounded-full overflow-hidden">
            <div
                className={`h-full rounded-full transition-all duration-500 ${color}`}
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
};

export const CodingProfiles: React.FC = () => {
    const [leetcode, setLeetcode] = useState<LeetCodeStats | null>(null);
    const [loading, setLoading] = useState(true);

    // GFG stats - manually updated (no reliable free API available)
    // Update these values from: https://www.geeksforgeeks.org/user/kedar_bargule/
    const gfg: GFGStats = {
        totalProblemsSolved: 74,
        currentStreak: 0,
        maxStreak: 5,
        codingScore: 274,
    };

    // Code360 (Naukri) stats - manually updated
    // Update these values from: https://www.naukri.com/code360/profile/LonMus
    const code360 = {
        totalProblemsSolved: 50,
        level: 5,
        username: "LonMus",
    };

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Fetch LeetCode stats
                const lcResponse = await fetch(
                    "https://leetcode-stats-api.herokuapp.com/spirit45"
                );
                if (lcResponse.ok) {
                    const lcData = await lcResponse.json();
                    setLeetcode(lcData);
                }
            } catch (error) {
                console.error("Failed to fetch LeetCode stats:", error);
            }

            setLoading(false);
        };

        fetchStats();
    }, []);

    return (
        <div className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                        Coding Profiles
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Problem Solving Journey
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Tracking my progress on competitive programming platforms
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
                {/* LeetCode Card */}
                <Link
                    href="https://leetcode.com/u/spirit45/"
                    target="_blank"
                    className="block group"
                >
                    <div className="relative p-5 rounded-xl bg-card dark:bg-white/[0.03] border border-border/50 transition-all duration-300 hover:bg-accent dark:hover:bg-white/[0.08] hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-black/10 hover:-translate-y-0.5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 rounded-lg bg-[#FFA116]/20">
                                    <Image src="/leetcode-logo.png" alt="LeetCode" width={24} height={24} className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">LeetCode</h3>
                                    <p className="text-xs text-muted-foreground">@spirit45</p>
                                </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {loading ? (
                            <div className="space-y-3 animate-pulse">
                                <div className="h-8 bg-white/10 rounded w-20" />
                                <div className="space-y-2">
                                    <div className="h-4 bg-white/10 rounded w-full" />
                                    <div className="h-4 bg-white/10 rounded w-3/4" />
                                </div>
                            </div>
                        ) : leetcode ? (
                            <>
                                {/* Total Solved */}
                                <div className="mb-4">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-foreground">
                                            {leetcode.totalSolved}
                                        </span>
                                        <span className="text-sm text-muted-foreground">
                                            / {leetcode.totalQuestions} solved
                                        </span>
                                    </div>
                                    {leetcode.ranking > 0 && (
                                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                            <Trophy className="w-3 h-3" />
                                            Rank #{leetcode.ranking.toLocaleString()}
                                        </p>
                                    )}
                                </div>

                                {/* Difficulty Breakdown */}
                                <div className="space-y-2.5">
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-green-400">Easy</span>
                                            <span className="text-muted-foreground">
                                                {leetcode.easySolved}/{leetcode.totalEasy}
                                            </span>
                                        </div>
                                        <ProgressBar
                                            value={leetcode.easySolved}
                                            max={leetcode.totalEasy}
                                            color="bg-green-400"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-yellow-400">Medium</span>
                                            <span className="text-muted-foreground">
                                                {leetcode.mediumSolved}/{leetcode.totalMedium}
                                            </span>
                                        </div>
                                        <ProgressBar
                                            value={leetcode.mediumSolved}
                                            max={leetcode.totalMedium}
                                            color="bg-yellow-400"
                                        />
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-xs mb-1">
                                            <span className="text-red-400">Hard</span>
                                            <span className="text-muted-foreground">
                                                {leetcode.hardSolved}/{leetcode.totalHard}
                                            </span>
                                        </div>
                                        <ProgressBar
                                            value={leetcode.hardSolved}
                                            max={leetcode.totalHard}
                                            color="bg-red-400"
                                        />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p className="text-sm text-muted-foreground">Unable to load stats</p>
                        )}
                    </div>
                </Link>

                {/* GeeksforGeeks Card */}
                <Link
                    href="https://www.geeksforgeeks.org/user/kedar_bargule/"
                    target="_blank"
                    className="block group"
                >
                    <div className="relative p-5 rounded-xl bg-card dark:bg-white/[0.03] border border-border/50 transition-all duration-300 hover:bg-accent dark:hover:bg-white/[0.08] hover:shadow-md dark:hover:shadow-xl dark:hover:shadow-black/10 hover:-translate-y-0.5">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 rounded-lg bg-[#2F8D46]/20">
                                    <Image src="/gfg-logo.svg" alt="GFG" width={24} height={24} className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">GeeksforGeeks</h3>
                                    <p className="text-xs text-muted-foreground">@kedar_bargule</p>
                                </div>
                            </div>
                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* GFG Stats - hardcoded */}
                        <>
                            {/* Total Solved */}
                            <div className="mb-4">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-3xl font-bold text-foreground">
                                        {gfg.totalProblemsSolved}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        problems solved
                                    </span>
                                </div>
                                {gfg.codingScore > 0 && (
                                    <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                        <Target className="w-3 h-3" />
                                        Coding Score: {gfg.codingScore}
                                    </p>
                                )}
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 rounded-lg bg-muted/50 dark:bg-white/[0.05]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Flame className="w-4 h-4 text-orange-400" />
                                        <span className="text-xs text-muted-foreground">Current Streak</span>
                                    </div>
                                    <p className="text-xl font-bold text-foreground">
                                        {gfg.currentStreak}
                                        <span className="text-xs text-muted-foreground ml-1">days</span>
                                    </p>
                                </div>
                                <div className="p-3 rounded-lg bg-muted/50 dark:bg-white/[0.05]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Trophy className="w-4 h-4 text-yellow-400" />
                                        <span className="text-xs text-muted-foreground">Max Streak</span>
                                    </div>
                                    <p className="text-xl font-bold text-foreground">
                                        {gfg.maxStreak}
                                        <span className="text-xs text-muted-foreground ml-1">days</span>
                                    </p>
                                </div>
                            </div>
                        </>
                    </div>
                </Link>
            </div >
        </div>
    );
};

export default CodingProfiles;
