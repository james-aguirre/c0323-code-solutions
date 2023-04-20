// global dom variables
const $leftButton = document.querySelector('.fa-chevron-left');
const $rightButton = document.querySelector('.fa-chevron-right');
const $buttonOne = document.querySelector('#one');
const $buttonTwo = document.querySelector('#two');
const $buttonThree = document.querySelector('#three');
const $buttonFour = document.querySelector('#four');
const $buttonFive = document.querySelector('#five');
const $test = document.querySelectorAll('.img');
const $buttonNodes = document.querySelectorAll('i');

let count = 0;
let countDownId = null;
// data for entries

$rightButton.addEventListener('click', function (event) {
  if (count >= 4) {
    count = 0;
    viewSwap(count);
  }
});

$leftButton.addEventListener('click', function (event) {
  if (count <= 0) {
    count = 4;
    viewSwap(count);
  } else {
    viewSwap(count - 1);
  }
});

$buttonOne.addEventListener('click', function (event) {
  viewSwap(0);
  for (let i = 0; i < $buttonNodes.length; i++) {
    if ($buttonNodes[i].hasAttribute('id')) {
      $buttonNodes[i].classList.remove('fa-solid');
      $buttonNodes[i].classList.add('fa-regular');
    }
    event.target.classList.add('fa-solid');
    event.target.classList.remove('fa-regular');
  }
});

$buttonTwo.addEventListener('click', function (event) {
  viewSwap(1);
  for (let i = 0; i < $buttonNodes.length; i++) {
    if ($buttonNodes[i].hasAttribute('id')) {
      $buttonNodes[i].classList.remove('fa-solid');
      $buttonNodes[i].classList.add('fa-regular');
    }
    event.target.classList.add('fa-solid');
    event.target.classList.remove('fa-regular');
  }
});

$buttonThree.addEventListener('click', function (event) {
  viewSwap(2);
  for (let i = 0; i < $buttonNodes.length; i++) {
    if ($buttonNodes[i].hasAttribute('id')) {
      $buttonNodes[i].classList.remove('fa-solid');
      $buttonNodes[i].classList.add('fa-regular');
    }
    event.target.classList.add('fa-solid');
    event.target.classList.remove('fa-regular');
  }
});

$buttonFour.addEventListener('click', function (event) {
  viewSwap(3);
  for (let i = 0; i < $buttonNodes.length; i++) {
    if ($buttonNodes[i].hasAttribute('id')) {
      $buttonNodes[i].classList.remove('fa-solid');
      $buttonNodes[i].classList.add('fa-regular');
    }
    event.target.classList.add('fa-solid');
    event.target.classList.remove('fa-regular');
  }
});

$buttonFive.addEventListener('click', function (event) {
  viewSwap(4);
  for (let i = 0; i < $buttonNodes.length; i++) {
    if ($buttonNodes[i].hasAttribute('id')) {
      $buttonNodes[i].classList.remove('fa-solid');
      $buttonNodes[i].classList.add('fa-regular');
    }
    event.target.classList.add('fa-solid');
    event.target.classList.remove('fa-regular');
  }
}
);
function swap() {
  if ($test.length > count) {
    viewSwap(count);
    count++;
  } else {
    count = 0;
  }
}

function viewSwap(number) {
  for (let i = 0; i < $test.length; i++) {
    if ($test[i] === $test[number]) {
      $test[i].classList.remove('hide');
    } else {
      $test[i].classList.add('hide');
    }
  }
  for (let i = 0; i < $buttonNodes.length; i++) {
    if ($buttonNodes[i].hasAttribute('id')) {
      $buttonNodes[i].classList.remove('fa-solid');
      $buttonNodes[i].classList.add('fa-regular');
    }
  }
  if ($buttonNodes[count + 2] > 6) {
    count = 0;
    $buttonNodes[count + 2].classList.add('fa-solid');
    $buttonNodes[count + 2].classList.remove('fa-regular');
  } else {
    $buttonNodes[count + 2].classList.add('fa-solid');
    $buttonNodes[count + 2].classList.remove('fa-regular');

  }
  clearInterval(countDownId);
  countDownId = setInterval(swap, 3000);

}

countDownId = setInterval(swap, 3000);
