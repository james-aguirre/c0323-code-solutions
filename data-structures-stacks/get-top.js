export default function getTop(stack) {
  if (stack.length === 0) {
    return undefined;
  }
  const val = stack.peek();
  return val;
}
