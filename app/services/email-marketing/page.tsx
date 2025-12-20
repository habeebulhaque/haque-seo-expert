import {
    Mail,
    Send,
    Users,
    BarChart,
    Target,
    Zap,
    CheckCircle,
    Layers,
    RefreshCw,
    MessageSquare,
    Inbox
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";
import EmailFaq from '@/components/EmailFaq';

export const metadata = {
    title: "Email Marketing Expert in Dubai | Klaviyo Expert in UAE",
    description: "Turn subscribers into loyal customers with personalized email campaigns. Newsletters, automation flows, and list management for Dubai businesses.",
};

export default function EmailMarketingServices() {
    const services = [
        {
            icon: Mail,
            title: "Campaign Strategy",
            desc: "We develop a calendar of campaigns that align with your business goals, ensuring you're sending the right message at the right time.",
            points: ["Campaign calendar.", "Segmentation strategy.", "Offer planning."]
        },
        {
            icon: RefreshCw,
            title: "Automated Flows",
            desc: "Generate revenue on autopilot. We build Welcome Series, Abandoned Cart, and Browse Abandonment flows that nurture leads 24/7.",
            points: ["Welcome series.", "Abandoned cart recovery.", "Post-purchase nurture."]
        },
        {
            icon: Users,
            title: "List Management",
            desc: "Keep your list healthy and engaged. We handle segmentation, cleaning, and growth strategies to ensure high deliverability.",
            points: ["List segmentation.", "Database cleaning.", "Deliverability optimization."]
        },
        {
            icon: Inbox,
            title: "Newsletter Creation",
            desc: "Stay top-of-mind with beautifully designed newsletters. We handle the copy, design, and scheduling to keep your audience engaged.",
            points: ["Custom design.", "Engaging copy.", "Regular scheduling."]
        },
        {
            icon: Target,
            title: "A/B Testing",
            desc: "Stop guessing. We test subject lines, send times, and content to continuously improve your open and click-through rates.",
            points: ["Subject line testing.", "Send time optimization.", "Content experiments."]
        },
        {
            icon: BarChart,
            title: "Analytics & Reporting",
            desc: "Track every click and sale. We provide detailed reports on campaign performance, revenue generated, and subscriber growth.",
            points: ["Revenue tracking.", "Engagement metrics.", "Growth analysis."]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 bg-primary/5">
                            Email Marketing in Dubai
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
                            Email Marketing Expert <br />
                            <span className="text-primary">in Dubai</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Email marketing has the highest ROI of any digital channel in the UAE market. I help you build a loyal list, send personalized messages, and automate your revenue generation so you can focus on running your business.
                        </p>
                        <Link href="#campaign-form" className="bg-primary hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
                            Get Free Email Audit
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
                                alt="Email Marketing Strategy"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-slate-900/10"></div>
                        </div>
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-3xl"></div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Services Grid */}
                <div>
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Capabilities</span>
                        <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900">Email Solutions</h2>
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
                        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Sending the right message, to the right person, at the right time.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Personalization",
                                    desc: "Generic blasts are dead. We use data to personalize every email, increasing relevance and engagement."
                                },
                                {
                                    icon: RefreshCw,
                                    title: "Automation",
                                    desc: "We build systems that work for you. Automated flows nurture leads and drive sales without manual effort."
                                },
                                {
                                    icon: CheckCircle,
                                    title: "Deliverability",
                                    desc: "We ensure your emails land in the Primary inbox, not the Spam folder, through technical best practices."
                                },
                                {
                                    icon: Users,
                                    title: "Retention",
                                    desc: "Acquiring a customer is expensive. We focus on keeping your existing customers happy and buying more."
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
                            { icon: Layers, title: "Full-Service", desc: "We handle everything: strategy, copy, design, and technical setup." },
                            { icon: Zap, title: "Speed to Value", desc: "We launch high-impact flows in the first 30 days to generate immediate ROI." },
                            { icon: MessageSquare, title: "Copy That Sells", desc: "Our copywriters know how to write subject lines that get opens and body copy that gets clicks." },
                            { icon: BarChart, title: "Data-Obsessed", desc: "We constantly test and optimize based on real performance data." },
                            { icon: Target, title: "Segmentation", desc: "We slice and dice your list to ensure every subscriber gets relevant content." },
                            { icon: Inbox, title: "Platform Experts", desc: "We know the ins and outs of Klaviyo, Mailchimp, and other top platforms." }
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
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-16">Email Workflow</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-100 -z-10"></div>

                        {[
                            { step: "1", icon: Users, title: "Audit", desc: "List & Campaign review." },
                            { step: "2", icon: Target, title: "Strategy", desc: "Segmentation & Flows." },
                            { step: "3", icon: Mail, title: "Create", desc: "Design & Copywriting." },
                            { step: "4", icon: Send, title: "Launch", desc: "Testing & Sending." },
                            { step: "5", icon: BarChart, title: "Optimize", desc: "Analysis & Iteration." }
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

                {/* Campaign Form Section */}
                <div id="campaign-form" className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 mb-24 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Start Now</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-slate-900">Start Your Email Growth Engine</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Ready to turn subscribers into customers? Fill out the form below to discuss your email strategy.</p>
                    </div>

                    <ContactForm serviceName="Email Marketing Service">
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
                                    Current Platform
                                </label>
                                <select
                                    name="platform"
                                    id="platform"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Platform</option>
                                    <option>Klaviyo</option>
                                    <option>Mailchimp</option>
                                    <option>ActiveCampaign</option>
                                    <option>HubSpot</option>
                                    <option>Other / None</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="listSize" className="block text-sm font-bold text-slate-700 mb-2">
                                    List Size (Subscribers)
                                </label>
                                <select
                                    name="listSize"
                                    id="listSize"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Less than 1,000</option>
                                    <option>1,000 - 10,000</option>
                                    <option>10,000 - 50,000</option>
                                    <option>50,000+</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="goal" className="block text-sm font-bold text-slate-700 mb-2">
                                    Primary Goal
                                </label>
                                <select
                                    name="goal"
                                    id="goal"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Goal</option>
                                    <option>Launch Automation Flows</option>
                                    <option>Monthly Newsletters</option>
                                    <option>Fix Deliverability Issues</option>
                                    <option>Full Account Management</option>
                                    <option>Audit & Strategy Only</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-bold text-slate-700 mb-2">
                                    Weekly/Monthly Budget (AED)
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
                                placeholder="Tell us about your current email setup and what you want to achieve..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-slate-900 text-white font-bold py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg uppercase tracking-wider"
                        >
                            Launch Campaign
                        </button>
                    </ContactForm>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 font-serif text-center">Frequently Asked Questions</h2>
                    <EmailFaq />
                </div>

            </div>
        </div>
    );
}
