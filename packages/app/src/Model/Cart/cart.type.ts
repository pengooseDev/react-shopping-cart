import { Product } from '@/types';

interface Item extends Product {
  amount: number;
}

type Items = Map<Product['id'], Item>;

export interface Cart {
  items: Items;
}

export interface HasProductProps {
  items: Items;
  product: Product;
}
