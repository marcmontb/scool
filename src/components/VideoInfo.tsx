import React from 'react';
import { Lock, Crown } from 'lucide-react';

interface VideoInfoProps {
  creator: string;
  description: string;
  guarantee: string;
}

export function VideoInfo({ creator, description, guarantee }: VideoInfoProps) {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Lock className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Private group</span>
        </div>
        <div className="flex items-center gap-2">
          <Crown className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-600">By {creator}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-6">{description}</p>
      <p className="text-gray-600">{guarantee}</p>
    </div>
  );
}