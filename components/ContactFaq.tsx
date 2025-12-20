"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
    { q: "What is your typical onboarding process?", a: "We start with a kickoff call to align on goals, followed by a deep-dive audit of your current digital presence. Within 5 days, we present a comprehensive strategy roadmap for your approval." },
    { q: "Do you work with businesses outside of Dubai?", a: "Yes, we work with clients globally. Our team is accustomed to working across different time zones and we use async communication tools to ensure smooth collaboration." },
    { q: "What are your payment terms?", a: "We typically work on a monthly retainer basis with net-15 terms. For one-off projects, we require a 50% deposit upfront with the balance due upon completion." },
    { q: "How do you measure campaign success?", a: "We focus on KPIs that impact your bottom line: Revenue, ROAS, and Lead Quality. We provide transparent, real-time dashboards so you can track performance 24/7." },
];

export default function ContactFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden h-fit">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-bold text-black flex items-center gap-3">
                            <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            {faq.q}
                        </span>
                        {openIndex === i ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                        )}
                    </button>
                    <div
                        className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
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
