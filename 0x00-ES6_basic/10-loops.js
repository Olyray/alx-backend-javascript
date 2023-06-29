export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];
  for (const idx of array) {
    updatedArray.push(appendString + idx);
  }

  return updatedArray;
}
