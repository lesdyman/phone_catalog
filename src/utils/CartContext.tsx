import { createContext } from 'react';
import { CartContextType } from '../types/CartContextType';

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
