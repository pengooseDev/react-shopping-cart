export const Detail = () => {
  return (
    <>
      <nav className='nav flex justify-around'>
        <div className='flex-center'>
          <h1 className='nav-title'>CLEAN CODE SHOP</h1>
        </div>
        <div className='flex gap-15'>
          <button className='nav-button'>장바구니</button>
          <button className='nav-button'>주문목록</button>
        </div>
      </nav>
      <div className='product-detail-container'>
        <div className='flex-col-center w-520'>
          <img
            className='w-480 h-480 mb-10'
            src='./assets/images/product.png'
            alt='PET보틀-정사각(420ml)'
          />
          <div className='product-detail-info'>
            <span className='product-detail-info__name'>
              PET보틀-정사각(420ml)
            </span>
            <hr className='divide-line-gray my-20' />
            <div className='flex justify-between'>
              <span>금액</span>
              <span className='product-detail-info__price'>43,000원</span>
            </div>
          </div>
          <button className='product-detail-button flex-center mt-20'>
            장바구니
          </button>
        </div>
      </div>
    </>
  );
};