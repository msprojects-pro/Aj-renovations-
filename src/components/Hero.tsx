import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, Hammer, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data/content';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="hero" className="relative bg-[#232325] text-white pt-8 pb-16 lg:py-20 overflow-hidden">
      {/* Subtle architectural grid pattern in background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Value Proposition & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Experience & Trust Kicker */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#F36825] tracking-wide uppercase">
              <span className="w-2.5 h-2.5 bg-[#F36825] rounded-xs" />
              <span>10 Years of Building Experience</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-300 font-normal">UK Building & Renovations</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] tracking-tight text-white max-w-2xl text-balance">
              Quality Building & Renovations,{' '}
              <span className="text-[#F36825]">Built Around You.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
              From concreting to tiling and everything in between,{' '}
              <span className="text-white font-medium">Alex Jones Renovations LTD</span> brings 10
              years of building experience to projects of all kinds.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenQuoteModal}
                type="button"
                className="inline-flex items-center justify-center gap-2.5 bg-[#F36825] hover:bg-[#d95517] text-white font-semibold text-base px-6 py-3.5 rounded-sm transition-all duration-200 shadow-lg shadow-orange-950/30 active:scale-[0.99] cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#343438] hover:bg-[#3f3f45] text-neutral-200 hover:text-white font-medium text-base px-6 py-3.5 rounded-sm border border-neutral-700/50 transition-all duration-200"
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Direct Phone Contact & Trust Signals */}
            <div className="pt-4 border-t border-[#343438] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#343438] flex items-center justify-center shrink-0 border border-neutral-700/60">
                  <Phone className="w-5 h-5 text-[#F36825]" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Direct Telephone Enquiries</div>
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="text-white font-bold text-base hover:text-[#F36825] transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#343438] flex items-center justify-center shrink-0 border border-neutral-700/60">
                  <Hammer className="w-5 h-5 text-[#F36825]" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Scope of Works</div>
                  <div className="text-white font-semibold text-sm">
                    All Aspects of Building Work
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Impact Photography (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#343438] shadow-2xl bg-[#343438] group">
              {/* Fallback container if image fails or before load */}
              {!imageLoaded && !imageError && (
                <div className="aspect-4/3 w-full bg-[#343438] animate-pulse flex items-center justify-center text-neutral-400">
                  <span className="text-sm">Loading project image...</span>
                </div>
              )}

              {imageError && (
                <div className="aspect-4/3 w-full bg-[#343438] flex flex-col items-center justify-center p-6 text-center text-neutral-300">
                  <ShieldCheck className="w-12 h-12 text-[#F36825] mb-2" />
                  <p className="font-semibold text-white">Alex Jones Renovations LTD</p>
                  <p className="text-xs text-neutral-400 mt-1">10 Years of Building Experience</p>
                </div>
              )}

              <img
                src={ASSETS.hero}
                alt="Contemporary residential home renovation and brickwork extension"
                referrerPolicy="no-referrer"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-auto aspect-4/3 object-cover object-center transition-all duration-500 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
                } group-hover:scale-102`}
              />

              {/* Architectural gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#232325]/90 via-[#232325]/20 to-transparent pointer-events-none" />

              {/* Bottom caption overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#F36825] font-semibold uppercase tracking-wider mb-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Residential Building & Renovation</span>
                  </div>
                  <p className="text-sm font-medium text-neutral-200">
                    High-standard extensions, brickwork & alterations
                  </p>
                </div>
                <div className="hidden sm:block text-right shrink-0">
                  <span className="text-xs text-neutral-400 block">Experience</span>
                  <span className="text-sm font-bold text-white">10 Years</span>
                </div>
              </div>
            </div>

            {/* Decorative accent element behind corner */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-[#F36825] pointer-events-none -z-0 opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
};
