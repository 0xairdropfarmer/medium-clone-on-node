const path = require("path")
const fs = require("fs")
const { spawn } = require('child_process')

function main() {
    let cmds = process.argv.slice(2, process.argv.length)
    let terminalPath = processPlatform()
    console.log('\x1b[36m%s\x1b[4m', 'eidon daemon started')
    console.log('\x1b[0m')
    Array.prototype.forEach.call(cmds, (cmd) => {
        let terminal = terminalPath[0]
        let arg = [...terminalPath[1], cmd]
        Spawn(terminal, arg)
    })
}

/**
 * @return {*} Array
 */
function processPlatform() {
    let args
    if (process.platform == 'win32') {
        let root = "C:\\"
        let terminal = "cmd.exe"
        let sysPaths = ["Windows\\System\\", "WinNT\\System32\\", "Windows\\System32\\"]
        sysPaths.forEach((p) => {
            let file = root + p + terminal
            if (fs.existsSync(file)) {
                args = [file, ['/s', '/c']]
            }
        })
    } else {
        args = ["/sh/bin", ["-c"]]
    }
    return args
}

/**
 * 
 * @param {*} terminal
 * @param {*} args 
 */
function Spawn(terminal, args) {
    const child = spawn(terminal, args);
    child.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
}

/**
 * 
 * @param {*} cmds 
 */
function cmdToArgs(cmds) {
    let cmdArgs = []
    Array.prototype.forEach.call(cmds, (cmd) => {
        let c = String.prototype.split.call(cmd, " ")
        cmd = c[0]
        let args = Array.prototype.join.call(Array.prototype.slice.call(c, 1), " ")
        cmdArgs.push([cmd, args])
    })
    return cmdArgs
}
main()