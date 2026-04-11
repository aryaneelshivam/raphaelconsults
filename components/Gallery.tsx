import React from 'react';

export function Gallery() {
    const images = [
        { src: "/images/students_campus_1775913252217.png", alt: "International Students", span: "col-span-2 row-span-1 md:col-span-2 md:row-span-2" },
        { src: "/images/award-parul.jpg", alt: "Parul Award", span: "col-span-1 md:col-span-1 md:row-span-1" },
        { src: "/images/consultancy_partnership_1775913288670.png", alt: "Consultancy Partnership", span: "col-span-1 md:col-span-1 md:row-span-1" },
        { src: "/images/graduation_celebration_1775913271414.png", alt: "Graduation Celebration", span: "col-span-2 md:col-span-2 md:row-span-1" },
        { src: "/images/student-group.jpg", alt: "Student Group", span: "col-span-2 row-span-1 md:col-span-2 md:row-span-2" },
        { src: "/images/student_airport_1775913307857.png", alt: "Student at Airport", span: "col-span-1 md:col-span-1 md:row-span-2" },
        { src: "/images/airport-arrival.jpg", alt: "Airport Walk", span: "col-span-1 md:col-span-1 md:row-span-1" },
        { src: "/images/award-certificate.jpg", alt: "Certificate Event", span: "col-span-2 md:col-span-1 md:row-span-1" }
    ];

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
            {/* Ambient decorations */}
            <div className="absolute top-[20%] left-[-5%] w-[25%] h-[25%] rounded-full bg-brand-100/30 blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[20%] h-[20%] rounded-full bg-accent-100/20 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Our Global Reach in Action</h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent-500 to-brand-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-gray-600 text-lg">Real student success stories, airport arrivals, and strong university partnerships worldwide.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
                    {images.map((img, i) => (
                        <div key={i} className={`relative rounded-2xl overflow-hidden group hover:shadow-card-hover transition-all duration-500 shadow-soft border border-gray-100/50 ${img.span}`}>
                            <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                            {/* Elegant dark-to-transparent overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-brand-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            {/* Caption on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                                <p className="text-white text-sm font-semibold drop-shadow-lg">{img.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
