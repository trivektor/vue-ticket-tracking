<template>
  <h1 class="mb-4">New Project</h1>
  <project-form :initialName="initialName" @submitted="onSubmit" />
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import ProjectForm from "./ProjectForm.vue";
import { createProjectMutation } from "../graphql/mutations";
//import { createProjectMutation } from "../graphql/mutations";

export default {
  setup() {
    const { mutate: createProject } = useMutation(createProjectMutation);

    return { createProject };
  },
  components: {
    ProjectForm,
  },
  methods: {
    async onSubmit({ name, description }) {
      const data = await this.createProject({ name, description });

      console.log({ data });
    },
  },
};
</script>
