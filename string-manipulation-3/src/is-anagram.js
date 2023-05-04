/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const lengthOne = firstString.length;
  const lengthTwo = secondString.length;
  const str1 = firstString.split('').sort().join('').replaceAll(' ', '');
  const str2 = secondString.split('').sort().join('').replaceAll(' ', '');
  console.log(str1);
  console.log(str2);
  console.log(str1 === str2);
  return lengthOne !== lengthTwo
    ? false
    : str1 === str2;
  // if (lengthOne !== lengthTwo) {
  //   return false;
  // } else if (str1 === str2) {
  //   return true;
  // } else {
  //   return false;
  // }
}
