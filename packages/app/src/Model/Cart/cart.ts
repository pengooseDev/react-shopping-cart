import { atom } from 'jotai';
import { Product } from '@/types';
import { AtomManager } from '@/Model/manager';
import { Cart, HasProductProps, Item } from './cart.type';

export class CartManager extends AtomManager<Cart> {
  public static DEFAULT_CHANGE_UNIT = 1;

  /**
   * @description
   * - 선택된 상품들의 총 가격을 반환합니다.
   * @param {Item[]} items - 선택된 상품 목록
   * @returns {number}
   */
  public static getTotalPrice = (items: Item[]) => {
    return items.reduce((acc, item) => acc + item.amount * item.price, 0);
  };

  /**
   * @description
   * - 선택된 상품들의 총 수량을 반환합니다.
   * @param {Item[]} items - 선택된 상품 목록
   * @returns {number}
   */
  public static getTotalAmount = (items: Item[]) => {
    return items.reduce((acc, item) => acc + item.amount, 0);
  };

  /**
   * @description
   * - 모든 상품이 선택되었는지 여부를 반환합니다.
   * @param {Item[]} items - 상품 목록
   * @returns {boolean}
   */
  public static isAllChecked = (items: Item[]) => {
    return items.every((item) => item.checked);
  };

  public selectors = {
    /**
     * @description
     * - 장바구니 상품 목록을 반환합니다.
     * @returns {Item[]}
     */
    items: atom((get) => {
      const { items } = get(this.atom);

      return Array.from(items.values());
    }),

    /**
     * @description
     * - 장바구니 상품 중 선택된 상품들을 반환합니다.
     * @returns {Item[]}
     */
    checkedItems: atom((get) => {
      const { items } = get(this.atom);

      return Array.from(items.values()).filter((item) => item.checked);
    }),

    /**
     * @description
     * - 주문 목록을 반환합니다.
     * @returns {Item[]}
     */
    orderItems: atom((get) => {
      const { orderItems } = get(this.atom);

      return Array.from(orderItems.values());
    }),
  };

  public actions = {
    /**
     * @description
     * - 장바구니에 상품을 추가합니다.
     * - 이미 존재하는 상품이라면 수량을 증가시킵니다.
     * - 존재하지 않는 상품이라면 새로 추가합니다.
     * - 추가할 상품의 수량이 주어지지 않으면 기본값인 1이 증가합니다.
     * @param {number} amount - 상품 수량
     * @param {Product} product - 상품 정보
     * @returns {void}
     */
    add: atom(
      null,
      (
        get,
        set,
        {
          amount = CartManager.DEFAULT_CHANGE_UNIT,
          product,
        }: { amount?: number; product: Product }
      ) => {
        const { items } = get(this.atom);

        const hasProduct = this.hasProduct({
          items,
          product,
        });

        switch (hasProduct) {
          case true: {
            set(this.atom, (prev: Cart) => {
              const newItems = new Map(prev.items);
              const prevProduct = newItems.get(product.id);

              if (!prevProduct) return prev;

              newItems.set(product.id, {
                ...prevProduct,
                amount: prevProduct.amount + amount,
              });

              return {
                ...prev,
                items: newItems,
              };
            });

            break;
          }

          case false: {
            set(this.atom, (prev: Cart) => {
              const newItems = new Map(prev.items);

              newItems.set(product.id, {
                ...product,
                amount,
                checked: true,
              });

              return {
                ...prev,
                items: newItems,
              };
            });

            break;
          }
        }
      }
    ),

    /**
     * @description
     * - 장바구니에 상품을 감소시킵니다.
     * - 상품 수량이 0이 되면 상품을 삭제합니다.
     * - 감소할 상품의 수량이 주어지지 않으면 기본값인 1이 감소합니다.
     * @param {number} amount - 상품 수량
     * @param {Product} product - 상품 정보
     * @returns {void}
     */
    reduce: atom(
      null,
      (
        get,
        set,
        {
          amount = CartManager.DEFAULT_CHANGE_UNIT,
          product,
        }: { amount?: number; product: Product }
      ) => {
        const { items } = get(this.atom);

        const hasProduct = this.hasProduct({
          items,
          product,
        });

        switch (hasProduct) {
          case true: {
            set(this.atom, (prev: Cart) => {
              const newItems = new Map(prev.items);
              const prevProduct = newItems.get(product.id);

              if (!prevProduct) return prev;

              const newAmount = prevProduct.amount - amount;

              if (newAmount <= 0) {
                newItems.delete(product.id);

                return {
                  ...prev,
                  items: newItems,
                };
              }

              newItems.set(product.id, {
                ...prevProduct,
                amount: newAmount,
              });

              return {
                ...prev,
                items: newItems,
              };
            });

            break;
          }

          case false: {
            return;
          }
        }
      }
    ),

    /**
     * @description
     * - 장바구니에 상품을 삭제합니다.
     * @param {Product} product - 상품 정보
     * @returns {void}
     */
    remove: atom(null, (get, set, product: Product) => {
      const { items } = get(this.atom);

      const hasProduct = this.hasProduct({
        items,
        product,
      });

      switch (hasProduct) {
        case true: {
          set(this.atom, (prev: Cart) => {
            const newItems = new Map(prev.items);
            newItems.delete(product.id);

            return {
              ...prev,
              items: newItems,
            };
          });

          break;
        }

        case false: {
          return;
        }
      }
    }),

    /**
     * @description
     * - 선택된 상품을 주문 목록으로 이동합니다.
     * - 선택된 상품을 장바구니에서 삭제합니다.
     */
    orderConfirm: atom(null, (_, set) => {
      set(this.atom, (prev: Cart) => {
        const newItems = new Map(prev.items);
        const newOrderItems = new Map(prev.orderItems);

        for (const [id, item] of newItems) {
          if (item.checked) {
            newOrderItems.set(id, item);
            newItems.delete(id);
          }
        }

        return {
          ...prev,
          items: newItems,
          orderItems: newOrderItems,
        };
      });
    }),

    /**
     * @description
     * - 장바구니를 비웁니다.
     * @returns {void}
     */
    clearItems: atom(null, (_, set) => {
      set(this.atom, (prev: Cart) => ({
        ...prev,
        items: new Map(),
      }));
    }),

    /**
     * @description
     * - 주문 목록을 비웁니다.
     * @returns {void}
     */
    clearOrderItems: atom(null, (_, set) => {
      set(this.atom, (prev: Cart) => ({
        ...prev,
        orderItems: new Map(),
      }));
    }),

    /**
     * @description
     * - 장바구니 상품 선택 여부를 토글합니다.
     */
    toggleChecked: atom(null, (_, set, id: Product['id']) => {
      set(this.atom, (prev: Cart) => {
        const newItems = new Map(prev.items);
        const prevProduct = newItems.get(id);

        if (!prevProduct) return prev;

        newItems.set(id, {
          ...prevProduct,
          checked: !prevProduct.checked,
        });

        return {
          ...prev,
          items: newItems,
        };
      });
    }),

    /**
     * @description
     * - 장바구니 상품 전체 선택 여부를 토글합니다.
     */
    toggleAllChecked: atom(null, (_, set) => {
      set(this.atom, (prev: Cart) => {
        const newItems = new Map(prev.items);

        for (const [id, item] of newItems) {
          newItems.set(id, {
            ...item,
            checked: !prev.allChecked,
          });
        }

        return {
          ...prev,
          items: newItems,
          allChecked: !prev.allChecked,
        };
      });
    }),
  };

  /**
   * @description
   * - 장바구니에 상품이 존재하는지 확인합니다.
   * @param {Items} items - 장바구니 상품 목록
   * @param {Product} product - 상품 정보
   * @returns {boolean}
   */
  private hasProduct = ({ items, product }: HasProductProps): boolean => {
    return items.has(product.id);
  };
}

const initialState: Cart = {
  items: new Map(),
  orderItems: new Map(),
  allChecked: true,
};

export const cartManager = new CartManager(initialState);

/* OrderedList */
interface OrderedListType {
  orderedList: Map<number, Item[]>;
}

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

export const orderedListManager = new OrderedListManager({
  orderedList: new Map(),
});

/* OrderService */
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
