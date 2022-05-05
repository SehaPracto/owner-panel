export default {
  data() {
    return {
      id: 0,
    };
  },
  methods: {
    async getSlideId() {
      this.id = await this.$route.params.id;
      console.log(this.id);
    },
  },
  async mounted() {
    await this.getSlideId();
  },
};
