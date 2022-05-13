import adminProfileServices from "../services/adminProfileServices";
import Loader from "@/components/Loader.vue";
import InnerPagesTopBar from "@/components/InnerPagesTopBar.vue";
import AdminProfilePersonalInfoTab from "../components/AdminProfilePersonalInfoTab.vue";
import AdminProfileInboxTab from "../components/AdminProfileInboxTab.vue";
export default {
  components: {
    Loader,
    InnerPagesTopBar,
    AdminProfilePersonalInfoTab,
    AdminProfileInboxTab,
  },
  data() {
    return {
      currentTab: "personal-info",
    };
  },
  methods: {
    chooseTab(tabName) {
      this.currentTab = tabName;
    },
  },
  async mounted() {
    this.chooseTab("personal-info");
  },
};
