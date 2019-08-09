import User from '../Models/User';

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  const verify = await User.findOne({ email });
  if (verify) {
    return res.status(409).json({ email: 'sorry email already exist.' });
  }
  next();
};

export {
  verifyEmail,
};
