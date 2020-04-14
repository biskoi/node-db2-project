const express = require('express');
const server = require('./server');
const port = process.env.PORT || 4600;

// server.use(express.json());

server.listen(port, () => {
   console.log(`Server running on port ${port}`)
})