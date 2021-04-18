import gql from 'graphql-tag';

const createProjectMutation = gql`
  mutation createProject(
    $name: String!
    $description: String
  ) {
    createProject(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export {createProjectMutation as default};