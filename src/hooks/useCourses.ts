import { useSupabaseQuery } from './useSupabaseQuery';
import { supabase } from '../lib/supabase';
import type { Course } from '../types';

export function useCourses(search: string, level: string, maxPrice: number) {
  const query = () => {
    let queryBuilder = supabase
      .from('courses')
      .select('*');

    if (search) {
      queryBuilder = queryBuilder.ilike('title', `%${search}%`);
    }

    if (level) {
      queryBuilder = queryBuilder.eq('level', level);
    }

    if (maxPrice > 0) {
      queryBuilder = queryBuilder.lte('price', maxPrice);
    }

    return queryBuilder;
  };

  const { data: courses = [], error, loading } = useSupabaseQuery<Course[]>(query, [search, level, maxPrice]);

  return { courses, error, loading };
}