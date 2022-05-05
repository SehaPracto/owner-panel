import Loader from "@/components/Loader.vue";
import slidesServices from "../services/slidesServices";
import SlideRow from "../components/SlideRow.vue";

export default {
  components: { Loader, SlideRow },

  data() {
    return {
      isLoading: false,
      slides: [],
    };
  },

  methods: {
    toggleIsLoading() {
      this.isLoading = !this.isLoading;
    },

    async getAllSlides() {
      this.toggleIsLoading();
      const response = await slidesServices.getAllSlides();
      this.slides = response["slides"];
      console.log(this.slides);
      this.toggleIsLoading();
    },
  },

  async mounted() {
    await this.getAllSlides();
  },
};
