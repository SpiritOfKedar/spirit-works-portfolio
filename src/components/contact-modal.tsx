"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Send, Mail, User, MessageSquare, Sparkles } from "lucide-react";

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
            <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg px-4 animate-in fade-in-0 zoom-in-95 duration-200">
                <div className="relative bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
                    {/* Decorative gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 pointer-events-none" />

                    {/* Header */}
                    <div className="relative px-6 pt-6 pb-4 border-b border-border/50">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-foreground/5">
                                    <Sparkles className="w-5 h-5 text-foreground" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold tracking-tight">
                                        Let&apos;s Connect
                                    </h2>
                                    <p className="text-sm text-muted-foreground">
                                        I&apos;d love to hear from you
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-foreground/5 transition-colors"
                            >
                                <X className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="relative p-6 space-y-4">
                        {submitted ? (
                            <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                                <div className="w-16 h-16 mx-auto rounded-full bg-green-500/10 flex items-center justify-center">
                                    <Send className="w-8 h-8 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium">Opening Email Client...</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Your email app should open shortly
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <User className="w-4 h-4 text-muted-foreground" />
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-muted-foreground" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-muted-foreground" />
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="What's this about?"
                                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50"
                                    />
                                </div>

                                {/* Message Field */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        placeholder="Your message..."
                                        className="w-full px-4 py-3 rounded-xl bg-foreground/5 border border-border/50 focus:border-foreground/20 focus:ring-2 focus:ring-foreground/10 outline-none transition-all placeholder:text-muted-foreground/50 resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-4 rounded-xl bg-foreground text-background font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-muted-foreground">
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

