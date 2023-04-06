const $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', taskListClick);

function taskListClick(event) {
  console.log('event target:', event.target);
  console.log('target tag name: ', event.target.tagName);
  const $button = document.querySelector('button');
  if (event.target === $button) {
    const $closest = event.target.closest('.task-list-item');
    console.log('closest.task-list-item:', $closest);
    $closest.remove();
  }
}
