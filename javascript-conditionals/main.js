/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 7 && pH > 0) {
    return 'acidic pH level';
  } else if (pH === 7) {
    return 'neutral pH level';
  } else if (pH > 7 && pH <= 14) {
    return 'base pH level';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      console.log('We\'re the warner brothers!');
      break;
    case 'dot':
      console.log('I\'m cute~');
      break;
    default:
      console.log('Goodnight Everybody!');
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      console.log('Training Day');
      break;
    case 'comedy':
      console.log('Tropic Thunder');
      break;
    case 'horror':
      console.log('Hereditery');
      break;
    case 'drama':
      console.log('The Titanic');
      break;
    case 'musical':
      console.log('Highschool Musical');
      break;
    case 'sci-fi':
      console.log('Starship Troopers');
      break;
    default:
      console.log('Genre not recognized. Choose between action, comedy, horror, drama, musical or sci-fi');
  }
}
