const $background = document.querySelector('.background');
const $lightBulb = document.querySelector('.light-bulb');
$lightBulb.addEventListener('click', handleClick);

let count = 0;
function handleClick(event) {
  count++;
  if (count % 2 === 0) {
    $background.className = 'background dark';
    $lightBulb.className = 'light-bulb off';
  } else {
    $background.className = 'background lit';
    $lightBulb.className = 'light-bulb on';
  }
}
