const express = require('express');

class UserRouter {
   constructor() {
      // eslint-disable-next-line new-cap
      this.router = express.Router();
      this.db;
      this.routes();
   }

   routes() {
      this.router.get('/users', this.index.bind(this));
      this.router.post('/users', this.store.bind(this));
   }

   async store(req, res) {
      // console.log(' >>>', req.body);
      const {name, email, pass} = req.body;

      if (!name) return res.status(400).json({error: 'name'});
      if (!email) return res.status(400).json({error: 'email'});
      if (!pass) return res.status(400).json({error: 'pass'});

      const checkEmailExist = await this.db('users').where( {email} ).select();

      if (checkEmailExist && checkEmailExist.length > 0 ) {
         return res.status(400).json({error: 'sameEmail'});
      }

      const result = await this.db('users').insert({name, email, pass}, '*');

      return res.status(201).json(result[0]);
   }

   async index(req, res) {
      //console.log('test', this);
      const result = await this.db('users').select();
      return res.status(200).json(result);
   }
}

module.exports = new UserRouter();
