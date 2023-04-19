const $countDownDisplay = document.querySelector('.countdown-display');
let count = 4;
let countdownId = null;

function countDown() {
  count--;
  if (count > 0) {
    $countDownDisplay.textContent = count;
  } else {
    $countDownDisplay.textContent = '~Earth Beeeelow Us~';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countDown, 1000);
