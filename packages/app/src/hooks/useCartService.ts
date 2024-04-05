import { orderServiceManager } from '@/Model/Cart/cart';
import { useManager } from '@/Model/manager';

export const useCartService = () => {
  const {
    actions: { order },
  } = useManager(orderServiceManager);

  return { order };
};
