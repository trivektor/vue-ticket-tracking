import gql from 'graphql-tag';

const getCurrentUser = gql`
  query getCurrentUser {
    getCurrentUser {
      id
      username
    }
  }
`;

export default getCurrentUser;