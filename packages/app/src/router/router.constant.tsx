import { Routes } from './router.type';

export const ROUTES: Routes = {
  HOME: {
    PATH: '/',
    COMPONENT_PATH: '../pages/List',
    COMPONENT_NAME: 'List',
  },

  LIST: {
    PATH: '/list',
    COMPONENT_PATH: '../pages/List',
    COMPONENT_NAME: 'List',
  },

  DETAIL: {
    PATH: '/detail',
    COMPONENT_PATH: '../pages/Detail',
    COMPONENT_NAME: 'Detail',
  },

  CART: {
    PATH: '/cart',
    COMPONENT_PATH: '../pages/Cart',
    COMPONENT_NAME: 'Cart',
  },

  ORDER: {
    PATH: '/order',
    COMPONENT_PATH: '../pages/Order',
    COMPONENT_NAME: 'Order',
  },

  ORDER_LIST: {
    PATH: '/orderList',
    COMPONENT_PATH: '../pages/OrderList',
    COMPONENT_NAME: 'OrderList',
  },

  ORDER_DETAIL: {
    PATH: '/orderDetail',
    COMPONENT_PATH: '../pages/OrderDetail',
    COMPONENT_NAME: 'OrderDetail',
  },

  NOT_FOUND: {
    PATH: '*',
    COMPONENT_PATH: '../pages/NotFound',
    COMPONENT_NAME: 'NotFound',
  },
} as const;
