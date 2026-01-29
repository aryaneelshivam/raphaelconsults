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

    return (
        <section id="contact-form" className="py-12 md:py-20 bg-brand-900 text-white relative overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-700/30 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Text & Trust */}
                    <div>
                        <div className="inline-block bg-accent-500/20 text-accent-400 font-bold px-4 py-2 rounded-full text-sm mb-6 border border-accent-500/30">
                            🚀 Start Your Journey Today
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                            Ready to Study Abroad? <br />
                            <span className="text-accent-500">Let's Get You There.</span>
                        </h2>
                        <p className="text-brand-100 text-lg mb-8 leading-relaxed">
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
                                <div key={i} className="flex items-center gap-3">
                                    <div className="bg-green-500/20 p-1 rounded-full">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <span className="font-medium text-brand-50">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Lead Gen Form */}
                    <div className="bg-white text-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 h-full min-h-[600px] flex flex-col justify-center relative overflow-hidden">
                        {isSubmitted ? (
                            <div className="text-center animate-fade-in-up">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
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
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                {/* Progress Bar */}
                                <div className="w-full bg-gray-100 h-2 rounded-full mb-6 overflow-hidden">
                                    <div
                                        className="bg-accent-500 h-full rounded-full transition-all duration-500 ease-out"
                                        style={{ width: `${(step / 3) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {step === 1 && "Start Your Journey"}
                                        {step === 2 && "Academic Profile"}
                                        {step === 3 && "Study Preferences"}
                                    </h3>
                                    <span className="text-xs font-bold text-brand-500 bg-brand-50 px-2 py-1 rounded-md">Step {step} of 3</span>
                                </div>

                                {/* Step 1: Personal Details */}
                                {step === 1 && (
                                    <div className="space-y-4 animate-fade-in-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Full Name <span className="text-red-500">*</span></label>
                                                <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Phone Number <span className="text-red-500">*</span></label>
                                                <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Email Address <span className="text-red-500">*</span></label>
                                            <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">City (Applying from) <span className="text-red-500">*</span></label>
                                            <input required name="city" value={formData.city} onChange={handleChange} type="text" placeholder="e.g. Mumbai, Delhi" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                        </div>
                                    </div>
                                )}

                                {/* Step 2: Educational Background */}
                                {step === 2 && (
                                    <div className="space-y-4 animate-fade-in-up">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Current Qualification</label>
                                            <select name="qualification" value={formData.qualification} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition appearance-none cursor-pointer">
                                                <option>High School (12th Grade)</option>
                                                <option>Diploma</option>
                                                <option>Bachelors Degree</option>
                                                <option>Masters Degree</option>
                                                <option>Other</option>
                                            </select>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Passing Year</label>
                                                <input name="passingYear" value={formData.passingYear} onChange={handleChange} type="number" placeholder="e.g. 2023" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Latest Grade / %</label>
                                                <input name="grade" value={formData.grade} onChange={handleChange} type="text" placeholder="e.g. 85% or 3.5 GPA" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Step 3: Study Preferences */}
                                {step === 3 && (
                                    <div className="space-y-4 animate-fade-in-up">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Preferred Destination</label>
                                                <select name="destination" value={formData.destination} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition appearance-none cursor-pointer">
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
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Study Level</label>
                                                <select name="studyLevel" value={formData.studyLevel} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition appearance-none cursor-pointer">
                                                    <option>Masters / Postgrad</option>
                                                    <option>Bachelors / Undergrad</option>
                                                    <option>PhD / Doctorate</option>
                                                    <option>Diploma</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Planned Intake</label>
                                                <select name="intake" value={formData.intake} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition appearance-none cursor-pointer">
                                                    <option>Sept 2025</option>
                                                    <option>Jan 2026</option>
                                                    <option>May 2026</option>
                                                    <option>Sept 2026</option>
                                                    <option>Unsure</option>
                                                </select>
                                            </div>
                                            <div className="space-y-1">
                                                <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Budget (Approx)</label>
                                                <input name="budget" value={formData.budget} onChange={handleChange} type="text" placeholder="e.g. 15-20 Lakhs" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition" />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-gray-700 uppercase tracking-wide">Detailed Message(Optional)</label>
                                            <textarea name="message" value={formData.message} onChange={handleChange} rows={2} placeholder="Any specific questions?" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition resize-none"></textarea>
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Buttons */}
                                <div className="flex gap-3 pt-4">
                                    {step > 1 && (
                                        <button
                                            type="button"
                                            onClick={handleBack}
                                            className="w-1/3 bg-gray-100 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-200 transition"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={handleNext}
                                            className="flex-1 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-accent-500/30 transition-all transform hover:-translate-y-1"
                                        >
                                            Next Step &rarr;
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="flex-1 bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-brand-600/30 transition-all transform hover:-translate-y-1"
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
