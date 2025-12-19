"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { X, Search, Home, User, GraduationCap, Mail, Code, Sparkles } from "lucide-react";
import { createPortal } from "react-dom";

interface CommandItem {
    id: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    action: () => void;
}

export const CommandPalette: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [mounted, setMounted] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    const commands: CommandItem[] = [
        {
            id: "home",
            label: "Home",
            description: "Go to the top of the page",
            icon: <Home className="w-4 h-4" />,
            action: () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
            },
        },
        {
            id: "about",
            label: "About",
            description: "Learn more about me",
            icon: <User className="w-4 h-4" />,
            action: () => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            },
        },
        {
            id: "education",
            label: "Education",
            description: "View my academic background",
            icon: <GraduationCap className="w-4 h-4" />,
            action: () => {
                document.getElementById("education")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            },
        },
        {
            id: "skills",
            label: "Skills",
            description: "See my technical skills",
            icon: <Sparkles className="w-4 h-4" />,
            action: () => {
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            },
        },
        {
            id: "projects",
            label: "Projects",
            description: "Browse my work and projects",
            icon: <Code className="w-4 h-4" />,
            action: () => {
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            },
        },
        {
            id: "contact",
            label: "Contact",
            description: "Get in touch with me",
            icon: <Mail className="w-4 h-4" />,
            action: () => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
            },
        },
    ];

    const filteredCommands = commands.filter(
        (cmd) =>
            cmd.label.toLowerCase().includes(search.toLowerCase()) ||
            cmd.description.toLowerCase().includes(search.toLowerCase())
    );

    // Reset selection when search changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [search]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            // Open with Cmd+K or Ctrl+K
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                setSearch("");
                setSelectedIndex(0);
            }

            if (!isOpen) return;

            // Navigate with arrow keys
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) =>
                    prev < filteredCommands.length - 1 ? prev + 1 : 0
                );
            }
            if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) =>
                    prev > 0 ? prev - 1 : filteredCommands.length - 1
                );
            }
            // Execute with Enter
            if (e.key === "Enter" && filteredCommands[selectedIndex]) {
                e.preventDefault();
                filteredCommands[selectedIndex].action();
            }
            // Close with Escape
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        },
        [isOpen, filteredCommands, selectedIndex]
    );

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    // Focus input when opened
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    const content = (
        <div className="fixed inset-0 z-[9999]">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <div className="fixed left-1/2 top-[15%] -translate-x-1/2 w-full max-w-xl px-4 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200">
                <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
                    {/* Search Input */}
                    <div className="flex items-center gap-3 px-4 py-4 border-b border-border/50">
                        <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                        <input
                            ref={inputRef}
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search for a section..."
                            className="flex-1 bg-transparent outline-none text-foreground text-lg placeholder:text-muted-foreground/60"
                        />
                        <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs bg-foreground/5 rounded-lg border border-border text-muted-foreground">
                            ESC
                        </kbd>
                    </div>

                    {/* Commands List */}
                    <div className="max-h-[320px] overflow-y-auto p-2">
                        {filteredCommands.length === 0 ? (
                            <div className="py-12 text-center">
                                <p className="text-muted-foreground">No results found</p>
                                <p className="text-sm text-muted-foreground/60 mt-1">
                                    Try a different search term
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-1">
                                {filteredCommands.map((cmd, index) => (
                                    <button
                                        key={cmd.id}
                                        onClick={cmd.action}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors text-left ${index === selectedIndex
                                                ? "bg-foreground/5"
                                                : "hover:bg-foreground/[0.03]"
                                            }`}
                                    >
                                        <span className={`p-2 rounded-lg transition-colors ${index === selectedIndex
                                                ? "bg-foreground text-background"
                                                : "bg-foreground/5 text-muted-foreground"
                                            }`}>
                                            {cmd.icon}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium">{cmd.label}</p>
                                            <p className="text-sm text-muted-foreground truncate">
                                                {cmd.description}
                                            </p>
                                        </div>
                                        {index === selectedIndex && (
                                            <kbd className="px-2 py-1 text-xs bg-foreground/5 rounded border border-border text-muted-foreground">
                                                ↵
                                            </kbd>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-3 border-t border-border/50 bg-foreground/[0.02]">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-4">
                                <span className="flex items-center gap-1.5">
                                    <kbd className="px-1.5 py-0.5 bg-foreground/5 rounded border border-border">↑</kbd>
                                    <kbd className="px-1.5 py-0.5 bg-foreground/5 rounded border border-border">↓</kbd>
                                    <span>Navigate</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <kbd className="px-1.5 py-0.5 bg-foreground/5 rounded border border-border">↵</kbd>
                                    <span>Open</span>
                                </span>
                            </div>
                            <span className="flex items-center gap-1.5">
                                <kbd className="px-1.5 py-0.5 bg-foreground/5 rounded border border-border">⌘</kbd>
                                <kbd className="px-1.5 py-0.5 bg-foreground/5 rounded border border-border">K</kbd>
                                <span>Toggle</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(content, document.body);
};

export default CommandPalette;
