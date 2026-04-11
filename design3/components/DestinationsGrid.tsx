import React from 'react';
import { destinations } from '../data/destinations';

export function DestinationsGrid() {
    return (
        <section id="destinations" className="py-20 md:py-32 relative overflow-hidden bg-[#FAFAFA]">
            {/* Elegant Background Accents */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent-50/50 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-accent-500 font-bold tracking-[0.2em] text-xs uppercase mb-3 block">Global Reach</span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-900 tracking-tight">Destinations We Cover</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent-400 to-gold-400 mx-auto mt-6 rounded-full shadow-glow"></div>
                    <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto font-light">We counsel students and facilitate strategic placements across the most sought-after global universities.</p>
                </div>

                <div className="relative flex overflow-hidden group">
                    <div className="flex animate-scroll whitespace-nowrap w-max hover:[animation-play-state:paused]">
                        {[1, 2].map((groupIndex) => (
                            <div key={`group-${groupIndex}`} className="flex gap-8 pr-8 py-4">
                                {destinations.map((dest, i) => (
                                    <div
                                        key={`g${groupIndex}-${dest.id}-${i}`}
                                        onClick={() => {
                                            document.getElementById('universities')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="group/card cursor-pointer min-w-[280px] hover:scale-105 transition-all duration-700 ease-out flex flex-col items-center"
                                    >
                                        <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-5 w-full glass-card border-[3px] border-transparent hover:border-accent-500/30 shadow-soft group-hover/card:shadow-card-hover transition-all duration-700">
                                            <img
                                                src={dest.image}
                                                alt={dest.country}
                                                className="w-full h-full object-cover group-hover/card:scale-110 group-hover/card:rotate-1 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-brand-900/40 to-transparent opacity-60 group-hover/card:opacity-100 transition-opacity duration-700"></div>
                                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 ease-out flex flex-col justify-end">
                                                <span className="text-white font-bold text-xl drop-shadow-md">{dest.country}</span>
                                                <span className="text-accent-300 text-sm font-medium pt-1">Explore Programs &rarr;</span>
                                            </div>
                                        </div>
                                        <h3 className="text-center font-bold text-brand-800 text-lg group-hover/card:text-accent-600 transition-colors duration-300">{dest.country}</h3>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    {/* Gradient masks for seamless effect */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
}
