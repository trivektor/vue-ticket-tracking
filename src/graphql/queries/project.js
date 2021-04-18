import gql from 'graphql-tag';

const getProject = gql`
  query getProjectQuery($id: String!) {
    project(id: $id) {
      id
      name
      description
      created_by
    }
  }
`;

export {getProject as default};