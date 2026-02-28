"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send, Mail, User, MessageSquare, Zap } from "lucide-react";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    email: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
    isOpen,
    onClose,
    email,
}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
            formData.subject || "Message from Portfolio"
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        // Open email client
        window.location.href = mailtoLink;

        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: "", email: "", subject: "", message: "" });
                onClose();
            }, 2000);
        }, 500);
    };

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div className="fixed inset-0" style={{ zIndex: 9999 }}>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm px-4 animate-in fade-in-0 zoom-in-95 duration-200">
                {/* Glass UI modal container */}
                <div className="relative bg-background dark:bg-neutral-900 rounded-xl shadow-2xl overflow-hidden border border-border dark:border-neutral-800">
                    {/* Header */}
                    <div className="relative px-4 pt-4 pb-3 border-b border-border dark:border-neutral-800">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 rounded-lg bg-muted dark:bg-white/10">
                                    <Zap className="w-4 h-4 text-foreground" />
                                </div>
                                <div>
                                    <h2 className="text-base font-semibold tracking-tight">
                                        Let&apos;s Connect
                                    </h2>
                                    <p className="text-xs text-muted-foreground">
                                        I&apos;d love to hear from you
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-1.5 rounded-lg hover:bg-muted dark:hover:bg-white/10 transition-colors"
                            >
                                <X className="w-4 h-4 text-muted-foreground" />
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="relative p-4 space-y-3">
                        {submitted ? (
                            <div className="py-8 text-center space-y-3 animate-in fade-in zoom-in duration-300">
                                <div className="w-12 h-12 mx-auto rounded-full bg-green-500/10 flex items-center justify-center backdrop-blur-sm">
                                    <Send className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-base font-medium">Opening Email Client...</h3>
                                    <p className="text-xs text-muted-foreground mt-1">
                                        Your email app should open shortly
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Name Field */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium flex items-center gap-1.5">
                                        <User className="w-3 h-3 text-muted-foreground" />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium flex items-center gap-1.5">
                                        <Mail className="w-3 h-3 text-muted-foreground" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium flex items-center gap-1.5">
                                        <Zap className="w-3 h-3 text-muted-foreground" />
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?"
                                        className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium flex items-center gap-1.5">
                                        <MessageSquare className="w-3 h-3 text-muted-foreground" />
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={3}
                                        placeholder="Your message..."
                                        className="w-full px-3 py-2 text-sm rounded-lg bg-muted/50 dark:bg-white/[0.05] border border-border dark:border-white/10 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-2 px-3 text-sm rounded-lg bg-foreground text-background font-medium flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-3.5 h-3.5" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                <p className="text-[10px] text-center text-muted-foreground">
                                    This will open your default email client
                                </p>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ContactModal;
