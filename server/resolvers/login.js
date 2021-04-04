import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {User} from '../models';

const login = async (parent, args) => {
  const user = await User.findOne({username: args.username});

  if (!user) {
    throw new Error("User not found");
  }

  if (!bcrypt.compareSync(args.password, user.password)) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET);

  return token;
};

export default login;
