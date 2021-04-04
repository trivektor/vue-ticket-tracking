import register from './register';
import login from './login';

const resolvers = {
  Mutation: {
    register,
    login,
  },
};

export default resolvers;