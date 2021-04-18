<template>
  <div class="flex flex-row mb-10">
    <div class="flex-grow">Projects</div>
    <aside>
      <router-link
        to="/projects/new"
        class="bg-green-500 px-3 py-2 text-white rounded-md"
      >
        New Project
      </router-link>
    </aside>
  </div>
  <section>
    <div v-if="loading">Loading...</div>
    <ul v-else-if="projects">
      <li v-for="project of projects" :key="project.id" class="mb-5">
        <router-link
          class="text-green-500"
          :to="{ name: 'viewProject', params: { id: project.id } }"
        >
          {{ project.name }}
        </router-link>
        <router-link
          class="text-blue-500"
          :to="{ name: 'editProject', params: { id: project.id } }"
        >
          edit
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { defineComponent } from "@vue/composition-api";
import { map } from "lodash";

import { projectsQuery } from "../graphql/queries";

export default defineComponent({
  setup() {
    const { result, loading } = useQuery(projectsQuery);
    const projects = useResult(result, null, (data) =>
      map(data.projects.edges, "node").map((project) => ({
        ...project,
        href: `/project/${project.id}`,
      }))
    );

    return {
      projects,
      loading,
    };
  },
});
</script>
