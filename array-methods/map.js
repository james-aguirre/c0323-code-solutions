const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

console.log('Price objects');
console.log(
  prices.map((element) => {
    const newArr = [];
    newArr.push({ price: element, salePrice: element / 2 });
    return newArr;
  })
);

console.log('Formatted Prices ');
console.log(
  prices.map((a) => {
    let formatted = '';
    formatted += new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'USD',
      maximumSignificantDigits: 4,
    }).format(a);
    return formatted;
  })
);
