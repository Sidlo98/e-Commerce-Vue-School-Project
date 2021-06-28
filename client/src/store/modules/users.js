import axios from "axios";
import router from "@/router";

const BASE_URL = process.env.BACKEND

export default {
  state: {
    isLoggedIn: false,
    activeUser: {},
    regErr: "",
    loginErr: "",
    orderErr: "",
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    activeUser: (state) => state.activeUser,
    regErr: (state) => state.regErr,
    loginErr: (state) => state.loginErr,
    orderErr: (state) => state.orderErr,
  },
  mutations: {
    SET_REG_ERR: (state, data) => {
      state.regErr = data;
    },
    CLEAR_REG_ERR: (state) => {
      state.regErr = "";
    },
    SET_ORDER_ERR: (state, data) => {
      state.orderErr = data;
    },
    CLEAR_ORDER_ERR: (state) => {
      state.orderErr = "";
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
    UPDATE_USER: (state, data) => {
      state.activeUser = data;
    },
    LOGOUT_USER: (state) => {
      state.activeUser = {};
      state.isLoggedIn = false;
    },
  },
  actions: {
    register: ({ dispatch, commit }, _user) => {
      axios
        .post(`${BASE_URL}/users/register`, _user)
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
        .post(`${BASE_URL}/users/login`, {
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
    updateUser: ({ commit, state }) => {
      axios
        .get(`${BASE_URL}/users/${state.activeUser.email}`, {
          headers: { Authorization: "Bearer " + state.activeUser.token },
        })
        .then((res) => {
          commit("UPDATE_USER", {
            ...res.data.user,
            token: state.activeUser.token,
          });
        });
    },
    addOrderToUser: ({ dispatch, commit, state }, order) => {
      axios
        .patch(
          `${BASE_URL}/users/addorder/${state.activeUser.email}`,
          order,
          {
            headers: { Authorization: "Bearer " + state.activeUser.token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            dispatch("clearCart");
            commit("CLEAR_ORDER_ERR");
            router.push("/orderConfirmation");
          }
        })
        .catch((err) => {
          commit("SET_ORDER_ERR", err);
        });
    },
    logout: ({ commit }) => {
      router.push("/");
      commit("LOGOUT_USER");
    },
    clearRegErr: ({ commit }) => {
      commit("CLEAR_REG_ERR");
    },
    clearOrderErr: ({ commit }) => {
      commit("CLEAR_ORDER_ERR");
    },
  },
};
