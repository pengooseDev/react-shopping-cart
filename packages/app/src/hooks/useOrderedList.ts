import { orderedListManager } from '@/Model/OrderedList/orderedList';
import { useManager } from '@/Model/manager';

export const useOrderedList = () => {
  const {
    selectors: { orderedList },
  } = useManager(orderedListManager);

  return { orderedList };
};
