import React from 'react';
import { Clock, BarChart } from 'lucide-react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={course.thumbnail_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'}
          alt={course.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {course.duration || 'Self-paced'}
            </div>
            <div className="flex items-center">
              <BarChart className="mr-1 h-4 w-4" />
              {course.level || 'All levels'}
            </div>
          </div>
          <span className="text-lg font-bold text-blue-600">
            ${course.price?.toFixed(2) || 'Free'}
          </span>
        </div>
      </div>
    </div>
  );
}