export default function createReportObject(employeesList) {
  return {
    // Create allEmployees key
    allEmployees: {
      ...employeesList,
    },
    // Create getNumberOfDepartments method propery
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
