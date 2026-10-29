import React from 'react';
import { Phone, ArrowUp, Hammer, Layers, Grid, Home } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/content';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1c1c1e] text-white border-t border-[#343438] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#343438]">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#F36825] flex items-center justify-center font-extrabold text-white text-base">
                AJ
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Alex Jones <span className="text-[#F36825]">Renovations</span> LTD
              </span>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              {BUSINESS_INFO.shortDescription}
            </p>

            <div className="pt-2">
              <div className="text-xs text-neutral-400">Direct Telephone Contact</div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-lg font-bold text-white hover:text-[#F36825] transition-colors mt-1"
              >
                <Phone className="w-4 h-4 text-[#F36825]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <a href="#hero" className="hover:text-[#F36825] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F36825] transition-colors">
                  Building Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F36825] transition-colors">
                  About & Experience
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#F36825] transition-colors">
                  Work Showcase
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F36825] transition-colors">
                  Contact & Enquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick List (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Services Handled
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-400">
              {SERVICES.map((s) => (
                <a
                  key={s.id}
                  href="#services"
                  className="hover:text-[#F36825] transition-colors py-1 truncate"
                >
                  {s.title}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white text-xs font-bold py-2.5 px-5 rounded-sm transition-colors cursor-pointer"
              >
                <span>Request a Free Quote</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Alex Jones Renovations LTD. All rights reserved. Demo website showcase.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-[#F36825] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
