"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function SocialFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "Which social media platforms should I be on?",
            a: "It depends on where your audience hangs out. B2B businesses often thrive on LinkedIn, while lifestyle brands see great results on Instagram and TikTok. We'll help you identify the best platforms for your specific goals."
        },
        {
            q: "How often should I post?",
            a: "Consistency is key. We typically recommend 3-5 times per week for most platforms to stay top-of-mind without overwhelming your audience. However, quality always trumps quantity."
        },
        {
            q: "Do you create the content?",
            a: "Yes! We handle everything from strategy and copywriting to graphic design and video editing. We create engaging content that reflects your brand voice and resonates with your followers."
        },
        {
            q: "Can you help with influencer marketing?",
            a: "Absolutely. We can identify relevant influencers, manage relationships, and oversee campaigns to amplify your brand's reach and credibility."
        },
        {
            q: "How do you measure ROI on social media?",
            a: "We look beyond vanity metrics like likes. We track engagement rates, click-through rates, and most importantly, conversions. We use tracking pixels to see exactly how social traffic contributes to your sales pipeline."
        },
        {
            q: "Do you handle community management?",
            a: "Yes. We monitor your channels, respond to comments and messages, and foster a sense of community around your brand. Active engagement is crucial for building trust and loyalty."
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
