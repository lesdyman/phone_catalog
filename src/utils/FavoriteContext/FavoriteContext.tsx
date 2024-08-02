import React, {
  FC, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { Product } from '../../types/Product';

type ContextType = {
  favorite: Product[];
  addProductToFavorite: (product: Product) => void;
  deleteProductFromFavorite: (productId: number) => void;
};

export const FavoriteContext = React.createContext<ContextType>({
  favorite: [],
  addProductToFavorite: () => {},
  deleteProductFromFavorite: () => {},
});

type Props = {
  children: ReactNode;
};

export const FavoriteProvider: FC<Props> = ({ children }) => {
  const [favorite, setFavorite] = useState<Product[]>(
    JSON.parse(window.localStorage.getItem('favorite') || '[]'),
  );

  useEffect(() => {
    window.localStorage.setItem('favorite', JSON.stringify(favorite));
  }, [favorite]);

  const addProductToFavorite = (product: Product) => {
    setFavorite((current) => [...current, product]);
  };

  const deleteProductFromFavorite = (productId: number) => {
    setFavorite((current) => [...current].filter((product) => product.id !== productId));
  };

  const favoriteContextValue = useMemo(
    () => ({
      favorite,
      addProductToFavorite,
      deleteProductFromFavorite,
    }),
    [favorite],
  );

  return (
    <FavoriteContext.Provider value={favoriteContextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};
