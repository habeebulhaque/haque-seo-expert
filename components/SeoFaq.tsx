"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function SeoFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "What makes your SEO approach different?",
            a: "We don't just chase traffic; we chase revenue in Dubai's competitive market. Our approach combines technical precision with entity-based content strategies (building authority in the UAE) and conversion optimization. We also leverage the latest in AI and GEO (Generative Engine Optimization) to future-proof your rankings."
        },
        {
            q: "How long does it take to see results in Dubai?",
            a: "SEO is a marathon, not a sprint. In the UAE market, you'll typically see initial movement in 3-4 months, with significant ROI kicking in around months 6-9. However, our 'Quick Wins' audit often identifies technical fixes that can boost visibility in the first 30 days."
        },
        {
            q: "Do you guarantee #1 rankings?",
            a: "No ethical SEO expert can guarantee a #1 spot because Google's algorithm is a black box. What we DO guarantee is a transparent, data-backed strategy specifically for the Dubai region and measurable improvements in traffic, leads, and authority."
        },
        {
            q: "How do you handle Algorithm Updates?",
            a: "We monitor volatility daily. When an update hits, we analyze the winners and losers to understand the new ranking factors. Because our strategies are built on Google's core principles (E-E-A-T) and helpful content, our Dubai clients often see boosts during updates rather than penalties."
        },
        {
            q: "Is AI content safe for SEO?",
            a: "Yes, if done right. Google doesn't penalize AI content; it penalizes low-quality content. We use AI as a tool for research, but every piece is edited, fact-checked for UAE cultural relevance, and infused with your unique brand voice to ensure it ranks."
        },
        {
            q: "Do you work with local Dubai businesses?",
            a: "Absolutely. We have specialized Local SEO strategies designed to dominate the 'Dubai Map Pack' and drive foot traffic for brick-and-mortar businesses, service area businesses, and multi-location franchises across the Emirates."
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
