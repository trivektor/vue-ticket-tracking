import {Project} from '../models';

const projects = async () => {
  const allProjects = await Project.find();

  return {edges: allProjects.map((project) => ({node: project}))};
};

export {projects as default};