<template>
  <header class="p-5 bg-green-500 text-white font-medium flex flex-row">
    <div class="flex-grow">Vue Ticket Tracking</div>
    <aside v-if="currentUser">
      {{currentUser.username}}
    </aside>
  </header>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUser']),
  },
}
</script>