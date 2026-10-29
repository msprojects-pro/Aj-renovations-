import React, { useState } from 'react';
import { PROJECTS } from '../data/content';
import { ProjectItem } from '../types';
import { Eye, X, ArrowRight, Info, Check } from 'lucide-react';

interface OurWorkProps {
  onOpenQuoteModal: (projectCategory?: string) => void;
}

export const OurWork: React.FC<OurWorkProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions = ['All', 'Home Renovations', 'Building Work', 'Tiling', 'Concreting'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="bg-[#1c1c1e] text-white py-20 border-t border-[#343438] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#F36825] tracking-wider uppercase mb-2">
              <span>Work Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Work & Project Standards
            </h2>
            <p className="mt-2 text-base text-neutral-300 max-w-xl">
              A visual showcase of building, renovation, tiling, and concreting work.
            </p>
          </div>

          {/* Transparent demo disclosure notice */}
          <div className="inline-flex items-start gap-2.5 p-3 rounded-sm bg-[#232325] border border-[#343438] text-xs text-neutral-400 max-w-md">
            <Info className="w-4 h-4 text-[#F36825] shrink-0 mt-0.5" />
            <span>
              <strong className="text-neutral-200">Illustrative Demo Gallery:</strong> Curated photography representative of the standards, specifications, and scope of work delivered across UK home improvements.
            </span>
          </div>
        </div>

        {/* Filter Tabs (Interactive Filter Controls as per §1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-[#232325] rounded-sm border border-[#343438] w-fit">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs font-semibold rounded-xs transition-colors cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#F36825] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-[#343438]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#232325] rounded-sm overflow-hidden border border-[#343438] hover:border-[#F36825]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-4/3 w-full bg-[#343438] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#232325] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-[#232325]/90 backdrop-blur-xs text-[#F36825] text-[11px] font-bold px-2.5 py-1 rounded-xs border border-neutral-700/60">
                  {project.tag}
                </div>

                {/* Inspect button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F36825] text-white text-xs font-bold rounded-xs shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Project</span>
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#F36825] transition-colors mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Highlights tags */}
                <div className="pt-3 border-t border-[#343438] flex flex-wrap gap-1.5">
                  {project.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] text-neutral-300 bg-[#343438] px-2 py-0.5 rounded-xs"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative bg-[#232325] border border-neutral-700 rounded-sm max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#343438] hover:bg-[#F36825] text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-video w-full bg-[#1c1c1e] overflow-hidden">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F36825] mb-1">
                    {selectedProject.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Specifications / Highlights */}
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                    Key Work Aspects
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedProject.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 bg-[#1c1c1e] rounded-sm border border-[#343438] text-xs text-neutral-300"
                      >
                        <Check className="w-4 h-4 text-[#F36825] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-4 border-t border-[#343438] flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-neutral-400">
                    Need a similar project completed for your home?
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const cat = selectedProject.category;
                      setSelectedProject(null);
                      onOpenQuoteModal(cat);
                    }}
                    className="inline-flex items-center gap-2 bg-[#F36825] hover:bg-[#d95517] text-white text-xs font-bold px-5 py-2.5 rounded-sm transition-colors cursor-pointer"
                  >
                    <span>Request a Quote for This Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
