
// Fix: Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  description: string;
  images: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
}
