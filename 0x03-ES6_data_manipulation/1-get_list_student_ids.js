export default function getListStudentIds(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    return arrayOfObjects.map((objects) => objects.id);
  }
  return [];
}
