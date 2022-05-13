<template>
  <Loader v-if="isLoading" />
  <div class="container personal-info" v-else>
    <div class="personal-info-profile-img-con">
      <img
        class="admin-profile-img"
        src="@/assets/logo.png"
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
    <input class="input-text" type="text" placeholder="Name" />
    <input class="input-text" type="text" placeholder="Email" disabled />
    <input class="input-text" type="text" placeholder="Phone" disabled />
    <button class="prim-btn" @click="updateProfileInfo">Update</button>
  </div>
</template>

<script src="../scripts/adminPersonalInfoTabScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/admin-profile.css";
</style>