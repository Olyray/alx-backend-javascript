export default function getStudentsByLocation(arrayOfObjects, city) {
  return arrayOfObjects.filter((object) => object.location === city);
}
