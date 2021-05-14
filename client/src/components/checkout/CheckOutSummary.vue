<template>
  <div class="card p-3 mb-5">
    <h3 class="text-center border-secondary border-bottom">
      Preview your order
    </h3>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="item in cart" :key="item._id">
        <p class="text-start">{{ item.product.name }}</p>
        <div class="d-flex justify-content-between">
          <p class="text-muted">
            {{ item.quantity }} X {{ item.product.price }}
          </p>
          <strong>{{ item.product.price * item.quantity }} kr</strong>
        </div>
      </li>
    </ul>
    <hr />
    <div
      class="d-flex justify-content-between align-items-center flex-column flex-lg-row p-3"
    >
      <p>
        Total
        <strong>{{ cartTotalPrice }}</strong> kr
        <br />
        <small class="text-muted">Includes Tax</small>
      </p>

      <button
        class="btn btn-secondary"
        :data-mdb-toggle="modal"
        data-mdb-target="#exampleModal"
        @click="proccedToPayment()"
      >
        Proceed to payment
      </button>
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Have an acconunt ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              If you create an account
              <a
                @click="toRegister"
                class="text-secondary"
                data-mdb-dismiss="modal"
                >here</a
              >
              you will be able to score points of you purchases and list your
              previous orders here on the site.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-mdb-dismiss="modal"
              >
                Close
              </button>
              <button
                @click="proccedToPaymentWithNoAccount()"
                type="button"
                class="btn btn-secondary"
                data-mdb-dismiss="modal"
              >
                Proceed without an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import router from "../../router";

export default {
  name: "CheckOutSummary",
  computed: {
    ...mapGetters(["cart", "cartTotalPrice", "isLoggedIn"]),
    modal() {
      if (this.isLoggedIn) {
        return "none";
      } else {
        return "modal";
      }
    },
  },
  methods: {
    proccedToPaymentWithNoAccount() {
      router.push("/payment");
    },
    proccedToPayment() {
      if (this.isLoggedIn) {
        router.push("/payment");
      }
    },
    toRegister() {
      router.push("/register");
    },
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
</style>
