import Link from "next/link";
import { User, Award, TrendingUp, Zap, CheckCircle, Briefcase, Globe, ShoppingBag, Shield, MapPin } from 'lucide-react';

export const metadata = {
    title: "About Me | Freelance SEO Expert",
    description: "Learn more about my background, experience, and approach to SEO. I help businesses grow with data-driven strategies.",
};

export default function About() {
    return (
        <div className="min-h-screen bg-white text-black">
            {/* Hero Section (Split Layout) */}
            <section className="pt-32 pb-12 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left: Image */}
                        <div className="lg:w-1/2 relative">
                            <div className="relative z-10 rounded-lg overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                                <img
                                    src="/habeebul-haque.png"
                                    alt="Habeebul Haque"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-8">
                                    <h2 className="text-2xl font-bold text-white font-serif">Habeebul Haque</h2>
                                    <p className="text-primary text-sm uppercase tracking-widest mb-1">Digital Growth Strategist</p>
                                    <p className="text-white/80 text-xs uppercase tracking-wider">Ajman, UAE</p>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary opacity-50"></div>
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary opacity-50"></div>

                            {/* Experience Badge */}
                            <div className="absolute top-8 right-8 bg-white text-black p-4 rounded shadow-xl z-20 animate-fade-in-up">
                                <div className="text-3xl font-bold text-primary font-serif text-center">10+</div>
                                <div className="text-[10px] uppercase tracking-wider font-bold text-center">Years Exp.</div>
                            </div>
                        </div>

                        {/* Right: Content */}
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 border border-primary/30 rounded-full px-4 py-2 mb-6 bg-primary/5">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-primary text-xs font-bold uppercase tracking-widest">Performance Marketing Specialist</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif leading-tight text-slate-900">
                                Turning Clicks Into <br />
                                <span className="text-primary italic">Customers</span>
                            </h1>

                            <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 font-serif">
                                Habeebul Haque: Driving Revenue & Brand Visibility for F&B, Retail & SMEs.
                            </h2>
                            <p className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">
                                10+ Years in SEO & Performance Marketing (Google/Meta Ads)
                            </p>

                            <p className="text-lg text-gray-500 mb-6 leading-relaxed font-light">
                                I help brands turn clicks into customers and strategies into sales. With over 10 years of experience in digital marketing, I&apos;ve scaled online presence, generated high-quality leads, and boosted revenue for brands across Food & Beverage, Retail, E-commerce, and SMEs.
                            </p>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed font-light">
                                My approach combines technical SEO (Entity SEO, AIO, GEO) with data-driven performance marketing to deliver measurable ROI. I don&apos;t just drive traffic; I drive growth.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                                {[
                                    "F&B & Retail Specialist",
                                    "SME Growth Expert",
                                    "Google & Meta Ads Certified",
                                    "Entity SEO & AIO Strategist"
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                                        <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-primary mt-0.5">
                                            <CheckCircle className="w-3 h-3 text-primary fill-primary" />
                                        </div>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="bg-[#D4AF37] hover:bg-[#C5A028] text-white px-8 py-4 font-bold rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-sm uppercase tracking-wider">
                                    Work With Me
                                </Link>
                                <Link href="https://wa.me/971501234567" target="_blank" className="border-2 border-gray-200 hover:border-[#D4AF37] text-gray-600 hover:text-[#D4AF37] px-8 py-4 font-bold rounded-lg transition-all text-sm uppercase tracking-wider bg-white">
                                    WhatsApp Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <div className="w-full h-px bg-gray-200 my-10"></div>

            {/* Timeline Section */}
            <section className="py-12 bg-gray-50 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">My Journey</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-black">Professional Career Timeline</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-gray-200 hidden md:block"></div>

                        <div className="space-y-12">
                            {[
                                { year: "Jan 2024 – Present", role: "Digital Marketing Coordinator", company: "Bake Al Arab, Ajman, UAE", desc: "Leading the digital marketing team. Led initiatives resulting in a 70% increase in website traffic, a 70% improvement in search rankings, and a 40% rise in sales. Focus: Comprehensive SEO strategies and link analysis to boost domain authority." },
                                { year: "2022 – 2024", role: "Search Engine Optimization (Team Manager)", company: "Freelancer, Alappuzha, Kerala, India", desc: "Achieved a 20% increase in organic traffic within the first three months for clients. Focus: Managed cross-functional teams to improve search rankings by 15% across targeted keywords and maintained a 90%+ client satisfaction rate." },
                                { year: "2019 – 2022", role: "Search Engine Optimization (Team Lead)", company: "Addax Digital, Cochin, Kerala, India", desc: "Led a website restructuring that increased indexed pages by 25%. Collaborated on content strategies that drove a 30% increase in organic search traffic. Focus: Technical SEO (schema markup, site speed) and content optimization." },
                                { year: "2017 – 2019", role: "Digital Marketing Team Leader", company: "Adox Global Pvt Ltd, Cochin, Kerala, India", desc: "Implemented social media campaigns realizing a 40% improvement in click-through rates (CTR). Focus: Content marketing strategy leading to a 25% increase in organic social media engagement." },
                                { year: "2016 – 2017", role: "SEO Expert", company: "Freelance SEO/SEM/PPC Expert, Alappuzha, Kerala, India", desc: "Managed PPC campaigns that reduced cost-per-click (CPC) by 25% while sustaining high CTR. Focus: Expert guidance on SEO best practices leading to a 20% enhancement in overall online visibility." },
                            ].map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className="w-full md:w-[45%]">
                                        <div className={`bg-white border border-gray-100 p-8 hover:border-primary/30 transition-all group shadow-sm hover:shadow-xl rounded-sm ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                                            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{item.year}</span>
                                            <h3 className="text-xl font-bold text-slate-900 font-serif mb-1 group-hover:text-primary transition-colors">{item.role}</h3>
                                            <p className="text-sm text-slate-500 mb-4 italic">{item.company}</p>
                                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-[#0F1623] z-10 shadow-[0_0_10px_rgba(212,175,55,0.5)] hidden md:block"></div>

                                    <div className="w-full md:w-[45%] hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            {/* Career History Summary */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Career History</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-black">Complete Career Timeline (Quick Summary)</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-primary/20"></div>

                        <div className="space-y-12">
                            {[
                                { role: "Digital Marketing Coordinator", year: "2024 – Present", loc: "UAE" },
                                { role: "SEO Team Manager (Freelancer)", year: "2022 – 2024", loc: "Kerala" },
                                { role: "SEO Team Lead — Addax Digital", year: "2019 – 2022", loc: "Kerala" },
                                { role: "Digital Marketing Team Leader — Adox Global", year: "2017 – 2019", loc: "Kerala" },
                                { role: "SEO/SEM/PPC Expert (Freelancer)", year: "2016 – 2017", loc: "Kerala" },
                            ].map((item, index) => (
                                <div key={index} className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                                    {/* Text Content */}
                                    <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'text-center md:text-right' : 'text-center md:text-left'}`}>
                                        <h3 className="font-bold text-lg md:text-xl text-slate-900 font-serif mb-1">{item.role}</h3>
                                        <div className="text-primary text-sm font-semibold mb-2">{item.year}</div>
                                        <div className={`flex items-center gap-2 text-gray-500 text-sm justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                            <MapPin className="w-3 h-3" />
                                            <span>{item.loc}</span>
                                        </div>
                                    </div>

                                    {/* Dot */}
                                    <div className="w-3 h-3 bg-primary rounded-full z-10 outline outline-4 outline-white"></div>

                                    {/* Spacer for opposite side */}
                                    <div className="w-full md:w-[45%] hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            {/* Certifications Section */}
            <section className="py-12 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <span className="text-primary tracking-[0.2em] uppercase text-xs font-bold">Credentials</span>
                    <h2 className="text-3xl font-bold mt-2 mb-12 font-serif text-black">Certified Excellence</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Google Ads */}
                        <div className="border border-gray-100 p-8 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                            <div className="h-12 mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-slate-700 flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8">
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                    </svg>
                                    Google
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-1">Google Ads Certified</h3>
                            <p className="text-slate-500 text-xs">Search, Display, Video</p>
                        </div>

                        {/* Meta */}
                        <div className="border border-gray-100 p-8 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                            <div className="h-12 mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-slate-700 flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#0668E1] fill-current">
                                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5.01 3.69 9.12 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                                    </svg>
                                    Meta
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-1">Meta Blueprint</h3>
                            <p className="text-slate-500 text-xs">Media Buying Professional</p>
                        </div>

                        {/* HubSpot */}
                        <div className="border border-gray-100 p-8 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                            <div className="h-12 mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-slate-700 flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#FF7A59] fill-current">
                                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                        <circle cx="12" cy="12" r="3" />
                                        <circle cx="18" cy="6" r="1.5" />
                                        <circle cx="6" cy="18" r="1.5" />
                                        <line x1="12" y1="12" x2="18" y2="6" stroke="currentColor" strokeWidth="2" />
                                        <line x1="12" y1="12" x2="6" y2="18" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                    HubSpot
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-1">HubSpot Certified</h3>
                            <p className="text-slate-500 text-xs">Inbound Marketing</p>
                        </div>

                        {/* Google Analytics 4 */}
                        <div className="border border-gray-100 p-8 rounded-xl bg-white shadow-sm hover:shadow-lg transition-all flex flex-col items-center">
                            <div className="h-12 mb-4 flex items-center justify-center">
                                <span className="text-2xl font-bold text-slate-700 flex items-center gap-1">
                                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#F9AB00] fill-current">
                                        <path d="M16 6h2v14h-2V6zm-8 8h2v6H8v-6zm4-5h2v11h-2V9z" />
                                    </svg>
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg mb-1">Google Analytics 4</h3>
                            <p className="text-slate-500 text-xs">Advanced Qualification</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            {/* Values Section */}
            <section className="py-12 bg-white text-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">My Values</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif">Why Brands Trust Me</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Total Transparency", desc: "No hidden fees, no jargon. You get clear reports and direct access to me. I believe trust is earned through honesty." },
                            { icon: Globe, title: "Local Expertise", desc: "I understand the nuances of local markets. My strategies are tailored to connect you with customers in your specific area." },
                            { icon: TrendingUp, title: "Revenue Focused", desc: "Traffic is vanity, revenue is sanity. Every campaign I run is optimized to maximize your return on investment." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 border border-gray-100 hover:shadow-xl transition-all group rounded-sm">
                                <div className="w-14 h-14 bg-slate-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:border-primary transition-colors shadow-sm rounded-lg">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 font-serif text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            {/* Industries Footer */}
            <section className="py-12 bg-gray-50 text-black">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-10 font-serif">Industries I Empower</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: ShoppingBag, name: "E-Commerce" },
                            { icon: Briefcase, name: "B2B Services" },
                            { icon: User, name: "Healthcare" },
                            { icon: Globe, name: "SaaS" },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-4 p-6 border border-gray-100 hover:border-primary/30 transition-all bg-white shadow-sm hover:shadow-md rounded-sm group">
                                <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                <span className="font-bold text-sm uppercase tracking-wider text-slate-900">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div >
    );
}
