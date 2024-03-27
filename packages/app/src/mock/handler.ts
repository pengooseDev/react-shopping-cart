import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/products', () => {
    return HttpResponse.json({
      response: [
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
      ],
    });
  }),
];

// 🎁 상품
// 상품 목록 조회
// method	uri
// GET	/products
// {
// 	"response": [
// 		{
// 			"id": 1,
// 			"price": 10000,
// 			"name": "치킨",
// 			"imageUrl": "http://example.com/chicken.jpg"
// 		},
// 		{
// 			"id": 2,
// 			"price": 20000,
// 			"name": "피자",
// 			"imageUrl": "http://example.com/pizza.jpg"
// 		}
// 	]
// }
// 상품 추가
// method	uri
// POST	/products
// {
// 	"requestBody": {
// 		"products": {
// 			"price": 10000,
// 			"name": "치킨",
// 			"imageUrl": "http://example.com/chicken.jpg"
// 		}
// 	}
// }
// 상품 단일 조회
// method	uri
// GET	/products/{id}
// {
// 	"response": {
// 		"id": 1,
// 		"price": 10000,
// 		"name": "치킨",
// 		"imageUrl": "http://example.com/chicken.jpg"
// 	}
// }
// 상품 단일 삭제
// method	uri
// DELETE	/products/{id}
// {
// 	"response": {}
// }
// 🛒 장바구니
// 장바구니 아이템 목록 조회
// method	uri
// GET	/carts
// {
//   "response": {
//     "id": 1,
// 	  "product": {
// 			"name": "test",
// 			"price": 1234,
// 			"imageUrl": "test.com",
// 			"id": 1
// 		},
// 	},
// 	{
//     "id": 5,
// 		"product": {
// 			"name": "tes11111t",
// 			"price": 1234,
// 			"imageUrl": "test.com",
// 			"id": 10
// 		}
// 	},
// }
// 장바구니 아이템 추가
// method	uri
// POST	/carts
// {
// 	"requestBody": {
// 		"product": {
// 			"id": 10,
// 			"name": "tes11111t",
// 			"price": 1234,
// 			"imageUrl": "test.com"
// 		}
// 	}
// }
// 장바구니 아이템 단일 삭제
// method	uri
// DELETE	/carts/{cartId}
// {
// 	"response": {}
// }
// 🗒 주문
// 주문 추가(주문하기)
// method	uri
// POST	/orders
// {
// 	"requestBody": {
// 		"orderDetails": [
// 			{
// 				"id": 1,
// 				"price": 10000,
// 				"name": "치킨",
// 				"imageUrl": "http://example.com/chicken.jpg",
// 				"quantity": 5
// 			},
// 			{
// 				"id": 2,
// 				"price": 20000,
// 				"name": "피자",
// 				"imageUrl": "http://example.com/pizza.jpg",
// 				"quantity": 3
// 			}
// 		]
// 	}
// }
// 주문 목록(내역) 조회
// method	uri
// GET	/orders
// {
// 	"response": [
// 		{
// 			"id": 1,
// 			"orderDetails": [
// 				{
// 					"id": 1,
// 					"price": 10000,
// 					"name": "치킨",
// 					"imageUrl": "http://example.com/chicken.jpg",
// 					"quantity": 5
// 				},
// 				{
// 					"id": 2,
// 					"price": 20000,
// 					"name": "피자",
// 					"imageUrl": "http://example.com/pizza.jpg",
// 					"quantity": 3
// 				}
// 			]
// 		},
// 		{
// 			"id": 2,
// 			"orderDetails": [
// 				{
// 					"id": 1,
// 					"price": 10000,
// 					"name": "치킨",
// 					"imageUrl": "http://example.com/chicken.jpg",
// 					"quantity": 5
// 				},
// 				{
// 					"id": 2,
// 					"price": 20000,
// 					"name": "피자",
// 					"imageUrl": "http://example.com/pizza.jpg",
// 					"quantity": 3
// 				}
// 			]
// 		}
// 	]
// }
// 주문 단일 조회
// method	uri
// GET	/orders/{id}
// {
// 	"response": {
// 		"id": 1,
// 		"orderDetails": [
// 			{
// 				"id": 1,
// 				"price": 10000,
// 				"name": "치킨",
// 				"imageUrl": "http://example.com/chicken.jpg",
// 				"quantity": 5
// 			},
// 			{
// 				"id": 2,
// 				"price": 20000,
// 				"name": "피자",
// 				"imageUrl": "http://example.com/pizza.jpg",
// 				"quantity": 3
// 			}
// 		]
// 	}
// }
