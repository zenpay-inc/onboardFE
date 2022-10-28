import Vue from "vue";
import VueApexCharts from "vue-apexcharts";
import * as VueGoogleMaps from "gmap-vue";
import "@mdi/font/css/materialdesignicons.css";
import "handsontable/dist/handsontable.full.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import store from "./store";

Vue.use(VueApexCharts);
Vue.component("apexchart", VueApexCharts);
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_KEY,
    libraries: "places",
  },
  installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
