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
import {useMutation} from '@vue/apollo-composable';
import {registerMutation} from '../graphql/mutations';

export default {
  setup() {
    const {mutate: register} = useMutation(registerMutation)

    return {register};
  },
  data() {
    return {username: '', password: ''};
  },
  methods: {
    async onSubmit() {
      try {
        const {data} = await this.register({
          username: this.$data.username,
          password: this.$data.password,
        });

        // JWT token
        localStorage.setItem('jwtToken', data.register);
      } catch (err) {
        // TODO: not use alert
        alert(err.toString());
      }
    },
  },
};
</script>
