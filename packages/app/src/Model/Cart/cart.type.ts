import { Product } from '@/types';

interface Item extends Product {
  amount: number;
}

export interface Cart {
  items: Item[];
}

export interface FindProductIndexProps {
  items: Product[];
  product: Product;
}
