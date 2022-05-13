<template>
  <div class="container">
    <div class="row">
      <InnerPagesTopBar title="My Profile" />
      <div class="tab-bar">
        <button
          :class="currentTab == 'personal-info' ? 'active-tab' : 'tab'"
          @click="chooseTab('personal-info')"
        >
          Personal Info.
        </button>
        <button
          :class="currentTab == 'inbox' ? 'active-tab' : 'tab'"
          @click="chooseTab('inbox')"
        >
          Inbox
        </button>
        <button
          :class="currentTab == 'tasks' ? 'active-tab' : 'tab'"
          @click="chooseTab('tasks')"
        >
          Tasks
        </button>
        <button
          :class="currentTab == 'finance' ? 'active-tab' : 'tab'"
          @click="chooseTab('finance')"
        >
          Finances
        </button>
      </div>

      <AdminProfilePersonalInfoTab v-if="currentTab == 'personal-info'" />
      <AdminProfileInboxTab v-if="currentTab == 'inbox'" />
    </div>
  </div>
</template>

<script src="../scripts/adminProfileScripts.js">
</script>

<style>
@import "../styles/admin-profile.css";
</style>