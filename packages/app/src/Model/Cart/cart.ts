import { atom } from 'jotai';
import { Product } from '@/types';
import { AtomManager } from '@/Model/manager/atomManager';
import { Cart, FindProductIndexProps } from './cart.type';

class CartManager extends AtomManager<Cart> {
  public static INITIAL_DATA: Cart = {
    items: [],
  };

  public static DEFAULT_CHANGE_UNIT = 1;

  constructor(initialState: Cart = CartManager.INITIAL_DATA) {
    super(initialState);
  }

  public selectors = {
    items: atom((get) => get(this.atom).items),
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

        const productIndex = this.findProductIndex({
          cartItems: items,
          product,
        });
        const isExist = productIndex !== -1;

        switch (isExist) {
          case true: {
            set(this.atom, (prev: Cart) => ({
              ...prev,
              items: prev.items.map((item, i) =>
                i === productIndex
                  ? { ...item, amount: item.amount + amount }
                  : item
              ),
            }));

            break;
          }

          case false: {
            set(this.atom, (prev: Cart) => ({
              ...prev,
              items: [...prev.items, { ...product, amount }],
            }));

            break;
          }

          default: {
            throw new Error('Unexpected case');
          }
        }
      }
    ),

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

        const productIndex = this.findProductIndex({
          cartItems: items,
          product,
        });
        const isExist = productIndex !== -1;

        switch (isExist) {
          case true: {
            set(this.atom, (prev: Cart) => ({
              ...prev,
              items: prev.items.map((item, i) =>
                i === productIndex
                  ? { ...item, amount: item.amount - amount }
                  : item
              ),
            }));

            break;
          }

          case false: {
            return;
          }

          default: {
            throw new Error('Unexpected case');
          }
        }
      }
    ),

    remove: atom(null, (get, set, product: Product) => {
      const { items } = get(this.atom);

      const productIndex = this.findProductIndex({
        cartItems: items,
        product,
      });
      const isExist = productIndex !== -1;

      switch (isExist) {
        case true: {
          set(this.atom, (prev: Cart) => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== productIndex),
          }));

          break;
        }

        case false: {
          return;
        }
      }
    }),

    clear: atom(null, (_, set) => {
      set(this.atom, (prev: Cart) => ({
        ...prev,
        items: [],
      }));
    }),
  };

  private findProductIndex = ({
    cartItems,
    product,
  }: FindProductIndexProps): number => {
    return cartItems.findIndex((item) => item.id === product.id);
  };
}

export const cartManager = new CartManager(CartManager.INITIAL_DATA);
