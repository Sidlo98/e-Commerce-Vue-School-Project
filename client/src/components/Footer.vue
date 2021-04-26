<template>
 <section class="">
  <!-- Footer -->
  <footer class="text-center text-white">
    <!-- Grid container -->
    <div class="container p-4 pb-0">
      <!-- Section: CTA -->
      <section class="">
        <p class="d-flex justify-content-center align-items-center">
          <span class="me-3">Order Now !</span>
          <router-link to="/menu" type="button" class="btn btn-outline-light btn-rounded">
            Menu
          </router-link>
        </p>
      </section>
      <!-- Section: CTA -->
    </div>
    <!-- Grid container -->

    <!-- Copyright -->
    <div class="text-center p-3 copy">
      © 2020 Copyright:
      <a class="text-white" href="#">RestaurantDelivery</a>
    </div>
    <!-- Copyright -->
  </footer>
  <!-- Footer -->
</section>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
  background-color: #046699;
}
.copy {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>