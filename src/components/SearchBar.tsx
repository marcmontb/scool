import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-0 bg-gray-50 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 sm:text-sm sm:leading-6"
        placeholder="Search courses..."
      />
    </div>
  );
}