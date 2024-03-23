import { Product } from '@/components/Product/Product';
import { DUMMY } from '@/mock';

export const List = () => {
  return (
    // TODO: 클릭시 Detail 페이지로 이동
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map(({ id, ...rest }) => (
        <Product key={id} {...rest} />
      ))}
    </section>
  );
};
