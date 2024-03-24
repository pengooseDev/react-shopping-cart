import { AtomManager } from '@pengoose/jotai';
import { atom } from 'jotai';
import { Product } from '@/types';
import { Cart, FindProductIndexProps } from './cart.type';

class CartManager extends AtomManager<Cart> {
  public static INITIAL_DATA: Cart = {
    items: [],
  };

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
          case false: {
            set(this.atom, (prev: Cart) => ({
              ...prev,
              items: [...prev.items, { ...product, amount }],
            }));

            break;
          }

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

          default: {
            throw new Error('Unexpected case');
          }
        }
      }
    ),

    remove: atom(null, (get, set, product: Product) => {
      const { items } = get(this.atom);

      const index = this.findProductIndex({
        cartItems: items,
        product,
      });

      if (index === -1) return;

      if (items[index].amount === 1) {
        set(this.atom, (prev: Cart) => ({
          ...prev,
          items: prev.items.filter((item) => item.id !== product.id),
        }));
      } else {
        set(this.atom, (prev: Cart) => ({
          ...prev,
          items: prev.items.map((item, i) =>
            i === index ? { ...item, amount: item.amount - 1 } : item
          ),
        }));
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

const initialData: Cart = {
  items: [],
};

export const cartManager = new CartManager(initialData);
