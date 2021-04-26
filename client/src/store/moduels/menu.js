import axios from "axios";

export default {
  state: {
    menuItems: [],
  },
  getters: {
    menuItems: (state) => state.menuItems,
  },
  mutations: {
    SET_MENUITEMS: (state, menuItems) => {
      state.menuItems = menuItems;
    },
  },
  actions: {
    getMenuItems: async ({ commit }) => {
      const res = await axios.get("http://localhost:9999/api/products");
      commit("SET_MENUITEMS", res.data);
    },
  },
};
