const express = require('express');
const app = express();
const { Worker } = require('worker_threads');

app.get('/cool', (req, res)=> {
    counter = 0
    counter++
    res.status(200).json({counter})
})

app.get('/heavy', (req, res)=> {
    const worker = new Worker('./worker.js')
    worker.on('message', (data) => {
        res.status(200).json({total: data});
    })
})

app.listen(3737)