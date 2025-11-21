import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0f] py-20 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-blue-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-tl from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-[1300px] mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left space-y-6">
              {/* Status Badge */}
              <div className="inline-block animate-fade-in">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-green-400/30 transition-all duration-300">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-semibold text-gray-300 tracking-wide">Available for opportunities</span>
                </div>
              </div>

              {/* Main Title - Art Book Style */}
              <div className="space-y-3">
                <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light tracking-wide">
                  Hi, I'm
                </p>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
                  <span className="block text-white mb-2">Rishi</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">Kumar</span>
                </h1>
              </div>

              {/* Role Title */}
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  MERN Stack Developer
                </h2>
                <div className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50 mx-auto lg:mx-0"></div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                <span className="text-white font-semibold">Crafting code, creating possibilities.</span> 💡💻
                <br />
                <span className="font-light">Building scalable applications that serve </span>
                <span className="text-cyan-400 font-bold">100K+ users</span>
                <span className="font-light"> with precision and passion.</span>
              </p>

              {/* CTA Buttons - Art Book Style */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                <a
                  href="#projects"
                  className="group/btn inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4zm2 2a1 1 0 000 2h8a1 1 0 100-2H6z"/>
                  </svg>
                  <span>View Projects</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-cyan-400/50 hover:bg-cyan-500/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Get In Touch</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side - Modern Code Card */}
            <div className="relative group mt-8 lg:mt-0">
              {/* Main Code Card - Art Book Style */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-700 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* Browser Bar */}
                <div className="relative z-10 bg-white/5 px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 border-b border-white/10">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400/70 hover:bg-red-400 transition-colors"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400/70 hover:bg-yellow-400 transition-colors"></div>
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400/70 hover:bg-green-400 transition-colors"></div>
                  </div>
                  <div className="flex-1 bg-white/5 rounded-lg px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs text-gray-400 flex items-center gap-1 sm:gap-2 overflow-hidden">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                    </svg>
                    <span className="truncate">rishi-portfolio.dev</span>
                  </div>
                </div>

                {/* Code Editor */}
                <div className="relative z-10 bg-[#0d1117] p-4 sm:p-6 md:p-8 font-mono text-[10px] sm:text-xs md:text-sm min-h-[280px] sm:min-h-[350px]">
                  <div className="space-y-2">
                    <div className="flex gap-4">
                      <span className="text-gray-600 select-none w-6 text-right">1</span>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-300 ml-2">developer</span>
                      <span className="text-white ml-2">=</span>
                      <span className="text-white ml-2">{'{'}</span>
                    </div>
                    <div className="flex gap-4 pl-6">
                      <span className="text-gray-600 select-none w-6 text-right">2</span>
                      <span className="text-blue-300">name:</span>
                      <span className="text-orange-400 ml-2">"Rishi Kumar"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex gap-4 pl-6">
                      <span className="text-gray-600 select-none w-6 text-right">3</span>
                      <span className="text-blue-300">role:</span>
                      <span className="text-orange-400 ml-2">"MERN Stack Developer"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex gap-4 pl-6">
                      <span className="text-gray-600 select-none w-6 text-right">4</span>
                      <span className="text-blue-300">skills:</span>
                      <span className="text-white ml-2">[</span>
                    </div>
                    <div className="flex gap-4 pl-12 animate-pulse">
                      <span className="text-gray-600 select-none w-6 text-right">5</span>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-orange-400">"React"</span>
                        <span className="text-white">,</span>
                        <span className="text-orange-400">"Node.js"</span>
                        <span className="text-white">,</span>
                        <span className="text-orange-400">"MongoDB"</span>
                      </div>
                    </div>
                    <div className="flex gap-4 pl-6">
                      <span className="text-gray-600 select-none w-6 text-right">6</span>
                      <span className="text-white">],</span>
                    </div>
                    <div className="flex gap-4 pl-6">
                      <span className="text-gray-600 select-none w-6 text-right">7</span>
                      <span className="text-blue-300">experience:</span>
                      <span className="text-green-400 ml-2">"2+ years"</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex gap-4 pl-6">
                      <span className="text-gray-600 select-none w-6 text-right">8</span>
                      <span className="text-blue-300">passionate:</span>
                      <span className="text-green-400 ml-2">true</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="flex gap-4 pl-6">
                      <span className="text-gray-600 select-none w-6 text-right">9</span>
                      <span className="text-purple-400">build</span>
                      <span className="text-yellow-300">:</span>
                      <span className="text-white ml-2">() ={'>'}</span>
                      <span className="text-orange-400 ml-2">"Amazing Apps"</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-gray-600 select-none w-6 text-right">10</span>
                      <span className="text-white">{'}'}</span>
                    </div>
                    <div className="flex gap-4 mt-3">
                      <span className="text-gray-600 select-none w-6 text-right">11</span>
                      <span className="text-gray-500">// Let's build something awesome! 🚀</span>
                    </div>
                    
                    {/* Blinking Cursor */}
                    <div className="flex gap-4">
                      <span className="text-gray-600 select-none w-6 text-right">12</span>
                      <span className="inline-block w-2 h-4 bg-cyan-400 animate-blink"></span>
                    </div>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500 to-cyan-500 opacity-10 blur-3xl"></div>
              </div>

              {/* Floating Tech Icons - Cleaner Design - Hidden on mobile */}
              <div className="hidden md:block absolute -top-6 -left-6 animate-float" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <div className="bg-white/10 p-2.5 md:p-3 rounded-xl border border-blue-400/30 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              
              <div className="hidden md:block absolute top-1/3 -right-6 animate-float" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <div className="bg-white/10 p-2.5 md:p-3 rounded-xl border border-green-400/30 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-4 -left-4 animate-float" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <div className="bg-white/10 p-2.5 md:p-3 rounded-xl border border-purple-400/30 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 7H7v6h6V7z"/>
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
