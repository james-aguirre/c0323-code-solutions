let i = 0;
const $string = document.querySelectorAll('span');

document.addEventListener('keydown', playGame);

let missed = 0;

function playGame(event) {
  if ($string[i].textContent === event.key) {
    $string[i].className = 'green';
    i++;
  } else if ($string[i].textContent !== event.key) {
    missed++;
    $string[i].className = 'red';
  }
}
const score = ($string.length - missed) / $string.length;
if (i === $string.length) {
  window.alert('your typing accuracy was ' + score);
}
