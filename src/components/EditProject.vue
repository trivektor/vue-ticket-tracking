<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="project">
    <project-form
      :initialName="project.name"
      :initialDescription="project.description"
      @submitted="onSubmit"
    />
  </div>
</template>

<script>
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";
import { defineComponent } from "@vue/composition-api";
import { useRoute } from "vue-router";

import { projectQuery } from "../graphql/queries";
import { updateProjectMutation } from "../graphql/mutations";
import ProjectForm from "./ProjectForm.vue";

export default defineComponent({
  components: {
    ProjectForm,
  },
  setup() {
    const route = useRoute();
    const { mutate: updateProject } = useMutation(updateProjectMutation);
    const { result, loading } = useQuery(projectQuery, {
      id: route.params.id,
    });
    const project = useResult(result, null, ({ project }) => project);

    return {
      loading,
      project,
      updateProject,
    };
  },
  methods: {
    async onSubmit({ name, description }) {
      await this.updateProject({
        projectId: this.project.id,
        name,
        description,
      });
    },
  },
});
</script>
