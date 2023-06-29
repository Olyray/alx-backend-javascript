export default function createEmployeesObject(departmentName, employees) {
  const departmentDetails = {
    [departmentName]: employees,
  };
  return departmentDetails;
}
