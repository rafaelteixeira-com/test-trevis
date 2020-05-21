const request = require('supertest');
const server = require('../src/server');

describe('express generic', () => {
  it('should express response with status 200', () => {
    const express = request(server);

    return express.get('/').then( (res) => {
      expect(res.status).toBe(200);
      // done();
    });
  });
});
