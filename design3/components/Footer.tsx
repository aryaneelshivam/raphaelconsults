import React from 'react';
import { GlobeIcon } from './Icons';

export function Footer() {
    return (
        <footer id="contact" className="relative bg-gradient-to-b from-brand-950 to-[#070819] text-gray-300 py-16 md:py-20 overflow-hidden">
            {/* Ambient decoration */}
            <div className="absolute top-0 left-[20%] w-[30%] h-[40%] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-[10%] w-[20%] h-[30%] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Top border gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-br from-brand-500/20 to-brand-400/10 p-2.5 rounded-xl border border-brand-500/20">
                                <GlobeIcon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Raphael<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500">Consults</span></span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Your preferred partner in helping you gain the wings to soar high in life. We bridge the gap between your ambition and world-class education.
                        </p>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="text-white font-bold text-lg mb-6">Our Offices & Contact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                            {/* Zimbabwe */}
                            <div className="group">
                                <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500 font-bold mb-2">Zimbabwe (Southern Africa)</h5>
                                <p className="leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Suite 503/504, 5th Floor, Throgmorton<br />
                                    Corner of Samora Machel Ave & Julius Nyerere Way<br />
                                    Harare, Zimbabwe
                                </p>
                            </div>
                            {/* Ghana */}
                            <div className="group">
                                <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500 font-bold mb-2">Ghana (West Africa)</h5>
                                <p className="leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                    Old Tafo, Mile 4<br />
                                    Beside Rural Bank Ltd.<br />
                                    Kumasi, Ghana
                                </p>
                            </div>
                            {/* India */}
                            <div className="md:col-span-2 group">
                                <h5 className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500 font-bold mb-2">India (Asia) & General Contact</h5>
                                <div className="space-y-2 text-gray-400">
                                    <p className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 cursor-default">
                                        <span>📞</span> +91 84272 26647
                                    </p>
                                    <p className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 cursor-default">
                                        <span>✉️</span> raphtravelconsult1204@gmail.com
                                    </p>
                                    <p className="flex items-center gap-2.5 hover:text-white transition-colors duration-300 cursor-default">
                                        <span>🌐</span> www.raphaeltraveleducationconsults.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Values</h4>
                        <ul className="space-y-3 text-sm">
                            {[
                                'Reliability & Accuracy',
                                'Transparency',
                                'Ethical Conduct',
                                'Compassion & Fairness'
                            ].map(item => (
                                <li key={item} className="flex items-center gap-3 group cursor-default">
                                    <div className="w-2 h-2 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-sm shadow-accent-500/50"></div>
                                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Raphael Travel & Educational Consults Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
