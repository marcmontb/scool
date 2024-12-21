import React, { useState } from 'react';
import { SearchBar } from './SearchBar';
import { CourseFilters } from './CourseFilters';
import { CourseCard } from './CourseCard';
import { useCourses } from '../hooks/useCourses';

export function CourseList() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'' | 'Beginner' | 'Intermediate' | 'Advanced'>('');
  const [priceRange, setPriceRange] = useState(200);
  
  const { courses, loading } = useCourses(search, selectedLevel, priceRange);

  if (loading) {
    return <div>Loading courses...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <CourseFilters
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>
        
        <div className="md:col-span-3 space-y-6">
          <SearchBar value={search} onChange={setSearch} />
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <div className="md:col-span-2 lg:col-span-3 text-center py-8">
                <p className="text-gray-500">No courses found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}