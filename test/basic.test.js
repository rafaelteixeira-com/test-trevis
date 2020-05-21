const request = require('supertest');

describe('basic', () => {

   test('should run main assertives', () => {
      const number = 12;
      expect(number).not.toBeNull()
      expect(number).toBe(12);
      expect(number).toEqual(12);
      expect(number).toBeGreaterThan(10);
      expect(number).toBeLessThan(15);
   });

   it('should working with objects', ()=>{
      const obj = { name: 'Rafael', mail: 'mail@rafaelteixeira.com' }
      const obj2 = { name: 'Rafael', mail: 'mail@rafaelteixeira.com' }
      
      expect(obj).toHaveProperty('name');
      expect(obj).toHaveProperty('name', 'Rafael');
      expect(obj.name).toBe('Rafael');

      expect(obj).toStrictEqual(obj2);
      expect(obj).toEqual(obj2);
      expect(obj).toBe(obj);
   })

   it.skip('should google response with status 200', () => {
      const google = request('http://www.google.com');
   
      return google.get('/').then( res => {
         expect(res.status).toBe(200);
         //done();
      });
   });

});
