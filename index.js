const express = require('express');
const app = express()

app.get('/cool', (req, res)=> {
    counter = 0
    counter++
    res.status(200).json({counter})
})

app.get('/heavy', (req, res)=> {
    counter = 0;
    for (let index = 0; index < 10000000000000; index++) {
        counter++
    }
    res.status(200).json(counter)
})

app.listen(3737)