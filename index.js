const chalk = require("chalk");
let warnsEnabled = true;
function disableWarns() {
    warnsEnabled = false;
}
function sleepms(t) {
    let ttw = t;
    if (!ttw) {
        throw new Error("Please specify a number to sleep.");
    }
    if (!(typeof (ttw) === "number")) {
        throw new Error("Please provide an number to sleep, not a bool, string etc...");
    }
    if (ttw < 5) {
        if (warnsEnabled) {
            console.warn(chalk.yellow("[WARN]: (synchronous-sleep) You cannot sleep under 5 ms. Setting to 5 ms.\nTo disable warns, run the disableWarns() function at the start of your code."));
        }
        ttw = 5;
    }
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ttw);
}
function sleep(t) {
    let ttw = t;
    if (!ttw) {
        throw new Error("Please specify a number to sleep.");
    }
    if (!(typeof (ttw) === "number")) {
        throw new Error("Please ");
    }
    if (ttw < 0.05) {
        if (warnsEnabled) {
            console.warn(chalk.yellow("[WARN]: (synchronous-sleep) You cannot sleep under 5 ms or 0.05 s. Setting to 5 ms.\nTo disable warns, run the disableWarns() function at the start of your code."));
        }
        ttw = 0.05;
    }
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, t * 1000);
}
module.exports = {
    sleepms,
    sleep,
    disableWarns
}
