<template>
  <div class="hcps">
    <div class="tabs">
      <button
        class="tab"
        :class="tab == 'active' ? 'active-tab' : ''"
        @click="toggleActiveTab"
      >
        Active
      </button>
      <button
        class="tab"
        :class="tab == 'pending' ? 'active-tab' : ''"
        @click="togglePendingTab"
      >
        Pending
      </button>
    </div>
    <Loader v-if="isLoading" />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Specialty</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hcp, index) in hcps" :key="hcp.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ hcp.first_name }} {{ hcp.last_name }}</td>
          <td>{{ hcp.specialty.name }}</td>
          <td>{{ hcp.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="../scripts/hcpsScript">
</script>

<style>
@import "../styles/hcps.css";
</style>