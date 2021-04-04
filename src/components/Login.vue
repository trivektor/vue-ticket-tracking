<template>
  <form @submit.prevent="onSubmit">
    <label>Username</label>  
    <div>
      <input type="text" v-model="username" autofocus />
    </div>
    <label>Password</label>
    <div>
      <input type="password" v-model="password" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {username: '', password: ''};
  },
  methods: {
    async onSubmit() {
      this.$store.dispatch('login', {username: this.username, password: this.password});
    },
  },
};
</script>
