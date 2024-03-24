import { Product } from '@/components/product/Product';
import { withRouter } from '@/hoc/withRouter';
import { DUMMY } from '@/mock/constants';

export const List = () => {
  return (
    <section className="product-container">
      {DUMMY.PRODUCT.LIST.map((props) => {
        // 성능상 이슈 + 굳이 withRouter를 사용할 필요가 없어보임. 고민해보기
        const ProductNav = withRouter(Product, {
          path: `/detail/${props.id}`,
        });

        return <ProductNav key={props.id} {...props} />;
      })}
    </section>
  );
};
