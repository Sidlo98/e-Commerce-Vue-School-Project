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
              <span class="badge rounded-pill badge-notification bg-danger"
                >1</span
              >
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end shopping-cart"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <ShoppingCart />
            </ul>
          </li>

          <li class="nav-item dropdown">
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
              USER SETTINGS
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ShoppingCart from "../shoppingCart/ShoppingCart";

export default {
  name: "Navbar",
  components: {
    ShoppingCart,
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
</style>
