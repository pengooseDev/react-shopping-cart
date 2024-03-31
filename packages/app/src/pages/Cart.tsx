import { Item } from '@/Model/Cart/cart.type';
import { CartList } from '@/components/cart/CartList';
import { useCart } from '@/hooks';
import { Formatter } from '@/utils/formatter';

export const Cart = () => {
  const {
    items,
    toggleChecked,
    toggleAllChecked,
    allChecked,
    checkedTotalAmount,
    checkedTotalPrice,
  } = useCart();

  return (
    <>
      <section className="cart-section">
        <header className="flex-col-center mt-20">
          <h2 className="cart-section__title">장바구니</h2>
          <hr className="divide-line mt-20" />
        </header>

        <div className="flex">
          <section className="cart-left-section">
            <div className="flex justify-between items-center">
              <div className="checkbox-container">
                <input
                  className="checkbox"
                  name="checkbox"
                  type="checkbox"
                  checked={allChecked}
                  onChange={toggleAllChecked}
                />
                <label className="checkbox-label" htmlFor="checkbox">
                  선택해제
                </label>
              </div>
              <button className="delete-button">상품삭제</button>
            </div>
            <h3 className="cart-title">
              든든배송 상품({checkedTotalAmount}개)
            </h3>
            <hr className="divide-line-gray mt-10" />
            {items?.map((item: Item) => (
              <CartList.Item
                key={item.id}
                product={item}
                checked={item.checked}
                toggleChecked={toggleChecked}
              />
            ))}
          </section>
          <section className="cart-right-section">
            <div className="cart-right-section__top">
              <h3 className="cart-title">결제예상금액</h3>
            </div>
            <hr className="divide-line-thin" />
            <div className="cart-right-section__bottom">
              <div className="flex justify-between p-20 mt-20">
                <span className="highlight-text">결제예상금액</span>
                <span className="highlight-text">
                  {Formatter.currency(checkedTotalPrice)}
                </span>
              </div>
              <div className="flex-center mt-30 mx-10">
                <button className="primary-button flex-center">
                  주문하기({checkedTotalAmount}개)
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
