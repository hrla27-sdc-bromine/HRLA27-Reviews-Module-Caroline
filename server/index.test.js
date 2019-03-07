const app = require('./index.js');
const request = require('supertest');

describe('should be able to accept the get requests from the correct endpoint', () => {
  test('it should be access to the route /reviews/:productId', (done) => {
    request(app).get('/reviews/2').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('it should be access to the route /reviews/:productId/stats', (done) => {
    request(app).get('/reviews/10000/stats').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('it should be access to the rout /reviews/:productId/helpful/:n', (done)=> {
    request(app).get('/reviews/99999/helpful/1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('it should be access to the rout /reviews/:productId/relevant/:n', (done) => {
    request(app).get('/reviews/1234455/relevant/1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('it should be access to the rout /reviews/:productId/newest/:n', (done) => {
    request(app).get('/reviews/1000000/newest/1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
  test('it should be access to the rout /reviews/:productId/stars/:n', (done) => {
    request(app).post('/reviews/1/stars/1').then((response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });
  test('it should be access to the rout /reviews/:productId/more', (done) => {
    request(app).get('/reviews/123/more').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });


});

