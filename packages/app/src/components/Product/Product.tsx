import { Product as ProductData } from './product.type';

export const Product = ({ image, name, price }: Omit<ProductData, 'id'>) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price}원</span>
        </div>
        <img src="assets/svgs/cart.svg" alt="장바구니" />
      </div>
    </div>
  );
};