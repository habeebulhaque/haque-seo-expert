import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import ContactFaq from '@/components/ContactFaq';

export const metadata = {
    title: "Contact Habeebul Haque | Freelance Digital Marketing Consultant Dubai",
    description: "Get in touch with Habeebul Haque for a free digital marketing consultation. Expert SEO, PPC, and Web Design services in Dubai, UAE.",
};

export default function Contact() {
    return (
        <div className="min-h-screen pt-32 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Top Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-center">
                    {/* Left: Hero Image */}
                    <div className="relative rounded-3xl overflow-hidden h-[500px] shadow-2xl group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Team working"
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Location Overlay */}
                        <div className="absolute bottom-10 left-10 z-20 text-white">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                                </div>
                                <span className="text-sm font-bold tracking-widest uppercase text-white/90">Ajman, UAE</span>
                            </div>
                            <h2 className="text-4xl font-bold font-serif mb-1">Global Reach</h2>
                            <p className="text-white/70 text-sm tracking-wide">Local Expertise</p>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-0 right-0 bg-white p-5 rounded-tl-2xl z-30 flex items-center gap-4 min-w-[240px]">
                            <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center text-[#D4AF37]">
                                <Clock className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-900 text-lg">Fast Response</div>
                                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">WITHIN 24 HOURS</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <div className="inline-block mb-6">
                            <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-lg text-xs font-bold tracking-[0.2em] uppercase">
                                Get in Touch
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 font-serif mb-6 leading-[1.1]">
                            Let&apos;s Build Your <br />
                            <span className="text-[#D4AF37] italic">Digital Legacy</span>
                        </h1>

                        <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                            Ready to scale? My team of digital experts is standing by to analyze your needs and craft a winning roadmap. Whether you&apos;re looking to dominate search results or build a high-converting website, it all starts with a conversation.
                        </p>

                        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
                            {[
                                'Free Consultation', 'Custom Strategy',
                                'No Obligation', 'Direct Access'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                                    <div className="w-5 h-5 rounded-full border border-[#D4AF37] flex items-center justify-center flex-shrink-0 text-[#D4AF37]">
                                        <CheckCircle className="w-3 h-3" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#D4AF37] hover:bg-[#C5A028] text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm uppercase tracking-wider">
                                Start a Conversation
                            </button>
                            <button className="bg-white border-2 border-gray-100 hover:border-[#D4AF37] text-slate-900 px-8 py-4 rounded-lg font-bold transition-all hover:-translate-y-1 text-sm uppercase tracking-wider shadow-sm">
                                WhatsApp Us
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Bottom Section: Info & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Info Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Visit Us */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    Villa 15, Al Rowda 2,<br />Ajman, UAE
                                </p>
                            </div>
                        </div>

                        {/* Call Us */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                                <p className="text-slate-500 text-sm mb-1">+971 54 754 7123</p>
                                <p className="text-xs text-slate-400">Mon-Fri, 9am - 6pm EST</p>
                            </div>
                        </div>

                        {/* Email Us */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                                <p className="text-slate-500 text-sm">Ihabeebulhaque@gmail.com</p>
                            </div>
                        </div>

                        {/* Map Widget */}
                        <div className="h-64 rounded-2xl overflow-hidden shadow-sm border border-gray-100 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.2311409449208!2d55.51235!3d25.397072399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f774355122f3%3A0x8761c177740d0fff!2sVilla%2015!5e0!3m2!1sen!2sin!4v1766193991656!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:col-span-2 bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold mb-2 text-slate-900 font-serif">Send us a Message</h3>
                        <p className="text-slate-500 mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
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
                                        id="email"
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
                                        id="phone"
                                        className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-bold text-slate-700 mb-2">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all rounded-lg appearance-none"
                                    >
                                        <option>Select a topic</option>
                                        <option>SEO Audit</option>
                                        <option>PPC Campaign</option>
                                        <option>Content Strategy</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    className="w-full bg-slate-50 border border-gray-200 p-4 text-slate-900 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none rounded-lg"
                                    placeholder="Tell us about your project goals, budget, and timeline..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-primary hover:bg-slate-900 hover:text-white text-white font-bold text-lg transition-all shadow-lg hover:shadow-xl rounded-lg"
                            >
                                <Send className="w-5 h-5" /> Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Process Section */}
                <div className="mb-24 mt-24">
                    <div className="text-center mb-16">
                        <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Our Process</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 font-serif text-slate-900">How We Deliver Results</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We analyze your business, competitors, and market gaps to build a custom roadmap aligned with your goals." },
                            { step: "02", title: "Strategy & Execution", desc: "We deploy high-impact campaigns, optimize creative assets, and fix technical issues using agile workflows." },
                            { step: "03", title: "Scale & Optimize", desc: "We continuously refine based on real-time data, ensuring your ROI grows consistently month over month." },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group">
                                <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-primary font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-slate-900 font-serif text-center">Frequently Asked Questions</h2>
                    <ContactFaq />
                </div>
            </div>
        </div>
    );
}
