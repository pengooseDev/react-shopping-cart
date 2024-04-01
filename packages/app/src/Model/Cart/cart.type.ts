import { Product } from '@/types';

export interface Item extends Product {
  amount: number;
  checked: boolean;
}

export type Items = Map<Product['id'], Item>;

export interface Cart {
  items: Items;
  orderItems: Items;
  allChecked: boolean;
}

export interface HasProductProps {
  items: Items;
  product: Product;
}
