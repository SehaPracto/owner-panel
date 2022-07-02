import slidesServices from "../services/slidesServices";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
    QuillEditor,
  },

  data() {
    return {
      id: 0,
      isLoading: false,
      slide: [],
      slideImgs: [],
      slideImg: null,
      slideServices: [],
      slideServiceImg: null,
      file: null,
      currentTab: "general",
      name: "",
      price: 0,
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },

    setCurrentTab(tabName) {
      this.currentTab = tabName;
    },

    async getSlideId() {
      this.id = await this.$route.params.id;
      console.log(this.id);
    },

    async getSlide() {
      this.toggleIsLoading();
      await this.getSlideId();
      const response = await slidesServices.getSlide(this.id);
      this.slide = response["slide"];
      this.slideImgs = response["slide"]["slide_image"];
      this.slideServices = response["slide"]["slide_service"];
      this.toggleIsLoading();
    },

    async updateSlide() {
      const response = await slidesServices.updateSlide(this.slide);
      console.log(response);
    },

    openImagePicker() {
      this.$refs["img-picker-ref"].click();
    },
    pickImage(event) {
      this.file = event.target.files[0];
      this.$refs["display-img"].src = URL.createObjectURL(this.file);
      console.log(this.$refs["display-img"].src);
    },
    pickSlideImage(event) {
      this.slideImg = event.target.files[0];
      console.log(this.slideImg);
    },
    async uploadSlideImage() {
      const response = await slidesServices.uploadSlideImageService(
        this.id,
        this.slideImg
      );
      await this.getSlide();
    },
    async uploadSlideOffer() {
      const response = await slidesServices.uploadSlideOfferService(
        this.id,
        this.name,
        this.slideServiceImg,
        this.price
      );
      await this.getSlide();
    },
    pickServiceImage(event) {
      this.slideServiceImg = event.target.files[0];
    },
  },
  async mounted() {
    await this.getSlide();
  },
};
