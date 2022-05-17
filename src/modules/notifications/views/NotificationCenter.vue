<template>
  <div class="container">
    <h1 class="text-center">Notifications Center</h1>
    <div class="card form-card">
      <div class="row">
        <form class="custom-form" @submit.prevent="handleSubmitNotification">
          <select
            @change="setType"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="general" selected>Choose targeted audiance</option>
            <option value="general">All</option>
            <option value="users">Users/Patients</option>
            <option value="drs">Doctors</option>
            <option value="hcps">HCPs</option>
          </select>
          <input
            class="input-text"
            type="text"
            placeholder="Title"
            v-model="title"
          />
          <textarea
            class="input-text"
            name=""
            id=""
            cols="30"
            rows="10"
            style="resize: none"
            placeholder="Context"
            v-model="context"
          ></textarea>
          <input type="submit" class="prim-btn" value="Send" />
        </form>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/notificationCenterScripts.js">
</script>

<style>
@import "../styles/notification-center.css";
@import "@/assets/styles/global.css";
</style>