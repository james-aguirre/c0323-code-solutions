export default function countValues(stack) {
  if (stack[0] === undefined) {
    return 0;
  }
  return stack.length;
}
