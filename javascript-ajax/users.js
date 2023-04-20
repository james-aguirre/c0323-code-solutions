const $list = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr status: ', xhr.status);
  console.log('xhr response: ', xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    const $li = document.createElement('li');
    $li.textContent = xhr.response[i].name;
    $list.appendChild($li);
  }
});
xhr.send();
