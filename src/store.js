import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    addr: "127.0.0.1",
    // port: 11111,
    port: 33333,
    // enable_ssl: false,
    // key: null,
    enable_ssl: false,
    key: null,
  },
});
