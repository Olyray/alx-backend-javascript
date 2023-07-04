export default function getStudentIdsSum(arrayOfObjects) {
  return arrayOfObjects.reduce((totalOfId, object) => totalOfId + object.id, 0);
}
