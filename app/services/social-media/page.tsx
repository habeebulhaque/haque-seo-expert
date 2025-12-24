import {
    Share2,
    Users,
    MessageCircle,
    Heart,
    Camera,
    Video,
    TrendingUp,
    BarChart,
    Target,
    Zap,
    CheckCircle,
    Layers,
    Globe,
    Smile,
    PenTool
} from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";
import SocialFaq from '@/components/SocialFaq';

export const metadata = {
    title: "Social Media Marketing Expert in Dubai | Meta Expert in UAE",
    description: "Build a loyal community and drive engagement with strategic social media marketing. Content creation, community management, and paid social for Dubai brands.",
};

export default function SocialMediaServices() {
    const services = [
        {
            icon: Share2,
            title: "Social Strategy",
            desc: "We develop a roadmap tailored to your brand goals. From platform selection to content pillars, we ensure every post serves a purpose.",
            points: ["Platform audit & selection.", "Content pillar development.", "Competitor analysis."]
        },
        {
            icon: PenTool,
            title: "Content Creation",
            desc: "Stop the scroll with stunning visuals and compelling copy. We create high-quality graphics, videos, and captions that resonate with your audience.",
            points: ["Graphic design & video.", "Copywriting & captions.", "Brand voice development."]
        },
        {
            icon: MessageCircle,
            title: "Community Management",
            desc: "Turn followers into fans. We actively engage with your audience, responding to comments and messages to build trust and loyalty.",
            points: ["24/7 monitoring.", "Comment & DM response.", "Crisis management."]
        },
        {
            icon: Target,
            title: "Paid Social Ads",
            desc: "Amplify your reach with targeted ad campaigns. We manage budgets and creatives on Facebook, Instagram, LinkedIn, and TikTok to drive conversions.",
            points: ["Ad creative & copy.", "Audience targeting.", "Budget optimization."]
        },
        {
            icon: Users,
            title: "Influencer Marketing",
            desc: "Leverage the trust of industry leaders. We connect you with influencers who align with your brand to reach new, engaged audiences.",
            points: ["Influencer identification.", "Campaign management.", "Performance tracking."]
        },
        {
            icon: BarChart,
            title: "Analytics & Reporting",
            desc: "Know what's working. We provide detailed monthly reports on growth, engagement, and ROI, using data to refine our strategy.",
            points: ["Engagement metrics.", "Audience insights.", "ROI tracking."]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 bg-primary/5">
                            Social Media Marketing in Dubai
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
                            Social Media Expert <br />
                            <span className="text-primary">in Dubai</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Social media is more than just posting pictures. It&apos;s about building relationships with your Dubai audience. I help brands find their voice, tell their story, and connect with customers on a deeper level.
                        </p>
                        <Link href="#social-form" className="bg-[#D4AF37] hover:bg-[#C5A028] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block text-sm uppercase tracking-wider">
                            Start Your Social Growth
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <div className="aspect-video relative">
                                <Image
                                    src="/services-banner-social.png"
                                    alt="Social Media Marketing - Facebook & Instagram Ads Strategy"
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
                        <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900">Social Media Solutions</h2>
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
                        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Authenticity is the new currency. We help you spend it wisely.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Heart,
                                    title: "Brand Humanization",
                                    desc: "People buy from people. We showcase the human side of your brand to build emotional connections."
                                },
                                {
                                    icon: Video,
                                    title: "Visual Storytelling",
                                    desc: "A picture is worth a thousand words. We use high-impact visuals and video to tell your story at a glance."
                                },
                                {
                                    icon: Users,
                                    title: "Community First",
                                    desc: "We prioritize engagement over reach. Building a loyal tribe is more valuable than chasing viral hits."
                                },
                                {
                                    icon: TrendingUp,
                                    title: "Trend Adaptation",
                                    desc: "Social moves fast. We keep your brand relevant by adapting to new trends and platform features quickly."
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
                            { icon: Layers, title: "Cross-Platform", desc: "We create cohesive strategies that work across Instagram, LinkedIn, TikTok, and more." },
                            { icon: Zap, title: "Creative Agility", desc: "We produce content fast, allowing us to jump on trends before they fade." },
                            { icon: Smile, title: "Engagement Focus", desc: "We measure success by how many people talk TO you, not just about you." },
                            { icon: CheckCircle, title: "Data-Backed", desc: "We use analytics to understand what your audience wants and deliver more of it." },
                            { icon: Target, title: "Conversion Mindset", desc: "We never lose sight of the end goal: driving traffic and sales for your business." },
                            { icon: Globe, title: "Global Reach", desc: "We help you connect with audiences around the world, adapting content for cultural relevance." }
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
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-16">Social Workflow</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-100 -z-10"></div>

                        {[
                            { step: "1", icon: Share2, title: "Audit", desc: "Profile & Content review." },
                            { step: "2", icon: Target, title: "Strategy", desc: "Pillars & Voice definition." },
                            { step: "3", icon: Camera, title: "Create", desc: "Photo, Video & Copy." },
                            { step: "4", icon: MessageCircle, title: "Engage", desc: "Posting & Community." },
                            { step: "5", icon: BarChart, title: "Analyze", desc: "Reporting & Refining." }
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

                {/* Social Strategy Form Section */}
                <div id="social-form" className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 mb-24 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Start Now</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-slate-900">Start Your Social Growth</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Ready to build a loyal community? Fill out the form below to discover your social potential.</p>
                    </div>

                    <ContactForm serviceName="Social Media Service">
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
                                <label htmlFor="handle" className="block text-sm font-bold text-slate-700 mb-2">
                                    Website / Social Handle
                                </label>
                                <input
                                    type="text"
                                    name="handle"
                                    id="handle"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg"
                                    placeholder="@yourbrand"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="platform" className="block text-sm font-bold text-slate-700 mb-2">
                                    Primary Platform
                                </label>
                                <select
                                    name="platform"
                                    id="platform"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Platform</option>
                                    <option>Instagram</option>
                                    <option>LinkedIn</option>
                                    <option>TikTok</option>
                                    <option>Facebook</option>
                                    <option>Multi-channel</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">
                                    Service Needed
                                </label>
                                <select
                                    name="service"
                                    id="service"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Full Social Management</option>
                                    <option>Content Creation Only</option>
                                    <option>Paid Social Ads</option>
                                    <option>Influencer Campaigns</option>
                                    <option>Audit & Strategy</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="budget" className="block text-sm font-bold text-slate-700 mb-2">
                                    Monthly Budget (AED)
                                </label>
                                <select
                                    name="budget"
                                    id="budget"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Budget Range</option>
                                    <option>Less than 3,000 AED</option>
                                    <option>3,000 - 8,000 AED</option>
                                    <option>8,000 - 15,000 AED</option>
                                    <option>15,000 AED+</option>
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
                                placeholder="Tell us about your audience, engagement goals, and current challenges..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-slate-900 text-white font-bold py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg uppercase tracking-wider"
                        >
                            Launch Social Campaign
                        </button>
                    </ContactForm>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 font-serif text-center">Frequently Asked Questions</h2>
                    <SocialFaq />
                </div>

            </div>
        </div>
    );
}
