import {
    FileText,
    PenTool,
    BookOpen,
    Video,
    Search,
    BarChart,
    Target,
    Zap,
    CheckCircle,
    Layers,
    Globe,
    Feather,
    Edit3
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";
import ContentFaq from '@/components/ContentFaq';

export const metadata = {
    title: "Content Marketing Expert in Dubai | Copywriting Expert in UAE",
    description: "High-quality content that ranks and converts. Blog posts, whitepapers, case studies, and copywriting services tailored to your Dubai brand.",
};

export default function ContentMarketingServices() {
    const services = [
        {
            icon: FileText,
            title: "Blog Writing",
            desc: "Consistent, high-quality blog posts that answer your audience's questions and establish your authority. We handle research, writing, and optimization.",
            points: ["Keyword-driven topics.", "Engaging storytelling.", "Consistent publishing."]
        },
        {
            icon: BookOpen,
            title: "Whitepapers & E-books",
            desc: "In-depth resources that generate leads. We create valuable gated content that demonstrates your expertise and captures prospect information.",
            points: ["Lead generation assets.", "Deep industry research.", "Professional formatting."]
        },
        {
            icon: Feather,
            title: "Website Copywriting",
            desc: "Turn visitors into customers with persuasive copy. We write headlines, product descriptions, and landing pages that drive action.",
            points: ["Conversion-focused copy.", "Brand voice alignment.", "Clear value propositions."]
        },
        {
            icon: Edit3,
            title: "Content Refresh",
            desc: "Revitalize your existing content. We update old posts with new data, better formatting, and improved SEO to regain lost rankings.",
            points: ["Historical optimization.", "Content audits.", "Ranking recovery."]
        },
        {
            icon: Video,
            title: "Video Scripts",
            desc: "Engage your audience with video. We write compelling scripts for explainers, social media, and YouTube to keep viewers watching.",
            points: ["Hook-driven intros.", "Clear calls to action.", "Visual storytelling cues."]
        },
        {
            icon: Search,
            title: "Content Strategy",
            desc: "A roadmap for success. We plan your content calendar, define your pillars, and ensure every piece serves a strategic business goal.",
            points: ["Topic clustering.", "Editorial calendars.", "Gap analysis."]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="inline-block mb-6">
                            <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-lg text-xs font-bold tracking-[0.2em] uppercase">
                                Content Marketing in Dubai
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
                            Content Marketing Expert <br />
                            <span className="text-[#D4AF37]">in Dubai</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Content is the fuel for your digital growth in the UAE. I create high-value, SEO-optimized content that educates your audience, builds trust, and turns casual readers into loyal customers.
                        </p>
                        <Link href="#content-form" className="bg-[#D4AF37] hover:bg-[#C5A028] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block text-sm uppercase tracking-wider">
                            Start Your Content Engine
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                            <img
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                alt="Content Marketing Team"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-[#D4AF37]/5 rounded-3xl"></div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Services Grid */}
                <div>
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Capabilities</span>
                        <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900">Content Solutions</h2>
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
                        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Quality over quantity. We create content that deserves to rank.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "User Intent",
                                    desc: "We don't just target keywords; we satisfy user intent. We answer the questions your audience is actually asking."
                                },
                                {
                                    icon: Layers,
                                    title: "Topic Clusters",
                                    desc: "We build authority by covering topics in depth. Interlinked content clusters signal expertise to search engines."
                                },
                                {
                                    icon: PenTool,
                                    title: "Expertise (E-E-A-T)",
                                    desc: "We demonstrate experience and expertise in every piece, building the trust required to rank in modern search."
                                },
                                {
                                    icon: Zap,
                                    title: "Distribution",
                                    desc: "Great content is useless if no one sees it. We plan distribution across social, email, and other channels."
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
                            { icon: Search, title: "SEO Integration", desc: "We don't bolt SEO on at the end. It's baked into the content creation process from day one." },
                            { icon: BarChart, title: "Data-Driven", desc: "We use data to find content gaps and opportunities that your competitors are missing." },
                            { icon: BookOpen, title: "Storytelling", desc: "We make even boring B2B topics engaging through the power of narrative and clear writing." },
                            { icon: CheckCircle, title: "Consistency", desc: "We keep the content machine running, ensuring you stay top-of-mind with regular updates." },
                            { icon: Target, title: "Conversion Focus", desc: "Every piece has a job to do. We optimize for the next step in the buyer's journey." },
                            { icon: Globe, title: "Scalability", desc: "We have the systems and team to scale content production without sacrificing quality." }
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
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-16">Content Workflow</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-100 -z-10"></div>

                        {[
                            { step: "1", icon: Search, title: "Research", desc: "Keywords & Competitors." },
                            { step: "2", icon: Target, title: "Plan", desc: "Calendar & Briefs." },
                            { step: "3", icon: PenTool, title: "Create", desc: "Drafting & Editing." },
                            { step: "4", icon: CheckCircle, title: "Optimize", desc: "SEO & Formatting." },
                            { step: "5", icon: BarChart, title: "Promote", desc: "Distribution & Links." }
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

                {/* Content Strategy Form Section */}
                <div id="content-form" className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 mb-24 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Start Now</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-slate-900">Start Your Content Engine</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Ready to build authority and drive traffic? Fill out the form below to discuss your content strategy.</p>
                    </div>

                    <ContactForm serviceName="Content Marketing Service">
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
                                <label htmlFor="contentType" className="block text-sm font-bold text-slate-700 mb-2">
                                    Content Type Needed
                                </label>
                                <select
                                    name="contentType"
                                    id="contentType"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Content Type</option>
                                    <option>Blog Posts (SEO)</option>
                                    <option>Website Copywriting</option>
                                    <option>Whitepapers / E-books</option>
                                    <option>Video Scripts</option>
                                    <option>Strategy Only</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="volume" className="block text-sm font-bold text-slate-700 mb-2">
                                    Est. Volume / Frequency
                                </label>
                                <select
                                    name="volume"
                                    id="volume"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>One-time Project</option>
                                    <option>4 Blog Posts / Month</option>
                                    <option>8 Blog Posts / Month</option>
                                    <option>12+ Blog Posts / Month</option>
                                    <option>Not Sure Yet</option>
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
                                    <option>Less than 2,000 AED</option>
                                    <option>2,000 - 5,000 AED</option>
                                    <option>5,000 - 10,000 AED</option>
                                    <option>10,000 AED+</option>
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
                                placeholder="Tell us about your brand voice, target audience, and goals..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-slate-900 text-white font-bold py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg uppercase tracking-wider"
                        >
                            Request Content Strategy
                        </button>
                    </ContactForm>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 font-serif text-center">Frequently Asked Questions</h2>
                    <ContentFaq />
                </div>

            </div>
        </div>
    );
}
