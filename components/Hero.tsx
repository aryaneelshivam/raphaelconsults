import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import { WorldMap } from './WorldMap';

export function Hero() {
    const { isDark, accentColor } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    // Floating image parallax — hooks called at top level (not in JSX)
    const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const floatY2 = useTransform(scrollYProgress, [0, 1], [0, -250]);
    const floatY3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth - 0.5) * 30);
        mouseY.set((clientY / innerHeight - 0.5) * 30);
    };

    const textX = useSpring(mouseX, { damping: 20, stiffness: 100 });
    const textY = useSpring(mouseY, { damping: 20, stiffness: 100 });

    return (
        <section
            id="home"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative h-screen flex items-center justify-center overflow-hidden"
        >
            <motion.div
                style={{ y: scrollY, opacity, scale, x: textX, translateY: textY }}
                className="relative z-10 text-center px-4 pt-40 max-w-6xl mx-auto"
            >
                {/* Main Title */}
                <motion.h1
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="font-sans text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.9] font-bold tracking-tighter"
                    style={{ color: 'var(--rc-fg-hex)' }}
                >
                    Chart Your<br />
                    Course To<br />
                    <span className="text-accent font-sans">Global</span>{' '}
                    <span className="text-accent">Excellence</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8"
                >
                    <p className="max-w-xs text-sm font-sans tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Embark on your journey to global<br />education with Raphael Consults
                    </p>
                    <div className="h-px w-24 hidden md:block" style={{ backgroundColor: 'var(--rc-subtle)' }} />
                    <p className="max-w-xs text-sm font-sans tracking-widest leading-loose" style={{ color: 'var(--rc-muted)' }}>
                        Transparent guidance for<br />students from Africa &amp; Asia
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-12"
                >
                    <a
                        href="#contact-form"
                        className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-full transition-all duration-500 hover:border-accent"
                        style={{ border: '1px solid var(--rc-border)' }}
                    >
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 font-sans font-bold tracking-widest text-sm group-hover:text-white transition-colors" style={{ color: 'var(--rc-fg-hex)' }}>
                            Start Your Journey →
                        </span>
                    </a>
                </motion.div>
            </motion.div>

            {/* Background Map Integration */}
            <div className="absolute inset-0 z-0 opacity-80 overflow-hidden pointer-events-none">
                {/* Floating Images on the Left */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.15, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-[20%] left-[-5%] md:left-[5%] w-36 h-36 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl"
                    style={{ y: floatY1 }}
                >
                    <motion.img 
                        animate={{ y: [0, -15, 0], rotate: [0, -2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        src="/images/students_campus_1775913252217.png" 
                        alt="" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover" 
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.15, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    className="absolute top-[60%] left-[10%] md:left-[15%] w-32 h-32 md:w-64 md:h-64 rounded-2xl overflow-hidden hidden sm:block shadow-2xl"
                    style={{ y: floatY2 }}
                >
                    <motion.img 
                        animate={{ y: [0, 20, 0], rotate: [0, 3, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        src="/images/graduation_celebration_1775913271414.png" 
                        alt="" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover" 
                    />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 0.1, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                    className="absolute top-[10%] left-[25%] md:left-[28%] w-28 h-28 md:w-56 md:h-56 rounded-2xl overflow-hidden hidden lg:block shadow-2xl"
                    style={{ y: floatY3 }}
                >
                    <motion.img 
                        animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        src="/images/student_airport_1775913307857.png" 
                        alt="" 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover" 
                    />
                </motion.div>

                <div className="absolute top-1/2 right-0 h-[160%] aspect-square -translate-y-1/2 translate-x-1/4">
                    <WorldMap />
                </div>
            </div>
        </section>  
    );  
}
