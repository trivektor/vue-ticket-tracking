import {Project} from '../models';

const createProject = async (parent, args) => {
  const project = new Project({
    name: args.name,
    description: args.description,
  });

  await project.save();

  return project;
};

export {createProject as default};
