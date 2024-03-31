import { Hr, ProductDetail } from '@/components/productDetail/ProductDetail';
import { useCart, useNavigate } from '@/hooks';
import { Product } from '@/types';
import { Formatter } from '@/utils/formatter';

export const Detail = () => {
  const {
    locationState: { product },
  } = useNavigate();
  const { name, price, imageUrl }: Product = product;
  const { add } = useCart();
  const { moveCart } = useNavigate();

  const onCartClick = () => {
    add({ product });
    moveCart();
  };

  return (
    <ProductDetail>
      <ProductDetail.Image src={imageUrl} alt={name} />
      <ProductDetail.InfoContainer>
        <ProductDetail.Title>{name}</ProductDetail.Title>
        <Hr />
        <ProductDetail.Price>{Formatter.currency(price)}</ProductDetail.Price>
      </ProductDetail.InfoContainer>
      <button
        onClick={onCartClick}
        className="product-detail-button flex-center mt-20"
      >
        장바구니
      </button>
    </ProductDetail>
  );
};
