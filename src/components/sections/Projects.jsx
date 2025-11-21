import { RevealOnScroll } from "../RevealOnScroll";
import { projects, getProjectSlug } from "../../data/projects";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#0a0a0f] relative overflow-hidden"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Meshes */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-gradient-to-tr from-pink-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl opacity-30"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <RevealOnScroll>
        <div className="max-w-[1300px] mx-auto relative z-10">
          {/* Art Book Style Header */}
          <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] sm:tracking-[0.3em] text-blue-300/80 uppercase">
                Selected Works
              </span>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-400/50 via-purple-400/30 to-transparent"></div>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight">
              Projects
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-light">
              A curated collection of digital experiences crafted with precision, 
              creativity, and modern technology.
            </p>
          </div>

          {/* Magazine-Style Grid Layout */}
          <div className="space-y-8 sm:space-y-6 lg:space-y-8">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <article
                  key={getProjectSlug(project.title)}
                  aria-labelledby={`proj-${getProjectSlug(project.title)}-title`}
                  className={`group relative flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-4 sm:gap-6 lg:gap-8 items-center`}
                >
                  {/* Project Visual Card */}
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-700 group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.6)]">
                      {/* Animated Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-700`}></div>
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1500"></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative p-6 sm:p-8 lg:p-10 min-h-[250px] sm:min-h-[300px] flex flex-col justify-between">
                        {/* Icon Section */}
                        <div className="flex items-start justify-between mb-4 sm:mb-6">
                          <div className={`relative flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.gradient} shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <span className="text-2xl sm:text-4xl">{project.icon}</span>
                            {/* Icon Glow */}
                            <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.gradient} blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                          </div>
                          
                          {/* Number Badge */}
                          <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 text-white/30 font-bold text-[10px] sm:text-xs">
                            0{index + 1}
                          </div>
                        </div>
                        
                        {/* Bottom Tech Stack */}
                        {project.technologies?.length && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold tracking-wide rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all duration-300 backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      
                      {/* Corner Accent */}
                      <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-tl ${project.gradient} opacity-10 blur-3xl`}></div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex-1 w-full space-y-3 sm:space-y-4">
                    {/* Title */}
                    <h3 
                      id={`proj-${getProjectSlug(project.title)}-title`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-blue-200 group-hover:to-purple-200 transition-all duration-500"
                    >
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-xl">
                      {project.description}
                    </p>
                    
                    {/* Action Button */}
                    {project.url && (
                      <div className="pt-1 sm:pt-2">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 sm:gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white text-black text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-white/50"
                          aria-label={`Visit ${project.title}`}
                        >
                          <span>Explore Project</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    )}
                    
                    {/* Decorative Line */}
                    <div className={`h-[2px] w-16 sm:w-24 bg-gradient-to-r ${project.gradient} opacity-30 group-hover:opacity-60 group-hover:w-24 sm:group-hover:w-36 transition-all duration-700`}></div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Signature */}
          <div className="mt-16 flex items-center justify-center gap-6 opacity-50">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-white/20"></div>
            <a 
              href="https://github.com/rishi200201" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs tracking-[0.3em] text-gray-500 hover:text-blue-400 uppercase transition-colors duration-300"
            >
              View More on GitHub
            </a>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
