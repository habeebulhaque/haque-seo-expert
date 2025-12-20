"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' : 'bg-white/80 backdrop-blur-sm py-4 border-b border-gray-100/50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 group transition-transform hover:scale-[1.02]">
                            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center shadow-sm">
                                <span className="text-white font-serif font-bold text-2xl pt-1">H</span>
                            </div>
                            <div className="flex items-center gap-2 font-serif font-bold text-xl tracking-wider uppercase">
                                <span className="text-slate-900">Habeebul</span>
                                <span className="text-primary">Haque</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {['Home', 'Services', 'Pricing', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className="text-sm font-bold uppercase tracking-widest text-gray-600 hover:text-primary transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="bg-primary hover:bg-slate-900 hover:text-white text-white px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg"
                        >
                            Contact Me
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full bg-white border-b border-gray-100 shadow-xl">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-3 rounded-none text-base font-bold uppercase tracking-widest text-gray-600 hover:text-primary hover:bg-gray-50"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
