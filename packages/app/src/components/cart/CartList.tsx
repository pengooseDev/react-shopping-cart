import { Item as Product } from '@/Model/Cart/cart.type';
import { useCart } from '@/hooks';
import { Formatter } from '@/utils/formatter';
import { Event } from '@/components/container/Event/Event';

interface ItemProps {
  product: Product;
  checked: boolean;
  toggleChecked: (id: Product['id']) => void;
}

const Item = ({ product, checked, toggleChecked }: ItemProps) => {
  const { imageUrl, name, price, amount } = product;
  const { remove, reduce, add } = useCart();

  return (
    <>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={checked}
            onChange={() => toggleChecked(product.id)}
          />
          <img className="w-144 h-144" src={imageUrl} alt={name} />
          <span className="cart-name">{name}</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <Event.onClick onClick={() => remove(product)}>
            <img
              className="cart-trash-svg"
              src="./assets/svgs/trash.svg"
              alt="삭제"
            />
          </Event.onClick>
          <div className="number-input-container">
            <input type="number" className="number-input" value={amount} />
            <div>
              <button
                className="number-input-button"
                onClick={() => add({ product })}
              >
                ▲
              </button>
              <button
                className="number-input-button"
                onClick={() => reduce({ product })}
              >
                ▼
              </button>
            </div>
          </div>
          <span className="cart-price">{Formatter.currency(price)}</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </>
  );
};

export const CartList = { Item };
