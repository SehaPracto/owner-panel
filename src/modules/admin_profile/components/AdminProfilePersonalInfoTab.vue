<template>
  <Loader v-if="isLoading" />
  <div class="container personal-info" v-else>
    <div class="active-admin-status" v-if="admin.is_active">
      <p><i class="fas fa-check-circle" style="color: white"></i>Active</p>
    </div>
    <div class="non-active-admin-status" v-if="!admin.is_active">
      <p><i class="fas fa-check-circle" style="color: white"></i>Inactive</p>
    </div>
    <div class="personal-info-profile-img-con">
      <img
        class="admin-profile-img"
        :src="admin.profile_img"
        alt=""
        ref="profile-img"
      />
      <i class="fas fa-edit edit-btn" @click="openFilePicker"></i>
      <input
        type="file"
        style="display: none"
        ref="img-picker"
        @change="handleImgPick"
        accept="image/png, image/gif, image/jpeg"
      />
    </div>
    <input
      class="input-text"
      type="text"
      placeholder="Name"
      v-model="admin.name"
    />
    <input
      class="input-text"
      type="text"
      placeholder="Email"
      disabled
      v-model="admin.email"
    />
    <input
      class="input-text"
      type="text"
      placeholder="Phone"
      disabled
      v-model="admin.phone"
    />
    <Loader v-if="isUpdating" style="min-height: 100px" />
    <button class="prim-btn" @click="updateProfileInfo" v-else>Update</button>
    <p style="margin-top: 25px">{{ updateMsg }}</p>
  </div>
</template>

<script src="../scripts/adminPersonalInfoTabScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/admin-profile.css";
</style>