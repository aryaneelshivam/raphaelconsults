import React from 'react';
import { DocumentCheckIcon } from './Icons';

export function Hero() {
    return (
        <section id="home" className="relative pt-16 pb-24 lg:pt-32 lg:pb-48 overflow-hidden bg-[#03060C] animated-gradient">
            {/* Ambient Light Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-30%] right-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-[100%] bg-gradient-to-br from-brand-500/20 to-accent-500/10 blur-[120px] animate-pulse-soft"></div>
                <div className="absolute bottom-[-20%] left-[-20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-[100%] bg-gradient-to-tr from-brand-600/20 to-transparent blur-[100px] animate-pulse-soft" style={{animationDelay: '1.5s'}}></div>
                <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] rounded-full bg-accent-400/5 blur-[80px] animate-float"></div>
            </div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            {/* Bottom Wave */}
            <div className="absolute inset-x-0 bottom-0">
                <svg viewBox="0 0 1440 320" className="w-full h-auto block text-white fill-current">
                    <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="text-white">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 border border-white/10 shadow-glow animate-fade-in-up stagger-1">
                            <span className="flex h-2 w-2 rounded-full bg-accent-500"></span>
                            <span className="text-sm font-medium tracking-widest text-brand-100 uppercase">Premium Consultancy</span>
                        </div>
                        <div className="animate-fade-in-up stagger-2">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
                                Chart Your Course To <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-gold-400 to-accent-500">Global Excellence</span>
                            </h1>
                        </div>
                        <div className="animate-fade-in-up stagger-2" style={{opacity: 0}}>
                            <p className="text-lg md:text-xl text-brand-100/80 mb-10 max-w-lg font-light leading-relaxed">
                                Embark on your journey to global education with Raphael Travel & Educational Consults.
                                We provide smooth, cost-effective, and transparent guidance for students from Africa and Asia.
                            </p>
                        </div>
                        <div className="animate-fade-in-up stagger-3" style={{opacity: 0}}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#contact-form" className="group px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 transition-all duration-300 shadow-xl shadow-accent-500/30 hover:shadow-2xl hover:shadow-accent-500/40 text-center hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2">
                                    Start Your Journey
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="relative flex justify-center lg:justify-end animate-fade-in-right stagger-3" style={{opacity: 0}}>
                        <div className="relative w-full max-w-lg">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-brand-500/30 rounded-[3rem] blur-3xl transform scale-110 animate-pulse-soft"></div>
                            
                            <div className="relative rounded-[2.5rem] glass-dark p-3 shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-700 ease-out group">
                                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                                <img
                                    src="/images/hero-airport.jpg"
                                    alt="Students Exploring Global Education"
                                    className="w-full h-[500px] object-cover rounded-[2rem] shadow-inner"
                                />
                                
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-8 glass p-5 rounded-2xl shadow-card z-20 flex items-center gap-4 animate-float border border-white/20 backdrop-blur-md">
                                    <div className="bg-gradient-to-br from-green-400 to-green-500 p-2.5 rounded-xl shadow-lg shadow-green-500/30">
                                        <DocumentCheckIcon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-brand-800 font-semibold uppercase">Trusted Since</p>
                                        <p className="text-lg font-bold text-gray-900">Inception</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
