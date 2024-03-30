import { Routes } from './router.type';
import {
  List,
  Detail,
  Cart,
  Order,
  OrderList,
  OrderDetail,
  NotFound,
} from '../pages';

export const ROUTES: Routes = {
  HOME: {
    PATH: '/',
    COMPONENT: List,
  },

  LIST: {
    PATH: '/list',
    COMPONENT: List,
  },

  DETAIL: {
    PATH: '/detail/:id',
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

  NOT_FOUND: {
    PATH: '*',
    COMPONENT: NotFound,
  },
} as const;
