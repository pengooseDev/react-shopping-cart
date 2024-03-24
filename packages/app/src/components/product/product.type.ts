import { Product } from '@/types';

export interface ProductComponent extends Product {
  onClick?: () => void;
}
