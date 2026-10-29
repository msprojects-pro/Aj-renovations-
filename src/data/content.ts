import { ServiceItem, ProjectItem } from '../types';
import heroImg from '../assets/images/hero_renovation_exterior_1793308473924.jpg';
import builderImg from '../assets/images/about_builder_craftsmanship_1793308603304.jpg';
import concretingImg from '../assets/images/project_concreting_foundation_1793308474746.jpg';
import tilingImg from '../assets/images/project_tiling_bathroom_1793308475089.jpg';
import extensionImg from '../assets/images/project_home_extension_1793308475575.jpg';

export const ASSETS = {
  hero: heroImg,
  builder: builderImg,
  concreting: concretingImg,
  tiling: tilingImg,
  extension: extensionImg,
};

export const BUSINESS_INFO = {
  name: 'Alex Jones Renovations LTD',
  category: 'Building, Renovation & Home Improvements',
  phone: '+44 7794 091102',
  phoneRaw: '+447794091102',
  phoneHref: 'tel:+447794091102',
  experienceYears: 10,
  tagline: 'Quality Building & Renovations, Built Around You.',
  shortDescription:
    'Alex Jones Renovations LTD brings 10 years of building experience to projects of all kinds across building work, home renovations, concreting, tiling, and property improvements.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'concreting',
    title: 'Concreting',
    shortDescription:
      'Precision groundworks, sub-floors, screeds, and durable concrete slabs for domestic extensions and landscaping foundations.',
    scopePoints: [
      'Sub-base preparation & compaction',
      'Structural foundation pours & slabs',
      'Smooth floor screeding for interior rooms',
      'External patios & pathway bases',
    ],
    iconName: 'Layers',
  },
  {
    id: 'tiling',
    title: 'Tiling',
    shortDescription:
      'High-standard wall and floor tiling using porcelain, ceramic, natural stone, and geometric splashbacks with meticulous grout lines.',
    scopePoints: [
      'Bathroom & wetroom wall & floor tiling',
      'Kitchen splashbacks & feature surrounds',
      'Large-format porcelain floor installations',
      'Waterproofing, tanking & clean silicone sealing',
    ],
    iconName: 'Grid',
  },
  {
    id: 'building-work',
    title: 'Building Work',
    shortDescription:
      'Solid structural alterations, brickwork, load-bearing beam installations, partition walls, and general property construction.',
    scopePoints: [
      'Internal structural wall removals & support',
      'Brick and block masonry work',
      'Stud wall framing & room reconfigurations',
      'Doorway and window structural alterations',
    ],
    iconName: 'Hammer',
  },
  {
    id: 'home-renovations',
    title: 'Home Renovations',
    shortDescription:
      'Complete property transformations turning outdated rooms and layouts into modern, practical living spaces suited to your requirements.',
    scopePoints: [
      'Full house and single-room modernisations',
      'Open-plan kitchen and living space conversions',
      'Garage and utility space repurposing',
      'Comprehensive interior updates from bare brick to finish',
    ],
    iconName: 'Home',
  },
  {
    id: 'property-improvements',
    title: 'Property Improvements',
    shortDescription:
      'Targeted upgrades, refurbishments, and repairs designed to improve home functionality, comfort, and market value.',
    scopePoints: [
      'Flooring replacements and floor repairs',
      'Modernising outdated fixtures and fittings',
      'General property maintenance and repairs',
      'External and internal upgrades for long-term durability',
    ],
    iconName: 'Wrench',
  },
  {
    id: 'general-building-finishing',
    title: 'General Building & Finishing',
    shortDescription:
      'Skilled finishing work including plaster prep, joinery installation, skirting, architraves, and complete final handover details.',
    scopePoints: [
      'Plaster boarding, skimming & surface prep',
      'Internal doors, skirting boards & architraves',
      'Ceiling repairs and downlight framing',
      'Snagging and clean final finish ready for decoration',
    ],
    iconName: 'CheckCircle2',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Contemporary Residential Renovation & Extension',
    category: 'Home Renovations',
    tag: 'Home Renovation',
    description:
      'Rear brickwork extension featuring modern anthracite aluminium sliding doors, open-plan ground floor layout, and durable exterior stone paving.',
    imageUrl: ASSETS.hero,
    aspect: 'aspect-video',
    highlights: ['Structural extension', 'Anthracite patio threshold', 'Brickwork integration'],
  },
  {
    id: 'project-2',
    title: 'Open-Plan Kitchen & Dining Renovation',
    category: 'Building Work',
    tag: 'Structural & Renovation',
    description:
      'Open-plan interior reconfiguration incorporating exposed structural steel beam, ambient ceiling downlighting, and contemporary screeded flooring.',
    imageUrl: ASSETS.extension,
    aspect: 'aspect-4/3',
    highlights: ['Structural steel support', 'Open-plan reconfiguration', 'Modern kitchen prep'],
  },
  {
    id: 'project-3',
    title: 'Large-Format Porcelain Bathroom Tiling',
    category: 'Tiling',
    tag: 'Precision Tiling',
    description:
      'Full bathroom renovation with large-format stone-effect porcelain wall and floor tiles, recessed illuminated niche, and walk-in shower tanking.',
    imageUrl: ASSETS.tiling,
    aspect: 'aspect-4/3',
    highlights: ['Large-format porcelain', 'Recessed niche detailing', 'Wetroom tanking'],
  },
  {
    id: 'project-4',
    title: 'Precision Subfloor Concreting & Screed',
    category: 'Concreting',
    tag: 'Concreting & Screed',
    description:
      'Smooth laser-levelled concrete floor pour and screed finish prepared for high-traffic residential extension flooring.',
    imageUrl: ASSETS.concreting,
    aspect: 'aspect-4/3',
    highlights: ['Laser-levelled subfloor', 'Crack-resistant expansion join', 'Ultra-smooth screed finish'],
  },
  {
    id: 'project-5',
    title: 'Timber Stud Framing & Structural Building',
    category: 'Building Work',
    tag: 'Building Work',
    description:
      'First-fix timber partition framing and structural building alterations on a residential property upgrade.',
    imageUrl: ASSETS.builder,
    aspect: 'aspect-4/3',
    highlights: ['Structural timber framing', 'Accurate spirit-level alignment', 'First-fix carpentry prep'],
  },
];
