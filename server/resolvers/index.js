import register from './register';
import login from './login';
import getCurrentUser from './get-current-user';
import createProject from './create-project';

const resolvers = {
  Query: {
    getCurrentUser,
  },
  Mutation: {
    register,
    login,
    createProject,
  },
};

export default resolvers;