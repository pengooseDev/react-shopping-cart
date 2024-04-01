import { Api } from './api';

export const QUERY_CONFIG = {
  PRODUCT: {
    GET: {
      queryKey: ['products'],
      queryFn: Api.list.getProducts,
    },
  },
} as const;
