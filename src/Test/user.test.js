import chai, { expect } from 'chai';
import chaiHTTP from 'chai-http';
import App from '../../App';
import {
  signup, emptyInput, emailNotFound, emptyPassword, passwordNotMatch, passwordMatches,
} from './Data/user.json';
import Drop from '../Database/Drop';

chai.use(chaiHTTP);

describe('User endpoints', () => {
  let token;
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

  // SignIn
  it('/POST should let user sign in', async () => {
    const res = await chai.request(App).post('/api/users/signin').send(signup);
    token = `Bearer ${res.body.token}`;
    expect(res.status).to.equal(200);
  });
  it('/POST should not let user to sign in when email not found', async () => {
    const res = await chai.request(App).post('/api/users/signin').send(emailNotFound);
    expect(res.status).to.equal(404);
  });
  it('/POST should not let user to sign in there is validation error', async () => {
    const res = await chai.request(App).post('/api/users/signin').send(emptyInput);
    expect(res.status).to.equal(400);
  });

  // routes protections
  it('/GET should protect unauthorized user to access profile', async () => {
    const res = await chai.request(App).get('/api/users/profile');
    expect(res.status).to.equal(401);
  });
  it('/GET should let user view his profile', async () => {
    const res = await chai.request(App).get('/api/users/profile').set({
      Authorization: token,
    });
    expect(res.status).to.equal(200);
  });

  // change password
  it('/PUT should not let user change password when his not authenticated', async () => {
    const res = await chai.request(App).put('/api/users/password');
    expect(res.status).to.equal(401);
  });
  it('/PUT should not let user to change password when it has empty field', async () => {
    const res = await chai.request(App).put('/api/users/password')
      .set({ Authorization: token }).send(emptyPassword);
    expect(res.status).to.equal(400);
  });
  it('/PUT should not let user to change password when recent password not match', async () => {
    const res = await chai.request(App).put('/api/users/password')
      .set({ Authorization: token }).send(passwordNotMatch);
    expect(res.status).to.equal(409);
    expect(res.body).to.has.property('error');
  });
  //
  it('/PUT should allow user to update password', async () => {
    const res = await chai.request(App).put('/api/users/password')
      .set({ Authorization: token }).send(passwordMatches);
    expect(res.status).to.equal(200);
  });
});
