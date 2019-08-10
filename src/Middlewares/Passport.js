import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import dotenv from 'dotenv';
import User from '../Models/User';

dotenv.config();

const { secretOrKey } = process.env;

const opts = {};


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

const passportJWT = (passport) => {
  passport.use(new JwtStrategy(opts, ((jwt_payload, done) => {
    User.findOne({ _id: jwt_payload.id }, (err, user) => {
      if (err || !user) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
    });
  })));
};

export {
  passportJWT,
};
