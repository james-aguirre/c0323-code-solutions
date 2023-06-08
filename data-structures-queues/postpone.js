export default function postpone(queue) {
  if (queue.peek() !== undefined) {
    const postponed = queue.dequeue();
    queue.enqueue(postponed);
  }
}
