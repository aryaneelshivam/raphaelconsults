import React from 'react';
import { GlobeIcon } from './Icons';
import { motion } from 'motion/react';

export function Footer() {
    return (
        <footer id="contact" className="relative py-32 px-4 overflow-hidden">
            {/* Decorative background text */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
                <span className="font-display text-[25vw] font-bold uppercase">RAPHAEL</span>
            </div>

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-display text-5xl md:text-9xl font-bold uppercase leading-none mb-12">
                        Let's build the<br /><span className="text-stroke italic font-serif">Future</span>
                    </h2>
                    <a
                        href="https://wa.me/918427226647?text=Hello%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20for%20studying%20abroad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center px-12 py-6 overflow-hidden rounded-full border border-white/20 transition-all duration-500 hover:border-accent"
                    >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 font-display font-bold uppercase tracking-widest text-lg group-hover:text-white transition-colors">
                            Get in Touch
                        </span>
                    </a>
                </motion.div>

                {/* Contact Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
                >
                    <div>
                        <h5 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Zimbabwe (Southern Africa)</h5>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Suite 503/504, 5th Floor, Throgmorton<br />
                            Corner of Samora Machel Ave & Julius Nyerere Way<br />
                            Harare, Zimbabwe
                        </p>
                    </div>
                    <div>
                        <h5 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">Ghana (West Africa)</h5>
                        <p className="text-white/40 text-sm leading-relaxed">
                            Old Tafo, Mile 4<br />
                            Beside Rural Bank Ltd.<br />
                            Kumasi, Ghana
                        </p>
                    </div>
                    <div>
                        <h5 className="text-accent text-xs font-bold uppercase tracking-widest mb-4">India (Asia) & General Contact</h5>
                        <div className="space-y-2 text-white/40 text-sm">
                            <p>📞 +91 84272 26647</p>
                            <p>✉️ raphtravelconsult1204@gmail.com</p>
                            <p>🌐 www.raphaeltraveleducationconsults.com</p>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="font-display text-2xl font-bold uppercase tracking-tighter">
                        Raphael<span className="text-accent">.</span>Consults
                    </div>

                    <div className="flex gap-8 text-xs uppercase tracking-widest text-white/40">
                        <span className="hover:text-accent transition-colors cursor-default">Reliability</span>
                        <span className="hover:text-accent transition-colors cursor-default">Transparency</span>
                        <span className="hover:text-accent transition-colors cursor-default">Ethics</span>
                        <span className="hover:text-accent transition-colors cursor-default">Compassion</span>
                    </div>

                    <div className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                        © {new Date().getFullYear()} Raphael Travel & Educational Consults Pvt. Ltd.
                    </div>
                </div>
            </div>
        </footer>
    );
}
