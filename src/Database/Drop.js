/* eslint-disable no-console */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { mongoDB_URI_TEST } = process.env;

export default mongoose.connect(mongoDB_URI_TEST, { useNewUrlParser: true })
  .then(async (db) => {
    await db.connection.dropDatabase();
    mongoose.disconnect();
  }).catch((error) => {
    console.log(error);
  });
