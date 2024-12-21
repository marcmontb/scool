import React from 'react';
import { Search, MessageSquare, Bell } from 'lucide-react';

export function CommunityHeader() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold">Adonis Gang</h1>
          <button className="p-1 hover:bg-gray-100 rounded">
            <span className="sr-only">Toggle menu</span>
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12l-6-6h12l-6 6z" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-6">
          <div className="relative max-w-md w-96">
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <MessageSquare className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                1
              </span>
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
                1
              </span>
            </button>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}