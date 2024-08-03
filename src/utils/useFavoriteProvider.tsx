import { useState, useEffect, useCallback, useMemo } from 'react';
import { Product } from '../types/Product';

export const useFavoritesProvider = () => {
  const [favorites, setFavorites] = useState<Product[]>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const deleteItem = useCallback((product: Product) => {
    setFavorites((prevFavorites) => prevFavorites.filter((el) => el.itemId !== product.itemId));
  }, []);

  const addItem = useCallback((phone: Product) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.map((item) => item.itemId).includes(phone.itemId)) {
        return prevFavorites.filter((el) => el.itemId !== phone.itemId);
      }
      return [...prevFavorites, phone];
    });
  }, []);

  const value = useMemo(
    () => ({
      favorites,
      deleteItem,
      addItem,
    }),
    [favorites, deleteItem, addItem],
  );

  return value;
};
