import React from 'react';
import { services } from '../data/services';

export function Services() {
    return (
        <section id="services" className="py-20 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
            {/* Ambient background */}
            <div className="absolute top-[-15%] left-[50%] w-[40%] h-[40%] rounded-full bg-accent-200/10 blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
                    <span className="text-accent-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-brand-900 mb-6 tracking-tight">Our Services</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-400 to-gold-400 mx-auto rounded-full mb-6 shadow-glow"></div>
                    <p className="text-gray-500 text-lg font-light">Comprehensive support tailored for ambitious youth seeking a successful future abroad.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, i) => (
                        <div key={service.id} className={`group glass-card rounded-[2rem] p-8 transition-all duration-700 hover:-translate-y-2 border border-brand-900/[0.04] hover:border-accent-400/30 hover:shadow-glow stagger-${i+1} animate-fade-in-up`} style={{opacity: 0, animationFillMode: 'forwards'}}>
                            {/* Subtle premium sweep */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10">
                                <div className="bg-brand-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-brand-100 shadow-inner group-hover:bg-gradient-to-br group-hover:from-accent-50 group-hover:to-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-soft">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors duration-300">{service.title}</h3>
                                <p className="text-gray-500 font-light text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
