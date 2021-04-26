<template>
  <div
    class="wrapper text-center d-flex align-items-center justify-content-center flex-column"
  >
    <h2 class="mb-5 h2">We Know Food</h2>
    <div>
      <router-link to="/menu" class="btn btn-call ">Order Now!</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.wrapper {
  width: 100%;
  height: 700px;
  background: linear-gradient(272.4deg, #fff 5%, rgba(245, 245, 245, 0) 100%),
    linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 95%),
    url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  background-position: center;
  background-size: cover;
}
.btn-call {
  background-color: #89c947;
  font-size: 2rem;
  color: #000;
}
.h2 {
  color: #000;
  font-size: 3rem
}
</style>
