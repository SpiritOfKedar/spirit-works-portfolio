"use client";

import React, { useState } from "react";
import { ContactModal } from "./contact-modal";
import BlurFade from "@/components/magicui/blur-fade";
import { Mail } from "lucide-react";

interface ContactSectionProps {
    delay: number;
    twitterUrl: string;
    email: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
    delay,
    twitterUrl,
    email,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contact">
                <div className="grid items-center justify-center gap-4 px-2 sm:px-4 text-center md:px-6 w-full py-8 sm:py-12">
                    <BlurFade delay={delay}>
                        <div className="space-y-3 sm:space-y-4">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center gap-2 rounded-lg bg-foreground text-background px-3 py-1 text-sm hover:opacity-90 transition-opacity cursor-pointer"
                            >
                                <Mail className="w-3.5 h-3.5" />
                                Contact
                            </button>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Have a project in mind or just want to say hi? Click the button
                                above to send me a message, or reach out on{" "}
                                <a
                                    href={twitterUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Twitter
                                </a>
                                .
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                email={email}
            />
        </>
    );
};

export default ContactSection;
