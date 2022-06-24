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
      file: null,
    };
  },
  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
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
      this.toggleIsLoading();
    },

    async updateSlide() {
      const response = await slidesServices.updateSlide(
        this.slide.id,
        this.slide.name,
        this.slide.duration,
        this.slide.description,
        this.slide.contact,
        this.slide.link,
        this.file
      );
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
  },
  async mounted() {
    await this.getSlide();
  },
};
