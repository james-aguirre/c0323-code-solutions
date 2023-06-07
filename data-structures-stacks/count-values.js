export default function countValues(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let count = stack.pop();
  while (stack.peek() !== undefined) {
    if (stack.pop() > count) {
      count = stack.pop();
    }
  }
  return count;
}
