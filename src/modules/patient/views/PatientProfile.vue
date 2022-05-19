<template>
  <div class="container">
    <div class="container profile">
      <Loader v-if="isLoading" />
      <div class="row" v-else>
        <!-- <div class="status-row">
          <button
            :class="patient.is_active ? 'deactivate-btn' : 'activate-btn'"
            @click="toggleDoctorActiveState"
          >
            {{ patient.is_active ? "Deactivate" : "Approve" }}
          </button>
        </div> -->
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
            <form @submit.prevent="sendNotificationToPatient">
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
          <img class="patient-profile-img" :src="patient.profile_img" alt="" />
        </div>
        <div class="actions-con">
          <div class="action-tab">
            <p
              style="color: green; font-weight: bold"
              v-if="patient.phone_verified_at"
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
              v-if="patient.email_verified_at"
            >
              <i class="fas fa-check"></i>Email Verified
            </p>
            <p style="color: red; font-weight: bold" v-else>
              <i class="fas fa-exclamation-circle"></i>Email not verified
            </p>
          </div>
        </div>
        <div class="col-md-12">
          <p>
            <i class="fas fa-user"></i>{{ patient.first_name }}
            {{ patient.last_name }}
          </p>
        </div>
        <div class="col-md-12">
          <p>{{ patient.gender }}</p>
        </div>

        <div class="col-md-6">
          <p>
            <i class="fas fa-map-marker"></i>
            {{ patient.birthdate ?? "Not Specified" }}
          </p>
        </div>
        <div class="col-md-6">
          <p><i class="fas fa-phone"></i> {{ patient.phone }}</p>
        </div>
        <div class="col-md-6">
          <p><i class="fas fa-envelope"></i> {{ patient.email }}</p>
        </div>
        <div class="row">
          <div class="col-md-3">
            <button
              :class="
                activeTab == 0
                  ? 'patient-profile-active-tab'
                  : 'patient-profile-tab'
              "
              @click="setActiveTab(0)"
            >
              Doctor Appointments
            </button>
          </div>
          <div class="col-md-3">
            <button
              :class="
                activeTab == 1
                  ? 'patient-profile-active-tab'
                  : 'patient-profile-tab'
              "
              @click="setActiveTab(1)"
            >
              Hcp Appointments
            </button>
          </div>
          <div class="col-md-3">
            <button
              :class="
                activeTab == 2
                  ? 'patient-profile-active-tab'
                  : 'patient-profile-tab'
              "
              @click="setActiveTab(2)"
            >
              Notifications
            </button>
          </div>
          <div class="col-md-3">
            <button
              :class="
                activeTab == 3
                  ? 'patient-profile-active-tab'
                  : 'patient-profile-tab'
              "
              @click="setActiveTab(3)"
            >
              Finance
            </button>
          </div>
        </div>
        <div class="col-md-12" style="padding: 10px" v-show="activeTab == 0">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Doctor</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Doctor Phone</th>
                <th scope="col">Doctor Specialty</th>
                <th scope="col">Approved</th>
                <th scope="col">Finished</th>
                <th scope="col">Rejected</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(aptmnt, index) in doctorAppointments"
                :key="aptmnt.id"
              >
                <th scope="row">{{ index + 1 }}</th>
                <td>
                  Dr. {{ aptmnt.doctor.first_name }}
                  {{ aptmnt.doctor.last_name }}
                </td>
                <td>{{ aptmnt.date }}</td>
                <td>{{ aptmnt.start }}</td>
                <td>{{ aptmnt.doctor.phone }}</td>
                <td>{{ aptmnt.doctor.medical_specialty.name }}</td>
                <td>{{ aptmnt.is_approved ? "Yes" : "No" }}</td>
                <td>{{ aptmnt.is_finished ? "Yes" : "No" }}</td>
                <td>{{ aptmnt.is_rejected ? "Yes" : "No" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-12" style="padding: 20px" v-show="activeTab == 1">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Hcp</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Hcp Phone</th>
                <th scope="col">Hcp Specialty</th>
                <th scope="col">Approved</th>
                <th scope="col">Finished</th>
                <th scope="col">Rejected</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(aptmnt, index) in hcpAppointments" :key="aptmnt.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ aptmnt.hcp.first_name }} {{ aptmnt.hcp.last_name }}</td>
                <td>{{ aptmnt.date }}</td>
                <td>{{ aptmnt.start }}</td>
                <td>{{ aptmnt.hcp.phone }}</td>
                <td>{{ aptmnt.hcp.specialty.name }}</td>
                <td>{{ aptmnt.is_approved ? "Yes" : "No" }}</td>
                <td>{{ aptmnt.is_finished ? "Yes" : "No" }}</td>
                <td>{{ aptmnt.is_rejected ? "Yes" : "No" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-12" v-show="activeTab == 2">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Notification</th>
                <th scope="col">Title</th>
                <th scope="col">Context</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(wHour, index) in workingHour" :key="wHour.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ wHour.day_time }}</td>
                <td>{{ wHour.start }}</td>
              </tr> -->
            </tbody>
          </table>
        </div>
        <div class="col-md-12" style="padding: 10px" v-show="activeTab == 3">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Balance before</th>
                <th scope="col">Balance after</th>
              </tr>
            </thead>
            <tbody>
              <!-- <tr v-for="(wHour, index) in workingHour" :key="wHour.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ wHour.day_time }}</td>
                <td>{{ wHour.start }}</td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/patientProfileScripts.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/patients.css";
</style>