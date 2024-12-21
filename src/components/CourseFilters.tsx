import React from 'react';

type Level = 'Beginner' | 'Intermediate' | 'Advanced';

interface CourseFiltersProps {
  selectedLevel: Level | '';
  onLevelChange: (level: Level | '') => void;
  priceRange: number;
  onPriceRangeChange: (price: number) => void;
}

export function CourseFilters({
  selectedLevel,
  onLevelChange,
  priceRange,
  onPriceRangeChange,
}: CourseFiltersProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Level</label>
        <select
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value as Level | '')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Max Price: ${priceRange}
        </label>
        <input
          type="range"
          min="0"
          max="200"
          value={priceRange}
          onChange={(e) => onPriceRangeChange(Number(e.target.value))}
          className="mt-1 w-full"
        />
      </div>
    </div>
  );
}