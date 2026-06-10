import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { nebulaLogoUrl } from "../assets/logo";

interface NavbarProps {
  inviteLink: string;
  supportLink: string;
}

export default function Navbar({ inviteLink, supportLink }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#030305]/75 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-[#020108]/80"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center space-x-3 group" id="nav-brand">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 rounded-full blur-sm opacity-45 group-hover:opacity-75 transition-opacity duration-300"></div>
              <img
                src={nebulaLogoUrl}
                alt="Nebula Logo"
                className="relative h-10 w-10 sm:h-11 sm:w-11 object-cover rounded-full border border-purple-500/30 transition-transform duration-500 group-hover:rotate-12"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-white flex items-center gap-1.5">
                NEBULA
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] tracking-normal font-mono font-medium rounded-md bg-white/5 border border-white/10 text-indigo-300 uppercase align-middle">
                  Active
                </span>
              </span>
              <span className="text-[10px] text-purple-300/60 font-mono tracking-widest uppercase -mt-0.5">Discord Bot</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8" id="desktop-menu">
            <a href="#features" className="text-sm font-medium text-slate-300 hover:text-white hover:shadow-purple-500/10 transition-colors duration-200">
              Caratteristiche
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200">
              FAQ
            </a>
            <a
              href={supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-purple-300 hover:text-purple-200 flex items-center gap-1 transition-colors duration-200"
            >
              Supporto <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-4" id="nav-actions">
            <a
              href={inviteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-purple-900/45 border border-white/10 flex items-center gap-2"
            >
              <span>Aggiungi a Discord</span>
              <div className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-md bg-white/5 border border-white/10"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#030305]/95 backdrop-blur-2xl border-b border-white/10" id="mobile-menu-drawer">
          <div className="px-4 pt-4 pb-6 space-y-4 shadow-2xl">
            <a
              href="#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition duration-150"
            >
              Caratteristiche
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition duration-150"
            >
              FAQ
            </a>
            <a
              href={supportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-md text-base font-semibold text-purple-300 hover:text-purple-200 flex items-center gap-1 transition duration-150"
            >
              Discord di Supporto <ArrowUpRight className="h-4 w-4" />
            </a>

            <div className="pt-2 border-t border-white/5 flex flex-col space-y-3">
              <a
                href={inviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:from-purple-500 hover:to-indigo-500 transition duration-150"
              >
                Aggiungi a Discord
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
