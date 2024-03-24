import { Event } from '@/components/container/Event/Event';
import { Product } from '@/components/product/Product';
import { useNavigate, useCart } from '@/hooks';
import { DUMMY } from '@/mock/constants';

export const List = () => {
  const { moveOrderDetail } = useNavigate();
  const { addOne, items } = useCart();

  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map((product) => {
        const { id, name, price, image } = product;

        return (
          <Product key={id}>
            <Event.onClick onClick={() => moveOrderDetail(id)}>
              <Product.Image src={image} alt={name} />
            </Event.onClick>

            <Product.InfoContainer>
              <Product.Info name={name} price={price} />
              <Event.onClick onClick={() => addOne(product)}>
                <Product.Image src={'assets/svgs/cart.svg'} alt="장바구니" />
              </Event.onClick>
            </Product.InfoContainer>
          </Product>
        );
      })}
      {items?.map((v) => (
        <div key={v.id}>{v.name}</div>
      ))}
    </section>
  );
};

// onClick 로직을 분리하기 위해선 이렇게 합성컴포넌트가 강제됨. onClick을 여러개 주입하기보단 이게 나아보이긴 한데 흠..
