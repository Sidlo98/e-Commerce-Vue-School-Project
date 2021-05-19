<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h2 class="card-title">Thanks for your order</h2>
        <p class="card-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          modi expedita dolorem cupiditate at iusto, sequi molestiae soluta quo
          sunt officiis magni, commodi eligendi distinctio optio. Molestiae
          facere dolore dolor.
        </p>
        <router-link to="/products">
          <button class="btn btn-secondary">Look at more shoes ?</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderConfirmation",
};
</script>

<style></style>
