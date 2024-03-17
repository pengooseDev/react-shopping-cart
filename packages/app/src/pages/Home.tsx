export const Home = () => {
  return (
    <header className='flex-col-center'>
      <h1 className='global-nav-title'>
        React Clean Code Shopping Cart CSS example
      </h1>
      <br />
      <div className='global-nav-button-box'>
        <a className='global-nav-button' href='./index.html'>
          홈으로
        </a>
        <a className='global-nav-button' href='./list.html'>
          상품 목록
        </a>
        <a className='global-nav-button' href='./detail.html'>
          상품 상세
        </a>
        <a className='global-nav-button' href='./cart.html'>
          장바구니
        </a>
        <a className='global-nav-button' href='./order.html'>
          주문/결제
        </a>
        <a className='global-nav-button' href='./orderList.html'>
          주문 목록
        </a>
        <a className='global-nav-button' href='./orderDetail.html'>
          주문 상세
        </a>
      </div>
    </header>
  );
};
