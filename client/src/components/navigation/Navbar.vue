<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <i class="fas fa-shoe-prints me-2"></i> ShoeStore
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              exact
              class="nav-link"
              :class="{}"
              aria-current="page"
              to="/"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/products"
              >Products</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/about"
              >About Us</router-link
            >
          </li>
        </ul>

        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-shopping-cart"></i>
              <span
                v-if="cartTotalItems >= 1"
                class="badge rounded-pill badge-notification bg-danger"
                >{{ cartTotalItems }}</span
              >
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end shopping-cart"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <ShoppingCart v-if="cartTotalItems >= 1" />
            </ul>
          </li>

          <li v-if="isLoggedIn" class="nav-item dropdown">
            <a
              class="nav-link"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-user"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li class="text-center mt-2">
                <router-link class="profile-links text-secondary" to="/profile"
                  >My profile</router-link
                >
              </li>
              <li class="text-center mt-2 mb-2">
                <p @click="logout" class="profile-links text-secondary" to="/">
                  Log out
                </p>
              </li>
            </ul>
          </li>

          <li v-else class="nav-item dropdown">
            <router-link to="/login" class="nav-link">
              <i class="far fa-user"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>

import ShoppingCart from "../shoppingcart/CartMenu";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Navbar",
  components: {
    ShoppingCart,
  },
  computed: {
    ...mapGetters(["cartTotalItems", "isLoggedIn"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style>
.collapse .router-link-exact-active {
  text-decoration: underline;
}
.shopping-cart {
  min-width: 450px;
}
@media screen and (max-width: 768px) {
  .shopping-cart {
    min-width: initial;
    width: 90% !important;
  }
}
.profile-links {
  text-decoration: none !important;
  font-size: 1.1rem;
  cursor: pointer;
}
</style>
