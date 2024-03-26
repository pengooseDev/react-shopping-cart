import { cartManager } from '@/Model/Cart/cart';
import { useManager } from '@/Model/manager';

export const useCart = () => {
  const {
    selectors: { items },
    actions: { add, reduce, remove, clear },
  } = useManager(cartManager);

  return {
    // Selectors
    items,

    // Actions
    add,
    reduce,
    remove,
    clear,
  };
};
