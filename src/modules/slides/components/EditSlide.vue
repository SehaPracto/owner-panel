<template>
  <div class="slide-edit-modal">
    <Loader v-if="isLoading" />
    <div class="tabs" v-else>
      <div class="tab-row">
        <button
          :class="currentTab == 'general' ? 'tab-btn-active' : 'tab-btn'"
          @click="setCurrentTab('general')"
        >
          General Info
        </button>
        <button
          :class="currentTab == 'imgs' ? 'tab-btn-active' : 'tab-btn'"
          @click="setCurrentTab('imgs')"
        >
          Images
        </button>
        <button
          :class="currentTab == 'offers' ? 'tab-btn-active' : 'tab-btn'"
          @click="setCurrentTab('offers')"
        >
          Offers
        </button>
      </div>
      <div class="row" v-if="currentTab == 'general'">
        <div class="slide-edit-img-con">
          <img
            ref="display-img"
            class="slide-edit-img"
            :src="slide.img"
            :alt="slide.name"
          />
          <i class="fas fa-edit edit-icon" @click="openImagePicker"></i>
          <input
            ref="img-picker-ref"
            type="file"
            style="display: none"
            @change="pickImage"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Title</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Title"
            v-model="slide.name"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Client</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Client"
            v-model="slide.client_name"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Client Adress</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Client Adress"
            v-model="slide.client_adress"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Duration</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Duration"
            v-model="slide.duration"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Phone</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Phone"
            v-model="slide.contact"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Website</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Website"
            v-model="slide.link"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Whatsapp</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Whatsapp"
            v-model="slide.whatsapp_link"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Facebook</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Facebook"
            v-model="slide.fb_link"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Instagram</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Instagram"
            v-model="slide.ig_link"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Twitter</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Website"
            v-model="slide.twitter_link"
          />
        </div>
        <div class="row justify-content-center align-items-center">
          <p class="input-label col-md-1 text-center">Youtube</p>
          <input
            class="input-text col-md-11"
            type="text"
            placeholder="Youtube"
            v-model="slide.video_link"
          />
        </div>
        <QuillEditor
          style="height: 500px"
          theme="snow"
          v-model:content="slide.description"
          contentType="html"
        />
        <button class="update-btn" @click="updateSlide">Update</button>
      </div>

      <div class="row imgs-con" v-if="currentTab == 'imgs'">
        <div class="col-md-12 img">
          <input type="file" @change="pickSlideImage" />
          <button class="prim-btn" @click="uploadSlideImage">Add Image</button>
        </div>
        <div class="col-md-12 img">
          <div class="text-center" v-if="slideImgs.length === 0">
            No Images added
          </div>
          <div
            class="col-md-3"
            v-for="slideImg in slideImgs"
            :key="slideImg.id"
          >
            <img class="slide-img" :src="slideImg.img_path" alt="img" />
          </div>
        </div>
      </div>

      <div class="row offers-con" v-if="currentTab == 'offers'">
        <div
          class="col-md-12 img"
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          "
        >
          <input
            class="input-text"
            type="text"
            placeholder="Title"
            style="margin-bottom: 20px"
            v-model="name"
          />
          <input
            class="input-text"
            type="text"
            placeholder="Price"
            style="margin-bottom: 20px"
            v-model="price"
          />
          <input
            type="file"
            style="margin-bottom: 20px"
            @change="pickServiceImage"
          />
          <button class="prim-btn" @click="uploadSlideOffer">Add Offer</button>
        </div>
        <div class="col-md-12 img">
          <div class="text-center" v-if="slideServices.length === 0">
            No Offers added
          </div>
          <div
            class="col-md-3"
            v-for="slideService in slideServices"
            :key="slideService.id"
          >
            <img class="slide-img" :src="slideService.img_path" alt="img" />
            <p class="text-center">{{ slideService.name }}</p>
            <p class="text-center">{{ slideService.price }} TL</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="../scripts/editSlideScript">
</script>

<style>
@import "../styles/slides.css";
@import "@/assets/styles/global.css";
.input-text {
  margin: 10px auto;
}
.input-label {
  font-weight: bold;
}
.tab-row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.tab-btn {
  color: black;
  font-size: 18px;
  margin-bottom: 20px;
}
.tab-btn-active {
  font-size: 18px;
  border: none;
  background: #3f4394;
  padding: 5px;
  color: #fff;
  border-radius: 15px;
  margin-bottom: 20px;
}
.imgs-con {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
}
.offers-con {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  margin-top: 25px;
}
.slide-img {
  height: 75px;
  width: 75px;
  margin: auto auto;
}
</style>