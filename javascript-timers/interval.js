const $countDownDisplay = document.querySelector('.countdown-display');

let iD = setInterval(() => {
  if (iD === 2) {
    $countDownDisplay.textContent = '3';
    iD++;
  } else
  if (iD === 3) {
    $countDownDisplay.textContent = '2';
    iD++;
  } else
  if (iD === 4) {
    $countDownDisplay.textContent = '1';
    iD++;
  } else {
    $countDownDisplay.textContent = '~Earth Beeeelow Us~';
  }
}, 1000);
