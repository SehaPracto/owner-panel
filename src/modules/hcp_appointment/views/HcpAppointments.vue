    <template>
  <div class="hcp-appointments">
    <div class="tabs">
      <button
        class="tab"
        :class="tab == 'pending' ? 'active-tab' : ''"
        @click="togglePendingTab"
      >
        Pending
      </button>
      <button
        class="tab"
        :class="tab == 'approved' ? 'active-tab' : ''"
        @click="toggleApprovedTab"
      >
        Approved
      </button>
    </div>
    <Loader v-if="isLoading" />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Type</th>
          <th scope="col">HCP Name</th>
          <th scope="col">HCP's phone</th>
          <th scope="col">Patient Name</th>
          <th scope="col">Patient's phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(appointment, index) in appointments" :key="appointment.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ appointment.date }}</td>
          <td>{{ appointment.start }}</td>
          <td>{{ appointment.type }}</td>
          <td>
            {{ appointment.hcp.first_name }}
            {{ appointment.hcp.last_name }}
          </td>
          <td>{{ appointment.hcp.phone }}</td>
          <td>
            {{ appointment.patient.first_name }}
            {{ appointment.patient.last_name }}
          </td>
          <td>{{ appointment.patient.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script src="../scripts/hcpAppointmentsScript">
</script>

<style>
@import "../styles/hcpAppointments.css";
</style>

