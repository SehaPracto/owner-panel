<template>
  <div class="doctors">
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
        <tr v-for="(doctor, index) in doctors" :key="doctor.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ doctor.first_name }} {{ doctor.last_name }}</td>
          <td>{{ doctor.medical_specialty.name }}</td>
          <td>{{ doctor.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="../scripts/doctorsScript">
</script>

<style>
@import "../styles/doctors.css";
</style>