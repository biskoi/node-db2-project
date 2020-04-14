const express = require('express');
const knex = require('knex');
const knexFile = require('./knexfile');

const db = knex(knexFile.development);
const server = express();

server.use(express.json());

server.get('/', (req, res) => {

   db('cars')
   .then(rep => {
      res.status(200).json({
         data: rep
      });
   })
   .catch(err => {
      res.status(500).json({
         message: `Server error. ${err}`
      })
   });

});

server.post('/', (req, res) => {

   db('cars')
   .insert(req.body)
   .then(rep => {
      res.status(201).json(rep)
   })
   .catch(err => {
      console.dir(err);
      res.status(500).json({
         message: err.message
      });
   });

});

module.exports = server;




