const {parentPort} = require('worker_threads');

let total = 0;
for (let index = 0; index < 10000000000000; index++) {
    total++
}

parentPort.postMessage(total)
