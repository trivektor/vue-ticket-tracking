import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import {Project, User} from '../models';

const createProject = async (parent, args, context) => {
  const token = context.authorization.split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(mongoose.Types.ObjectId(decoded.userId));
  const project = new Project({
    name: args.name,
    description: args.description,
    created_by: user.username,
  });

  await project.save();

  return project;
};

export {createProject as default};
