import { map } from "lodash";

import apolloClient from "../../apollo-client";
import { projectsQuery } from "../../graphql/queries";

const projectsActions = {
  async fetchProjects({ commit }) {
    const { data } = await apolloClient.query({
      query: projectsQuery,
    });

    commit("setProjects", map(data.projects.edges, "node"));
  },
};

export default projectsActions;
