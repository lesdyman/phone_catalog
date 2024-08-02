import { createContext } from 'react';
import { Product } from '../types/Product';

export interface FavoriteContextType {
  favorites: Product[];
  deleteItem: (product: Product) => void;
  addItem: (phone: Product) => void;
}

export const FavoriteContext = createContext<FavoriteContextType | undefined>(
  undefined,
);
