import React from 'react';
import { VideoPlayer } from '../components/VideoPlayer';
import { VideoInfo } from '../components/VideoInfo';
import { CommunityInfoCard } from '../components/CommunityInfoCard';

export function CommunityPage() {
  const thumbnails = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=200',
    'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80&w=200',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
              <VideoPlayer
                title="UDNIA"
                duration="16 min"
                memberCount="1.8k"
                thumbnailUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000"
              />
              <VideoInfo
                creator="Rodrigo Alfaro"
                description="👋 La ÚNICA Universidad Digital del mundo que te enseña a hacer dinero con Inteligencia Artificial (Desde cero absoluto y paso por paso)."
                guarantee="Si no te funciona en 30 días, te devuelvo el 100% del dinero y te pago $49 extra ✅"
              />
            </div>

            {/* Thumbnails Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {thumbnails.map((thumbnail, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={thumbnail} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Side Info Card */}
          <div className="w-80 flex-none">
            <div className="sticky top-8">
              <CommunityInfoCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}