import gql from 'graphql-tag';

const projects = gql`
  query projectsQuery {
    projects {
      edges {
        node {
          id
          name
          description
          created_by
        }
      }
    }
  }
`;

export {projects as default};