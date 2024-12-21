import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

export function CourseForm() {
  const { profile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!profile || profile.role !== 'instructor') return;

    const formData = new FormData(e.currentTarget);
    const courseData = {
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      instructor_id: profile.id,
      thumbnail_url: formData.get('thumbnailUrl') as string,
      duration: formData.get('duration') as string,
      level: formData.get('level') as 'Beginner' | 'Intermediate' | 'Advanced',
      price: parseFloat(formData.get('price') as string),
    };

    try {
      setLoading(true);
      setError(null);
      
      const { error: insertError } = await supabase
        .from('courses')
        .insert([courseData]);

      if (insertError) throw insertError;
      
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }

  if (!profile || profile.role !== 'instructor') {
    return null;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Course Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          required
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-700">
          Thumbnail URL
        </label>
        <input
          type="url"
          name="thumbnailUrl"
          id="thumbnailUrl"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
          Duration
        </label>
        <input
          type="text"
          name="duration"
          id="duration"
          required
          placeholder="e.g., 2 hours"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="level" className="block text-sm font-medium text-gray-700">
          Level
        </label>
        <select
          name="level"
          id="level"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price
        </label>
        <input
          type="number"
          name="price"
          id="price"
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Creating Course...' : 'Create Course'}
      </button>
    </form>
  );
}