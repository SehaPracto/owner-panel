<template>
  <div class="patients">
    <!-- <div class="tabs">
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
    </div> -->
    <Loader v-if="isLoading" />
    <table class="table" v-else>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(patient, index) in patients" :key="patient.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ patient.first_name }} {{ patient.last_name }}</td>
          <td>{{ patient.phone }}</td>
          <td>
            <button
              class="profile-btn"
              @click="$router.push(`/patient/${patient.id}`)"
            >
              Profile
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="../scripts/patientsScripts.js">
</script>

<style>
@import "../styles/patients.css";
</style>