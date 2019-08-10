import passport from 'passport';
import User from '../Models/User';

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  const verify = await User.findOne({ email });
  if (verify) {
    return res.status(409).json({ email: 'sorry email already exist.' });
  }
  next();
};

const verifyToken = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    const errorMessage = 'Whoops Unauthorized. You must signin to do that.';
    if (!user || error) {
      return res.status(401).json({ error: errorMessage });
    }
    req.user = user;
    next();
  })(req, res, next);
};
export {
  verifyEmail,
  verifyToken,
};
