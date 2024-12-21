import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

interface UseSupabaseQueryResult<T> {
  data: T | null;
  error: PostgrestError | null;
  loading: boolean;
}

export function useSupabaseQuery<T>(
  query: () => Promise<{ data: T | null; error: PostgrestError | null }>,
  deps: any[] = []
): UseSupabaseQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<PostgrestError | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        const { data, error } = await query();
        
        if (isMounted) {
          setData(data);
          setError(error);
        }
      } catch (err) {
        if (isMounted) {
          setError(err as PostgrestError);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, deps);

  return { data, error, loading };
}