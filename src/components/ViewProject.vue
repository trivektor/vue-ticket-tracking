<template>
  <div v-if="loading">Loading...</div>
  <section v-else-if="project">
    <h2>{{ project.name }}</h2>
    <p>{{ project.description }}</p>
  </section>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { useRoute } from "vue-router";

import { defineComponent } from "@vue/composition-api";
import { projectQuery } from "../graphql/queries";

export default defineComponent({
  setup() {
    const route = useRoute();

    const { result, loading } = useQuery(projectQuery, {
      id: route.params.id,
    });
    const project = useResult(result, null, (data) => data.project);

    return { loading, project };
  },
});
</script>
