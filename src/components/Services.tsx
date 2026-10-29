import React from 'react';
import {
  Layers,
  Grid,
  Hammer,
  Home,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#F36825]" />;
      case 'Grid':
        return <Grid className="w-6 h-6 text-[#F36825]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#F36825]" />;
      case 'Home':
        return <Home className="w-6 h-6 text-[#F36825]" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#F36825]" />;
      case 'CheckCircle2':
      default:
        return <CheckCircle2 className="w-6 h-6 text-[#F36825]" />;
    }
  };

  return (
    <section id="services" className="bg-[#1c1c1e] text-white py-20 border-t border-[#343438] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F36825] tracking-wider uppercase mb-2">
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building Solutions for Every Project
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-300">
            Professional building and renovation work, tailored to your project.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem, index: number) => {
            const indexString = `0${index + 1}`.slice(-2);
            return (
              <div
                key={service.id}
                className="group relative bg-[#232325] rounded-sm p-7 border border-[#343438] hover:border-[#F36825]/60 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                {/* Top bar accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#F36825] transition-colors" />

                <div>
                  {/* Card Header with Icon and Editorial Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-sm bg-[#343438] group-hover:bg-[#3e3e44] flex items-center justify-center border border-neutral-700/60 transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold font-mono tracking-wider text-neutral-500 group-hover:text-[#F36825] transition-colors">
                      {indexString}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#F36825] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Scope bullets */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#343438]">
                    {service.scopePoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F36825] mt-1 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center justify-between w-full pt-4 mt-auto border-t border-[#343438] text-xs font-semibold text-neutral-300 group-hover:text-[#F36825] transition-colors cursor-pointer"
                >
                  <span>Enquire About {service.title}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick summary note under services */}
        <div className="mt-12 p-6 bg-[#232325] rounded-sm border border-[#343438] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Have a specific project in mind?</h4>
            <p className="text-xs text-neutral-400 mt-0.5">
              From individual alterations to multi-stage renovations, get in touch to discuss your job.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService('General Building & Finishing')}
            className="shrink-0 text-xs font-bold px-4 py-2.5 bg-[#343438] hover:bg-[#F36825] text-white rounded-sm transition-colors cursor-pointer"
          >
            Discuss Your Job
          </button>
        </div>
      </div>
    </section>
  );
};
