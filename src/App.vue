<template>
  <app-header />
  <section class="p-5">
    <router-view />
  </section>
</template>

<script>
import { provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import apolloClient from "./apollo-client";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
};
</script>
