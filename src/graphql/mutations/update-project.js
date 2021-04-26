import gql from "graphql-tag";

const updateProjectMutation = gql`
  mutation updateProject(
    $projectId: ID!
    $name: String!
    $description: String
  ) {
    updateProject(
      projectId: $projectId
      name: $name
      description: $description
    ) {
      id
      name
      description
    }
  }
`;

export { updateProjectMutation as default };
