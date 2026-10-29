import React, { useState } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Utility Contact Bar for Immediate Mobile & Desktop Reach */}
      <div className="bg-[#1c1c1e] text-xs text-neutral-300 border-b border-[#343438] py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[#F36825] font-semibold">Alex Jones Renovations LTD</span>
            <span className="text-neutral-500 hidden sm:inline">|</span>
            <span className="text-neutral-400 hidden sm:inline">10 Years of Building Experience</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={BUSINESS_INFO.phoneHref}
              className="flex items-center gap-1.5 text-white hover:text-[#F36825] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#F36825]" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#232325]/95 backdrop-blur-md border-b border-[#343438] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Single element wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-white hover:text-neutral-200 transition-colors shrink-0 group"
          >
            <div className="w-9 h-9 rounded-sm bg-[#F36825] flex items-center justify-center font-extrabold text-white text-base shadow-sm group-hover:scale-105 transition-transform">
              AJ
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight text-white whitespace-nowrap">
              Alex Jones <span className="text-[#F36825]">Renovations</span> LTD
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a
              href="#hero"
              className="hover:text-[#F36825] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F36825] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-[#F36825] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F36825] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Services
            </a>
            <a
              href="#about"
              className="hover:text-[#F36825] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F36825] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              About
            </a>
            <a
              href="#work"
              className="hover:text-[#F36825] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F36825] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Our Work
            </a>
            <a
              href="#contact"
              className="hover:text-[#F36825] transition-colors whitespace-nowrap py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#F36825] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              type="button"
              className="hidden sm:inline-flex items-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 shadow-md shadow-orange-950/20 active:translate-y-0.5 whitespace-nowrap cursor-pointer"
            >
              <span>Request a Free Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-neutral-300 hover:text-white rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36825]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#232325] border-b border-[#343438] px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in duration-200">
            <nav className="flex flex-col space-y-3 pt-2 text-base font-medium">
              <a
                href="#hero"
                onClick={closeMenu}
                className="text-neutral-200 hover:text-[#F36825] px-3 py-2 rounded-sm hover:bg-[#343438]/40 transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                onClick={closeMenu}
                className="text-neutral-200 hover:text-[#F36825] px-3 py-2 rounded-sm hover:bg-[#343438]/40 transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={closeMenu}
                className="text-neutral-200 hover:text-[#F36825] px-3 py-2 rounded-sm hover:bg-[#343438]/40 transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                onClick={closeMenu}
                className="text-neutral-200 hover:text-[#F36825] px-3 py-2 rounded-sm hover:bg-[#343438]/40 transition-colors"
              >
                Our Work
              </a>
              <a
                href="#contact"
                onClick={closeMenu}
                className="text-neutral-200 hover:text-[#F36825] px-3 py-2 rounded-sm hover:bg-[#343438]/40 transition-colors"
              >
                Contact
              </a>
            </nav>

            <div className="pt-3 border-t border-[#343438] space-y-3">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#343438] hover:bg-[#3e3e44] text-white text-sm font-semibold rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F36825]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={() => {
                  closeMenu();
                  onOpenQuoteModal();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#F36825] hover:bg-[#d95517] text-white text-sm font-semibold rounded-sm transition-colors shadow-md"
              >
                <span>Request a Free Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
