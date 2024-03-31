import { atom } from 'jotai';
import { Product } from '@/types';
import { AtomManager } from '@/Model/manager';
import { Cart, HasProductProps } from './cart.type';

class CartManager extends AtomManager<Cart> {
  public static DEFAULT_CHANGE_UNIT = 1;

  public selectors = {
    items: atom((get) => {
      const { items } = get(this.atom);

      return Array.from(items.values());
    }),

    allChecked: atom((get) => {
      const { allChecked } = get(this.atom);

      return allChecked;
    }),

    checkedItems: atom((get) => {
      const { items } = get(this.atom);

      return Array.from(items.values()).filter((item) => item.checked);
    }),

    checkedTotalAmount: atom((get) => {
      const { items } = get(this.atom);

      return Array.from(items.values())
        .filter((item) => item.checked)
        .reduce((acc, item) => acc + item.amount, 0);
    }),

    checkedTotalPrice: atom((get) => {
      const { items } = get(this.atom);

      return Array.from(items.values())
        .filter((item) => item.checked)
        .reduce((acc, item) => acc + item.amount * item.price, 0);
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
     * - 장바구니를 비웁니다.
     * @returns {void}
     */
    clear: atom(null, (_, set) => {
      set(this.atom, (prev: Cart) => ({
        ...prev,
        items: new Map(),
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
  allChecked: true,
};

export const cartManager = new CartManager(initialState);
