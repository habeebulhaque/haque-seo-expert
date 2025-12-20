import {
    Layout,
    Smartphone,
    ShoppingCart,
    Zap,
    Search,
    Code,
    Target,
    CheckCircle,
    Layers,
    Monitor,
    PenTool,
    Globe
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from "@/components/ContactForm";
import WebFaq from '@/components/WebFaq';

export const metadata = {
    title: "Web Design Expert in Dubai | Web Development Expert in UAE",
    description: "Custom websites that look stunning and convert visitors. Responsive design, e-commerce solutions, and fast performance for Dubai businesses.",
};

export default function WebDesignServices() {
    const services = [
        {
            icon: Layout,
            title: "Custom Web Design",
            desc: "Unique designs that reflect your brand identity. We don't use cookie-cutter templates; we build experiences tailored to your audience.",
            points: ["Brand-aligned visuals.", "User-centric UI/UX.", "Custom interactions."]
        },
        {
            icon: Smartphone,
            title: "Responsive Development",
            desc: "Websites that look perfect on every device. We ensure a seamless experience whether your customers are on a phone, tablet, or desktop.",
            points: ["Mobile-first approach.", "Cross-browser compatibility.", "Touch-friendly interfaces."]
        },
        {
            icon: ShoppingCart,
            title: "E-Commerce Solutions",
            desc: "Online stores that sell. We build secure, high-converting e-commerce sites on platforms like Shopify and WooCommerce.",
            points: ["Secure checkout.", "Inventory management.", "Conversion optimization."]
        },
        {
            icon: Zap,
            title: "Speed Optimization",
            desc: "Fast sites rank better and convert more. We optimize code, images, and caching to ensure your site loads in the blink of an eye.",
            points: ["Core Web Vitals.", "Image compression.", "Code minification."]
        },
        {
            icon: Search,
            title: "SEO-Friendly Structure",
            desc: "Built to rank. We implement proper heading structures, schema markup, and clean URLs from day one to give you a head start in search.",
            points: ["Semantic HTML.", "Schema markup.", "Fast indexing."]
        },
        {
            icon: Code,
            title: "CMS Integration",
            desc: "Take control of your content. We build on user-friendly platforms like WordPress and Webflow so you can easily update your site.",
            points: ["Easy content editing.", "Custom fields.", "Training provided."]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 bg-primary/5">
                            Web Design & Development Dubai
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
                            Web Design Expert <br />
                            <span className="text-primary">in Dubai</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Your website is your digital storefront in Dubai. I design and build high-performance websites that not only look stunning but also drive conversions and rank high in search engines.
                        </p>
                        <Link href="#project-form" className="bg-primary hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
                            Start Your Project
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop"
                                alt="Web Design Studio"
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
                        <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900">Web Solutions</h2>
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
                        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Beauty meets function. We build sites that perform.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Target,
                                    title: "Conversion First",
                                    desc: "We design with the end goal in mind. Every element is placed strategically to guide users toward conversion."
                                },
                                {
                                    icon: Smartphone,
                                    title: "Mobile Optimization",
                                    desc: "With mobile traffic dominating, we ensure your site provides a flawless experience on small screens."
                                },
                                {
                                    icon: Zap,
                                    title: "Performance",
                                    desc: "Speed is a feature. We optimize every line of code to ensure your site loads instantly."
                                },
                                {
                                    icon: Search,
                                    title: "SEO Foundation",
                                    desc: "We build sites that Google loves, giving you a competitive advantage in search results from launch."
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
                            { icon: PenTool, title: "Custom Design", desc: "No templates. We create a unique visual identity that sets you apart from the competition." },
                            { icon: Code, title: "Clean Code", desc: "We write semantic, standards-compliant code that is easy to maintain and scale." },
                            { icon: CheckCircle, title: "Reliability", desc: "We test rigorously to ensure your site works perfectly on all browsers and devices." },
                            { icon: Layers, title: "Scalability", desc: "We build with the future in mind, ensuring your site can grow as your business grows." },
                            { icon: Monitor, title: "UX Focused", desc: "We prioritize user experience, making it easy for visitors to find what they need." },
                            { icon: Globe, title: "Support", desc: "We don't disappear after launch. We're here to support you with updates and improvements." }
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
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-16">Design Workflow</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-100 -z-10"></div>

                        {[
                            { step: "1", icon: Search, title: "Discovery", desc: "Goals & Requirements." },
                            { step: "2", icon: Layout, title: "Design", desc: "Wireframes & Mockups." },
                            { step: "3", icon: Code, title: "Develop", desc: "Coding & Integration." },
                            { step: "4", icon: CheckCircle, title: "Test", desc: "QA & Browser Testing." },
                            { step: "5", icon: Zap, title: "Launch", desc: "Deployment & Training." }
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

                {/* Contact Form Section */}
                <div id="project-form" className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 mb-24 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Start Now</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-slate-900">Start Your Web Design Project</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Ready to build something amazing? Fill out the form below to get a custom quote for your project.</p>
                    </div>

                    <ContactForm serviceName="Web Design Service">
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
                                    Current Website (If any)
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
                                <label htmlFor="type" className="block text-sm font-bold text-slate-700 mb-2">
                                    Project Type
                                </label>
                                <select
                                    name="type"
                                    id="type"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Custom Website Design</option>
                                    <option>E-Commerce Store</option>
                                    <option>Website Redesign</option>
                                    <option>Landing Page</option>
                                    <option>Maintenance & Support</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="budget" className="block text-sm font-bold text-slate-700 mb-2">
                                    Budget (AED)
                                </label>
                                <select
                                    name="budget"
                                    id="budget"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Budget Range</option>
                                    <option>Less than 5,000 AED</option>
                                    <option>5,000 - 10,000 AED</option>
                                    <option>10,000 - 20,000 AED</option>
                                    <option>20,000 - 50,000 AED</option>
                                    <option>50,000+ AED</option>
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
                                placeholder="Tell us about your goals, features you need, and any examples of sites you like..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-slate-900 text-white font-bold py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg uppercase tracking-wider"
                        >
                            Send Project Inquiry
                        </button>
                    </ContactForm>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 font-serif text-center">Frequently Asked Questions</h2>
                    <WebFaq />
                </div>

            </div>
        </div>
    );
}
