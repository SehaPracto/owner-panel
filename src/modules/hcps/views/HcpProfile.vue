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
      <button
        class="prim-btn"
        style="margin: 15px auto"
        @click="toggleIsShowEditModal"
      >
        Edit Profile
      </button>
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
          <tbody v-if="workingHour.length > 0">
            <tr v-for="(wHour, index) in workingHour" :key="wHour.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ wHour.day_time }}</td>
              <td>{{ wHour.start }}</td>
            </tr>
          </tbody>
          <div v-else>
            <button class="prim-btn" @click="createHcpSchedule">
              Create Schedule
            </button>
          </div>
        </table>
      </div>
    </div>
    <div style="position: absolute" v-if="isShowEditModal">
      <div class="update-profile-modal-background">
        <div class="update-profile-modal">
          <h3 style="font-weight: bold">Edit profile</h3>
          <form @submit.prevent="updateHcp">
            <input
              class="input-text"
              type="text"
              placeholder="First name"
              v-model="hcp.first_name"
            />
            <input
              class="input-text"
              type="text"
              placeholder="Last name"
              v-model="hcp.last_name"
            />
            <hr />
            <select
              ref="cities"
              class="form-select city-select"
              aria-label="Default select example"
              @change.prevent="handleCityChange"
              v-model="hcp.city_id"
            >
              <option v-for="city in cities" :key="city.id" :value="city.id">
                {{ city.name }}-{{ city.name_ar }}
              </option>
            </select>
            <select
              ref="gender"
              class="form-select city-select mt-1"
              aria-label="Default select example"
              @change.prevent="handleGenderChange"
              v-model="hcp.gender"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input
              class="input-text"
              type="text"
              placeholder="Adress"
              v-model="hcp.adress"
            />
            <input
              class="input-text"
              type="text"
              placeholder="Phone"
              v-model="hcp.phone"
              :disabled="hcp.phone_verified_at != null"
            />
            <input
              class="input-text"
              type="text"
              placeholder="Email"
              v-model="hcp.email"
              :disabled="hcp.email_verified_at != null"
            />
            <input
              class="input-text"
              type="text"
              placeholder="Waiting time"
              v-model="hcp.waiting_time"
            />
            <input
              class="input-text"
              type="text"
              placeholder="Examination fee"
              v-model="hcp.examination_fee"
            />
            <p>
              <input
                type="submit"
                class="prim-btn"
                value="Update"
                @click="updateHcp"
              />
            </p>
            <p>
              <button class="cancel-btn" @click="toggleIsShowEditModal">
                Cancel
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/hcpProfileScript.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/hcps.css";

.update-profile-modal-background {
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.199);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20000;
}
.update-profile-modal {
  height: 750px;
  width: 450px;
  background: #fff;
  border-radius: 15px;
  padding: 15px;
}
.city-select {
  width: 90%;
  border-radius: 15px;
  margin: auto auto;
}
</style>