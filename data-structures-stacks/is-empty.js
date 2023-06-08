export default function isEmpty(stack) {
  const foo = stack.peek();
  return foo === undefined;
}
