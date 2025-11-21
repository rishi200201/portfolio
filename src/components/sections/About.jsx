import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Vite", icon: "⚡", color: "from-purple-400 to-pink-500" },
    { name: "TailwindCSS", icon: "🎨", color: "from-cyan-300 to-blue-400" },
    { name: "Chakra UI", icon: "💎", color: "from-teal-400 to-cyan-500" },
    { name: "Material UI", icon: "🎭", color: "from-blue-400 to-indigo-500" }
  ];
  
  const backendSkills = [
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-teal-600" },
    { name: "JWT", icon: "🔐", color: "from-orange-400 to-red-500" },
    { name: "Nodemailer", icon: "📧", color: "from-blue-400 to-cyan-500" },
    { name: "OpenAI", icon: "🤖", color: "from-purple-400 to-pink-500" },
    { name: "AWS", icon: "☁️", color: "from-orange-400 to-yellow-500" }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-tr from-blue-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-[1300px] w-full mx-auto relative z-10">
          {/* Art Book Style Header */}
          <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-purple-300/80 uppercase">
                About Me
              </span>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-purple-400/50 via-pink-400/30 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight">
              MERN Stack Developer
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-light">
              Transforming ideas into scalable, high-performance digital experiences 
              with passion and precision.
            </p>
          </div>

          {/* Bio Section - Art Book Style */}
          <div className="mb-6 sm:mb-8 relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-700 group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0">
                  <span className="text-2xl sm:text-3xl">👨‍💻</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">Who I Am</h3>
                  <div className="h-[2px] w-16 sm:w-20 bg-gradient-to-r from-purple-400 to-pink-400 opacity-50"></div>
                </div>
              </div>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                A passionate and driven <span className="text-white font-bold">MERN Stack Developer</span> with expertise in crafting
                innovative, scalable web applications. Currently pursuing my Master's degree while building production-grade systems 
                that serve <span className="text-cyan-400 font-bold">100,000+ users</span>. 
                Gaming isn't just a hobby—it's my lifestyle. <span className="text-green-400 font-bold">Coding is the ultimate game!</span> 🎮
              </p>
            </div>
            
            <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl from-purple-500 to-pink-500 opacity-10 blur-3xl"></div>
          </div>

          {/* Skills Grid - Art Book Style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Frontend Skills */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-pink-400/30 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                      <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                      <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white">Frontend Arsenal</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">UI/UX Implementation</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {frontendSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-r ${skill.color} p-[1.5px] rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
                    >
                      <div className="bg-[#0a0a0f] rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 hover:bg-opacity-70 transition-all duration-300">
                        <span className="text-base sm:text-xl">{skill.icon}</span>
                        <span className="text-white font-semibold text-xs sm:text-sm">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-500 to-purple-500 opacity-10 blur-3xl"></div>
            </div>

            {/* Backend Skills */}
            <div className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white">Backend Power</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">Server & Database</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {backendSkills.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`bg-gradient-to-r ${skill.color} p-[1.5px] rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
                    >
                      <div className="bg-[#0a0a0f] rounded-lg px-2.5 py-1.5 sm:px-4 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 hover:bg-opacity-70 transition-all duration-300">
                        <span className="text-base sm:text-xl">{skill.icon}</span>
                        <span className="text-white font-semibold text-xs sm:text-sm">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl from-cyan-500 to-blue-500 opacity-10 blur-3xl"></div>
            </div>
          </div>

          {/* Experience Grid - Art Book Style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
            {/* Education */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
                    <p className="text-gray-400 text-sm mt-0.5">Academic Journey</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {/* M.E. */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-300">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.8)]"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                          M.E. in Computer Science
                        </h4>
                        <span className="px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-400/30 whitespace-nowrap">
                          In Progress
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm font-semibold mb-1">Knowledge Institute of Technology</p>
                      <p className="text-purple-400 text-sm font-medium">2024 – 2026</p>
                    </div>
                  </div>

                  {/* B.E. */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 hover:bg-white/10 transition-all duration-300">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]"></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                        <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                          B.E. in Computer Science
                        </h4>
                        <span className="px-2.5 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-bold border border-green-400/30 whitespace-nowrap">
                          Completed
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm font-semibold mb-1">KCG College of Technology</p>
                      <p className="text-purple-400 text-sm font-medium">2019 – 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 opacity-10 blur-3xl"></div>
            </div>

            {/* Work Experience */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-green-400/30 transition-all duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              <div className="relative z-10 p-8 lg:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    <span className="text-3xl">💼</span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">Work Experience</h3>
                    <p className="text-gray-400 text-sm mt-0.5">Professional Career</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/30 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                        Tech Analyst
                      </h4>
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 whitespace-nowrap">
                        Current
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm font-semibold mb-1">SRM Institute of Science and Technology</p>
                    <p className="text-green-400 text-sm font-medium mb-3">2024 – Present</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Built feedback system for <strong className="text-white">100K+ users</strong></span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Implemented <strong className="text-white">OAuth</strong> & <strong className="text-white">REST APIs</strong></span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span>Created dashboards with <strong className="text-white">Git/GitLab</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-green-500 to-emerald-500 opacity-10 blur-3xl"></div>
            </div>
          </div>

          {/* Stats Section - Compact Art Book Style */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[
              { number: "100K+", label: "Users Served", icon: "👥", gradient: "from-blue-500 to-cyan-500" },
              { number: "50+", label: "Projects Built", icon: "🚀", gradient: "from-purple-500 to-pink-500" },
              { number: "11", label: "Tech Stack", icon: "⚡", gradient: "from-orange-500 to-red-500" },
              { number: "2+", label: "Years Exp.", icon: "💻", gradient: "from-green-500 to-emerald-500" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group relative text-center p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.12] transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-500">
                    {stat.icon}
                  </div>
                  <div className={`text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-0.5 sm:mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
