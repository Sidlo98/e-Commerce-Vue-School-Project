import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
import users from './modules/users'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart,
    users
  }
})
