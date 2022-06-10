<template>
  <div class="container">
    <button class="create-department-btn" @click="$router.push('/add-admin')">
      <i class="fas fa-plus"></i> Add Admin
    </button>
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
        <input
          class="input-text"
          type="text"
          placeholder="Department Name"
          v-model="departmentName"
        />
        <button class="prim-btn" @click="createDepartment">Create</button>
      </div>
    </div>
    <select
      ref="department"
      @change="handleChange"
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
    <Loader style="height: 150px" v-if="isLoading" />
    <table class="table" v-else>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">Status</th>
          <th scope="col">Profile</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(admin, index) in admins" :key="admin.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ admin.name }}</td>
          <td>{{ admin.email }}</td>
          <td>{{ admin.phone }}</td>
          <td>{{ admin.is_active ? "Active" : "Inactive" }}</td>
          <td>
            <button class="profile-btn">Profile</button>
          </td>
        </tr>
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