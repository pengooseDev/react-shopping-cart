import { Event } from '@/components/container/Event/Event';
import { Product } from '@/components/product/Product';
import { useNavigate } from '@/hooks/useNavigate';
import { DUMMY } from '@/mock/constants';

export const List = () => {
  const { moveOrderDetail } = useNavigate();

  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map((props) => (
        <Event.OnClick key={props.id} onClick={() => moveOrderDetail(props.id)}>
          <Product {...props} />
        </Event.OnClick>
      ))}
    </section>
  );
};
