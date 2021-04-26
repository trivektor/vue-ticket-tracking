import register from './register';
import login from './login';
import getCurrentUser from './get-current-user';
import createProject from './create-project';
import updateProject from './update-project';
import project from './project';
import projects from './projects';

const resolvers = {
  Query: {
    getCurrentUser,
    project,
    projects,
  },
  Mutation: {
    register,
    login,
    createProject,
    updateProject,
  },
};

export default resolvers;
