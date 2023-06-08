export default function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return undefined;
  let i = 0;
  while (i < index) {
    const postponed = queue.dequeue();
    queue.enqueue(postponed);
    i++;
  }
  if (i === index) return queue.dequeue();
}
