import slidesServices from "../services/slidesServices";
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader,
  },

  data() {
    return {
      id: 0,
      isLoading: false,
      slide: [],
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
      console.log(response);
      this.toggleIsLoading();
    },
  },
  async mounted() {
    await this.getSlide();
  },
};
