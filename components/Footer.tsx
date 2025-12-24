import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 border-t border-gray-100 pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group transition-transform hover:scale-[1.02]">
                            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center shadow-sm">
                                <span className="text-white font-serif font-bold text-xl pt-0.5">H</span>
                            </div>
                            <div className="flex items-center gap-2 font-serif font-bold text-lg tracking-wider uppercase">
                                <span className="text-slate-900">Habeebul</span>
                                <span className="text-primary">Haque</span>
                            </div>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Helping businesses grow through data-driven digital marketing strategies. Specializing in SEO, PPC, and Social Media Marketing to drive real results.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-8 text-xs">Services</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><Link href="/services/seo" className="hover:text-primary transition-colors">Technical SEO</Link></li>
                            <li><Link href="/services/content-marketing" className="hover:text-primary transition-colors">Content Strategy</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing Plans</Link></li>
                            <li><Link href="/services/seo" className="hover:text-primary transition-colors">Link Building</Link></li>
                            <li><Link href="/services/seo" className="hover:text-primary transition-colors">Local SEO</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-8 text-xs">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Me</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-900 font-bold uppercase tracking-widest mb-8 text-xs">Connect</h4>
                        <ul className="space-y-4 text-sm text-slate-600">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>Ihabeebulhaque@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>+971 54 754 7123</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>Villa 15, Al Rowda 2, Ajman, UAE</span>
                            </li>
                        </ul>
                        <div className="flex gap-4 mt-6">
                            <Link href="https://x.com/ihabeebulhaque" className="text-gray-400 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer"><Twitter className="w-5 h-5" /></Link>
                            <Link href="https://www.linkedin.com/in/habeebulhaque" className="text-gray-400 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></Link>
                            <Link href="https://www.facebook.com/haquebasheer" className="text-gray-400 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer"><Facebook className="w-5 h-5" /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 text-center text-slate-400 text-xs uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} SEO Expert. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
