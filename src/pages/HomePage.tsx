import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryProvider } from '../contexts/CategoryContext';
import { CategoryTabs } from '../components/CategoryTabs';
import { CommunityGrid } from '../components/CommunityGrid';

export function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <CategoryProvider>
        <CategoryTabs />
        <CommunityGrid />
      </CategoryProvider>
    </div>
  );
}