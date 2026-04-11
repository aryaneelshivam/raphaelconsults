import React, { useState } from 'react';
import { GlobeIcon } from './Icons';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 glass shadow-soft transition-all duration-500">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl p-2.5 shadow-lg shadow-brand-500/20">
                            <GlobeIcon className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-none">
                                Raphael<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">Consults</span>
                            </span>
                            <span className="text-[10px] md:text-xs text-gray-500 font-medium tracking-wide uppercase">Travel & Educational Consults</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {[
                            { name: 'Home', id: 'home' },
                            { name: 'Company', id: 'about' },
                            { name: 'Services', id: 'services' },
                            { name: 'Destinations', id: 'destinations' },
                            { name: 'Contact', id: 'contact' }
                        ].map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.id}`}
                                className="nav-link text-gray-700 font-semibold text-[13px] uppercase tracking-[0.1em] transition-all duration-300 hover:-translate-y-0.5 inline-block"
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-7 py-2.5 rounded-full font-bold text-sm transition-all duration-300 shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 hover:-translate-y-0.5 active:translate-y-0">
                            Book Consultation
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-600 hover:text-brand-500 focus:outline-none p-2 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden glass absolute w-full shadow-xl z-50 transition-all duration-500 ease-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="px-4 pt-2 pb-6 space-y-1">
                    {[
                        { name: 'Home', id: 'home' },
                        { name: 'Company', id: 'about' },
                        { name: 'Services', id: 'services' },
                        { name: 'Destinations', id: 'destinations' },
                        { name: 'Contact', id: 'contact' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-500 transition-all duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad" target="_blank" rel="noopener noreferrer" className="block w-full text-center mt-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-accent-500/20">
                        Book Consultation
                    </a>
                </div>
            </div>
        </nav>
    );
}
