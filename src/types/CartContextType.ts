import { CartItem } from './CartItem';

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem | undefined) => void;
  changeItemCount: (id: string | number, quantity: number) => void;
  removeFromCart: (id: string | number) => void;
}
