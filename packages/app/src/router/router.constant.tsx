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
  },

  LIST: {
    PATH: '/list',
    COMPONENT: List,
  },

  DETAIL: {
    PATH: '/detail',
    COMPONENT: Detail,
  },

  CART: {
    PATH: '/cart',
    COMPONENT: Cart,
  },

  ORDER: {
    PATH: '/order',
    COMPONENT: Order,
  },

  ORDER_LIST: {
    PATH: '/orderList',
    COMPONENT: OrderList,
  },

  ORDER_DETAIL: {
    PATH: '/orderDetail',
    COMPONENT: OrderDetail,
  },
} as const;
