import { useCallback, useEffect, useState } from 'react';

/**
 * A custom React hook for managing the view count by fetching and incrementing it.
 * 
 * This hook is a backend API to fetch the current view count
 * and increment it when necessary. It automatically increments the view count
 * on render.
 * 
 * @returns {Object} Hook return value.
 * @returns {Function} return.incrementViewCount - A function to manually increment the view count.
*/

export const useViewCount = () => {
  const [, setViewCount] = useState<number>(0);


  const fetchViewCount = useCallback(async () => {
    try {
      const response = await fetch('/api/views');
      if (!response.ok) {
        throw new Error(`Failed to fetch view count: ${response.statusText}`);
      }
      const data = await response.json();
      setViewCount(data.count);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const incrementViewCount = useCallback(async () => {
    try {
      const response = await fetch('/api/views', { method: 'POST' });
      if (!response.ok) {
        throw new Error(`Failed to update view count: ${response.statusText}`);
      }
      fetchViewCount();
    } catch (err) {
      console.error(err);
    }
  }, [fetchViewCount]);

  useEffect(() => {
    incrementViewCount()
  }, [incrementViewCount]);

  return { incrementViewCount };
};

