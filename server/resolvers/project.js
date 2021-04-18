import {Project} from '../models';
import mongoose from 'mongoose';

const project = async (parent, args) => {
  const project = await Project.findById(mongoose.Types.ObjectId(args.id));

  return project;
};

export {project as default};