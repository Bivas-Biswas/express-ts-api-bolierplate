import app from '../src/app';
import request from 'supertest';

describe('GET /', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').expect(200);
  });

  test('It should response json data message ok', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.message).toEqual('ok');
      });
  });
});
