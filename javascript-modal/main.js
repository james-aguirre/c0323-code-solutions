let modalOpen = false;
const $modalButton = document.querySelector('.open-modal');
const $modal = document.querySelector('.modal');
$modalButton.addEventListener('click', handleClick);
const $modalExit = document.querySelector('.no');
$modalExit.addEventListener('click', exitModal);
const $body = document.querySelector('.light');

function handleClick(event) {
  modalOpen = true;
  if (modalOpen) {
    $modal.className = 'modal-click';
    $body.className = 'dark';
    $modalButton.className = 'open-modal-dark';
  }
}
function exitModal(event) {
  modalOpen = false;
  if (modalOpen !== true) {
    $modal.className = 'modal';
    $body.className = 'light';
    $modalButton.className = 'open-modal';
  }
}
