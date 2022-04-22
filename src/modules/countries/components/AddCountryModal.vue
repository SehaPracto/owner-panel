<template>
  <div class="modal">
    <div class="title-bar">
      <h2>Add Country</h2>
    </div>
    <div class="add-country-modal">
      <form action="" @submit.prevent="addCountry">
        <input
          name="name"
          class="input-text"
          type="text"
          placeholder="Name"
          required
        />
        <input
          name="name_ar"
          class="input-text"
          type="text"
          placeholder="Name Arabic"
          required
        />
        <!-- <input class="file-upload" type="file" @change="handleFile" /> -->
        <a-upload-dragger
          v-model:fileList="fileList"
          name="file"
          :multiple="true"
          class="file-upload"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          @change="handleFile"
          @drop="handleFile"
        >
          <p class="ant-upload-text">
            Click or drag Image to this area to upload
          </p>
        </a-upload-dragger>
        <input class="add-country-btn" type="submit" value="Add Country" />
      </form>
    </div>
  </div>
</template>

<script>
import countryServices from "../services/countryServices";
export default {
  components: {},
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleFile(event) {
      console.log(event.file);
    },
    addCountry() {
      console.log("add");
    },
  },
};
</script>

<style>
@import "@/assets/styles/global.css";
.add-country-modal form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding: 0px 25px;
}
.modal {
  height: 400px;
  width: 400px;
  border: 1px solid #d3d3d3;
  border-radius: 15px;
}
.modal h2 {
  color: white;
  text-align: center;
  margin: 10px auto;
  font-size: 22px;
}
.input-text {
  margin-top: 20px;
}
.title-bar {
  width: 100%;
  background: #3f4394;
  padding: 0;
}
.add-country-btn {
  color: white;
  background: #3f4394;
  width: 250px;
  height: 50px;
  margin: 20px auto;
  border: none;
  border-radius: 25px;
}
.file-upload {
  margin: 10px auto;
}
</style>
