import { useEffect, useState } from 'react';
import { Event } from '@/components/container/Event/Event';
import { Product } from '@/components/product/Product';
import { useNavigate, useCart } from '@/hooks';
import { Product as ProductData } from '@/types';
import { Api } from '@/api/api';

export const List = () => {
  const { moveDetail } = useNavigate();
  const { add, items } = useCart();
  const [listData, setListData] = useState<undefined | ProductData[]>();

  useEffect(() => {
    const getListData = async () => {
      try {
        const products: ProductData[] = await Api.list.getProducts();

        setListData(products);
      } catch (error) {
        console.error(error);
      }
    };

    getListData();
  }, []);

  return (
    <section className="product-container">
      {listData?.map((product: ProductData) => {
        const { id, name, price, imageUrl } = product;

        return (
          <Product key={id}>
            <Event.onClick
              onClick={() =>
                moveDetail(id, {
                  state: {
                    product,
                  },
                })
              }
            >
              <Product.Image src={imageUrl} alt={name} />
            </Event.onClick>

            <Product.InfoContainer>
              <Product.Info name={name} price={price} />
              <Event.onClick onClick={() => add({ product })}>
                <Product.Image src={'assets/svgs/cart.svg'} alt="장바구니" />
              </Event.onClick>
            </Product.InfoContainer>
          </Product>
        );
      })}
      {items?.map((v) => (
        <div key={v.id}>
          {v.name} : {v.amount}개
        </div>
      ))}
    </section>
  );
};

// onClick 로직을 분리하기 위해선 이렇게 합성컴포넌트가 강제됨. onClick을 여러개 주입하기보단 이게 나아보이긴 한데 흠..
