import { default as authMutations } from "./auth";
import { default as projectMutations } from "./projects";

const mutations = {
  ...authMutations,
  ...projectMutations,
};

export default mutations;
