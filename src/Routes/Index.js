import express from 'express';
// routes
import User from './User';

const App = express.Router();

// user
App.use('/api/users', User);

export default App;
