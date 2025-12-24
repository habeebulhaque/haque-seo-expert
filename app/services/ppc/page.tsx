import {
    ArrowRight,
    Search,
    MousePointer,
    BarChart,
    Target,
    Zap,
    Layout,
    Smartphone,
    Globe,
    PieChart,
    DollarSign,
    TrendingUp,
    Users,
    CheckCircle,
    Layers,
    RefreshCw,
    Code
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";
import PpcFaq from '@/components/PpcFaq';

export const metadata = {
    title: "PPC Management Expert in Dubai | Google Ads Expert in UAE",
    description: "Data-driven PPC campaigns that drive immediate traffic and conversions for Dubai businesses. Google Ads, Social Ads, and Remarketing strategies.",
};

export default function PpcServices() {
    const services = [
        {
            icon: Search,
            title: "Google Search Ads",
            desc: "Capture high-intent traffic at the exact moment users are searching for your products or services. We optimize keywords, ad copy, and bidding strategies.",
            points: ["High-intent keyword targeting.", "Compelling ad copy creation.", "Continuous bid optimization."]
        },
        {
            icon: Layout,
            title: "Display Advertising",
            desc: "Build brand awareness with visually engaging ads across the Google Display Network. We target specific demographics and interests to reach your ideal audience.",
            points: ["Visual brand building.", "Audience interest targeting.", "Wide reach across the web."]
        },
        {
            icon: Smartphone,
            title: "Social Media Ads",
            desc: "Leverage the power of Facebook, Instagram, and LinkedIn to reach users where they spend their time. We create scroll-stopping creatives and precise audience segments.",
            points: ["Platform-specific strategies.", "Advanced audience segmentation.", "Creative A/B testing."]
        },
        {
            icon: RefreshCw,
            title: "Remarketing Campaigns",
            desc: "Re-engage users who have visited your site but didn't convert. We keep your brand top-of-mind and encourage them to return and complete their purchase.",
            points: ["Dynamic product retargeting.", "Cross-platform reach.", "Increased conversion rates."]
        },
        {
            icon: DollarSign,
            title: "Google Shopping",
            desc: "Showcase your products directly in search results. We optimize your product feeds and campaign structures to drive qualified traffic to your e-commerce store.",
            points: ["Product feed optimization.", "Smart Shopping campaigns.", "High-intent retail traffic."]
        },
        {
            icon: PieChart,
            title: "Conversion Rate Optimization",
            desc: "Don't just pay for clicks; pay for customers. We analyze landing page performance and user behavior to turn more of your traffic into paying clients.",
            points: ["Landing page testing.", "User behavior analysis.", "Funnel optimization."]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 bg-primary/5">
                            Paid Search & Social in Dubai
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
                            PPC Management Expert <br />
                            <span className="text-primary">in Dubai</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Stop wasting budget on clicks that don&apos;t convert. I build data-driven PPC campaigns that target your ideal customers in Dubai with laser precision, driving immediate traffic and measurable revenue growth.
                        </p>
                        <Link href="#ppc-form" className="bg-primary hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
                            Start Your Profitable Campaign
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <div className="aspect-video relative">
                                <Image
                                    src="/services-banner-ppc.png"
                                    alt="Advanced Google Ads PPC Analytics Dashboard"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-3xl"></div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Services Grid */}
                <div>
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Capabilities</span>
                        <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900">Comprehensive PPC Solutions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">{service.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                                    {service.desc}
                                </p>
                                <ul className="space-y-3">
                                    {service.points.map((point, i) => (
                                        <li key={i} className="flex items-start gap-3 text-xs text-slate-500 font-medium">
                                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Strategic Focus */}
                <div className="text-center">
                    <div className="relative z-10">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Methodology</span>
                        <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-4">Strategic Focus</h2>
                        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">We don't just buy clicks; we invest in profitable customer acquisition.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Precise Targeting",
                                    desc: "We go beyond basic demographics. We use intent signals, custom audiences, and lookalike modeling to find users who are ready to buy."
                                },
                                {
                                    icon: MousePointer,
                                    title: "Ad Copy Excellence",
                                    desc: "Your ad is your first impression. We craft compelling, benefit-driven copy that speaks directly to your customer's pain points and desires."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Bid Management",
                                    desc: "We use advanced bidding strategies to ensure you're paying the right price for every click, maximizing your budget efficiency."
                                },
                                {
                                    icon: BarChart,
                                    title: "Data Analysis",
                                    desc: "We live in the data. Continuous testing and analysis allow us to refine campaigns, cut wasted spend, and scale what works."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-left group h-full">
                                    <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Why We Win */}
                <div className="text-center">
                    <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Our Edge</span>
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-16">Why We Win</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Layers, title: "Full-Funnel Strategy", desc: "We align ads with every stage of the buyer's journey, from awareness to conversion." },
                            { icon: Zap, title: "Rapid Iteration", desc: "We test fast. New creatives, new audiences, new offers. We find the winners quickly." },
                            { icon: Users, title: "Audience Mastery", desc: "We understand your customer. We build detailed personas to ensure our messaging resonates." },
                            { icon: CheckCircle, title: "Transparent Reporting", desc: "No hidden fees. No jargon. Just clear reports showing exactly where your money went and what it returned." },
                            { icon: DollarSign, title: "Profit Focus", desc: "We don't optimize for vanity metrics like clicks. We optimize for ROAS and ROI." },
                            { icon: Globe, title: "Cross-Channel", desc: "We integrate search, social, and display for a cohesive brand presence across the web." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-left group">
                                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Optimization Workflow */}
                <div className="text-center">
                    <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Process</span>
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-16">Campaign Workflow</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-100 -z-10"></div>

                        {[
                            { step: "1", icon: Search, title: "Audit", desc: "Account & Market analysis." },
                            { step: "2", icon: Target, title: "Strategy", desc: "Audience & Keyword planning." },
                            { step: "3", icon: Code, title: "Setup", desc: "Tracking & Campaign build." },
                            { step: "4", icon: Zap, title: "Launch", desc: "Go-live & Monitoring." },
                            { step: "5", icon: TrendingUp, title: "Scale", desc: "Optimization & Growth." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center relative">
                                <div className="absolute -top-4 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                                    {item.step}
                                </div>
                                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white mb-4 mt-2">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-xs text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* PPC Strategy Form Section */}
                <div id="ppc-form" className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 mb-24 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Start Now</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-slate-900">Start Your Profitable Campaign</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Ready to scale your revenue? Fill out the form below to get a custom PPC strategy.</p>
                    </div>

                    <ContactForm serviceName="PPC Management Service">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    required
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg"
                                    placeholder="+971 50 123 4567"
                                />
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-bold text-slate-700 mb-2">
                                    Website URL
                                </label>
                                <input
                                    type="text"
                                    name="website"
                                    id="website"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg"
                                    placeholder="www.yourcompany.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="platform" className="block text-sm font-bold text-slate-700 mb-2">
                                    Interested Platform
                                </label>
                                <select
                                    name="platform"
                                    id="platform"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Platform</option>
                                    <option>Google Search Ads</option>
                                    <option>Facebook / Instagram Ads</option>
                                    <option>LinkedIn Ads</option>
                                    <option>Multi-Channel Strategy</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="spend" className="block text-sm font-bold text-slate-700 mb-2">
                                    Current Monthly Ad Spend
                                </label>
                                <select
                                    name="spend"
                                    id="spend"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>New Advertiser</option>
                                    <option>Less than 5,000 AED</option>
                                    <option>5,000 - 20,000 AED</option>
                                    <option>20,000 - 50,000 AED</option>
                                    <option>50,000 AED+</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="budget" className="block text-sm font-bold text-slate-700 mb-2">
                                    Target Monthly Budget (AED)
                                </label>
                                <select
                                    name="budget"
                                    id="budget"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Budget Range</option>
                                    <option>Less than 5,000 AED</option>
                                    <option>5,000 - 15,000 AED</option>
                                    <option>15,000 - 30,000 AED</option>
                                    <option>30,000 AED+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                                Project Details <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={5}
                                className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none rounded-lg"
                                placeholder="Tell us about your campaign goals, target audience, and current challenges..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-slate-900 text-white font-bold py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg uppercase tracking-wider"
                        >
                            Get Free Proposal
                        </button>
                    </ContactForm>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 font-serif text-center">Frequently Asked Questions</h2>
                    <PpcFaq />
                </div>

            </div>
        </div>
    );
}
