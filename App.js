import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import Routes from './src/Routes/Index';

const App = express();
const Port = process.env.PORT || 5000;

// mongoDB connection
require('./src/Database/Connection');
// bodyParser
App.use(bodyParser.json());

// morgan
App.use(morgan('dev'));

// config routes
App.use(Routes);

App.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on PORT ${Port}`);
});

export default App;
