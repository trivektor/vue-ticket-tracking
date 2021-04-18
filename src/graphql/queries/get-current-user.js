import gql from 'graphql-tag';

const getCurrentUser = gql`
  query getCurrentUserQuery {
    getCurrentUser {
      id
      username
    }
  }
`;

export default getCurrentUser;