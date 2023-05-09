const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log('Price objects');
console.log(
  prices.map((element) => {
    return { price: element, salePrice: element / 2 };
  })
);

console.log('Formatted Prices ');
console.log(
  prices.map((a) => {
    let formatted = '';
    formatted += `$${Number.parseFloat(a).toFixed(2)}`;
    return formatted;
  })
);
