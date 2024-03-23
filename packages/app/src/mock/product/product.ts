import { Product } from '@/components/Product/product.type';
import { createProduct } from './utils/createProduct';

export const products: Product[] = createProduct(10);
