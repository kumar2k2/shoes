import User from '../Models/User';
import {
  generateHashPassword,
} from '../Helpers/Generate';
import { validateInput } from '../Helpers/User';


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
}

export default new UserCtrl();
