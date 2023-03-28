/* exported toObject */
// function toObject(keyValuepair) {
//  const obj = Object.create(keyValuepair);
//  let values = {};
//  for (const key in obj) {
//    values = [obj] + [key];
//  } return values;
// }
function toObject(keyValuePair) {
  const obj = {} + keyValuePair;
  return obj;
}
