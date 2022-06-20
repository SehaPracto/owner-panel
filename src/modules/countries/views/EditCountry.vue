<template>
  <loader v-if="isLoading" />
  <div class="container-fluid" v-else>
    <InnerPagesTopBar />
    <div class="tab-bar">
      <button
        :class="currentTab == 'add-city' ? 'active-tab' : 'tab'"
        @click="switchTabs('add-city')"
      >
        Add city
      </button>
      <button
        :class="currentTab == 'add-province' ? 'active-tab' : 'tab'"
        @click="switchTabs('add-province')"
      >
        Add province
      </button>
    </div>

    <div v-if="currentTab == 'add-city'">
      <div class="row justify-content-center">
        <input
          class="input-text col-md-12"
          type="text"
          placeholder="City name"
          v-model="cityName"
        />
        <input
          class="input-text col-md-12"
          type="text"
          placeholder="City name in arabic"
          v-model="cityNameAr"
        />
      </div>
      <p class="text-center">
        <loader v-if="isAddCity" />
        <button class="prim-btn col-md-12" @click="addCityToCountry" v-else>
          Add City
        </button>
      </p>
    </div>
    <div v-if="currentTab == 'add-province'">
      <div class="row justify-content-center">
        <select
          class="form-select"
          aria-label="Default select example"
          @change="setCity"
        >
          <option selected>Choose city</option>
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }} - {{ city.name_ar }}
          </option>
        </select>
        <input
          class="input-text"
          type="text"
          placeholder="Province name"
          v-model="provinceName"
        />
        <input
          class="input-text"
          type="text"
          placeholder="Province name in arabic"
          v-model="provinceNameAr"
        />
      </div>
      <p class="text-center">
        <loader v-if="isAddProvince" />
        <button class="prim-btn col-md-12" @click="addProvinceToCity" v-else>
          Add Province
        </button>
      </p>
    </div>
  </div>
</template>

<script src="../scripts/editCountryScript.js">
</script>

<style>
@import "@/assets/styles/global.css";
@import "../styles/countries-view.css";
</style>