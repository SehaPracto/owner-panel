import countryServices from "../services/countryServices";
export default {
  components: {},
  data() {
    return {
      name: "",
      nameAr: "",
      file: null,
      status: "",
      nameError: "",
      nameArError: "",
      flagIconError: "",
    };
  },
  methods: {
    handleFile(event) {
      console.log(event.target.files[0]);
      this.file = event.target.files[0];
    },
    closeModal() {
      this.$emit("closeModal");
    },
    async addCountry() {
      this.nameError = "";
      this.nameArError = "";
      this.flagIconError = "";
      const response = await countryServices.addCountry(
        this.name,
        this.nameAr,
        this.file
      );
      if (response["message"] == "success") {
        this.status = "Country Added Successfuly";
      } else {
        this.nameError = response["error"]["name"][0] ?? "";
        this.nameArError = response["error"]["name_ar"][0] ?? "";
        this.flagIconError = response["error"]["flag_icon"][0] ?? "";
      }
      await countryServices.getAllCountries();
    },
  },
};
