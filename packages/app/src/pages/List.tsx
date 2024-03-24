import { Event } from '@/components/container/Event/Event';
import { Product } from '@/components/product/Product';
import { DUMMY } from '@/mock/constants';

export const List = () => {
  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map((props) => {
        return (
          <Event.OnClick key={props.id} onClick={() => console.log(1)}>
            <Product {...props} />
          </Event.OnClick>
        );
      })}
    </section>
  );
};
