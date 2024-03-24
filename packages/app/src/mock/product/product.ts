import { Product } from '@/components/product/product.type';
import { createProduct } from './utils/createProduct';

export const products: Product[] = createProduct(10);
