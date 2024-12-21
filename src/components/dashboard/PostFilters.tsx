import React from 'react';

const filters = [
  'All',
  'Celebrate Progress',
  'Ask For Advice',
  'Guides & Field Reports',
  'General'
];

export function PostFilters() {
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`px-4 py-2 rounded-full whitespace-nowrap ${
            filter === 'All'
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}