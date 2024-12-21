import React from 'react';
import { Play, Clock, Users } from 'lucide-react';

interface VideoPlayerProps {
  title: string;
  duration: string;
  memberCount: string;
  thumbnailUrl?: string;
}

export function VideoPlayer({ title, duration, memberCount, thumbnailUrl }: VideoPlayerProps) {
  return (
    <div className="relative aspect-video bg-gray-900 flex items-center justify-center">
      {thumbnailUrl && (
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      
      {/* Play Button */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        <button className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors group">
          <Play className="w-8 h-8 text-white fill-white transform translate-x-0.5" />
        </button>
        <div className="flex items-center gap-2 text-white/80 text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
          <Clock className="w-4 h-4" />
          <span>1.2x • {duration}</span>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-6 right-6 text-white z-10">
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <div className="flex items-center gap-4 text-sm text-white/80">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{memberCount} members</span>
          </div>
        </div>
      </div>
    </div>
  );
}