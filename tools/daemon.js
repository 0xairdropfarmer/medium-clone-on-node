const { spawn, exec } = require('child_process')

const child1 = spawn('node', ['server/app.js']);
child1.stdout.on('data', (data) => {
    console.log(`${data}`);
});

const child2 = exec('npm run start');
child2.stdout.on('data', (data) => {
    console.log(`${data}`);
});