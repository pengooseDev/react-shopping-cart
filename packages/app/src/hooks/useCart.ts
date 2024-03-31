import { cartManager } from '@/Model/Cart/cart';
import { useManager } from '@/Model/manager';

export const useCart = () => {
  const {
    selectors: {
      items,
      allChecked,
      checkedItems,
      checkedTotalAmount,
      checkedTotalPrice,
    },
    actions: { add, reduce, remove, clear, toggleChecked, toggleAllChecked },
  } = useManager(cartManager);

  return {
    // Selectors
    items,
    allChecked,
    checkedItems,
    checkedTotalAmount,
    checkedTotalPrice,

    // Actions
    add,
    reduce,
    remove,
    clear,
    toggleChecked,
    toggleAllChecked,
  };
};
