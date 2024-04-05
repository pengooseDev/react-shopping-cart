import { CartManager } from '@/Model/Cart/cart';
import { ProductOrder } from '@/components/order/ProductOrder';
import { useCart, useNavigate } from '@/hooks';
import { useCartService } from '@/hooks/useCartService';
import { Formatter } from '@/utils/formatter';

export const Order = () => {
  const { orderItems } = useCart();
  const { order } = useCartService();
  const { moveList } = useNavigate();
  const totalAmount = CartManager.getTotalAmount(orderItems);
  const totalPrice = CartManager.getTotalPrice(orderItems);

  const onClickHandler = () => {
    moveList();
    order();
  };

  return (
    <ProductOrder>
      <ProductOrder.Header />
      <div className="flex">
        <section className="order-left-section">
          <h3 className="order-title">주문 상품({totalAmount}건)</h3>
          <hr className="divide-line-gray mt-10" />

          {orderItems?.map((product) => (
            <ProductOrder.Item key={product.id} {...product} />
          ))}
        </section>

        <section className="order-right-section">
          <div className="order-right-section__top">
            <h3 className="order-title">결제금액</h3>
          </div>
          <hr className="divide-line-thin" />
          <div className="order-right-section__bottom">
            <div className="flex justify-between p-20 mt-20">
              <span className="highlight-text">총 결제금액</span>
              <span className="highlight-text">
                {Formatter.currency(totalPrice)}
              </span>
            </div>
            <div className="flex-center mt-30 mx-10">
              <button
                className="primary-button flex-center"
                onClick={onClickHandler}
              >
                {Formatter.currency(totalPrice)} 결제하기
              </button>
            </div>
          </div>
        </section>
      </div>
    </ProductOrder>
  );
};
