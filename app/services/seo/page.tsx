import {
    ArrowRight,
    Search,
    Share2,
    Cpu,
    MapPin,
    FileText,
    ShoppingCart,
    Smartphone,
    Globe,
    Mic,
    Video,
    PlayCircle,
    AppWindow,
    Building2,
    Briefcase,
    Link as LinkIcon,
    CheckCircle,
    Zap,
    Layers,
    User,
    BarChart,
    Target,
    RefreshCw,
    Code
} from 'lucide-react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import SeoFaq from '@/components/SeoFaq';

export const metadata = {
    title: "Freelance SEO Expert in Dubai | #1 SEO Consultant in UAE",
    description: "Comprehensive SEO services including Technical, Local, E-Commerce, and Enterprise SEO. Driving revenue and brand visibility.",
};

export default function SeoServices() {
    const services = [
        {
            icon: Search,
            title: "On-Page SEO",
            desc: "Optimize architecture, meta-data, and content to align with user intent and search algorithms. We refine headers, HTML tags, and internal linking structures.",
            points: ["Aligns content with user intent.", "Optimizes meta-data for CTR.", "Enhances semantic HTML structure."]
        },
        {
            icon: Share2,
            title: "Off-Page SEO",
            desc: "Build authority and trust through high-quality backlinks, digital PR, and brand mentions. We secure placements on authoritative industry sites.",
            points: ["Increases Domain Authority (DA).", "Drives high-value referral traffic.", "Enhances brand reputation."]
        },
        {
            icon: Cpu,
            title: "Technical SEO",
            desc: "Ensure your site is crawlable, fast, and secure. We fix core web vitals, optimize JavaScript rendering, and structure your sitemaps.",
            points: ["Optimizes Core Web Vitals.", "Ensures seamless indexing.", "Fixes crawl errors and broken links."]
        },
        {
            icon: MapPin,
            title: "Local SEO",
            desc: "Dominate the \"Dubai Map Pack\" and capture high-intent customers in your area. We optimize your Google Business Profile for UAE address formats and build local citations.",
            points: ["Ranks for \"Near Me\" searches in Dubai.", "Optimizes Jumeirah/Marina targeting.", "Builds consistent local UAE citations."]
        },
        {
            icon: FileText,
            title: "Content SEO",
            desc: "Create high-value content that answers user queries and establishes topical authority. We develop content clusters that cover subjects in-depth.",
            points: ["Builds topical authority clusters.", "Targets long-tail keywords.", "Refreshes stale content."]
        },
        {
            icon: ShoppingCart,
            title: "E-Commerce SEO",
            desc: "Drive sales in Dubai's competitive retail sector. We optimize product pages for bilingual (English/Arabic) intent and handle technical challenges for large catalogs.",
            points: ["Optimizes for AED pricing schema.", "Manages faceted navigation issues.", "Improves category page rankings."]
        },
        {
            icon: Smartphone,
            title: "Mobile SEO",
            desc: "Optimize for the mobile-first index with speed, touch-friendly design, and responsive layouts. We ensure your site performs flawlessly on smartphones.",
            points: ["Accelerates mobile load speeds.", "Optimizes UI for touch targets.", "Ensures content parity."]
        },
        {
            icon: Globe,
            title: "International SEO",
            desc: "Expand across the GCC. We implement correct Hreflang tags for Arabic and English versions, ensuring you rank correctly in UAE, Saudi Arabia, and Qatar.",
            points: ["Corrects Hreflang implementation.", "Adapts content for GCC culture.", "Targets region-specific engines."]
        },
        {
            icon: Mic,
            title: "Voice Search SEO",
            desc: "Capture conversational queries on Siri and Alexa with natural language optimization. We structure content to answer direct questions, aiming for \"Position Zero\".",
            points: ["Targets conversational keywords.", "Optimizes for \"Near Me\" intent.", "Structures data for direct answers."]
        },
        {
            icon: Video,
            title: "Video SEO",
            desc: "Rank your videos in search results with schema, transcripts, and optimized metadata. We help your rich media assets appear in Google Video search.",
            points: ["Optimizes titles and descriptions.", "Implements VideoObject schema.", "Creates indexable transcripts."]
        },
        {
            icon: PlayCircle,
            title: "YouTube SEO",
            desc: "Grow your channel with keyword-driven video strategies and engagement optimization. We optimize titles, tags, and descriptions to increase watch time.",
            points: ["Targets high-volume video topics.", "Optimizes tags and playlists.", "Increases watch time retention."]
        },
        {
            icon: AppWindow,
            title: "App Store Optimization",
            desc: "Increase app installs by ranking higher in the App Store and Google Play. We optimize keywords, visuals, and descriptions to drive organic downloads.",
            points: ["Optimizes App Title & Keywords.", "A/B tests screenshots and icons.", "Improves ratings and reviews."]
        },
        {
            icon: Building2,
            title: "Enterprise SEO",
            desc: "Scalable strategies for massive websites requiring governance and automation. We manage complex architectures and crawl budgets for sites with thousands of pages.",
            points: ["Manages crawl budget at scale.", "Automates technical fixes.", "Establishes SEO governance."]
        },
        {
            icon: Briefcase,
            title: "B2B SEO",
            desc: "Generate high-quality leads by targeting decision-maker intent and long sales cycles. We focus on high-value keywords that drive MQLs and SQLs.",
            points: ["Targets commercial intent.", "Promotes whitepapers & case studies.", "Aligns with ABM strategies."]
        },
        {
            icon: LinkIcon,
            title: "Link Building SEO",
            desc: "Acquire authority in the UAE. We secure placements on top regional sites (like Gulf News, Khaleej Times) and niche local blogs to boost your Dubai domain authority.",
            points: ["Secures high-DR UAE back links.", "Reclaims broken local links.", "Executes guest posting campaigns."]
        }
    ];

    return (
        <div className="min-h-screen pt-32 pb-16 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="inline-block py-1 px-3 rounded-full border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase mb-6 bg-primary/5">
                            Comprehensive SEO Services in Dubai
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-tight">
                            Freelance SEO Expert <br />
                            <span className="text-primary">in Dubai</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            I help Dubai&apos;s F&B, Retail & SMEs dominate search results. Leveraging <strong>Generative Engine Optimization (GEO)</strong>, <strong>Entity-First Indexing</strong>, and <strong>RAG</strong> frameworks to future-proof your visibility and turn clicks into customers.
                        </p>
                        <Link href="#seo-form" className="bg-primary hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 inline-block">
                            Start Your SEO Transformation
                        </Link>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                alt="SEO Analytics Dashboard"
                                className="w-full h-auto object-cover"
                            />
                            {/* Overlay to darken image slightly for better text contrast if needed, or just style */}
                            <div className="absolute inset-0 bg-slate-900/10"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-primary/5 rounded-3xl"></div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Methodology Section */}
                <div className="mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Column 1 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <Layers className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">The Future of Search: RAG & Entities</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                SEO in Dubai is no longer just about keywords. The UAE search landscape has evolved into a complex ecosystem involving Voice Search (AEO), Local Maps for tourist-heavy areas, and now, Generative AI. To win in this market, you must optimize for &quot;Entities&quot; and &quot;User Intent,&quot; ensuring your brand is recognized as the authority in the region.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We view SEO as a holistic discipline. By leveraging <strong>Retrieval-Augmented Generation (RAG)</strong> principles, we structure your content so that AI models can easily parse and cite it. This future-proofs your digital presence against volatility and secures visibility in the zero-click era.
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold font-serif text-slate-900">Our Methodology</h2>
                            </div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Our approach is scientific and data-driven. We start with a forensic audit to identify technical shackles. We then layer on a content strategy built on &quot;Topical Authority&quot; and <strong>E-E-A-T</strong> (Experience, Expertise, Authoritativeness, Trustworthiness), proving to Google that you are the expert in your niche.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Finally, we build trust locally. Through strategic Digital PR in publications like Gulf News and Khaleej Times, and white-hat link building, we signal to search engines that your brand is a leader in the Emirates. This three-pillared approach—Tech, Content, Authority—is the only way to achieve sustainable growth in UAE organic search.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Complete SEO Service Suite */}
                <div>
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Capabilities</span>
                        <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900">Complete SEO Service Suite</h2>
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
                        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">Balancing the needs of the algorithm with the needs of the human.</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: Cpu,
                                    title: "Technical Foundation",
                                    desc: "We build a solid infrastructure. Optimizing crawl budget, fixing Core Web Vitals, and implementing advanced Schema Markup to ensure search engines can index your site effortlessly."
                                },
                                {
                                    icon: FileText,
                                    title: "Semantic Content",
                                    desc: "Moving beyond keywords to \"Entities.\" We create comprehensive content clusters that cover topics in depth, satisfying user intent and establishing topical authority."
                                },
                                {
                                    icon: LinkIcon,
                                    title: "Authority Building",
                                    desc: "Earning trust through high-quality backlinks and Digital PR. We secure mentions on authoritative industry sites to signal your credibility to Google."
                                },
                                {
                                    icon: User,
                                    title: "User Experience",
                                    desc: "Rankings mean nothing if users bounce. We optimize for the \"Click\" and the \"Stick,\" improving CTR and Dwell Time by ensuring your site is helpful and engaging."
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
                            { icon: Layers, title: "Holistic Strategy", desc: "We align Technical, Content, and Entity SEO (Knowledge Graph) to create a unified signal of authority for Google." },
                            { icon: BarChart, title: "Data-Driven", desc: "Every decision is backed by analytics. We move based on what the data tells us, not gut feeling." },
                            { icon: Zap, title: "Future-Proof", desc: "We optimize for the future of search (AIO/GEO/RAG), ensuring you stay ahead of algorithm updates." },
                            { icon: CheckCircle, title: "Total Transparency", desc: "You own your data. We provide real-time dashboards and clear reporting on where every dollar goes." },
                            { icon: Target, title: "Revenue Focus", desc: "Rankings are vanity; revenue is sanity. We focus on keywords that drive actual business value and ROI." },
                            { icon: RefreshCw, title: "Agile Execution", desc: "We move fast. Our sprints allow us to pivot strategy quickly based on market changes and new AI updates." }
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
                    <h2 className="text-4xl font-bold mt-2 font-serif text-slate-900 mb-16">Optimization Workflow</h2>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-gray-100 -z-10"></div>

                        {[
                            { step: "1", icon: Search, title: "Audit", desc: "Technical & Content analysis." },
                            { step: "2", icon: Target, title: "Strategy", desc: "Keyword & Entity mapping." },
                            { step: "3", icon: Code, title: "Fix", desc: "Technical foundation repair." },
                            { step: "4", icon: FileText, title: "Content", desc: "Creation & Optimization." },
                            { step: "5", icon: LinkIcon, title: "Authority", desc: "Backlinks & Digital PR." }
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

                {/* SEO Strategy Form Section */}
                <div id="seo-form" className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 md:p-12 mb-24 max-w-5xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Start Now</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-slate-900">Start Your SEO Transformation</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Ready to dominate the search results? Fill out the form below to get a custom roadmap.</p>
                    </div>

                    <ContactForm serviceName="SEO Service">
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
                                <label htmlFor="goal" className="block text-sm font-bold text-slate-700 mb-2">
                                    Primary SEO Goal
                                </label>
                                <select
                                    name="goal"
                                    id="goal"
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                >
                                    <option>Select Goal</option>
                                    <option>Increase Organic Traffic</option>
                                    <option>Improve Keyword Rankings</option>
                                    <option>Fix Technical Issues</option>
                                    <option>Local Map Pack Visibility</option>
                                    <option>Recover from Penalty</option>
                                </select>
                            </div>
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
                                    <option>3,000 - 10,000 AED</option>
                                    <option>10,000 - 25,000 AED</option>
                                    <option>25,000 AED+</option>
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
                                placeholder="Describe your current SEO challenges and what you hope to achieve..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-slate-900 text-white font-bold py-5 rounded-lg transition-all shadow-lg hover:shadow-xl text-lg uppercase tracking-wider"
                        >
                            Get Custom Strategy
                        </button>
                    </ContactForm>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 font-serif text-center">Frequently Asked Questions</h2>
                    <SeoFaq />
                </div>

            </div>
        </div>
    );
}
