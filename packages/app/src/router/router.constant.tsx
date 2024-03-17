import { Routes } from './router.type';
import {
  Home,
  List,
  Detail,
  Cart,
  Order,
  OrderList,
  OrderDetail,
} from '../pages';

export const ROUTES: Routes = {
  HOME: {
    PATH: '/',
    COMPONENT: Home,
    TITLE: {
      GLOBAL: 'React Clean Code Shopping Cart',
      NAV: '홈으로', // 규모가 커진다면 네비게이션 상수를 분리하는 것이 좋아보이지만, 규모가 작으니 우선 ROUTE 객체에서 TITLE을 분리하여 사용하기로 결정.
    },
  },

  LIST: {
    PATH: '/list',
    COMPONENT: List,
    TITLE: {
      GLOBAL: '상품 목록',
      NAV: '상품 목록',
    },
  },

  DETAIL: {
    PATH: '/detail',
    COMPONENT: Detail,
    TITLE: {
      GLOBAL: '상품 상세',
      NAV: '상품 상세',
    },
  },

  CART: {
    PATH: '/cart',
    COMPONENT: Cart,
    TITLE: {
      GLOBAL: '장바구니',
      NAV: '장바구니',
    },
  },
  ORDER: {
    PATH: '/order',
    COMPONENT: Order,
    TITLE: {
      GLOBAL: '주문하기',
      NAV: '주문하기',
    },
  },

  ORDER_LIST: {
    PATH: '/orderList',
    COMPONENT: OrderList,
    TITLE: {
      GLOBAL: '주문 목록',
      NAV: '주문 목록',
    },
  },

  ORDER_DETAIL: {
    PATH: '/orderDetail',
    COMPONENT: OrderDetail,
    TITLE: {
      GLOBAL: '주문 상세',
      NAV: '주문 상세',
    },
  },
} as const;
