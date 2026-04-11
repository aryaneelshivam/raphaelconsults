import React, { useState } from 'react';
import { destinations } from '../data/destinations';

export function UniversityPartners() {
    // Filter destinations that have at least one university listed (either in Details or List)
    const validDestinations = destinations.filter(d =>
        (d.universityDetails && d.universityDetails.length > 0) ||
        (d.universityList && d.universityList.length > 0)
    );

    const [activeTab, setActiveTab] = useState(validDestinations[0]?.id);
    const activeDestination = validDestinations.find(d => d.id === activeTab) || validDestinations[0];

    return (
        <section id="universities" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/40 relative overflow-hidden">
            {/* Elegant Background Blurs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-100/30 blur-3xl opacity-50 mix-blend-multiply"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/30 blur-3xl opacity-50 mix-blend-multiply"></div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-stagger {
                    animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    opacity: 0;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        Top Universities to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-500">Study Abroad</span> 🎓
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Explore our extensive network of world-renowned partner institutions and find your perfect academic destination.
                    </p>
                </div>

                {/* Country Tabs - Premium Pill Design */}
                <div className="flex justify-start md:justify-center gap-3 mb-14 overflow-x-auto pb-4 pt-2 px-2 hide-scrollbar snap-x">
                    {validDestinations.map((dest) => (
                        <button
                            key={dest.id}
                            onClick={() => setActiveTab(dest.id)}
                            className={`flex items-center gap-2.5 px-6 py-3 rounded-full transition-all duration-400 ease-out snap-center shrink-0 ${activeTab === dest.id
                                ? 'bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/40 ring-2 ring-brand-500 ring-offset-2 scale-105'
                                : 'bg-white text-gray-600 shadow-sm border border-gray-100 hover:bg-gray-50 hover:border-gray-200 hover:shadow-md'
                                }`}
                        >
                            <img
                                src={dest.image}
                                alt={dest.country}
                                className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm"
                            />
                            <span className="font-bold text-sm tracking-wide whitespace-nowrap">
                                {dest.country}
                            </span>
                        </button>
                    ))}
                </div>

                {/* University Cards Grid */}
                {/* Use a key wrapper based on activeTab to re-trigger animations seamlessly on tab switch */}
                <div key={activeTab} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(activeDestination.universityDetails || activeDestination.universityList || [1, 2, 3, 4, 5, 6]).slice(0, 10).map((uni, idx) => {
                        let uniName = "";
                        let location = "";
                        let courseCount = "";

                        if (typeof uni === 'object' && 'name' in uni) { // University object
                            uniName = uni.name;
                            location = uni.location;
                            courseCount = uni.courseCount;
                        } else if (typeof uni === 'string') { // String from list
                            uniName = uni;
                            location = activeDestination.country;
                            courseCount = "Available";
                        } else { // Placeholder number
                            uniName = `University of ${activeDestination.country} ${idx + 1}`;
                            location = `${['London', 'Manchester', 'Birmingham', 'Liverpool', 'Leeds', 'Bristol'][idx % 6]}, ${activeDestination.country}`;
                            courseCount = ['400+', '350+', '500+', '230+', '150+', '450+'][idx % 6];
                        }

                        const formattedName = uniName.replace(/ /g, '_').toLowerCase();
                        const localLogoSrc = `/images/logos/${formattedName}.png`;
                        const fallbackAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(uniName)}&background=random&color=fff&size=128&bold=true`;

                        return (
                            <div
                                key={idx}
                                style={{ animationDelay: `${idx * 75}ms` }}
                                onClick={() => {
                                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="animate-stagger bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-gray-100/80 flex items-center gap-5 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.08)] hover:border-brand-200 transition-all duration-400 ease-out cursor-pointer group relative overflow-hidden"
                            >
                                {/* Soft gradient hover effect background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 group-hover:from-white group-hover:to-brand-50/50 transition-colors duration-400 ease-out -z-10"></div>
                                
                                <div className="w-16 h-16 shrink-0 bg-white rounded-xl border border-gray-100/50 p-1.5 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-110 group-hover:shadow-md transition-transform duration-400 ease-out">
                                    <img
                                        src={localLogoSrc}
                                        alt={uniName}
                                        className="w-full h-full object-contain rounded-lg transition-opacity duration-300"
                                        onError={(e) => {
                                            e.currentTarget.src = fallbackAvatar;
                                        }}
                                    />
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="font-bold text-gray-900 text-[1.1rem] leading-tight mb-1.5 line-clamp-2 group-hover:text-brand-600 transition-colors duration-300">
                                        {uniName}
                                    </h3>
                                    <div className="flex items-center gap-3 text-xs font-medium">
                                        <span className="text-gray-500 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100/50">{location}</span>
                                    </div>
                                </div>
                                {/* Subtle arrow indicator */}
                                <div className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-brand-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}

                    {/* "And Many More" Card */}
                    {activeDestination.universityDetails && activeDestination.universityDetails.length > 10 && (
                        <div
                            style={{ animationDelay: `750ms` }}
                            onClick={() => {
                                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="animate-stagger bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl p-6 shadow-lg shadow-brand-500/20 border border-brand-400 flex flex-col items-center justify-center text-center hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-1.5 transition-all duration-400 ease-out cursor-pointer relative overflow-hidden group"
                        >
                            <div className="absolute top-[-50%] right-[-50%] w-[100%] h-[100%] bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                            <h3 className="font-extrabold text-white text-xl md:text-2xl mb-2 relative z-10 flex items-center gap-2">
                                And Many More <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                            </h3>
                            <p className="text-brand-100 text-sm font-medium relative z-10">Contact us for the full list of partners.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
