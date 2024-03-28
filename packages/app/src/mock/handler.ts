import { Product } from '@/types';
import { http, HttpResponse } from 'msw';

const DEFAULT_PRODUCTS_LIST = [
  {
    id: 1,
    price: 10000,
    name: '치킨',
    imageUrl: 'http://example.com/chicken.jpg',
  },
  {
    id: 2,
    price: 20000,
    name: '피자',
    imageUrl: 'http://example.com/pizza.jpg',
  },
  {
    id: 3,
    price: 30000,
    name: '햄버거',
    imageUrl: 'http://example.com/hamburger.jpg',
  },
  {
    id: 4,
    price: 40000,
    name: '커피',
    imageUrl: 'http://example.com/coffee.jpg',
  },
  {
    id: 5,
    price: 50000,
    name: '맥주',
    imageUrl: 'http://example.com/beer.jpg',
  },
];

// const DEFAULT_CARTS_LIST = [
//   {
//     id: 1,
//     product: {
//       name: 'test',
//       price: 1234,
//       imageUrl: 'test.com',
//       id: 1,
//     },
//   },
//   {
//     id: 5,
//     product: {
//       name: 'tes11111t',
//       price: 1234,
//       imageUrl: 'test.com',
//       id: 10,
//     },
//   },
// ];

// const DEFAULT_ORDERS_LIST = [
//   {
//     id: 1,
//     orderDetails: [
//       {
//         id: 1,
//         price: 10000,
//         name: '치킨',
//         imageUrl: 'http://example.com/chicken.jpg',
//         quantity: 5,
//       },
//       {
//         id: 2,
//         price: 20000,
//         name: '피자',
//         imageUrl: 'http://example.com/pizza.jpg',
//         quantity: 3,
//       },
//     ],
//   },
//   {
//     id: 2,
//     orderDetails: [
//       {
//         id: 1,
//         price: 10000,
//         name: '치킨',
//         imageUrl: 'http://example.com/chicken.jpg',
//         quantity: 5,
//       },
//       {
//         id: 2,
//         price: 20000,
//         name: '피자',
//         imageUrl: 'http://example.com/pizza.jpg',
//         quantity: 3,
//       },
//     ],
//   },
// ];

const allProducts = new Map(
  DEFAULT_PRODUCTS_LIST.map((post) => [post.id, post])
);
// const allCarts = new Map(DEFAULT_CARTS_LIST.map((post) => [post.id, post]));
// const allOrders = new Map(DEFAULT_ORDERS_LIST.map((post) => [post.id, post]));

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
