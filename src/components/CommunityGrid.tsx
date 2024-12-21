import React from 'react';
import { CommunityCard } from './CommunityCard';
import { useCategory } from '../contexts/CategoryContext';
import type { Community } from '../types';

const communities: Community[] = [
  {
    rank: 1,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    title: 'Digital Growth Community',
    description: 'Welcome to Digital Growth Community! Our Mission: To Help You Build a Daily Pay Customer Base Digitally.',
    avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200',
    category: 'business'
  },
  {
    rank: 2,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    title: 'Adonis Gang',
    description: 'Join the #1 masculine self-improvement community... Level up in all areas of your life!',
    avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=200',
    category: 'health'
  },
  {
    rank: 3,
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800',
    title: 'KRYPTO TRADING LERNEN',
    description: 'Werde Teil der Chartmastery x Escape Community und lerne WIE die Märkte und Trading WIRKLICH funktionieren.',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=200',
    category: 'business'
  }
];

export function CommunityGrid() {
  const { selectedCategory } = useCategory();

  const filteredCommunities = communities.filter(
    community => selectedCategory === 'all' || community.category === selectedCategory
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCommunities.map((community) => (
        <CommunityCard key={community.rank} {...community} />
      ))}
    </div>
  );
}