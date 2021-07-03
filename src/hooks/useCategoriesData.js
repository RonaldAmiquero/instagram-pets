import React, { useState, useEffect } from 'react';

export function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      window
        .fetch('https://petgram-server-ronald.vercel.app/categories')
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((err) => setLoading(false));
      setLoading(false);
    }, 1000);
  }, []);
  return { categories, loading };
}
