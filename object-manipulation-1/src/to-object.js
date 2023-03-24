/* exported toObject */
function toObject(keyValuePair) {
  let newObj = {};
  newObj = Object.create(keyValuePair);
  return newObj;
}
