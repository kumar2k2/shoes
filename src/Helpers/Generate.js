import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { secretOrKey } = process.env;

// generate token
const generateToken = (payload) => {
  const generate = jwt.sign(payload, secretOrKey, {
    expiresIn: '1d',
  });
  return generate;
};

// generate hashed password
const generateHashPassword = (password) => {
  const hashPassword = bcrypt.hashSync(password, 10);
  return hashPassword;
};

// generate compare password

const generateComparePassword = (password, comparePassword) => {
  const compare = bcrypt.compareSync(password, comparePassword);
  return compare;
};


export {
  generateComparePassword,
  generateHashPassword,
  generateToken,
};
