import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import passport from 'passport';

import Routes from './src/Routes/Index';
// middleware
import { passportJWT } from './src/Middlewares/Passport';

const App = express();
const Port = process.env.PORT || 5000;

// mongoDB connection
require('./src/Database/Connection');
// bodyParser
App.use(bodyParser.json());

// morgan
App.use(morgan('dev'));

// config passport
App.use(passport.initialize());
passportJWT(passport);
// config routes
App.use(Routes);

App.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on PORT ${Port}`);
});

export default App;
