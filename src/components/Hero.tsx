import React from 'react';
import { Search } from 'lucide-react';

export function Hero() {
  return (
    <div className="text-center py-16 px-4">
      <h1 className="text-5xl font-bold mb-4">
        Discover communities
      </h1>
      <p className="text-xl mb-8">
        or <span className="text-blue-600 hover:underline cursor-pointer">create your own</span>
      </p>
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search for anything"
            className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </div>
  );
}