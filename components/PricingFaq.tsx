"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    { q: "How long does it take to see results?", a: "SEO is a long-term strategy. Typically, you can expect to see significant improvements in rankings and traffic within 3 to 6 months, depending on the competitiveness of your industry." },
    { q: "Do I have to sign a long-term contract?", a: "No. I believe in earning your business every month. My services are month-to-month, but I recommend committing to at least 6 months to see the full benefit of the strategy." },
    { q: "What makes you different from an agency?", a: "When you work with me, you work directly with the expert. No account managers, no junior staff. You get my personal attention and over 5 years of experience on every aspect of your campaign." },
    { q: "Do you guarantee #1 rankings?", a: "No ethical SEO expert can guarantee a #1 ranking because Google's algorithm is constantly changing. However, I guarantee transparent work, best practices, and a strategy focused on maximizing your ROI." },
];

export default function PricingFaq() {
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
