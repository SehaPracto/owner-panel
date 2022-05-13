<template>
  <div class="container">
    <form class="change-password-con" @submit.prevent="changePassword">
      <input
        class="input-text"
        type="password"
        placeholder="Old password"
        required
        v-model="oldPassword"
      />
      <input
        class="input-text"
        type="password"
        placeholder="New Password"
        required
        v-model="newPassword"
      />
      <input
        class="input-text"
        type="password"
        placeholder="Confirm New Password"
        required
        v-model="confirmNewPassword"
      />
      <input class="prim-btn" type="submit" value="Change" />
      <p>{{ errorMsg }}</p>
    </form>
  </div>
</template>

<script src="../scripts/adminProfileChangePasswordScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/admin-profile.css";
</style>