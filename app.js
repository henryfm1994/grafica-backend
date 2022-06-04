'use strict'

const express = require('express');

const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get('/', (req, res) => {

    let nums = [];
    for (let index = 0; index < 4; index++) {
        nums[index] = Math.round(Math.random() * (1000 - 500) + 100);
    }

    console.log("Hello")
    return res.status(200).send(nums)
})

module.exports = app; 