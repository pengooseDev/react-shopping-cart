import { Hr, ProductDetail } from '@/components/productDetail/ProductDetail';
import { useCart } from '@/hooks';
import { Product } from '@/types';
import { Formatter } from '@/utils/formatter';

export const Detail = () => {
  const { add } = useCart();
  const product: Product = {
    id: 1,
    name: 'PET보틀-정사각(420ml)',
    price: 5000,
    imageUrl: '/assets/images/product.png',
  } as const;

  return (
    <ProductDetail>
      <ProductDetail.Image src={product.imageUrl} alt={product.name} />
      <ProductDetail.InfoContainer>
        <ProductDetail.Title>{product.name}</ProductDetail.Title>
        <Hr />
        <ProductDetail.Price>
          {Formatter.currency(product.price)}
        </ProductDetail.Price>
      </ProductDetail.InfoContainer>
      <button
        onClick={() => add({ product })}
        className='product-detail-button flex-center mt-20'
      >
        장바구니
      </button>
    </ProductDetail>
  );
};
