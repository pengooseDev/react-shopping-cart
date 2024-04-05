import { atom } from 'jotai';
import { AtomManager } from '@/Model/manager';
import { Item } from '@/Model/Cart/cart.type';
import { OrderedListType } from './orderedList.type';

export class OrderedListManager extends AtomManager<OrderedListType> {
  public selectors = {
    orderedList: atom((get) => {
      const { orderedList } = get(this.atom);

      return Array.from(orderedList.values());
    }),
  };

  public actions = {
    addOrderList: atom(null, (_, set, items: Item[]) => {
      set(this.atom, (prev: OrderedListType) => {
        const newOrderedLists = new Map(prev.orderedList);
        const newId = newOrderedLists.size + 1;

        newOrderedLists.set(newId, items);

        return {
          ...prev,
          orderedList: newOrderedLists,
        };
      });
    }),
  };
}

const initialState: OrderedListType = { orderedList: new Map() };

export const orderedListManager = new OrderedListManager(initialState);
