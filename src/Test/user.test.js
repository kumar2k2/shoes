import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import App from '../../App';
import { signup, emptyInput } from './Data/user.json';
import Drop from '../Database/Drop';

chai.use(chaiHTTP);

describe('User endpoints', () => {
  before((done) => {
    Drop(done);
  });
  it('/POST should allow user to create account', async () => {
    const res = await chai.request(App)
      .post('/api/users/signup')
      .send(signup);
    expect(res.status).to.equal(201);
  });
  it('/POST should not allow user to create account', async () => {
    const res = await chai.request(App)
      .post('/api/users/signup')
      .send(emptyInput);
    expect(res.status).to.equal(400);
  });
  it('/POST should not allow user to create account when email exist', async () => {
    const res = await chai.request(App)
      .post('/api/users/signup')
      .send(signup);
    expect(res.status).to.equal(409);
  });
});
