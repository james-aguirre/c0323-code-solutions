
const $form = document.getElementById('contact-form');
document.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const messageData = {};
  messageData.name = $form.name.value;
  messageData.email = $form.email.value;
  messageData.message = $form.message.value;
  console.log(messageData);
  $form.reset();
}
