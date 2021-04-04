<template>
  <router-view />
</template>

<script>
import { provide } from 'vue'

import {DefaultApolloClient} from '@vue/apollo-composable';
import apolloClient from './apollo-client';

export default {
  name: 'App',
  setup() {
    provide(DefaultApolloClient, apolloClient)    
  },
}
</script>
