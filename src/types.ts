// Fix: Add import for React to resolve missing namespace error for React.ReactNode.
import React from 'react';

export interface Service {
  title: string;
  images: string[];
}

export interface PortfolioItem {
  imageUrl: string;
  quote: string;
  author: string;
  authorRole?: string;
}

export interface Client {
  name: string;
  logo: React.ReactNode;
}