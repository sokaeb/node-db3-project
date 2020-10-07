const express = require('express');
// const db = require('./data/db-config');
const SchemeRouter = require('./schemes/scheme-router.js');

const server = express();

server.use(express.json());
server.use('/api/schemes', SchemeRouter);

// server.get('/schemes', (req, res) => {
//     db('schemes')
//     .then(schemes => {
//         res.status(200).json({ data: schemes })
//     })
//     .catch(err => {
//         res.status(500).json({ message: err.message })
//     })
// })

module.exports = server;