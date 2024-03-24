const ORDERED_PRODUCTS = [
  {
    id: 1,
    name: 'PET보틀-정사각(420ml)',
    price: 54800,
    quantity: 3,
  },
  {
    id: 2,
    name: 'PET보틀-정사각(420ml)',
    price: 54800,
    quantity: 3,
  },
  {
    id: 3,
    name: 'PET보틀-정사각(420ml)',
    price: 54800,
    quantity: 3,
  },
];

const Parser = {
  price(price: number) {
    return price.toLocaleString('ko-KR');
  },
};

export const Order = () => {
  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문/결제</h2>
        <hr className="divide-line mt-20" />
      </header>

      <div className="flex">
        <OrderLeft />
        <OrderRight />
      </div>
    </section>
  );
};

const OrderLeft = () => {
  const productCount = ORDERED_PRODUCTS.length;

  return (
    <section className="order-left-section">
      <h3 className="order-title">주문 상품({productCount}건)</h3>
      <hr className="divide-line-gray mt-10" />
      <div className="order-container">
        <div className="flex gap-15 mt-10">
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <div className="flex-col gap-15">
            <span className="order-name">PET보틀-정사각(420ml)</span>
            <span>수량: 3</span>
          </div>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
      <div className="order-container">
        <div className="flex gap-15 mt-10">
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <div className="flex-col gap-15">
            <span className="order-name">PET보틀-정사각(420ml)</span>
            <span>수량: 3</span>
          </div>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
      <div className="order-container">
        <div className="flex gap-15 mt-10">
          <img
            className="w-144 h-144"
            src="./assets/images/product.png"
            alt="PET보틀-정사각(420ml)"
          />
          <div className="flex-col gap-15">
            <span className="order-name">PET보틀-정사각(420ml)</span>
            <span>수량: 3</span>
          </div>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </section>
  );
};

const OrderRight = () => {
  const totalPrice = ORDERED_PRODUCTS.reduce(
    (acc, { price, quantity }) => acc + price * quantity,
    0
  );

  const parsedPrice = Parser.price(totalPrice);

  return (
    <section className="order-right-section">
      <div className="order-right-section__top">
        <h3 className="order-title">결제금액</h3>
      </div>
      <hr className="divide-line-thin" />
      <div className="order-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <span className="highlight-text">총 결제금액</span>
          <span className="highlight-text">{parsedPrice}원</span>
        </div>
        <div className="flex-center mt-30 mx-10">
          <button className="primary-button flex-center">
            {parsedPrice}원 결제하기
          </button>
        </div>
      </div>
    </section>
  );
};
