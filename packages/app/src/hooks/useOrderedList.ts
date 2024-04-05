import { orderedListManager } from '@/Model/Cart/cart';
import { useManager } from '@/Model/manager';

export const useOrderedList = () => {
  const {
    selectors: { orderedList },
  } = useManager(orderedListManager);

  return { orderedList };
};
