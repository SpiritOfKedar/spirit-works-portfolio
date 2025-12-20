"use client";

import React, { useState } from "react";
import { Copy, Check, Mail } from "lucide-react";

interface CopyEmailProps {
    email: string;
}

export const CopyEmail: React.FC<CopyEmailProps> = ({ email }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
        }
    };

    return (
        <button
            onClick={handleCopy}
            className="hidden sm:flex fixed bottom-20 right-6 z-40 items-center gap-2 px-3 py-2 rounded-full bg-background border border-border shadow-lg hover:shadow-xl transition-all duration-300 group"
            title="Copy email address"
        >
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-300">
                {email}
            </span>
            {copied ? (
                <Check className="w-4 h-4 text-green-500" />
            ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
            )}
        </button>
    );
};

export default CopyEmail;
