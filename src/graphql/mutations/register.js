import gql from 'graphql-tag';

const registerMutation = gql`
  mutation register($username: String!, $password: String!) {
    register(username: $username, password: $password)
  }
`;

export default registerMutation;