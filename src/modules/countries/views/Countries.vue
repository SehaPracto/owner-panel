<template>
  <loader v-if="isLoading" />
  <div class="countries" v-else>
    <button class="add-btn col-md-12" @click="toggleShowAddCountryModal">
      <i class="fas fa-plus"></i> Add Country
    </button>
    <div class="row">
      <div
        class="col-md-4 text-center"
        style="min-height: 100vh; border-right: 1px solid #d3d3d3"
      >
        <select
          class="form-select"
          aria-label="Default select example"
          @change="getCountryCities"
        >
          <option selected>Choose country</option>
          <option
            v-for="country in countries"
            :key="country.id"
            :value="country.id"
          >
            {{ country.name }} - {{ country.name_ar }}
          </option>
        </select>

        <!-- 
        <p>{{}}</p>
        <p>{{}}</p>
        <p>{{}}</p>
        <p>{{}}</p> -->
      </div>
      <div
        class="col-md-4 text-center"
        style="min-height: 100vh; border-right: 1px solid #d3d3d3"
        v-show="countryCities.length"
      >
        <select
          class="form-select"
          aria-label="Default select example"
          @change="getCityProvinces"
        >
          <option selected>Choose city</option>
          <option v-for="city in countryCities" :key="city.id" :value="city.id">
            {{ city.name }} - {{ city.name_ar }}
          </option>
        </select>
      </div>
      <div
        class="col-md-4 text-center"
        style="min-height: 100vh"
        v-show="cityProvinces.length"
      >
        <select class="form-select" aria-label="Default select example">
          <option selected>Choose province</option>
          <option
            v-for="province in cityProvinces"
            :key="province.id"
            :value="province.id"
          >
            {{ province.name }} - {{ province.name_ar }}
          </option>
        </select>
      </div>
    </div>
    <AddCountryModal
      @closeModal="toggleShowAddCountryModal"
      v-show="isShowModal"
    />
  </div>
</template>

<script src="../scripts/countryScript">
</script>

<style>
@import "../styles/countries-view.css";
</style>
