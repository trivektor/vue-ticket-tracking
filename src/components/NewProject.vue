<template>
  <h1 class="mb-4">New Project</h1>
  <project-form :initialName="initialName" @submitted="onSubmit" />
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import { defineComponent } from "@vue/composition-api";

import ProjectForm from "./ProjectForm.vue";
import { createProjectMutation } from "../graphql/mutations";

export default defineComponent({
  setup() {
    const { mutate: createProject } = useMutation(createProjectMutation);

    return { createProject };
  },
  components: {
    ProjectForm,
  },
  methods: {
    async onSubmit({ name, description }) {
      await this.createProject({ name, description });
    },
  },
});
</script>
