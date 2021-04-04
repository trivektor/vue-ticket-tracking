import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import {User} from '../models';

const getCurrentUser = async (parent, args, context) => {
  const token = context.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(mongoose.Types.ObjectId(decoded.userId));

  return user;
};

export default getCurrentUser;
