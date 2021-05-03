import axios from 'axios'
export default {
  state: {
    products: [],
    comp: 'Grid'
  },
  getters: {
    products: state => state.products,
    comp: state => state.comp
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_COMP: (state, val) => {
      state.comp = val
    }
  },
  actions: {
    getProducts: async ({ commit }) => {
      const res = await axios.get('http://localhost:9999/api/products');
      commit('SET_PRODUCTS', res.data)
    },
    setComp : ({ commit }, val) => {
      commit('SET_COMP', val)
    }
  },
}