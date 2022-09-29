import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  getters: {},
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,
      };
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true;
    },
  },
  actions: {
    // 在 actions 中可以透過參數的方式取得 commit 的方法
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();
        const { id, name, email, image, isAdmin } = data
        commit("setCurrentUser", {
          id,
          name,
          email,
          image,
          isAdmin,
        });
      } catch (error) {
        console.log("error", error);
        console.error("can not fetch user information");
      }
    },
  },
  modules: {},
});
