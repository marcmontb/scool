import React from 'react';
import { Play, Clock, Users } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Masculinity Fundamentals",
    duration: "2h 30m",
    lessons: 12,
    thumbnail: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Advanced Self-Development",
    duration: "3h 45m",
    lessons: 15,
    thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800",
  }
];

export function ClassroomSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden group">
          <div className="relative aspect-video">
            <img 
              src={course.thumbnail} 
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Play className="w-6 h-6 text-white fill-white" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2">{course.title}</h3>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.lessons} lessons</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}