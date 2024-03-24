import { Product } from '@/types';
import { createProduct } from './utils/createProduct';

export const products: Product[] = createProduct(10);
