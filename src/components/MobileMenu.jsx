import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-gradient-to-br from-[rgba(10,10,15,0.98)] via-[rgba(15,10,20,0.98)] to-[rgba(10,10,15,0.98)] backdrop-blur-xl z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 sm:top-6 sm:right-6 text-white text-2xl sm:text-3xl focus:outline-none cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
        aria-label="Close Menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Menu Items */}
      <nav className="flex flex-col items-center gap-4 sm:gap-6">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className={`group relative text-xl sm:text-2xl font-semibold text-white transform transition-all duration-300 px-6 py-3 rounded-xl
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
          style={{ transitionDelay: menuOpen ? "100ms" : "0ms" }}
        >
          <span className="relative z-10">Home</span>
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
        
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`group relative text-xl sm:text-2xl font-semibold text-white transform transition-all duration-300 px-6 py-3 rounded-xl
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
          style={{ transitionDelay: menuOpen ? "150ms" : "0ms" }}
        >
          <span className="relative z-10">About</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
        
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`group relative text-xl sm:text-2xl font-semibold text-white transform transition-all duration-300 px-6 py-3 rounded-xl
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
          style={{ transitionDelay: menuOpen ? "200ms" : "0ms" }}
        >
          <span className="relative z-10">Projects</span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
        
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`group relative text-xl sm:text-2xl font-semibold text-white transform transition-all duration-300 px-6 py-3 rounded-xl
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
          style={{ transitionDelay: menuOpen ? "250ms" : "0ms" }}
        >
          <span className="relative z-10">Contact</span>
          <span className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-400 group-hover:w-3/4 transition-all duration-300"></span>
        </a>
      </nav>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};
