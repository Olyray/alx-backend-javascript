const http = require('http');
const countStudents = require('./3-read_file_async');
const process = require('process');

const app = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        const database = process.argv[2];

        if (!database) {
            res.end('Database argument is missing.');
            return;
        }

        try {
            let output = 'This is the list of our students\n';
            const originalConsoleLog = console.log;
            console.log = (message) => {
                output += message + '\n';
            };

            await countStudents(database);

            console.log = originalConsoleLog;
            res.end(output);
        } catch (error) {
            res.end(error.message);
        }
    } else {
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;
