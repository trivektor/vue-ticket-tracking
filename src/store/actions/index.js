import authActions from "./auth";
import projectsActions from "./projects";

const actions = {
  ...authActions,
  ...projectsActions,
};

export default actions;
