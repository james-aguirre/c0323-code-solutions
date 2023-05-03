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
  if (count >= $test.length - 1) {
    count = 0;
    viewSwap(count);
  } else { viewSwap(count += 1); }
});

$leftButton.addEventListener('click', function (event) {
  if (count <= 0) {
    count = $test.length - 1;
    viewSwap(count);
  } else {
    viewSwap(count -= 1);
  }
});

$buttonOne.addEventListener('click', function (event) {
  count = 0;
  viewSwap(count);
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
  count = 1;
  viewSwap(count);
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
  count = 2;
  viewSwap(count);
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
  count = 3;
  viewSwap(count);
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
  count = 4;
  viewSwap(count);
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
  if ($buttonNodes[count + 2] > $buttonNodes.length) {
    count = 0;
    // using count + 2 because the first two nodes on the list are respresenting the left and right arrows; this would
    // still be dynamic if you were to add another img and corresponding circle button
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
