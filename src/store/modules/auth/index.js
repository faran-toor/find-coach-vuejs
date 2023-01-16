import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  state() {
    return {
      userId: localStorage.getItem("token"),
      token: localStorage.getItem("userId"),
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};
