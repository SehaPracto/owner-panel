import slidesServices from "../services/slidesServices";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
  components: {
    QuillEditor,
  },
  data() {
    return {
      name: "",
      duration: "",
      description: "",
      contact: "",
      link: "",
      client_name: "",
      client_adress: "",
      img: null,
    };
  },
  methods: {
    openImagePicker() {
      this.$refs["img-picker-ref"].click();
    },
    pickImage(event) {
      this.img = event.target.files[0];
      this.$refs["display-img"].src = URL.createObjectURL(this.img);
      console.log(this.$refs["display-img"].src);
    },
    async createSlide() {
      const response = await slidesServices.createSlide(
        this.name,
        this.duration,
        this.description,
        this.contact,
        this.link,
        this.img,
        this.client_name,
        this.client_adress
      );
      console.log(response);
    },
  },
};
