import React, { useState } from 'react';

export function LeadGenCTA() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        city: '',
        qualification: 'Bachelors Degree',
        passingYear: '',
        grade: '',
        destination: 'United Kingdom & Ireland',
        studyLevel: 'Masters / Postgrad',
        intake: 'Sept 2025',
        budget: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);

        const text = `*New Study Abroad Enquiry*
--------------------------------
*Personal Details*
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
City: ${formData.city}

*Academic Profile*
Qualification: ${formData.qualification}
Passing Year: ${formData.passingYear}
Grade/Percentage: ${formData.grade}

*Study Preferences*
Destination: ${formData.destination}
Level: ${formData.studyLevel}
Intake: ${formData.intake}
Budget: ${formData.budget}
Message: ${formData.message}`;

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/918427226647?text=${encodedText}`, '_blank');
    };

    const inputClasses = "w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-400 focus:bg-white transition-all duration-300 text-gray-800 placeholder:text-gray-400";
    const selectClasses = "w-full bg-gray-50/80 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-400 focus:bg-white transition-all duration-300 appearance-none cursor-pointer text-gray-800";
    const labelClasses = "text-xs font-bold text-gray-600 uppercase tracking-wider";

    return (
        <section id="contact-form" className="py-24 md:py-32 relative overflow-hidden bg-[#03060C]">
            {/* Ultra-premium dark aesthetic background */}
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(197, 160, 115, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(20, 32, 61, 0.15) 0%, transparent 60%)' }}></div>

            {/* Ambient Gold & Indigo Orbs */}
            <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[30rem] h-[30rem] bg-accent-500/10 rounded-full blur-[150px] animate-pulse-soft"></div>
            <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[25rem] h-[25rem] bg-brand-400/10 rounded-full blur-[150px] animate-pulse-soft" style={{animationDelay: '2s'}}></div>

            {/* Subtle Grid overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #C5A073 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Text & Trust */}
                    <div className="text-white">
                        <div className="inline-block bg-accent-500/15 text-accent-400 font-bold px-5 py-2.5 rounded-full text-sm mb-8 border border-accent-500/20 backdrop-blur-sm">
                            🚀 Start Your Journey Today
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Ready to Study Abroad? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-gold-400">Let's Get You There.</span>
                        </h2>
                        <p className="text-brand-100/70 text-lg mb-10 leading-relaxed max-w-lg">
                            Fill out the form to get a **free personalized consultation** from our expert counselors.
                            We'll analyze your profile and guide you to the best universities in the UK, USA, Canada, Germany, and more.
                        </p>

                        <div className="space-y-4">
                            {[
                                "100% Free Initial Assessment",
                                "Visa Assurance Support",
                                "Scholarship Guidance",
                                "Application Fee Waivers (Select Unis)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="bg-green-500/20 p-1.5 rounded-full group-hover:bg-green-500/30 transition-colors duration-300">
                                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="font-medium text-brand-50/90">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Lead Gen Form */}
                    <div className="glass-dark rounded-[2.5rem] p-8 md:p-12 shadow-glow-brand border border-white/5 h-full min-h-[600px] flex flex-col justify-center relative overflow-hidden group">
                        {/* Subtle inner form sweep */}
                        <div className="absolute top-[-50%] right-[-30%] w-[60%] h-[80%] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent-500/10 transition-colors duration-1000"></div>

                        {isSubmitted ? (
                            <div className="text-center animate-fade-in-up relative z-10">
                                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-100 animate-bounce-slow">
                                    <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                                <p className="text-gray-600 text-lg mb-8 max-w-xs mx-auto">
                                    We've received your enquiry. One of our expert counselors will contact you within 24 hours.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setStep(1);
                                        setFormData({
                                            name: '', phone: '', email: '', city: '',
                                            qualification: 'Bachelors Degree', passingYear: '', grade: '',
                                            destination: 'United Kingdom & Ireland', studyLevel: 'Masters / Postgrad',
                                            intake: 'Sept 2025', budget: '', message: ''
                                        });
                                    }}
                                    className="text-accent-500 font-bold hover:text-accent-600 transition-colors uppercase tracking-wide text-sm"
                                >
                                    Send Another Enquiry
                                </button>
                                {/* Confetti Effect (Pseudo) */}
                                <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                                    <div className="absolute top-10 left-10 w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
                                    <div className="absolute top-20 right-20 w-3 h-3 bg-red-500 rounded-full animate-ping delay-100"></div>
                                    <div className="absolute bottom-10 left-1/2 w-2 h-2 bg-yellow-500 rounded-full animate-ping delay-200"></div>
                                </div>
                            </div>
                        ) : (
                            <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                                {/* Progress Bar */}
                                <div className="w-full bg-brand-900/50 h-1.5 rounded-full mb-8 overflow-hidden border border-white/5">
                                    <div
                                        className="bg-gradient-to-r from-accent-600 to-gold-400 h-full rounded-full transition-all duration-700 ease-out shadow-glow"
                                        style={{ width: `${(step / 3) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center mb-8">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">
                                        {step === 1 && "Start Your Journey"}
                                        {step === 2 && "Academic Profile"}
                                        {step === 3 && "Study Preferences"}
                                    </h3>
                                    <span className="text-[10px] font-bold text-accent-400 bg-accent-500/10 px-4 py-1.5 rounded-full border border-accent-500/20 uppercase tracking-widest">Step {step} of 3</span>
                                </div>

                                {/* Step 1: Personal Details */}
                                {step === 1 && (
                                    <div className="space-y-5 animate-fade-in-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Full Name <span className="text-red-500">*</span></label>
                                                <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className={inputClasses} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Phone Number <span className="text-red-500">*</span></label>
                                                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 98765 43210" className={inputClasses} />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className={labelClasses}>Email Address <span className="text-red-500">*</span></label>
                                            <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className={inputClasses} />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className={labelClasses}>City (Applying from) <span className="text-red-500">*</span></label>
                                            <input required name="city" value={formData.city} onChange={handleChange} type="text" placeholder="e.g. Mumbai, Delhi" className={inputClasses} />
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Educational Background */}
                                {step === 2 && (
                                    <div className="space-y-5 animate-fade-in-up">
                                        <div className="space-y-1.5">
                                            <label className={labelClasses}>Current Qualification</label>
                                            <select name="qualification" value={formData.qualification} onChange={handleChange} className={selectClasses}>
                                                <option>High School (12th Grade)</option>
                                                <option>Diploma</option>
                                                <option>Bachelors Degree</option>
                                                <option>Masters Degree</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Passing Year</label>
                                                <input name="passingYear" value={formData.passingYear} onChange={handleChange} type="number" placeholder="e.g. 2023" className={inputClasses} />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Latest Grade / %</label>
                                                <input name="grade" value={formData.grade} onChange={handleChange} type="text" placeholder="e.g. 85% or 3.5 GPA" className={inputClasses} />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Study Preferences */}
                                {step === 3 && (
                                    <div className="space-y-5 animate-fade-in-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Preferred Destination</label>
                                                <select name="destination" value={formData.destination} onChange={handleChange} className={selectClasses}>
                                                    <option>United Kingdom & Ireland</option>
                                                    <option>USA</option>
                                                    <option>Canada</option>
                                                    <option>Germany</option>
                                                    <option>Australia</option>
                                                    <option>New Zealand</option>
                                                    <option>Dubai (UAE)</option>
                                                    <option>Cyprus</option>
                                                    <option>Hungary</option>
                                                    <option>Turkey</option>
                                                    <option>India</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Study Level</label>
                                                <select name="studyLevel" value={formData.studyLevel} onChange={handleChange} className={selectClasses}>
                                                    <option>Masters / Postgrad</option>
                                                    <option>Bachelors / Undergrad</option>
                                                    <option>PhD / Doctorate</option>
                                                    <option>Diploma</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Planned Intake</label>
                                                <select name="intake" value={formData.intake} onChange={handleChange} className={selectClasses}>
                                                    <option>Sept 2025</option>
                                                    <option>Jan 2026</option>
                                                    <option>May 2026</option>
                                                    <option>Sept 2026</option>
                                                    <option>Unsure</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className={labelClasses}>Budget (Approx)</label>
                                                <input name="budget" value={formData.budget} onChange={handleChange} type="text" placeholder="e.g. 15-20 Lakhs" className={inputClasses} />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className={labelClasses}>Detailed Message(Optional)</label>
                                            <textarea name="message" value={formData.message} onChange={handleChange} rows={2} placeholder="Any specific questions?" className={`${inputClasses} resize-none`}></textarea>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex gap-3 pt-4">
                                    {step > 1 && (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="w-1/3 bg-gray-100 text-gray-600 font-bold py-3.5 rounded-xl hover:bg-gray-200 transition-all duration-300"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="flex-1 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-accent-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            Next Step &rarr;
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="flex-1 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-brand-500/25 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                                        >
                                            Submit Application
                                        </button>
                                    )}
                                </div>

                                <p className="text-center text-xs text-gray-400 mt-4">Step {step} of 3 • Secure & Confidential</p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
