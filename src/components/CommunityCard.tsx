import React from 'react';
import { Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommunityCardProps {
  rank: number;
  image: string;
  title: string;
  description: string;
  avatar: string;
  category: string;
}

export function CommunityCard({ rank, image, title, description, avatar, category }: CommunityCardProps) {
  const navigate = useNavigate();

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          #{rank}
        </span>
        <span className="absolute top-3 right-3 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize backdrop-blur-sm">
          {category}
        </span>
        <img 
          src={image} 
          alt={title} 
          className="w-full h-52 object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative">
            <img 
              src={avatar} 
              alt="" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
            />
            <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>2.4k members</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <button 
          onClick={() => navigate('/community')}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <span>Join community</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}