// global dom variables
const $container = document.querySelector('.container');
const $leftButton = document.querySelector('.fa-chevron-left');
const $rightButton = document.querySelector('.fa-chevron-right');
const $buttonOne = document.querySelector('#one');
const $buttonTwo = document.querySelector('#two');
const $buttonThree = document.querySelector('#three');
const $buttonFour = document.querySelector('#four');
const $buttonFive = document.querySelector('#five');
const $test = document.querySelectorAll('.img');
const $buttonNodes = document.querySelectorAll('i');
const $carouselButtons = document.querySelector('.corousel-progress');
console.log($carouselButtons);
console.log($container);
let count = 0;
let countDownId = null;
// data for entries

$rightButton.addEventListener('click', function (event) {
  viewSwap(count + 1);
  console.log('effective');
});

$leftButton.addEventListener('click', function (event) {
  viewSwap(count - 1);
  console.log('effective');
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
    console.log(event.target);
  }
});

$buttonTwo.addEventListener('click', function (event) {
  viewSwap(1);
});

$buttonThree.addEventListener('click', function (event) {
  viewSwap(2);
});

$buttonFour.addEventListener('click', function (event) {
  viewSwap(3);
});

$buttonFive.addEventListener('click', function (event) {
  viewSwap(4);
}
);
function swap() {
  count++;
  if ($test.length > count) {
    viewSwap(count);
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
  clearInterval(countDownId);
  countDownId = setInterval(swap, 3000);

}

countDownId = setInterval(swap, 3000);
