import { useCart, useNavigate, useOrderedList } from '@/hooks';
import { Event } from '@/components/container/Event/Event';
import { Item } from '@/Model/Cart/cart.type';

export const OrderList = () => {
  const { moveCart, moveOrderDetail } = useNavigate();
  const { add } = useCart();
  const { orderedList } = useOrderedList();

  const onAddHandler = (items: Item[]) => {
    items.forEach((product) => add({ product }));

    moveCart();
  };

  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="order-list">
        {/* FIXME:  id로 변경 */}
        {orderedList?.map((items, index) => (
          <>
            <div className="order-list__header">
              <span>주문번호: {index + 1}</span>
              <Event.onClick onClick={() => moveOrderDetail(index)}>
                <span>{`상세보기 >`}</span>
              </Event.onClick>
            </div>

            <div key={index} className="order-list-item">
              {items.map((item) => (
                <div key={item.id} className="flex gap-15 mt-10">
                  <img
                    className="w-144 h-144"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <div className="flex-col gap-15">
                    <span className="order-name">{item.name}</span>
                    <span className="order-info">{`${item.price}원 / 수량: ${item.amount}개`}</span>
                  </div>
                </div>
              ))}
              <button
                className="primary-button-small flex-center self-start"
                onClick={() => onAddHandler(items)}
              >
                장바구니
              </button>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};
