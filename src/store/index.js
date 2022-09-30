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
    token: ''
  },
  mutations: {
    setCurrentUser (state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,
      };
      state.isAuthenticated = true;
      state.token = localStorage.getItem('token')
    },
    revokeAuthentication (state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      // 登出時一併將 state 內的 token 移除
      state.token = "";
      localStorage.removeItem("token");
    }
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
        return true;
      } catch (error) {
        console.log("error", error);
        console.error("can not fetch user information");
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit("revokeAuthentication");
        return false;
      }
    },
  },
});
