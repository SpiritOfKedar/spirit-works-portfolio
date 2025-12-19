"use client";

import React, { useState } from "react";
import { Share2, Twitter, Linkedin, Link2, Check, X } from "lucide-react";

interface SocialShareProps {
    url: string;
    title: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const shareLinks = [
        {
            name: "Twitter",
            icon: <Twitter className="w-4 h-4" />,
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-4 h-4" />,
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        },
    ];

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <div className="fixed bottom-36 right-6 z-40">
            {/* Share options */}
            <div
                className={`absolute bottom-14 right-0 flex flex-col gap-2 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
            >
                {shareLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
                        title={`Share on ${link.name}`}
                    >
                        {link.icon}
                    </a>
                ))}
                <button
                    onClick={copyLink}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
                    title="Copy link"
                >
                    {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                    ) : (
                        <Link2 className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Main button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-12 h-12 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? "rotate-90" : ""
                    }`}
                title="Share portfolio"
            >
                {isOpen ? <X className="w-5 h-5" /> : <Share2 className="w-5 h-5" />}
            </button>
        </div>
    );
};

export default SocialShare;
