import User from '../Models/User';
import {
  generateHashPassword, generateToken, generateComparePassword,
} from '../Helpers/Generate';
import { validateInput, validateSignin } from '../Helpers/User';


class UserCtrl {
  async SignUp(req, res) {
    const { errors, isValid } = validateInput(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    try {
      const { username, email, password } = req.body;
      const newUser = new User({
        username,
        email,
        password: generateHashPassword(password),
      });
      const save = await newUser.save();
      return res.status(201).json({
        success: true,
        message: 'your has been created',
        user: {
          email: save.email,
          username: save.username,
        },
      });
    } catch (error) {
      return res.status(500).json({ error: 'sorry something wrong please try again later.' });
    }
  }

  // signin
  async SignIn(req, res) {
    const { errors, isValid } = validateSignin(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    }
    try {
      const { email, password } = req.body;
      const verifyEmail = await User.findOne({ email });
      const errorMessage = 'email and password you entered did not match our records.';
      if (!verifyEmail) return res.status(404).json({ error: errorMessage });
      const compare = generateComparePassword(password, verifyEmail.password);
      if (compare) {
        const payload = {
          id: verifyEmail.id,
          username: verifyEmail.username,
        };
        const token = generateToken(payload);
        return res.status(200).json({ message: `welcome ${verifyEmail.username}`, token });
      }
      return res.status(404).json({ error: errorMessage });
    } catch (error) {
      return res.status(500).json({ error: 'sorry something wrong please try again later.' });
    }
  }

  async currentProfile(req, res) {
    const { username, email, avatar } = req.user;
    return res.json({
      profile: {
        username,
        email,
        avatar,
      },
    });
  }
}

export default new UserCtrl();
