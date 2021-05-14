<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-center align-items-center">
      <div class="card p-3">
        <p v-for="item in cart" :key="item._id">
          {{ item.product.name }} X {{ item.quantity }}
        </p>
        <hr />
        <p>Total to pay: {{ cartTotalPrice }} kr</p>
        <small class="text-muted">Includes Tax</small>

        <button @click="handleOrder" class="btn btn-secondary">
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "../router";
export default {
  name: "Payment",
  computed: {
    ...mapGetters(["cartTotalPrice", "cart", "isLoggedIn", "activeUser"]),
  },
  methods: {
    ...mapActions(["addOrderToUser", "clearCart"]),
    handleOrder() {
      const orderNumber = Math.floor(Math.random() * 10000000);
      if (this.isLoggedIn) {
        this.addOrderToUser({
          products: this.cart,
          totalPrice: this.cartTotalPrice,
          orderNumber: orderNumber,
        });
        router.push(`/products`);
      } else {
        this.clearCart();
        router.push(`/products`);
      }
    },
  },
};
</script>

<style></style>
