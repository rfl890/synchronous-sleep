function sleepms(t) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, t);
}
function sleep(t) {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, t*1000);
}
module.exports = {
    sleepms,
    sleep
}