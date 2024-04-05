import { orderServiceManager } from '@/Service/orderService';
import { useManager } from '@/Model/manager';

export const useCartService = () => {
  const {
    actions: { order },
  } = useManager(orderServiceManager);

  return { order };
};
