'use strict'

const express = require('express');
const router = express.Router();
const path = require ('path')

router
.get('/', (req, res) => {
    res.sendFile("index.html");
}).get('/integrantes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'integrantes.html'));
}).get('/acerca', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'acerca.html'));
})

module.exports = router;
