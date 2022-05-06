<template>
  <div class="container profile">
    <Loader v-if="isLoading" />
    <div class="row" v-else>
      <div class="col-md-12">
        <img class="doctor-profile-img" :src="doctor.profile_img" alt="" />
      </div>
      <div class="col-md-12">
        <p>
          <i class="fas fa-user"></i> Dr.{{ doctor.first_name }}
          {{ doctor.last_name }}
        </p>
      </div>
      <div class="col-md-12">
        <p>{{ doctor.gender }}</p>
      </div>
      <div class="col-md-12">
        <p><i class="fas fa-syringe"></i> {{ medicalSpecialty.name }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-map-marker"></i> {{ doctor.adress }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-phone"></i> {{ doctor.phone }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-money-bill"></i> {{ doctor.examination_fee }} TL</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-stopwatch"></i> {{ doctor.waiting_time }} Mins.</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-envelope"></i> {{ doctor.email }}</p>
      </div>
      <div class="col-md-6">
        <p><i class="fas fa-star"></i> {{ doctor.rating }} / 5</p>
      </div>
      <div class="col-md-6">
        <p>
          {{
            doctor.email_verified_at ? "Email Verified" : "Email not verified"
          }}
        </p>
      </div>
      <div class="row">
        <div class="col-md-3">
          <button
            :class="
              activeTab == 0
                ? 'doctor-profile-active-tab'
                : 'doctor-profile-tab'
            "
            @click="setActiveTab(0)"
          >
            Appointments
          </button>
        </div>
        <div class="col-md-3">
          <button
            :class="
              activeTab == 1
                ? 'doctor-profile-active-tab'
                : 'doctor-profile-tab'
            "
            @click="setActiveTab(1)"
          >
            Work Locations
          </button>
        </div>
        <div class="col-md-3">
          <button
            :class="
              activeTab == 2
                ? 'doctor-profile-active-tab'
                : 'doctor-profile-tab'
            "
            @click="setActiveTab(2)"
          >
            Medical Degrees
          </button>
        </div>
        <div class="col-md-3">
          <button
            :class="
              activeTab == 3
                ? 'doctor-profile-active-tab'
                : 'doctor-profile-tab'
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
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Adress</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(WLocation, index) in doctorWorkLocation"
              :key="WLocation.id"
            >
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ WLocation.name }}</td>
              <td>{{ WLocation.adress }}</td>
              <td>{{ WLocation.phone }}</td>
            </tr>
          </tbody>
        </table>
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

<script src="../scripts/doctorProfileScript.js">
</script>

<style>
@import "../styles/doctors.css";
</style>