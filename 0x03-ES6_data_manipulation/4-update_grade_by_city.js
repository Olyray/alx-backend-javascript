import getStudentsByLocation from './2-get_students_by_loc';

export default function updateStudentGradeByCity(arrayOfStudents, city, arrayOfGrades) {
  //  Filter by cities in a variable called filteredCitites
  const filteredByCities = arrayOfStudents.filter((student) => student.location === city);
  /* Where arrayOfGrades student ID is equal to ID in filteredCities
      Push the grade to filteredByCities array
      Else push NA to filteredByCities array
  */
  return filteredByCities.map((student) => {
    const studentCopy = { ...student };
    for (const element of arrayOfGrades) {
      if (student.id === element.studentId) {
        studentCopy.grade = element.grade;
        return studentCopy;
      }
    }
    if (arrayOfGrades.every((grades) => grades.id !== student.id)) {
      studentCopy.grade = 'N/A';
      return studentCopy;
    }
    return studentCopy;
  });
}
