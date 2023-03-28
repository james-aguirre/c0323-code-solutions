/* exported toObject */
// function toObject(keyValuepair) {
//  const obj = Object.create(keyValuepair);
//  let values = {};
//  for (const key in obj) {
//    values = [obj] + [key];
//  } return values;
// }
// function toObject(keyValuePair) {
//  const obj = Object.create(keyValuePair);
//  const newObj = {};
//  for (const key in obj) {
//    newObj.key = obj[key];
//  } return newObj;
// }
// function toObject(keyValuePair) {
//  let obj = {};
//  for (let i = 0; i < keyValuePair.length; i++) {
//    obj = keyValuePair[i];
//  } return obj;
// }
function toObject(keyValuePair) {
  const result = keyValuePair.reduce(((obj, cur) => ({ ...obj, [cur.sid]: cur }), {}));
  return result;
}
