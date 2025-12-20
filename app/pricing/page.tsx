import Link from "next/link";
import { Check, ArrowRight, HelpCircle, X as XIcon, Minus } from 'lucide-react';
import PricingFaq from "@/components/PricingFaq";

export const metadata = {
    title: "Pricing Plans | Freelance SEO Expert",
    description: "Transparent pricing for SEO services. Choose the plan that fits your business goals and budget.",
};

export default function Pricing() {
    return (
        <div className="min-h-screen pt-32 pb-16 bg-white">
            {/* Header */}
            <div className="text-center mb-24 px-4">
                <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold border-b border-primary pb-1">
                    Investment
                </span>
                <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-6 text-black font-serif">
                    Transparent Pricing
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                    No hidden fees. No long-term contracts. Just results-driven SEO packages designed to grow your business.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-32">
                    {/* Starter Plan */}
                    <div className="bg-white border border-gray-100 p-8 relative group hover:border-primary/30 transition-all shadow-sm hover:shadow-xl rounded-sm">
                        <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">Starter</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-slate-900">$1,500</span>
                            <span className="text-slate-500">/mo</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-8 h-10">
                            Perfect for local businesses looking to establish a strong foundation.
                        </p>
                        <Link href="/contact" className="block w-full py-4 text-center border-2 border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-sm hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all mb-8 rounded-sm">
                            Get Started
                        </Link>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Technical SEO Audit</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Keyword Research (20 keywords)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>On-Page Optimization</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Google Business Profile Optimization</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Monthly Reporting</span>
                            </li>
                        </ul>
                    </div>

                    {/* Growth Plan (Highlighted) */}
                    <div className="bg-white border-2 border-primary p-8 relative transform md:-translate-y-4 shadow-2xl shadow-primary/10 rounded-sm">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 text-xs font-bold uppercase tracking-widest shadow-lg">
                            Most Popular
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">Growth</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-primary">$3,000</span>
                            <span className="text-slate-500">/mo</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-8 h-10">
                            Designed for growing companies ready to dominate their niche.
                        </p>
                        <Link href="/contact" className="block w-full py-4 text-center bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-black transition-all mb-8 shadow-lg hover:shadow-xl rounded-sm">
                            Get Started
                        </Link>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Everything in Starter</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Advanced Keyword Strategy (50+ keywords)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Content Strategy & Creation (2 posts/mo)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Link Building (High Authority)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Conversion Rate Optimization</span>
                            </li>
                        </ul>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white border border-gray-100 p-8 relative group hover:border-primary/30 transition-all shadow-sm hover:shadow-xl rounded-sm">
                        <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">Enterprise</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-bold text-slate-900">Custom</span>
                        </div>
                        <p className="text-slate-600 text-sm mb-8 h-10">
                            Tailored solutions for large organizations with complex needs.
                        </p>
                        <Link href="/contact" className="block w-full py-4 text-center border-2 border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-sm hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all mb-8 rounded-sm">
                            Contact Sales
                        </Link>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Everything in Growth</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>National / International SEO</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Dedicated Account Manager</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Custom Reporting Dashboard</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>Priority Support (24/7)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Feature Comparison Table */}
                <div className="mb-32 overflow-x-auto">
                    <h2 className="text-3xl font-bold mb-12 text-black font-serif text-center">Compare Plans</h2>
                    <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead>
                            <tr>
                                <th className="p-4 border-b border-gray-200 text-gray-500 font-normal w-1/4">Features</th>
                                <th className="p-4 border-b border-gray-200 text-black font-bold text-xl w-1/4">Starter</th>
                                <th className="p-4 border-b border-primary text-primary font-bold text-xl w-1/4 bg-primary/5">Growth</th>
                                <th className="p-4 border-b border-gray-200 text-black font-bold text-xl w-1/4">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-600">
                            {/* Strategy & Research */}
                            <tr>
                                <td colSpan={4} className="p-4 bg-gray-100 text-black font-bold mt-4">Strategy & Research</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Keyword Research</td>
                                <td className="p-4 border-b border-gray-200">20 Keywords</td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">50+ Keywords</td>
                                <td className="p-4 border-b border-gray-200">Unlimited</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Competitor Analysis</td>
                                <td className="p-4 border-b border-gray-200">Basic (Top 3)</td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">Deep Dive (Top 10)</td>
                                <td className="p-4 border-b border-gray-200">Comprehensive Market Study</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">SEO Audit</td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                            </tr>

                            {/* On-Page SEO */}
                            <tr>
                                <td colSpan={4} className="p-4 bg-gray-100 text-black font-bold">On-Page Optimization</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Meta Tags Optimization</td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Content Optimization</td>
                                <td className="p-4 border-b border-gray-200">5 Pages</td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">15 Pages</td>
                                <td className="p-4 border-b border-gray-200">All Priority Pages</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Schema Markup</td>
                                <td className="p-4 border-b border-gray-200"><Minus className="w-5 h-5 text-gray-400" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Internal Linking Strategy</td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                            </tr>

                            {/* Off-Page SEO */}
                            <tr>
                                <td colSpan={4} className="p-4 bg-gray-100 text-black font-bold">Off-Page & Authority</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Backlink Acquisition</td>
                                <td className="p-4 border-b border-gray-200">Basic Profile Building</td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">High Authority Outreach</td>
                                <td className="p-4 border-b border-gray-200">Custom PR Campaigns</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Google Business Profile</td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Local Citations</td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                            </tr>

                            {/* Content */}
                            <tr>
                                <td colSpan={4} className="p-4 bg-gray-100 text-black font-bold">Content Marketing</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Blog Posts / Articles</td>
                                <td className="p-4 border-b border-gray-200"><Minus className="w-5 h-5 text-gray-400" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">2 Per Month (1000+ words)</td>
                                <td className="p-4 border-b border-gray-200">4+ Per Month</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Content Strategy</td>
                                <td className="p-4 border-b border-gray-200"><Minus className="w-5 h-5 text-gray-400" /></td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5"><Check className="w-5 h-5 text-primary" /></td>
                                <td className="p-4 border-b border-gray-200"><Check className="w-5 h-5 text-primary" /></td>
                            </tr>

                            {/* Reporting */}
                            <tr>
                                <td colSpan={4} className="p-4 bg-gray-100 text-black font-bold">Reporting & Support</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Monthly Report</td>
                                <td className="p-4 border-b border-gray-200">Standard PDF</td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">Video Walkthrough + PDF</td>
                                <td className="p-4 border-b border-gray-200">Live Dashboard + Meeting</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Support Channel</td>
                                <td className="p-4 border-b border-gray-200">Email</td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">Email & Slack</td>
                                <td className="p-4 border-b border-gray-200">Priority Phone & Slack</td>
                            </tr>
                            <tr>
                                <td className="p-4 border-b border-gray-200">Strategy Calls</td>
                                <td className="p-4 border-b border-gray-200">Quarterly</td>
                                <td className="p-4 border-b border-gray-200 bg-primary/5 font-semibold text-black">Monthly</td>
                                <td className="p-4 border-b border-gray-200">Bi-Weekly</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Process Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-16 text-black font-serif text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Discovery", desc: "We start with a deep dive into your business goals, target audience, and current digital presence." },
                            { step: "02", title: "Strategy", desc: "I develop a custom roadmap identifying the highest-impact opportunities for growth." },
                            { step: "03", title: "Execution", desc: "Implementation of technical fixes, content creation, and authority building campaigns." },
                            { step: "04", title: "Growth", desc: "Continuous monitoring, reporting, and optimization to ensure sustained results." },
                        ].map((item, i) => (
                            <div key={i} className="relative">
                                <div className="text-6xl font-serif text-slate-100 font-bold absolute -top-8 -left-4 select-none">
                                    {item.step}
                                </div>
                                <div className="relative z-10 bg-white border border-gray-100 p-8 h-full hover:border-primary/50 transition-all shadow-sm hover:shadow-lg rounded-sm">
                                    <h3 className="text-xl font-bold text-slate-900 font-serif mb-4">{item.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Tools & Tech */}
                <div className="mb-32 text-center">
                    <h2 className="text-3xl font-bold mb-12 text-black font-serif">Premium Tools Stack</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">I use industry-leading enterprise software to give you a competitive edge.</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {["Ahrefs", "SEMrush", "Google Analytics", "Search Console", "Screaming Frog"].map((tool) => (
                            <span key={tool} className="text-xl font-bold text-gray-400 hover:text-primary transition-colors cursor-default">{tool}</span>
                        ))}
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* Guarantee */}
                <div className="mb-32 bg-gradient-to-br from-gray-50 to-white border border-primary/20 p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                    <h2 className="text-3xl font-bold mb-6 text-black font-serif">My Performance Promise</h2>
                    <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        I don&apos;t hide behind long-term contracts. My goal is to earn your business every single month with transparent work and measurable results. If you don&apos;t see the value, you&apos;re free to cancel at any time.
                    </p>
                    <div className="inline-block border border-primary text-primary px-8 py-3 font-bold uppercase tracking-widest text-sm">
                        100% Transparency Guarantee
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-24"></div>

                {/* FAQ Section */}
                <div className="mb-32">
                    <h2 className="text-3xl font-bold mb-12 text-black font-serif text-center">Frequently Asked Questions</h2>
                    <PricingFaq />
                </div>
            </div>
        </div>
    );
}
