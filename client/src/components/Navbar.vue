<template>
  <!-- Navbar-->
  <nav class="navbar navbar-expand-lg navbar-light px-4">
    <div class="container-fluid justify-content-between">
      <div class="d-flex">
        <router-link
          class="text-light navbar-brand me-2 mb-1 d-flex align-items-center"
          to="/"
        >
          <img
            src="../assets/images/navicon.svg"
            height="70"
            alt=""
            loading="lazy"
          />
          <h3 class="brandlink">RestaurantDelivery</h3>
        </router-link>
      </div>

      <router-link to="/cart">
        <div>
          <img
            src="../assets/images/shoppingcart.svg"
            height="40"
            alt=""
            loading="lazy"
          />
          <div class="counter">99</div>
        </div>
      </router-link>
    </div>
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.brandlink {
  transform: translateY(19px);
}

.navbar {
  background-color: #046699;
}
.counter {
  color: #000;
  font-weight: bold;
  background: #ffffff;
  border:2px solid #000;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  text-align: center;
  position: absolute;
  top: 24px;
  right: 60px
}
</style>
