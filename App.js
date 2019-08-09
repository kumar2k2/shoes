import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const App = express();
const Port = process.env.PORT || 5000;

// bodyParser
App.use(bodyParser.json());

// morgan
App.use(morgan('dev'));

App.listen(Port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on PORT ${Port}`);
});
