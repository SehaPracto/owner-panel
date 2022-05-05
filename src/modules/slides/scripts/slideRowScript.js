export default {
  props: ["id", "imgSrc", "title", "isActive", "views", "clicks"],
  methods: {
    goToSlide(id) {
      this.$router.push(`/slide/${id}`);
    },
  },
};
