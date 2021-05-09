<template>
  <div class="container">
    <div class="text-center text-md-start mt-5" v-if="cart.length >= 1">
      <div class="row">
        <div class="col-md-8">
          <CheckOutCard
            v-for="item in cart"
            :key="item.product._id"
            :item="item"
          />
        </div>
        <div class="col-md-4 mt-4 mt-md-0">
          <CheckOutSummary />
        </div>
      </div>
    </div>

    <div v-else>
      <h1 class="mt-5 text-center">
        Your cart is empty you will be returning to the home page :)
      </h1>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";
import CheckOutCard from "../components/checkout/CheckOutCard";
import CheckOutSummary from "../components/checkout/CheckOutSummary";

export default {
  name: "CheckOut",
  components: {
    CheckOutSummary,
    CheckOutCard,
  },
  computed: {
    ...mapGetters(["cart"]),
  },
  methods: {
    ...mapActions([]),
    checkCartEmpty() {
      if (!this.cart.length >= 1) {
        setTimeout(() => {
          this.$router.push("/");
        }, 3000);
      }
    },
  },
  updated() {
    this.checkCartEmpty();
  },
  created() {
    this.checkCartEmpty();
  },
};
</script>

<style></style>
