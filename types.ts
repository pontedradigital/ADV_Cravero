import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  // New fields for expanded view
  fullDescription: string;
  purpose: string;
  whenToHire: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role?: string;
  content: string;
  rating: number;
}

export interface ValueItem {
  title: string;
  description: string;
}