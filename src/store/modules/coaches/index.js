import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    const initState = JSON.parse(localStorage.getItem("data"));
    // const initState = localStorage.getItem("data");

    return {
      lastFetch: null,
      coaches: initState,
    };
  },
  mutations,
  actions,
  getters,
};
