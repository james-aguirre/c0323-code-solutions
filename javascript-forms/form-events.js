const $name = document.getElementById('user-name');
const $email = document.getElementById('user-email');
const $message = document.getElementById('user-message');

$name.addEventListener('focus', handleFocus);
$name.addEventListener('blur', handleBlur);
$name.addEventListener('input', handleInput);

$email.addEventListener('focus', handleFocus);
$email.addEventListener('blur', handleBlur);
$email.addEventListener('input', handleInput);

$message.addEventListener('focus', handleFocus);
$message.addEventListener('blur', handleBlur);
$message.addEventListener('input', handleInput);

function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name ', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired target: ', event.target.name);
}

function handleInput(event) {
  console.log('value of name: ', event.target.value);
}

document.addEventListener('submit', handleSubmit);
const $form = document.getElementById('contact-form');

function handleSubmit(event) {
  event.preventDefault();
  const messageData = {};
  messageData.name = $form.name.value;
  messageData.email = $form.email.value;
  messageData.message = $form.message.value;
  console.log(messageData);
  $form.reset();
}
