let count = 0;

const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
$hotButton.addEventListener('click', handleClick);

function handleClick(event) {
  count++;
  $clickCount.textContent = 'Clicks: ' + count;
  if (count < 4) {
    $hotButton.className = 'cold';
  } else if (count < 7) {
    $hotButton.className = 'cool';
  } else if (count < 10) {
    $hotButton.className = 'tepid';
  } else if (count < 13) {
    $hotButton.className = 'warm';
  } else if (count < 16) {
    $hotButton.className = 'hot';
  } else {
    $hotButton.className = 'nuclear';
  }
}
