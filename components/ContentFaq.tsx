"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function ContentFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "What type of content do you create?",
            a: "We create a wide range of content including blog posts, whitepapers, case studies, website copy, email newsletters, and video scripts. Our goal is to create content that serves your specific business objectives."
        },
        {
            q: "How do you ensure the content matches our brand voice?",
            a: "We start with a comprehensive brand voice workshop. We analyze your existing materials, interview key stakeholders, and create a style guide to ensure every piece of content sounds exactly like you."
        },
        {
            q: "Is the content SEO-optimized?",
            a: "Always. We integrate SEO best practices into every stage of the content creation process, from keyword research to on-page optimization, ensuring your content ranks well and drives organic traffic."
        },
        {
            q: "How long should blog posts be?",
            a: "It depends on the topic and intent. We prioritize depth and quality over word count. Generally, we aim for comprehensive guides that fully answer the user's query, which often results in longer-form content (1,500+ words)."
        },
        {
            q: "Can you refresh our old content?",
            a: "Yes! Content refreshing is a high-ROI strategy. We audit your existing library, identify underperforming posts, and update them with new information, better formatting, and optimized keywords to boost their rankings."
        },
        {
            q: "How do you measure content success?",
            a: "We track metrics like organic traffic, time on page, bounce rate, and conversion rate. We also look at keyword rankings and backlink acquisition to gauge the overall authority your content is building."
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
