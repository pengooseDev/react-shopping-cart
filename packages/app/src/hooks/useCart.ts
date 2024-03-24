import { cartManager } from '@/Model/Cart/cart';
import { useManager } from '@/hooks/useManager';

export const useCart = () => {
  const {
    selectors: { items },
    actions: { add, addOne, reduce, reduceOne, remove, clear },
  } = useManager(cartManager);

  return {
    // Selectors
    items,

    // Actions
    add,
    addOne,
    reduce,
    reduceOne,
    remove,
    clear,
  };
};
