let count = 0;
const $modalButton = document.querySelector('.open-modal');
const $modal = document.querySelector('.modal');
$modalButton.addEventListener('click', handleClick);
const $modalExit = document.querySelector('.no');
$modalExit.addEventListener('click', exitModal);
const $body = document.querySelector('.light');

function handleClick(event) {
  count++;
  if (count > 0) {
    $modal.className = 'modal-click';
    $body.className = 'dark';
    $modalButton.className = 'open-modal-dark';
  }
}
function exitModal(event) {
  count--;
  if (count === 0) {
    $modal.className = 'modal';
    $body.className = 'light';
    $modalButton.className = 'open-modal';
  }
}
