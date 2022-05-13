<template>
  <div class="container">
    <div class="add-department-con">
      <button
        class="create-department-btn"
        @click="toggleIsShowCreateDepartmentModal(true)"
      >
        <i class="fas fa-plus"></i> Create
      </button>
      <div class="add-department-modal" v-if="isShowCreateDepartmentModal">
        <div
          style="
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            width: 90%;
          "
        >
          <i
            class="fas fa-times"
            style="color: red; cursor: pointer; font-size: 18px"
            @click="toggleIsShowCreateDepartmentModal(false)"
          ></i>
        </div>
        <input class="input-text" type="text" placeholder="Department Name" />
        <button class="prim-btn">Create</button>
      </div>
    </div>
    <select class="form-select" aria-label="Default select example">
      <option selected>Choose Department</option>
    </select>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr v-for="(hcp, index) in hcps" :key="hcp.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ hcp.first_name }} {{ hcp.last_name }}</td>
          <td>{{ hcp.specialty.name }}</td>
          <td>{{ hcp.phone }}</td>
          <td>
            <button class="profile-btn" @click="goToHcpProfile(hcp.id)">
              Profile
            </button>
          </td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>

<script src="../scripts/humanResourcesScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/human-resources.css";
</style>