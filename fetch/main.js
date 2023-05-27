async function getData() {
  try {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('network resonse was not ok');
    }
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
}
getData();

async function getPokemonData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error('network response was not ok');
    }
    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error.message);
  }
}
getPokemonData();
