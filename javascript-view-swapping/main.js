const $container = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

$container.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === event.target) {
        $tabElements[i].className = 'tab active';
      }
      for (let i = 0; i < $tabElements.length; i++) {
        if ($tabElements[i] !== event.target) {
          $tabElements[i].className = 'tab';
        }
      }
    }

    const $dataValue = event.target.getAttribute('data-view');
    for (let i = 0; i < $viewElements.length; i++) {
      if ($viewElements[i].getAttribute('data-view') === $dataValue) {
        $viewElements[i].className = 'view';
      } else {
        $viewElements[i].className = 'view hidden';
      }
    }
  }
}
);
