import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { secretOrKey } = process.env;

// generate token
const generateToken = (payload) => {
  try {
    const generate = jwt.sign(payload, secretOrKey, {
      expiresIn: '1d',
    });
    return generate;
  } catch (error) {
    return false;
  }
};

// generate hashed password
const generateHashPassword = (password) => {
  try {
    const hashPassword = bcrypt.hashSync(password, 10);
    return hashPassword;
  } catch (error) {
    return false;
  }
};

// generate compare password

const generateComparePassword = (password, comparePassword) => {
  try {
    const compare = bcrypt.compareSync(password, comparePassword);
    return compare;
  } catch (error) {
    return false;
  }
};

export {
  generateComparePassword,
  generateHashPassword,
  generateToken,
};
