<template>
  <div class="container profile">
    <Loader v-if="isLoading" />
    <div class="row" v-else>
      <div class="status-row">
        <button
          :class="hcp.is_active ? 'deactivate-btn' : 'activate-btn'"
          @click="toggleHcpActiveState"
        >
          {{ hcp.is_active ? "Deactivate" : "Approve" }}
        </button>
      </div>
      <div class="notif-con">
        <button class="prim-btn" @click="toggleIsShowNotifModal">
          Push Notification
        </button>
        <div class="notif-modal" v-show="isShowNotifModal">
          <div class="top-modal-bar">
            <i
              class="fas fa-times"
              style="cursor: pointer"
              @click="toggleIsShowNotifModal"
            ></i>
          </div>
          <form @submit.prevent="sendNotificationToHcp">
            <input
              class="input-text"
              type="text"
              placeholder="Title"
              required
              v-model="notifTitle"
            />
            <textarea
              class="input-text"
              name=""
              id=""
              cols="30"
              rows="3"
              style="resize: none"
              placeholder="Context"
              required
              v-model="notifContext"
            ></textarea>
            <input type="submit" class="prim-btn" value="Send" />
          </form>
        </div>
      </div>
      <div class="col-md-12">
        <img class="hcp-profile-img" :src="hcp.profile_img" alt="" />
      </div>
      <div class="actions-con">
        <div class="action-tab">
          <p
            style="color: green; font-weight: bold"
            v-if="hcp.phone_verified_at"
          >
            <i class="fas fa-check"></i>Phone Verified
          </p>
          <p style="color: red; font-weight: bold" v-else>
            <i class="fas fa-exclamation-circle"></i>Phone not verified
          </p>
        </div>
        <div class="action-tab">
          <p
            style="color: green; font-weight: bold"
            v-if="hcp.email_verified_at"
          >
            <i class="fas fa-check"></i>Email Verified
          </p>
          <p style="color: red; font-weight: bold" v-else>
            <i class="fas fa-exclamation-circle"></i>Email not verified
          </p>
        </div>
        <div class="action-tab" v-if="!hcp.adress">
          <p style="color: red; font-weight: bold">
            <i class="fas fa-exclamation-circle"></i>Adress
          </p>
        </div>
        <div class="action-tab" v-if="workingHour.length < 1">
          <p style="color: red; font-weight: bold">
            <i class="fas fa-exclamation-circle"></i>Working hours
          </p>
        </div>
      </div>
      <div class="col-md-12">
        <p>
          <i class="fas fa-user"></i>{{ hcp.first_name }}
          {{ hcp.last_name }}
        </p>
      </div>
      <div class="col-md-12">
        <p>{{ hcp.gender }}</p>
      </div>
      <div class="col-md-12">
        <p><i class="fas fa-syringe"></i> {{ medicalSpecialty.name }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-map-marker"></i> {{ hcp.adress }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-phone"></i> {{ hcp.phone }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-money-bill"></i> {{ hcp.examination_fee }} TL</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-stopwatch"></i> {{ hcp.waiting_time }} Mins.</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-envelope"></i> {{ hcp.email }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-star"></i> {{ hcp.rating }} / 5</p>
      </div>
      <div class="col-md-6">
        <p>
          {{ hcp.email_verified_at ? "Email Verified" : "Email not verified" }}
        </p>
      </div>
      <div class="row">
        <div class="col-md-3">
          <button
            :class="
              activeTab == 0 ? 'hcp-profile-active-tab' : 'hcp-profile-tab'
            "
            @click="setActiveTab(0)"
          >
            Appointments
          </button>
        </div>
        <div class="col-md-3">
          <button
            :class="
              activeTab == 1 ? 'hcp-profile-active-tab' : 'hcp-profile-tab'
            "
            @click="setActiveTab(1)"
          >
            Work Locations
          </button>
        </div>
        <div class="col-md-3">
          <button
            :class="
              activeTab == 2 ? 'hcp-profile-active-tab' : 'hcp-profile-tab'
            "
            @click="setActiveTab(2)"
          >
            Medical Degrees
          </button>
        </div>
        <div class="col-md-3">
          <button
            :class="
              activeTab == 3 ? 'hcp-profile-active-tab' : 'hcp-profile-tab'
            "
            @click="setActiveTab(3)"
          >
            Working time
          </button>
        </div>
      </div>
      <div class="col-md-12" style="padding: 10px" v-show="activeTab == 0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patient</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Paitent Phone</th>
              <th scope="col">Approved</th>
              <th scope="col">Finished</th>
              <th scope="col">Rejected</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(aptmnt, index) in appointment" :key="aptmnt.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>
                {{ aptmnt.patient.first_name }} {{ aptmnt.patient.last_name }}
              </td>
              <td>{{ aptmnt.date }}</td>
              <td>{{ aptmnt.start }}</td>
              <td>{{ aptmnt.patient.phone }}</td>
              <td>{{ aptmnt.is_approved ? "Yes" : "No" }}</td>
              <td>{{ aptmnt.is_finished ? "Yes" : "No" }}</td>
              <td>{{ aptmnt.is_rejected ? "Yes" : "No" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-12" style="padding: 10px" v-show="activeTab == 1">
        <h1>work location</h1>
      </div>
      <div class="col-md-12" v-show="activeTab == 2">
        <div class="row" style="padding: 50px">
          <div
            class="col-md-4"
            v-for="mDegree in medicalDegree"
            :key="mDegree.id"
          >
            <img
              height="150"
              width="150"
              style="margin: auto auto; border-radius: 15px"
              :src="mDegree.img"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-md-12" style="padding: 10px" v-show="activeTab == 3">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Day Time</th>
              <th scope="col">Start</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(wHour, index) in workingHour" :key="wHour.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ wHour.day_time }}</td>
              <td>{{ wHour.start }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/hcpProfileScript.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/hcps.css";
</style>