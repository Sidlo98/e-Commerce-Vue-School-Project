export default {
  state: {
    cart: [],
  },
  getters: {
    cart: (state) => state.cart,
    cartTotalItems: (state) => {
      let items = 0;
      if (state.cart.length !== 0) {
        state.cart.forEach((item) => {
          items += item.quantity;
        });
      }
      return items;
    },
    cartTotalPrice: (state) => {
      let price = 0;
      if (state.cart.length !== 0) {
        state.cart.forEach((item) => {
          price += item.product.price * item.quantity;
        });
      }
      return price;
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity }) => {
      let exists = state.cart.find((item) => item.product._id === product._id);
      if (exists) {
        exists.quantity += quantity;
        return;
      }
      state.cart.push({ product, quantity });
    },
    REMOVE_FROM_CART: (state, product) => {
      let newCart = state.cart.filter(
        (item) => item.product._id !== product._id
      );
      state.cart = newCart;
    },
    REMOVE_ONE_FROM_CART: (state, product) => {
      let exists = state.cart.find((item) => item.product._id === product._id);
      exists.quantity -= 1;
      return;
    },
  },
  actions: {
    addProductToCart: ({ commit }, { product, quantity }) => {
      let item = {
        product,
        quantity: Number(quantity),
      };
      commit("ADD_TO_CART", item);
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    removeOneProductFromCart: ({ commit, dispatch, state }, product) => {
      let exists = state.cart.find((item) => item.product._id === product._id);
      if (exists.quantity > 1) {
        commit("REMOVE_ONE_FROM_CART", product);
      } else {
        dispatch("removeProductFromCart", product);
      }
    },
  },
};
