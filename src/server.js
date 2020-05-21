const express = require('express');
const usersRouter = require('./api/users');
const knex = require('knex');
const knexfile = require('../knexfile');
const knexLogger = require('knex-logger');

const server = express();

server.db = knex(knexfile.local);

usersRouter.db = server.db;

const router = express['Router']();

server.use(knexLogger(server.db));

router.use(express.json());
router.use('/api', usersRouter.router);

server.use(router);

server.get('/', (req, res)=>{
  return res.status(200).send();
});


module.exports = server;
