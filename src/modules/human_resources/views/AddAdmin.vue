<template>
  <div class="container personal-info">
    <InnerPagesTopBar title="Back" />
    <h1>Add Admin</h1>
    <input class="input-text" type="text" placeholder="Name" v-model="name" />
    <input class="input-text" type="text" placeholder="Email" v-model="email" />
    <input class="input-text" type="text" placeholder="Phone" v-model="phone" />
    <input
      class="input-text"
      type="text"
      placeholder="Password"
      v-model="password"
    />
    <select
      ref="country"
      @change="handleCountryChange"
      class="form-select"
      aria-label="Default select example"
    >
      <option selected value="0">Choose Country</option>
      <option
        v-for="country in countries"
        :key="country.id"
        :value="country.id"
      >
        {{ country.name }}
      </option>
    </select>
    <select
      ref="department"
      @change="handleDepartmentChange"
      class="form-select"
      aria-label="Default select example"
    >
      <option selected value="0">Choose Department</option>
      <option
        v-for="department in departments"
        :key="department.id"
        :value="department.id"
      >
        {{ department.name }}
      </option>
    </select>
    <Loader v-if="isCreating" style="min-height: 100px" />
    <button class="prim-btn" @click="addAdmin" v-else>Add</button>
    <p style="margin-top: 25px">{{ errorMsg }}</p>
  </div>
</template>

<script src="../scripts/addAdminScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/human-resources.css";
</style>