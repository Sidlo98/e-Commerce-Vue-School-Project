import axios from "axios";

const BASE_URL = process.env.BACKEND

export default {
  state: {
    products: [],
    comp: "Grid",
    searchVal: "",
    product: null,
  },
  getters: {
    products: (state) => state.products,
    latestProducts: (state) => {
      return state.products.slice(
        state.products.length - 3,
        state.products.length
      );
    },
    product: (state) => state.product,
    comp: (state) => state.comp,
    filterdProducts: (state) => {
      return state.products.filter((product) =>
        product.name.toLowerCase().match(state.searchVal.toLowerCase())
      );
    },
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products;
    },
    SET_COMP: (state, val) => {
      state.comp = val;
    },
    SET_SEARCH_VAL: (state, val) => {
      state.searchVal = val;
    },
    CLEAN_SEARCH_VAL: (state) => {
      state.searchVal = "";
    },
    SET_ONE_PRODUCT: (state, product) => {
      state.product = product;
    },
    CLEAN_ONE_PRODUCT: (state) => {
      state.product = null;
    },
  },
  actions: {
    getProducts: async ({ commit }) => {
      const res = await axios.get(`${BASE_URL}/api/products`);
      commit("SET_PRODUCTS", res.data);
    },
    setComp: ({ commit }, val) => {
      commit("SET_COMP", val);
    },
    setSearchVal: ({ commit }, val) => {
      commit("SET_SEARCH_VAL", val);
    },
    cleanSearchVal: ({ commit }) => {
      commit("CLEAN_SEARCH_VAL");
    },
    getOneProduct: async ({ commit }, id) => {
      const res = await axios.get(`${BASE_URL}/api/products/` + id);
      commit("SET_ONE_PRODUCT", res.data);
    },
    cleanOneProduct: ({ commit }) => {
      commit("CLEAN_ONE_PRODUCT");
    },
  },
};
