const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
    const header = lines.shift().split(',');

    const fieldIndex = header.indexOf('field');
    const nameIndex = header.indexOf('firstname');

    const studentsByField = {};

    lines.forEach((line) => {
      const values = line.split(',');
      const field = values[fieldIndex].trim();
      const name = values[nameIndex].trim();

      if (!studentsByField[field]) {
        studentsByField[field] = { count: 0, names: [] };
      }

      studentsByField[field].count += 1; // Updated increment statement
      studentsByField[field].names.push(name);
    });

    console.log(`Number of students: ${lines.length}`);

    for (const field in studentsByField) {
      if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
        const { count, names } = studentsByField[field];
        console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
