import express from 'express';

// controllers
import User from '../Controllers/User';

// middlewares
import { verifyEmail } from '../Middlewares/User';

const App = express.Router();

App.post('/signup', verifyEmail, User.SignUp);
App.post('/signin', User.SignIn);

export default App;
