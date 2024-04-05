import { atom } from 'jotai';
import { AtomManager } from '@/Model/manager';
import { CartManager, cartManager } from '@/Model/Cart/cart';
import {
  OrderedListManager,
  orderedListManager,
} from '@/Model/OrderedList/orderedList';

interface OrderServiceType {
  orderedList: OrderedListManager;
  cart: CartManager;
}

// TODO: Service 전용 Manager도 만들기
export class OrderService extends AtomManager<OrderServiceType> {
  public cart: CartManager;
  public orderedList: OrderedListManager;

  constructor({ cart, orderedList }: OrderServiceType) {
    // 흠.. 굳이 아톰으로 엮을 필요 없나..?
    super({
      cart,
      orderedList,
    });

    // 이걸로 충분해보이는데
    this.cart = cart;
    this.orderedList = orderedList;
  }

  public selectors = {};

  public actions = {
    order: atom(null, (get, set) => {
      const orderItemsValue = get(this.cart.selectors.orderItems);
      set(this.orderedList.actions.addOrderList, orderItemsValue);
      set(this.cart.actions.clearOrderItems);
    }),
  };
}

export const orderServiceManager = new OrderService({
  cart: cartManager,
  orderedList: orderedListManager,
});
