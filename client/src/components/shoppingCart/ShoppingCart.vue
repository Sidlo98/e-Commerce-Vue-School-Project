<template>
  <div class="p-3 shadow">
    <div v-if="cart.length > 0">
      <CartItem v-for="item in cart" :key="item._id" :item="item" />
    </div>

    <div v-else>
      <h5 class="text-center">Your cart is empty</h5>
    </div>

    <div
      v-if="cart.length > 0"
      class="d-flex justify-content-between align-items-center flex-column flex-lg-row"
    >
      <p>
        Total
        <strong>{{ cartTotalPrice }}</strong> kr
        <br />
        <small class="text-muted">Includes Tax</small>
      </p>

      <button @click="proceedToCheckout" class="btn btn-secondary">
        Proceed to checkout
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "../../router";
import CartItem from "./CartItem";

export default {
  name: "ShoppingCart",
  components: {
    CartItem,
  },
  computed: {
    ...mapGetters(["cartTotalPrice", "cart"]),
  },
  methods: {
    ...mapActions([]),
    proceedToCheckout() {
      router.push("/checkout");
    },
  },
};
</script>

<style></style>
