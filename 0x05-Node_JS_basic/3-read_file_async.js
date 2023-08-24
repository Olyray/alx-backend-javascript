const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
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

        studentsByField[field].count += 1;
        studentsByField[field].names.push(name);
      });

      console.log(`Number of students: ${lines.length}`);

      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          const { count, names } = studentsByField[field];
          console.log(`Number of students in ${field}: ${count}. List: ${names.join(', ')}`);
        }
      }
      resolve();
    });
  });
}
module.exports = countStudents;
