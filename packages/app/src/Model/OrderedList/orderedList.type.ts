import { Item } from '../Cart/cart.type';

export interface OrderedListType {
  orderedList: Map<number, Item[]>;
}
