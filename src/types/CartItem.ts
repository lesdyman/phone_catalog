import { Device } from './Device';
import { Product } from './Product';

export type CartItem = Product | Device;

export const isProduct = (item: CartItem): item is Product => {
  return !!(item as Product).price;
};
