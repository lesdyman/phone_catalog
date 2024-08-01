import React, { ReactNode } from 'react';
import { FavoriteContext } from './FavoriteContext';
import { useFavoritesProvider } from './useFavoriteProvider';

interface FavoritesProviderProps {
  children: ReactNode;
}

export const FavoriteProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
  const value = useFavoritesProvider();

  return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>;
};
