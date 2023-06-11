const products = [
  {
    id: '0',
    name: 'Pizza',
    count: 3,
    price: 300
  }
];

const cart = [
  {
    id: '0',
    count: 1
  },

  {
    id: '0',
    count: 1
  }
];

console.log(
  products.map(product => ({
    ...product,
    count: product.count - (
      cart
        .filter(item => product.id === item.id)
        .reduce((acc, { count }) => acc + count, 0)
    )
  }))
);
