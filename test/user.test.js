const request = require('supertest');
const server = require('../src/server');

const payloadUser = {
  name: 'Jimmy Hendrix',
  email: `${Date.now()}@gmail.com`,
  pass: 'abc123',
};

describe('Users', () => {
  it('should list users on /api/users', async () => {
    const express = request(server);
    const listUsers = await express.get('/api/users');
    expect(listUsers).toHaveProperty('status');
    expect(listUsers).toHaveProperty('body');
    expect(listUsers.status).toBe(200);

    expect(typeof listUsers.body).toBe('object');
    if (listUsers.body.length > 0) {
      expect(listUsers.body[0]).toHaveProperty('name');
    }
  });

  it('should add a user on /api/users', async () =>{
    const express = request(server);
    const result = await express.post('/api/users').send(payloadUser);
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('body');
    expect(result.status).toBe(201);
    expect(result.body).toHaveProperty('name', payloadUser.name);
  });

  it('should NOT add a user without name /api/users', async () =>{
    const express = request(server);
    const payload = {
      email: `${Date.now()}@gmail.com`,
    };
    const result = await express.post('/api/users').send(payload);
    expect(result).toHaveProperty('status');
    expect(result).toHaveProperty('body');
    expect(result.status).toBe(400);
    expect(result.body).toHaveProperty('error', 'name');
  });

  it('should NOT add a user without email /api/users', () =>{
    const express = request(server);
    const payload = {
      name: 'Jimmy Hendrix',
      pass: 'abc123',
    };
    return express.post('/api/users').send(payload).then( (result) => {
      expect(result).toHaveProperty('status');
      expect(result).toHaveProperty('body');
      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty('error', 'email');
    });
  });

  it('should NOT add a user without password /api/users', (done) => {
    const express = request(server);
    const payload = {
      name: 'Jimmy Hendrix',
      email: `${Date.now()}@gmail.com`,
    };
    express.post('/api/users').send(payload).then( (result) => {
      expect(result).toHaveProperty('status');
      expect(result).toHaveProperty('body');
      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty('error', 'pass');
      done();
    });
  });


  it('should NOT add a user with same email registred /api/users', () =>{
    const express = request(server);
    return express.post('/api/users').send(payloadUser).then( (result) => {
      expect(result).toHaveProperty('status');
      expect(result).toHaveProperty('body');
      expect(result.status).toBe(400);
      expect(result.body).toHaveProperty('error', 'sameEmail');
    });
  });
});
