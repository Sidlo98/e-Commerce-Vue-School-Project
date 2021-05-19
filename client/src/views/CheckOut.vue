<template>
  <div class="container">
    <div class="text-center text-md-start mt-5">
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
  </div>
</template>

<script>
import router from "../router";
import { mapGetters } from "vuex";
import CheckOutCard from "../components/checkout/CheckOutCard";
import CheckOutSummary from "../components/checkout/CheckOutSummary";

export default {
  name: "CheckOut",
  components: {
    CheckOutSummary,
    CheckOutCard,
  },
  data() {
    return {
      updateData: this.cartTotalItems,
    };
  },
  computed: {
    ...mapGetters(["cartTotalItems", "cart"]),
  },
  methods: {
    checkEmpty() {
      console.log("hej");
      if (this.cartTotalItems === 0) {
        router.push("/products");
      }
    },
  },
  beforeUpdate() {
    this.checkEmpty();
  },
};
</script>

<style></style>
