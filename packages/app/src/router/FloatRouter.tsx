import { Link } from 'react-router-dom';
import { ROUTES } from './router.constant';

/**
 * Figma 상에 존재하지 않지만, 페이지별 이동의 편의성을 위해 추가한 임시 컴포넌트입니다
 */

const FLOAT_ROUTES = {
  LIST: {
    ...ROUTES.LIST,
    TITLE: '상품 목록',
  },

  DETAIL: {
    ...ROUTES.DETAIL,
    TITLE: '상품 상세',
  },

  CART: {
    ...ROUTES.CART,
    TITLE: '장바구니',
  },

  ORDER: {
    ...ROUTES.ORDER,
    TITLE: '주문하기',
  },

  ORDER_LIST: {
    ...ROUTES.ORDER_LIST,
    TITLE: '주문 목록',
  },

  ORDER_DETAIL: {
    ...ROUTES.ORDER_DETAIL,
    TITLE: '주문 상세',
  },
} as const;

export const FloatRouter = () => {
  return (
    <div className="global-nav-button-box">
      {Object.entries(FLOAT_ROUTES).map(([KEY, { PATH, TITLE }]) => (
        <Link key={KEY} className="global-nav-button" to={PATH}>
          {TITLE}
        </Link>
      ))}
    </div>
  );
};
