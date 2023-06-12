/**
 * Returns a new array that contains only the even numbers in the given array.
 */
export function evenNumbers(numbers) {
  return numbers.filter((n) => n % 2 === 0);
}

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

/**
 * Returns a number formatted in dollars and cents.
 */
export function toDollars(amount) {
  return `$${amount}.00`;
}

describe('toDollars', () => {
  it('returns amount in dollars', () => {
    const number = 15;
    const result = toDollars(number);
    expect(result).toEqual('$15.00');
  });
});
/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 * @param {Array} numbers The array of numbers to be divided by the divisor.
 * @param {number} divisor The number to divide into each element of `numbers`.
 * @returns a new array.
 */
export function divideBy(numbers, divisor) {
  const result = numbers.map((n) => n / divisor);
  return result;
}

describe('divideBy', () => {
  it('returns amount after being divided', () => {
    const numbers = [10, 20, 14];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([5, 10, 7]);
  });
});

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 * @param {Object} obj The object to modify.
 * @param {number} multiplier The number to multiply by.
 * @returns the input object.
 */
export function multiplyBy(obj, multiplier) {
  const result = {};
  Object.entries(obj).forEach(([key, value]) => {
    result[key] = value * multiplier;
  });
  return result;
}

describe('multiplyBy', () => {
  it('returns amount after being multiplied', () => {
    const numbers = { foo: 10, bar: 20, baz: 14 };
    const result = multiplyBy(numbers, 2);
    expect(result).toEqual({ foo: 20, bar: 40, baz: 28 });
  });
});
