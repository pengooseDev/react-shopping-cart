import { Product } from '@/types';
import { http, HttpResponse } from 'msw';
import { DEFAULT_PRODUCTS_LIST } from './product/product.constant';

const allProducts = new Map(
  DEFAULT_PRODUCTS_LIST.map((post) => [post.id, post])
);

export const handlers = [
  // 상품 목록 조회
  http.get('/products', () => {
    return HttpResponse.json({
      response: Array.from(allProducts.values()),
    });
  }),

  // 상품 추가
  http.post('/products', async ({ request }) => {
    const response = await request.json();
    const { products } = response as { products: Product };
    const id = Math.max(...allProducts.keys()) + 1;
    const newProduct = { ...products, id };
    allProducts.set(id, newProduct);

    return HttpResponse.json({
      response: newProduct,
    });
  }),

  // // 상품 단일 조회
  // http.get('/products/:id', async ({ params }) => {
  //   const { id } = params;
  //   const product = allProducts.get(Number(id));

  //   if (!product) {
  //     // TODO: 응답들 분리해서 객체로 관리
  //     return new HttpResponse(null, {
  //       status: 404,
  //       statusText: 'Not Found',
  //     });
  //   }

  //   return HttpResponse.json({
  //     response: product,
  //   });
  // }),

  // // 상품 단일 삭제
  // http.delete('/products/:id', async ({ params }) => {
  //   const { id } = params;
  //   allProducts.delete(Number(id));

  //   return HttpResponse.json({});
  // }),

  // // 장바구니 아이템 목록 조회
  // http.get('/carts', () => {
  //   return HttpResponse.json({
  //     response: Array.from(allCarts.values()),
  //   });
  // }),

  // // 장바구니 아이템 추가
  // http.post('/carts', async ({ request }) => {
  //   const { product } = await request.json();
  //   const id = Math.max(...allCarts.keys()) + 1;
  //   const newCart = { ...product, id };
  //   allCarts.set(id, newCart);

  //   return HttpResponse.json({
  //     response: newCart,
  //   });
  // }),

  // // 장바구니 아이템 단일 삭제
  // http.delete('/carts/:cartId', async ({ params }) => {
  //   const { cartId } = params;
  //   allCarts.delete(Number(cartId));

  //   return HttpResponse.json({});
  // }),

  // // 주문 추가(주문하기)
  // http.post('/orders', async ({ request }) => {
  //   const { orderDetails } = await request.json();
  //   const id = Math.max(...allOrders.keys()) + 1;
  //   const newOrder = { id, orderDetails };
  //   allOrders.set(id, newOrder);

  //   return HttpResponse.json({
  //     response: newOrder,
  //   });
  // }),

  // // 주문 목록(내역) 조회
  // http.get('/orders', () => {
  //   return HttpResponse.json({
  //     response: Array.from(allOrders.values()),
  //   });
  // }),

  // // 주문 단일 조회
  // http.get('/orders/:id', async ({ params }) => {
  //   const { id } = params;
  //   const order = allOrders.get(Number(id));

  //   if (!order) {
  //     return HttpResponse.notFound();
  //   }

  //   return HttpResponse.json({
  //     response: order,
  //   });
  // }),
];
