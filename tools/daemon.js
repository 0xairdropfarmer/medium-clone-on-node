const { spawn, exec } = require('child_process')

/*const child1 = spawn('node', ['server/app.js']);
child1.stdout.on('data', (data) => {
    console.log(`${data}`);
});

const child2 = exec('npm run start');
child2.stdout.on('data', (data) => {
    console.log(`${data}`);
});*/

function main(params) {
    let cmds = process.argv.slice(2, process.argv.length)
    Array.prototype.forEach.call(cmds, (cmd) => {
        Spawn()
    })
    console.log(cmds)
}

function Spawn(cmd, args) {
    const child1 = spawn(cmd, [args]);
    child1.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
}

function cmdToArgs(params) {

}
main()