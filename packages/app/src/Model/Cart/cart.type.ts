import { Product } from '@/types';

interface Item extends Product {
  amount: number;
}

export interface Cart {
  items: Item[];
}

export interface FindProductIndexProps {
  cartItems: Product[];
  product: Product;
}
