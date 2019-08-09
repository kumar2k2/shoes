import express from 'express';

// controllers

import User from '../Controllers/User';

const App = express.Router();

App.post('/signup', User.SignUp);

export default App;
