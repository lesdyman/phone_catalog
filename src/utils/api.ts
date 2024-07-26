import { Device } from '../types/Device';
import { FetchOption } from '../types/FetchOption';
import { Product } from '../types/Product';

const BASE_URL = 'http://localhost:5173/api/';

export const get = async <T>(url: string): Promise<T> => {
  const fullURL = `${BASE_URL + url}.json`;
  const response = await fetch(fullURL);

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
};

export const getPhones = () => get<Device[]>(FetchOption.Phones);
export const getTablets = () => get<Device[]>(FetchOption.Tablets);
export const getAccessories = () => get<Device[]>(FetchOption.Accessories);
export const getProducts = () => get<Product[]>(FetchOption.Products);
