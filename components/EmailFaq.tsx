"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function EmailFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "How often should I send emails?",
            a: "It depends on your business and audience. For most brands, a weekly newsletter is a great starting point. We'll help you find the sweet spot where you stay top-of-mind without annoying your subscribers."
        },
        {
            q: "What is a good open rate?",
            a: "Average open rates vary by industry, but generally, 20-25% is considered good. We use A/B testing on subject lines and send times to consistently push your open rates above industry benchmarks."
        },
        {
            q: "Can you help me build my email list?",
            a: "Yes. We implement lead magnets, popup forms, and landing pages designed to capture email addresses. We focus on quality over quantity, attracting subscribers who are genuinely interested in your offer."
        },
        {
            q: "Do you handle automation flows?",
            a: "Absolutely. We set up automated flows like Welcome Series, Abandoned Cart recovery, and Post-Purchase follow-ups. These run in the background 24/7, generating revenue while you sleep."
        },
        {
            q: "How do you avoid the spam folder?",
            a: "We follow strict deliverability best practices. This includes authenticating your domain (DKIM, SPF, DMARC), cleaning your list regularly, and creating relevant, high-quality content that users actually want to open."
        },
        {
            q: "Which email platform do you use?",
            a: "We are experts in all major platforms including Klaviyo, Mailchimp, HubSpot, and ActiveCampaign. We can work with your existing tool or recommend the best one for your specific needs."
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
