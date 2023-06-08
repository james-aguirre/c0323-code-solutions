export default function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let count = stack.pop();
  while (stack.peek() !== undefined) {
    const current = stack.pop();
    if (current > count) {
      count = current;
    }
  }
  return count;
}
