export const createProduct = (amount: number) => {
  return Array.from({ length: amount }, (_, index) => ({
    id: index,
    name: `상품 ${index + 1}`,
    price: Math.floor(Math.random() * 10000),
    image: './assets/images/product.png',
  }));
};
