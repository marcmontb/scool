import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { CourseList } from '../components/CourseList';
import { Hero } from '../components/Hero';

export function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {!user && <Hero />}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Browse Courses</h2>
        <CourseList />
      </div>
    </div>
  );
}