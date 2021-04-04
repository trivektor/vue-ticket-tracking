<template>
  <router-view />
</template>

<script>
import { provide } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client' 
import { DefaultApolloClient } from '@vue/apollo-composable'

// https://github.com/learnwithjason/vue-3-and-apollo-client-3/blob/main/src/main.js
const defaultClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

export default {
  name: 'App',
  setup() {
    provide(DefaultApolloClient, defaultClient)    
  },
}
</script>
