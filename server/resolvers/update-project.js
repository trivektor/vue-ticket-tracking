import mongoose from "mongoose";

import { Project } from "../models";

const updateProject = async (parent, args) => {
  const project = await Project.findById(
    mongoose.Types.ObjectId(args.projectId)
  );

  await project.updateOne({
    name: args.name,
    description: args.description,
  });

  return project;
};

export { updateProject as default };
