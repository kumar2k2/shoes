import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import App from '../../App';
import { signup, emptyInput } from './Data/user.json';

chai.use(chaiHTTP);

describe('User endpoints', () => {
  it('/POST should allow user to create account', (done) => {
    chai.request(App)
      .post('/api/users/signup')
      .send(signup)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(201);
        done();
      });
  });
  it('/POST should not allow user to create account', (done) => {
    chai.request(App)
      .post('/api/users/signup')
      .send(emptyInput)
      .end((error, res) => {
        if (error) done(error);
        expect(res.status).to.equal(400);
        done();
      });
  });
});
