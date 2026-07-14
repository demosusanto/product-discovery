import { useState, useEffect, useCallback } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [total, setTotal] = useState(0);

  const fetchProducts = useCallback(async (query = '') => {
    setLoading(true);
    setError(null);
    try {
      const url = query
        ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
        : 'https://dummyjson.com/products?limit=30';

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data.products);
      setTotal(data.total);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Debounce search
    const timer = setTimeout(() => {
      fetchProducts(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery, fetchProducts]);

  return {
    products,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    total
  };
};
