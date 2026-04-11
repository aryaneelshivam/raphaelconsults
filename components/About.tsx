import React from 'react';
import { StarIcon } from './Icons';

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
            {/* Elegant Ornaments */}
            <div className="absolute top-[10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-brand-100/30 blur-[120px] mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-100/20 blur-[120px] mix-blend-multiply pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-accent-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Corporate Identity</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 mb-6 tracking-tight">About Us</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-400 to-gold-400 mx-auto rounded-full mb-8 shadow-glow"></div>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Raphael Travel & Educational Consults is a premier international education consultancy operating globally across 
                        <span className="font-semibold text-brand-600"> Zimbabwe, Ghana, and India</span>. 
                        We operate as your elite gateway to unparalleled global education, unlocking high-tier universities through unbiased and precise professional guidance.
                    </p>
                </div>

                {/* Vision, Mission, Purpose Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {/* Vision */}
                    <div className="group glass-card p-10 rounded-[2rem] hover:shadow-card-hover border border-brand-900/[0.04] hover:border-brand-300 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-white/0 group-hover:from-brand-50/80 group-hover:to-white/40 transition-colors duration-700 z-0"></div>
                        <div className="relative z-10">
                            <div className="bg-white border border-brand-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-glow-brand transition-all duration-500 group-hover:scale-110">
                                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-900 mb-4 group-hover:text-brand-600 transition-colors duration-300">Our Vision</h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-light">
                                To be your preferred partner in helping you gain the wings to soar high. We provide step-by-step guidance to place students in top-renowned universities globally.
                            </p>
                        </div>
                    </div>

                    {/* Mission */}
                    <div className="group glass-card p-10 rounded-[2rem] hover:shadow-card-hover border border-brand-900/[0.04] hover:border-brand-300 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden delay-100">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-white/0 group-hover:from-brand-50/80 group-hover:to-white/40 transition-colors duration-700 z-0"></div>
                        <div className="relative z-10">
                            <div className="bg-white border border-brand-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-glow-brand transition-all duration-500 group-hover:scale-110">
                                <svg className="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-900 mb-4 group-hover:text-brand-600 transition-colors duration-300">Our Mission</h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-light">
                                To enable education providers and aspiring students to achieve their objectives in the most efficient and cost-effective manner possible.
                            </p>
                        </div>
                    </div>

                    {/* Purpose */}
                    <div className="group glass-card p-10 rounded-[2rem] hover:shadow-card-hover border border-brand-900/[0.04] hover:border-accent-300 transition-all duration-700 hover:-translate-y-2 relative overflow-hidden delay-200">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-50/0 to-white/0 group-hover:from-accent-50/80 group-hover:to-white/40 transition-colors duration-700 z-0"></div>
                        <div className="relative z-10">
                            <div className="bg-white border border-accent-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                                <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-brand-900 mb-4 group-hover:text-accent-600 transition-colors duration-300">Our Purpose</h3>
                            <p className="text-gray-500 text-sm leading-relaxed font-light">
                                Leveraging close relationships with embassies and elite universities to deliver completely superior, reliable, and transparent services.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
