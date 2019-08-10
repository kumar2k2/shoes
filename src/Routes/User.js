import express from 'express';
// controllers
import User from '../Controllers/User';

// middlewares
import { verifyEmail, verifyToken } from '../Middlewares/User';

const App = express.Router();

App.post('/signup', verifyEmail, User.SignUp);
App.post('/signin', User.SignIn);

// get current User profile
App.get('/profile', verifyToken, User.currentProfile);

export default App;
