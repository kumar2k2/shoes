import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { mongoDB_URI, mongoDB_URI_TEST } = process.env;

const db = process.env.NODE_ENV === 'test' ? mongoose.connect(mongoDB_URI_TEST, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true }) : mongoose.connect(mongoDB_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true });

export default db;
