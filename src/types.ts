export type ServiceCategory =
  | 'Concreting'
  | 'Tiling'
  | 'Building Work'
  | 'Home Renovations'
  | 'Property Improvements'
  | 'General Building & Finishing';

export interface ServiceItem {
  id: string;
  title: ServiceCategory;
  shortDescription: string;
  scopePoints: string[];
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  imageUrl: string;
  aspect: string;
  tag: string;
  highlights: string[];
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  projectType: ServiceCategory | 'Other';
  projectDetails: string;
}
