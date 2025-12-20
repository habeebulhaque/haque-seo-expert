"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function PpcFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "How much budget do I need for PPC?",
            a: "It depends on your industry and goals. We typically recommend starting with a budget that allows for at least 10-20 clicks per day to gather meaningful data. We'll help you calculate a budget that maximizes ROI without wasting spend."
        },
        {
            q: "PPC vs. SEO: Which is better?",
            a: "They work best together. PPC offers immediate visibility and traffic, while SEO builds long-term organic authority. We often use PPC insights to inform our SEO strategy, creating a powerful synergy."
        },
        {
            q: "Do you handle Google Shopping ads?",
            a: "Yes. We specialize in optimizing product feeds and campaign structures for Google Shopping to drive high-intent traffic directly to your product pages."
        },
        {
            q: "How do you track conversions?",
            a: "We set up comprehensive tracking using Google Analytics 4 (GA4) and Google Tag Manager (GTM). We track not just clicks, but valuable actions like form fills, purchases, and phone calls."
        },
        {
            q: "Can you help with Facebook/Instagram Ads?",
            a: "Absolutely. We create targeted social media ad campaigns to reach your audience where they spend their time, using advanced targeting to find your ideal customers."
        },
        {
            q: "What is your management fee?",
            a: "Our management fee is typically a percentage of your ad spend or a flat monthly fee, depending on the complexity of the account. We believe in transparency and will agree on all costs upfront."
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden h-fit">
                    <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-bold text-black flex items-center gap-3">
                            <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            {faq.q}
                        </span>
                        {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                    </button>
                    <div
                        className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                        <div className="overflow-hidden">
                            <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                {faq.a}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
