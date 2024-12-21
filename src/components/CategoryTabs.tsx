import React from 'react';
import { Briefcase, Heart, Lightbulb, Palette, Music, Filter } from 'lucide-react';
import { useCategory } from '../contexts/CategoryContext';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: 'all', name: 'All', icon: null },
  { 
    id: 'business', 
    name: 'Business', 
    icon: <Briefcase className="w-4 h-4 text-orange-500" /> 
  },
  { 
    id: 'health', 
    name: 'Health & fitness', 
    icon: <Heart className="w-4 h-4 text-red-500" /> 
  },
  { 
    id: 'development', 
    name: 'Personal development', 
    icon: <Lightbulb className="w-4 h-4 text-yellow-500" /> 
  },
  { 
    id: 'arts', 
    name: 'Arts & crafts', 
    icon: <Palette className="w-4 h-4 text-purple-500" /> 
  },
  { 
    id: 'music', 
    name: 'Music', 
    icon: <Music className="w-4 h-4 text-blue-500" /> 
  },
];

export function CategoryTabs() {
  const { selectedCategory, setSelectedCategory } = useCategory();

  return (
    <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar">
      <div className="flex-1 flex items-center gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
              category.id === selectedCategory 
                ? 'bg-gray-600 text-white' 
                : 'bg-white hover:bg-gray-50 text-gray-700'
            }`}
          >
            {category.icon}
            <span>{category.name}</span>
          </button>
        ))}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700 whitespace-nowrap">
          More...
        </button>
      </div>
      
      <div className="flex-none">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
}