import React from 'react';

export function CompanyStats() {
    return (
        <section id="company" className="py-20 bg-[#060B17] relative z-20 border-y border-white/5 overflow-hidden">
            {/* Deep glow effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50%] max-w-[1000px] bg-accent-500/10 blur-[150px] shadow-glow-brand rounded-[100%] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="mb-10 lg:mb-0 animate-fade-in-up">
                        <span className="text-accent-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">The Trusted Pathway to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-gold-400">Global Education</span></h2>
                        <p className="text-brand-100/70 max-w-lg leading-relaxed font-light text-lg">
                            We are a digitally driven consultancy with a presence in **Zimbabwe, Ghana, and India**.
                            Our mission is to empower ambitious students to achieve their educational objectives efficiently.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 lg:gap-8 text-center sm:text-left">
                        {[
                            { label: 'Visa Success Rate', val: '98%', color: 'text-white' },
                            { label: 'Support System', val: '24/7', color: 'text-accent-400' },
                            { label: 'Global Hubs', val: '3', color: 'text-white' },
                            { label: 'Partner Institutions', val: '3000+', color: 'text-accent-400' }
                        ].map((stat, i) => (
                            <div key={i} className="relative group/stat p-6 rounded-3xl glass-dark border border-white/5 hover:border-accent-500/30 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1">
                                <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-3 drop-shadow-lg`}>{stat.val}</div>
                                <div className="text-xs text-brand-100/60 font-medium uppercase tracking-[0.15em]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
