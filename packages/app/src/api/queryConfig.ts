import { DEFAULT_PRODUCTS_LIST } from '@/mock/product/product.constant';
import { Api } from './api';

export const QUERY_CONFIG = {
  PRODUCT: {
    GET: {
      queryKey: ['products'],
      queryFn: Api.list.getProducts,
      initialData: DEFAULT_PRODUCTS_LIST,
    },
  },
} as const;
