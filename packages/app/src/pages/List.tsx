import { Event } from '@/components/container/Event/Event';
import { Product } from '@/components/product/Product';
import { useNavigate, useCart } from '@/hooks';
import { Product as ProductData } from '@/types';
import { useQuery } from '@tanstack/react-query';
import { QUERY_CONFIG } from '@/api/queryConfig';
import { useOrderedList } from '@/hooks/useOrderedList';

export const List = () => {
  const { moveDetail } = useNavigate();
  const { add, items } = useCart();
  const { orderedList } = useOrderedList();
  const { data: listData } = useQuery(QUERY_CONFIG.PRODUCT.GET);

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
      <h1>장바구니 상품({items.length}개)</h1>
      {items?.map((item) => (
        <>
          <div key={item.id}>{item.name}</div>
          <div>{item.price}</div>
          <div>{item.amount}</div>
        </>
      ))}

      <h1>order 상품{orderedList.length}개</h1>
      {orderedList?.map((items) =>
        items.map((item) => (
          <>
            <div key={item.id}>{item.name}</div>
            <div>{item.price}</div>
            <div>{item.amount}</div>
          </>
        ))
      )}
    </section>
  );
};
