<template>
  <form @submit.prevent="onSubmit">
    <div class="mb-4">
      <label>Name</label>
      <input
        class="block border-2 border-gray-300 p-1 w-full rounded"
        v-model="name"
      />
    </div>
    <div class="mb-4">
      <label>Description</label>
      <textarea
        class="block border-2 border-gray-300 p-1 w-full rounded"
        v-model="description"
      />
    </div>
    <div>
      <button type="submit" class="bg-green-500 text-white px-3 py-2">
        Save
      </button>
    </div>
  </form>
</template>

<script>
//import gql from "graphql-tag";

export default {
  apollo: {},
  props: {
    initialName: String,
  },
  data() {
    return {
      name: this.initialName,
    };
  },
  methods: {
    async onSubmit() {
      this.$emit("submitted", {
        name: this.name,
        description: this.description,
      });
    },
  },
};
</script>
