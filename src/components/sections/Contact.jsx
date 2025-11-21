import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // success | error | loading
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Using backend submission (Nodemailer via server API). Adjust URL if deployed.
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrors({});
    
    try {
      const apiUrl = import.meta.env.PROD 
        ? "/api/contact" 
        : "http://localhost:3001/api/contact";
      
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || "Request failed");
      }
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => setStatus(null), 5000);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  return (
    <>
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-cyan-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-tl from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <RevealOnScroll>
        <div className="w-full max-w-[1300px] mx-auto relative z-10">
          {/* Art Book Style Header */}
          <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-cyan-300/80 uppercase">
                Get in Touch
              </span>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-cyan-400/50 via-blue-400/30 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight">
              Let's Connect
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-light">
              Have a project in mind or just want to chat? I'd love to hear from you. 
              Drop me a message and let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-50"></div>
              
              <form className="relative z-10 p-6 sm:p-8 lg:p-10 space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                className={`w-full bg-white/5 border ${
                  errors.name ? "border-red-400/50" : "border-white/10"
                } rounded-xl px-4 py-3.5 text-white transition-all focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/5 focus:ring-2 focus:ring-cyan-400/20 placeholder-gray-500`}
                placeholder="Your name"
                onChange={(e) => handleInputChange("name", e.target.value)}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-400 text-xs mt-2 flex items-center gap-1 font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                Email <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                className={`w-full bg-white/5 border ${
                  errors.email ? "border-red-400/50" : "border-white/10"
                } rounded-xl px-4 py-3.5 text-white transition-all focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/5 focus:ring-2 focus:ring-cyan-400/20 placeholder-gray-500`}
                placeholder="your.email@example.com"
                onChange={(e) => handleInputChange("email", e.target.value)}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-400 text-xs mt-2 flex items-center gap-1 font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2 tracking-wide">
                Message <span className="text-cyan-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                className={`w-full bg-white/5 border ${
                  errors.message ? "border-red-400/50" : "border-white/10"
                } rounded-xl px-4 py-3.5 text-white transition-all focus:outline-none focus:border-cyan-400 focus:bg-cyan-500/5 focus:ring-2 focus:ring-cyan-400/20 resize-none placeholder-gray-500`}
                placeholder="Tell me about your project or just say hi..."
                onChange={(e) => handleInputChange("message", e.target.value)}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <div className="flex justify-between items-center mt-2">
                {errors.message ? (
                  <p id="message-error" className="text-red-400 text-xs flex items-center gap-1 font-medium">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {errors.message}
                  </p>
                ) : (
                  <span className="text-gray-500 text-xs">Minimum 10 characters</span>
                )}
                <span className="text-gray-500 text-xs">{formData.message.length} / 1000</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="group/btn w-full inline-flex items-center justify-center gap-2 sm:gap-3 px-5 py-3 sm:px-6 sm:py-4 rounded-xl bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-white shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-[1.02] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span className="text-xs sm:text-sm">Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === "success" && (
              <div role="status" className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 rounded-xl p-4 flex items-start gap-3 animate-fade-in backdrop-blur-sm">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-green-300 font-bold">Message sent successfully!</p>
                  <p className="text-green-300/80 text-sm mt-1">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            )}
            
            {status === "error" && (
              <div role="alert" className="bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-400/30 rounded-xl p-4 flex items-start gap-3 animate-fade-in backdrop-blur-sm">
                <svg className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-red-300 font-bold">Oops! Something went wrong.</p>
                  <p className="text-red-300/80 text-sm mt-1">Please try again later or contact me directly via WhatsApp.</p>
                </div>
              </div>
            )}
          </form>

          {/* Corner Accent */}
          <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tl from-cyan-500 to-blue-500 opacity-10 blur-3xl"></div>
            </div>

            {/* Contact Information Card */}
            <div className="space-y-4 sm:space-y-6">
              {/* Info Section */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-50"></div>
                
                <div className="relative z-10 space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Let's Talk</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                  </div>

                  <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-30"></div>

                  {/* Contact Methods */}
                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href="https://www.linkedin.com/in/rishi-kumar-39679123b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-xs sm:text-sm">LinkedIn</p>
                        <p className="text-gray-400 text-[10px] sm:text-xs">Connect Professionally</p>
                      </div>
                    </a>

                    <a
                      href="https://wa.me/8248568354?text=Hi%20Rishi,%20I%20just%20visited%20your%20portfolio!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/50 hover:bg-green-500/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-xs sm:text-sm">WhatsApp</p>
                        <p className="text-gray-400 text-[10px] sm:text-xs">Quick & Direct</p>
                      </div>
                    </a>

                    <a
                      href="mailto:your.email@example.com"
                      className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                    >
                      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-bold text-xs sm:text-sm">Email</p>
                        <p className="text-gray-400 text-[10px] sm:text-xs">Professional</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-3xl"></div>
              </div>

              {/* Privacy Note */}
              <div className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="flex items-start gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <div>
                    <p className="text-gray-300 text-[10px] sm:text-xs leading-relaxed">
                      <span className="font-bold text-white">Privacy First.</span> Your information is secure and will only be used to respond to your inquiry. I typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>

      {/* Footer */}
      <footer className="relative z-10 bg-[#0a0a0f] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Brand & Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                  Rishi Kumar
                </span>
                {" "}• All rights reserved
              </p>
              <p className="text-gray-500 text-[10px] sm:text-xs mt-1">
                Crafted with passion and precision
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="https://github.com/rishi200201"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a
                href="https://www.linkedin.com/in/rishi-kumar-39679123b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a
                href="https://wa.me/8248568354"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-green-400/50 hover:bg-green-500/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-green-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>

              <a
                href="mailto:your.email@example.com"
                className="group w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Scroll to Top */}
            <a
              href="#home"
              className="group flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300 text-xs sm:text-sm text-gray-400 hover:text-cyan-400"
              aria-label="Back to top"
            >
              <span className="hidden sm:inline">Back to top</span>
              <span className="sm:hidden">Top</span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
