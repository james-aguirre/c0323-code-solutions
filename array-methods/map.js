const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log('Price objects');
console.log(
  prices.map((element) => {
    return { price: element, salePrice: element / 2 };
  })
);

const priceObject = prices.map((p) => ({ price: p, salePrice: p / 2 }));

console.log('Formatted Prices ');
console.log(
  prices.map((a) => {
    const formatted = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 4,
    }).format(a);
    return formatted;
  })
);
