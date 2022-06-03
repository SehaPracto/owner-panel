<template>
  <div class="container">
    <InnerPagesTopBar />
    <div class="card form-card">
      <div class="row">
        <h4 class="text-center">Add Service</h4>
        <form class="custom-form" @submit.prevent="addDoctorDepartmentService">
          <input
            class="input-text"
            type="text"
            placeholder="Name"
            v-model="name"
          />
          <input
            class="input-text"
            type="text"
            placeholder="Name Arabic"
            v-model="nameAr"
          />
          <input type="submit" class="prim-btn" value="Send" />
        </form>
      </div>
    </div>
    <div class="row">
      <Loader style="height: 150px" v-if="isLoading" />
      <table class="table" v-else>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Name Arabic</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(service, index) in services" :key="service.id">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ service.name }}</td>
            <td>{{ service.name_ar }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script src="../scripts/doctorDepartmentServicesScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/specialties.css";
</style>