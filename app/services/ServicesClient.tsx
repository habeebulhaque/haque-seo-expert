"use client";

import Link from "next/link";
import {
    Search,
    MousePointer,
    Share2,
    FileText,
    Mail,
    Layout,
    BarChart2,
    Layers,
    Zap,
    RefreshCw,
    Target,
    TrendingUp,
    ChevronDown,
    ChevronUp,
    CheckCircle,
    HelpCircle
} from 'lucide-react';
import { useState } from "react";

export default function ServicesClient() {
    // FAQ State
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqs = [
        { q: "Which digital marketing service is best for me?", a: "It depends on your goals. SEO is great for long-term growth, while PPC delivers immediate results. We recommend a comprehensive audit to determine the best strategy for your specific business needs." },
        { q: "How long does it take to see results?", a: "SEO typically takes 3-6 months to show significant traction. PPC and Social Media ads can generate leads almost immediately. We provide a realistic timeline during our initial strategy session." },
        { q: "Do you offer custom packages?", a: "Yes! We understand that every business is unique. We build tailored strategies that align with your budget and objectives, rather than forcing you into a one-size-fits-all plan." },
        { q: "How do you measure success?", a: "We focus on revenue and ROI, not just vanity metrics like clicks or impressions. We track conversions, leads, and sales to ensure our efforts are directly impacting your bottom line." },
    ];

    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Content */}
                        <div className="lg:w-1/2 z-10">
                            <div className="inline-block mb-4">
                                <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold border-b border-primary pb-1">
                                    Growth Engine
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight">
                                Digital Marketing <br />
                                That Drives <span className="text-primary italic">Revenue</span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-8 leading-relaxed font-light">
                                Stop chasing vanity metrics. We build data-centric strategies that connect you with your ideal customers and turn clicks into actual sales.
                            </p>
                            <Link href="/contact" className="bg-primary hover:bg-white text-black px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all inline-block rounded-sm">
                                Get Your Growth Strategy
                            </Link>
                        </div>

                        {/* Right: Image */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-lg overflow-hidden border border-white/10 shadow-2xl shadow-primary/5">
                                <div className="bg-gray-50 aspect-video flex items-center justify-center p-8">
                                    {/* Abstract Dashboard UI Representation */}
                                    <div className="w-full h-full border border-gray-200 rounded bg-white p-4 relative shadow-sm">
                                        <div className="flex gap-4 mb-4">
                                            <div className="w-1/3 h-24 bg-primary/10 rounded border border-primary/20"></div>
                                            <div className="w-1/3 h-24 bg-gray-100 rounded"></div>
                                            <div className="w-1/3 h-24 bg-gray-100 rounded"></div>
                                        </div>
                                        <div className="w-full h-32 bg-gray-100 rounded mb-4"></div>
                                        <div className="flex gap-4">
                                            <div className="w-1/2 h-20 bg-gray-100 rounded"></div>
                                            <div className="w-1/2 h-20 bg-gray-100 rounded"></div>
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded shadow-lg animate-bounce-slow border border-gray-100">
                                            <div className="text-xs uppercase font-bold tracking-widest mb-1">ROI Increase</div>
                                            <div className="text-2xl font-bold text-green-600">+300%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Glow Effect */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-12"></div>

            {/* Intro Section */}
            <section className="py-12 bg-gray-50 border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-serif flex items-center gap-3">
                                <Layers className="text-primary w-6 h-6" />
                                The Digital Ecosystem
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Modern marketing isn&apos;t about isolated tactics. It&apos;s about creating a unified ecosystem where SEO, PPC, Social Media, and Content work together to amplify your brand&apos;s voice. We ensure every channel feeds into your growth goals.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 font-serif flex items-center gap-3">
                                <Target className="text-primary w-6 h-6" />
                                Our Approach
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                We move beyond guesswork. Our team analyzes market trends and consumer behavior to craft strategies that are mathematically predicted to succeed. From data collection to execution, precision is our priority.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-12"></div>

            {/* Full-Stack Marketing Suite */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif">Full-Stack Marketing Suite</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* SEO Service - Linked */}
                        <Link href="/services/seo" className="bg-white border border-gray-100 p-8 hover:border-primary/30 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-xl rounded-sm block">
                            <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                                <Search className="w-6 h-6 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 font-serif text-slate-900">SEO Visibility</h3>
                            <p className="text-slate-600 text-sm mb-6 leading-relaxed h-10">
                                Dominate search results with technical precision and content authority.
                            </p>
                            <ul className="space-y-2">
                                {["Audit & Strategy", "On-Page Optimization", "Authority Building"].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider">
                                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </Link>

                        {[
                            { icon: MousePointer, title: "PPC Advertising", desc: "Target your ideal customers with high-converting paid campaigns.", features: ["Google Ads", "Social Ads", "Retargeting"], href: "/services/ppc" },
                            { icon: Share2, title: "Social Media", desc: "Build a loyal community and engage with your audience authentically.", features: ["Content Creation", "Community Mgmt", "Influencer Outreach"], href: "/services/social-media" },
                            { icon: FileText, title: "Content Marketing", desc: "Tell your story with compelling content that educates and converts.", features: ["Blog Strategy", "Copywriting", "Video Scripts"], href: "/services/content-marketing" },
                            { icon: Mail, title: "Email Marketing", desc: "Nurture leads and retain customers with personalized email flows.", features: ["Automation", "Newsletter", "Drip Campaigns"], href: "/services/email-marketing" },
                            { icon: Layout, title: "Web Design & Dev", desc: "Create a stunning, fast, and conversion-focused digital experience.", features: ["UI/UX Design", "Next.js Development", "CRO"], href: "/services/web-design" },
                        ].map((service, i) => (
                            <Link key={i} href={service.href} className="bg-white border border-gray-100 p-8 hover:border-primary/30 transition-all group hover:-translate-y-2 duration-300 shadow-sm hover:shadow-xl rounded-sm block">
                                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                                    <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 font-serif text-slate-900">{service.title}</h3>
                                <p className="text-slate-600 text-sm mb-6 leading-relaxed h-10">
                                    {service.desc}
                                </p>
                                <ul className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider">
                                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-12"></div>

            {/* Strategic Focus */}
            <section className="py-16 bg-gray-50 border-y border-gray-200 text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Strategic Focus</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">The core pillars that fuel our methodology and deliver sustainable growth.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Data Intelligence", desc: "We don't guess. We analyze millions of data points to identify opportunities." },
                            { title: "Omni-channel Unity", desc: "Seamlessly integrating your message across all platforms for maximum impact." },
                            { title: "Creative Excellence", desc: "Standing out in a crowded market requires design that captures attention." },
                            { title: "ROI Obsession", desc: "Every dollar spent must contribute to your bottom line. We track everything." },
                            { title: "Agile Adaptation", desc: "The digital landscape changes fast. We pivot strategies to keep you ahead." },
                            { title: "Future-Ready", desc: "Leveraging the latest AI and tech to give you a competitive advantage." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 border border-gray-100 flex gap-4 items-start hover:bg-white hover:shadow-md transition-all rounded-sm">
                                <div className="mt-1">
                                    <CheckCircle className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-slate-900 font-bold mb-2">{item.title}</h4>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-12"></div>

            {/* Optimization Workflow */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Process</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif">Optimization Workflow</h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-200 -z-10"></div>

                        {[
                            { step: "01", title: "Audit", desc: "Deep Analysis" },
                            { step: "02", title: "Strategy", desc: "Custom Roadmap" },
                            { step: "03", title: "Execute", desc: "Implementation" },
                            { step: "04", title: "Optimize", desc: "Refining Data" },
                            { step: "05", title: "Scale", desc: "Growth Mode" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center w-40 bg-white">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-primary flex items-center justify-center text-xl font-bold text-black mb-4 shadow-lg">
                                    {item.step}
                                </div>
                                <h4 className="text-lg font-bold text-black mb-1">{item.title}</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-12"></div>

            {/* Case Study Highlight */}
            <section className="py-12 px-4">
                <div className="max-w-5xl mx-auto bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-8 md:p-12 relative overflow-hidden text-black shadow-lg">
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <span className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Success Story</span>
                            <h3 className="text-3xl font-bold text-black font-serif mb-4">E-Commerce Giant: Scaling Revenue 300%</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                A leading fashion retailer needed to scale their online sales. We implemented a full-funnel strategy combining SEO, Google Shopping Ads, and CRO, resulting in record-breaking revenue growth.
                            </p>
                            <div className="flex gap-8">
                                <div>
                                    <div className="text-4xl font-bold text-primary">300%</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">Revenue Increase</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-primary">5x</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">ROAS Achieved</div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="aspect-video bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center">
                                <BarChart2 className="w-16 h-16 text-gray-300" />
                            </div>
                        </div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[80px] -z-0"></div>
                </div>
            </section>



            <div className="w-full h-px bg-gray-200 my-12"></div>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-32">
                        <h2 className="text-3xl font-bold mb-12 text-black font-serif text-center">Frequently Asked Questions</h2>
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
                                        {openFaq === index ? <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
                                    </button>
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
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
                    </div>
                </div>
            </section>
        </div>
    );
}
