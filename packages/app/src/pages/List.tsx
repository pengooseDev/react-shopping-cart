import { Event } from '@/components/container/Event/Event';
import { Product } from '@/components/product/Product';
import { useNavigate } from '@/hooks/useNavigate';
import { DUMMY } from '@/mock/constants';

export const List = () => {
  const { moveOrderDetail } = useNavigate();
  const addCart = (id: number) => console.log(`add ${id}`);

  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map(({ id, name, price, image }) => (
        <Product>
          <Event.onClick key={id} onClick={() => moveOrderDetail(id)}>
            <Product.Image src={image} alt={name} />
          </Event.onClick>

          <Product.InfoContainer>
            <Product.Info name={name} price={price} />
            <Event.onClick key={id} onClick={() => addCart(id)}>
              <Product.Image src={'assets/svgs/cart.svg'} alt="장바구니" />
            </Event.onClick>
          </Product.InfoContainer>
        </Product>
      ))}
    </section>
  );
};

// onClick 로직을 분리하기 위해선 이렇게 합성컴포넌트가 강제됨. onClick을 여러개 주입하기보단 이게 나아보이긴 한데 흠..
