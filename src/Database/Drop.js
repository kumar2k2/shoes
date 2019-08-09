/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const { mongoDB_URI_TEST } = process.env;

const Drop = (done) => {
  mongoose.connect(mongoDB_URI_TEST, () => {
    mongoose.connection.db.dropDatabase();
    done();
  });
};

export default Drop;
