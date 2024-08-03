import { useContext } from 'react';
import { FavoriteContext } from './FavoriteContext';

export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }

  return context;
};
