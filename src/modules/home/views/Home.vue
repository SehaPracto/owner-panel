<template>
  <h1>Home</h1>
</template>

<script>
import axiosProvider from "@/data/providers/axiosProvider";
export default {
  async mounted() {
    const res = await axiosProvider.getRequest(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(res);
  },
};
</script>

