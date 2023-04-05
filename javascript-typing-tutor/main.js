let i = 0;
const $string = document.querySelectorAll('span');

document.addEventListener('keydown', playGame);

let missed = 0;

function playGame(event) {
  if ($string[i].textContent === event.key) {
    $string[i].className = 'green selected';
    i++;
    $string[i - 2].className = 'green';
  } else if ($string[i].textContent !== event.key) {
    missed++;
    $string[i].className = 'red selected';
  }
}
const score = ($string.length - missed) / $string.length;
if (i === $string.length) {
  window.alert('your typing accuracy was ' + score);
}
