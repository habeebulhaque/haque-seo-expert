"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function WebFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            q: "How long does it take to build a website?",
            a: "A standard business website typically takes 4-6 weeks from kickoff to launch. E-commerce sites or more complex web applications may take 8-12 weeks. We provide a detailed timeline at the start of every project."
        },
        {
            q: "Will my website be mobile-friendly?",
            a: "Absolutely. We design with a mobile-first approach, ensuring your site looks and functions perfectly on smartphones, tablets, and desktops. This is crucial for both user experience and SEO."
        },
        {
            q: "Do you use templates or custom design?",
            a: "We primarily do custom design to ensure your website is unique to your brand. While we may use frameworks to speed up development, the visual design and user experience are tailored specifically to your goals."
        },
        {
            q: "Will I be able to update the site myself?",
            a: "Yes. We build on user-friendly Content Management Systems (CMS) like WordPress, Webflow, or Shopify. We provide training and video tutorials so you can easily update text, images, and products."
        },
        {
            q: "Do you handle hosting and maintenance?",
            a: "Yes. We offer ongoing maintenance packages that include secure hosting, daily backups, software updates, and security monitoring to keep your site running smoothly."
        },
        {
            q: "Is SEO included in the web design?",
            a: "We build every site with a solid technical SEO foundation (fast load speeds, clean code, mobile optimization). For ongoing ranking improvements, we recommend pairing your new site with our SEO services."
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
