"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ContactFormProps {
    serviceName: string;
    children: React.ReactNode;
}

export default function ContactForm({ serviceName, children }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // 1. Send Email
            await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, service: serviceName }),
            });

            // 2. Wait 1 second
            await new Promise(resolve => setTimeout(resolve, 1000));

            // 3. WhatsApp Redirect
            // Format message for WhatsApp
            const waMessage = `*New ${serviceName} Inquiry*\n\n` +
                Object.entries(data)
                    .map(([key, value]) => `*${key.charAt(0).toUpperCase() + key.slice(1)}*: ${value}`)
                    .join('\n');

            const encodedMessage = encodeURIComponent(waMessage);
            const waUrl = `https://wa.me/971547547123?text=${encodedMessage}`;

            window.open(waUrl, '_blank');

        } catch (error) {
            console.error("Submission error", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 relative">
            {children}
            {isSubmitting && (
                <div className="absolute inset-0 bg-white/50 z-50 flex items-center justify-center rounded-lg">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                        <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                </div>
            )}
        </form>
    );
}
