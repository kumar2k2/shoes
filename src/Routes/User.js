import express from 'express';
// controllers
import User from '../Controllers/User';

// middlewares
import { verifyEmail, verifyToken, verifyUsername } from '../Middlewares/User';

const App = express.Router();

App.post('/signup', verifyEmail, User.SignUp);
App.post('/signin', User.SignIn);

// get current User profile
App.get('/profile', verifyToken, User.currentProfile);

// PUT update password
App.put('/password', verifyToken, User.updatePassword);

// PUT update username
App.put('/username', verifyToken, verifyUsername, User.updateUsername);
export default App;
