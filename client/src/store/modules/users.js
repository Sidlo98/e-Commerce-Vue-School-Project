import axios from "axios";
import router from "@/router";

export default {
  state: {
    isLoggedIn: false,
    activeUser: {},
    regErr: "",
    loginErr: "",
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    activeUser: (state) => state.activeUser,
    regErr: (state) => state.regErr,
    loginErr: (state) => state.loginErr,
  },
  mutations: {
    SET_REG_ERR: (state, data) => {
      state.regErr = data;
    },
    CLEAR_REG_ERR: (state) => {
      state.regErr = "";
    },
    SET_LOGIN_ERR: (state, data) => {
      state.loginErr = data;
    },
    CLEAR_LOGIN_ERR: (state) => {
      state.loginErr = "";
    },
    LOGIN_USER: (state, data) => {
      state.activeUser = data;
      state.isLoggedIn = true;
    },
    LOGOUT_USER: (state) => {
      state.activeUser = {};
      state.isLoggedIn = false;
    },
  },
  actions: {
    register: ({ dispatch, commit }, _user) => {
      axios
        .post("http://localhost:9999/users/register", _user)
        .then((res) => {
          if (res.status === 201) {
            commit("CLEAR_REG_ERR");
            dispatch("login", { email: _user.email, password: _user.password });
          }
        })
        .catch((err) => {
          commit("SET_REG_ERR", err.response.data);
        });
    },
    login: ({ commit }, { email, password }) => {
      axios
        .post("http://localhost:9999/users/login", {
          email,
          password,
        })
        .then((res) => {
          commit("CLEAR_LOGIN_ERR");
          commit("LOGIN_USER", { ...res.data.user, token: res.data.token });
          router.push("/profile");
        })
        .catch((err) => {
          commit("SET_LOGIN_ERR", err.response.data);
        });
    },
    logout: ({ commit }) => {
      router.push("/");
      commit("LOGOUT_USER");
    },
    clearErr: ({ commit }) => {
      commit("CLEAR_REG_ERR");
    },
  },
};
