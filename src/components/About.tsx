import React, { useState } from 'react';
import { Calendar, CheckCircle2, Sliders, HardHat, Phone } from 'lucide-react';
import { BUSINESS_INFO, ASSETS } from '../data/content';

interface AboutProps {
  onOpenQuoteModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuoteModal }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="bg-[#232325] text-white py-20 border-t border-[#343438] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Authentic Craftsmanship Photography (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#343438] bg-[#343438] shadow-xl group">
              {!imgLoaded && !imgError && (
                <div className="aspect-4/3 w-full bg-[#343438] animate-pulse flex items-center justify-center text-neutral-400">
                  <span className="text-sm">Loading photography...</span>
                </div>
              )}

              {imgError && (
                <div className="aspect-4/3 w-full bg-[#343438] flex flex-col items-center justify-center p-6 text-center text-neutral-300">
                  <HardHat className="w-12 h-12 text-[#F36825] mb-2" />
                  <p className="font-semibold text-white">10 Years Building Experience</p>
                  <p className="text-xs text-neutral-400 mt-1">Alex Jones Renovations LTD</p>
                </div>
              )}

              <img
                src={ASSETS.builder}
                alt="Builders checking precision framing on a residential renovation"
                referrerPolicy="no-referrer"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgError(true)}
                className={`w-full h-auto aspect-4/3 object-cover object-center transition-all duration-500 ${
                  imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
                } group-hover:scale-102`}
              />

              {/* Subdued overlay with 10-year stamp */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#232325]/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-[#232325]/90 backdrop-blur-sm p-3.5 rounded-sm border border-neutral-700/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-[#F36825] flex items-center justify-center font-bold text-white text-sm shrink-0">
                    10
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Years of Building Experience</div>
                    <div className="text-[11px] text-neutral-400">Practical & Hands-On Delivery</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle architectural frame accent */}
            <div className="hidden sm:block absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-[#F36825] pointer-events-none opacity-80" />
          </div>

          {/* Right Column: About Copy & 3 Specific Highlights (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F36825] tracking-wider uppercase">
              <span>About The Business</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experience You Can Build On
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              With 10 years of building experience,{' '}
              <strong className="text-white font-semibold">Alex Jones Renovations LTD</strong> offers a practical
              approach to building and renovation work. From concreting to tiling and everything in
              between, the focus is on delivering work suited to each customer’s project.
            </p>

            {/* 3 Prominent Highlights */}
            <div className="pt-2 space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-sm bg-[#1c1c1e] border border-[#343438] hover:border-neutral-600 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#343438] flex items-center justify-center shrink-0 border border-neutral-700/60 mt-0.5">
                  <Calendar className="w-5 h-5 text-[#F36825]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">10 Years of Building Experience</h4>
                  <p className="text-sm text-neutral-400 mt-0.5">
                    A solid track record of hands-on site knowledge, structural understanding, and practical problem-solving across diverse residential projects.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm bg-[#1c1c1e] border border-[#343438] hover:border-neutral-600 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#343438] flex items-center justify-center shrink-0 border border-neutral-700/60 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-[#F36825]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">A Broad Range of Building Work</h4>
                  <p className="text-sm text-neutral-400 mt-0.5">
                    Handling diverse stages under one reliable contractor—from ground preparation and concreting to precise tiling and complete renovations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-sm bg-[#1c1c1e] border border-[#343438] hover:border-neutral-600 transition-colors">
                <div className="w-10 h-10 rounded-sm bg-[#343438] flex items-center justify-center shrink-0 border border-neutral-700/60 mt-0.5">
                  <Sliders className="w-5 h-5 text-[#F36825]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">A Personalised Approach to Projects</h4>
                  <p className="text-sm text-neutral-400 mt-0.5">
                    Direct communication and practical guidance tailored to your property requirements, schedule, and desired finish.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white text-sm font-semibold px-6 py-3 rounded-sm transition-colors shadow-md cursor-pointer"
              >
                <span>Request a Free Quote</span>
              </button>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-neutral-200 hover:text-white text-sm font-semibold px-5 py-3 rounded-sm bg-[#343438] hover:bg-[#3f3f45] border border-neutral-700/50 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F36825]" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
