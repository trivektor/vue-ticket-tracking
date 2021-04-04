import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {User} from '../models';

const register = async (parent, args) => {
  const existingUser = await User.findOne({username: args.username});

  if (existingUser) {
    throw new Error('Username already exists');
  }

  const salt = await bcrypt.genSalt(10);
  const user = new User({
    username: args.username,
    password: await bcrypt.hash(args.password, salt),
  });
  
  await user.save();

  const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET);

  return token;
};

export default register;