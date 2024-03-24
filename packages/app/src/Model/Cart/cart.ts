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
    add: atom(
      null,
      (get, set, { amount, product }: { amount: number; product: Product }) => {
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

    addOne: atom(null, (_, set, product: Product) => {
      set(this.actions.add, {
        amount: CartManager.DEFAULT_CHANGE_UNIT,
        product,
      });
    }),

    reduce: atom(
      null,
      (get, set, { amount, product }: { amount: number; product: Product }) => {
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

    reduceOne: atom(null, (_, set, product: Product) => {
      set(this.actions.reduce, {
        amount: CartManager.DEFAULT_CHANGE_UNIT,
        product,
      });
    }),

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
