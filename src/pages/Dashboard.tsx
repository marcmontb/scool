import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import { CourseForm } from '../components/CourseForm';
import { CourseCard } from '../components/CourseCard';
import type { Course } from '../types';

export function DashboardPage() {
  const { profile } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      if (!profile) return;

      const query = profile.role === 'instructor'
        ? supabase
            .from('courses')
            .select('*')
            .eq('instructor_id', profile.id)
        : supabase
            .from('courses')
            .select('*, enrollments!inner(*)')
            .eq('enrollments.student_id', profile.id);

      const { data, error } = await query;

      if (!error && data) {
        setCourses(data);
      }
      setLoading(false);
    }

    loadCourses();
  }, [profile]);

  if (!profile) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">
        {profile.role === 'instructor' ? 'Instructor Dashboard' : 'My Courses'}
      </h1>

      {profile.role === 'instructor' && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Create New Course</h2>
          <CourseForm />
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p>Loading courses...</p>
        ) : courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
}