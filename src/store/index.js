import Vue from "vue";
import Vuex from "vuex";
import document from "./modules/document";
import demo from "./modules/demo";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {},
  modules: {
    document,
    demo,
  },
  strict: true,
});
