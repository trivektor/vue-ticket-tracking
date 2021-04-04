import gql from 'graphql-tag';

const loginMutation = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;

export default loginMutation;