<template>
  <div class="spinner" v-if="isLoading"><a-spin size="large" /></div>
</template>

<style>
.spinner {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>