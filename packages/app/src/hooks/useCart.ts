import { cartManager } from '@/Model/Cart/cart';
import { useManager } from '@/Model/manager';

export const useCart = () => {
  const {
    selectors: { items, orderItems, checkedItems },
    actions: {
      add,
      reduce,
      remove,
      clearItems,
      clearOrderItems,
      toggleChecked,
      toggleAllChecked,
      order,
    },
  } = useManager(cartManager);

  return {
    // Selectors
    items,
    orderItems,
    checkedItems,

    // Actions
    add,
    reduce,
    remove,
    clearItems,
    clearOrderItems,
    toggleChecked,
    toggleAllChecked,
    order,
  };
};
