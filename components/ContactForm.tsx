"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";

interface ContactFormProps {
    serviceName: string;
    children: React.ReactNode;
}

export default function ContactForm({ serviceName, children }: ContactFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

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

            setIsSuccess(true);

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

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-green-50 rounded-lg border border-green-100 text-center min-h-[300px]">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600">Redirecting to WhatsApp to complete your inquiry...</p>
            </div>
        );
    }

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
