import register from './register';
import login from './login';
import getCurrentUser from './get-current-user';

const resolvers = {
  Query: {
    getCurrentUser,
  },
  Mutation: {
    register,
    login,
  },
};

export default resolvers;