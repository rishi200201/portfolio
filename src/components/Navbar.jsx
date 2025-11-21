import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(10, 10, 10, 0.95)] backdrop-blur-xl shadow-2xl"
          : "bg-[rgba(10, 10, 10, 0.7)] backdrop-blur-lg"
      } border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with gradient effect */}
          <a
            href="#home"
            className="group font-mono text-2xl font-bold text-white tracking-tight hover:scale-105 transition-transform duration-300"
          >
            <span className="relative">
              Rishi
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent ml-1">
                Portfolio
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </span>
          </a>

          {/* Hamburger Menu - Mobile */}
          <button
            className="md:hidden w-10 h-10 relative cursor-pointer z-40 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-4 py-2 text-gray-300 font-medium transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
