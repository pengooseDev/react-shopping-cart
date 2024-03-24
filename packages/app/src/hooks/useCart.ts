import { useManager } from '@pengoose/jotai';
import { cartManager } from '@/Model/Cart/cart';

export const useCart = () => {
  const {
    selectors: { items },
    actions: { add, remove, clear },
  } = useManager(cartManager);

  return {
    // Selectors
    items,

    // Actions
    add,
    remove,
    clear,
  };
};
