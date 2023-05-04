/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const str1 = firstString.split('').sort().join('').replaceAll(' ', '');
  const str2 = secondString.split('').sort().join('').replaceAll(' ', '');
  return str1 === str2;
}
