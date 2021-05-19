<template>
  <div class="card p-3 mb-5">
    <h2>{{ user.firstName }} {{ user.lastName }}</h2>
    <hr />
    <p>Email: {{ user.email }}</p>
    <strong>Your saved ShoePoints: {{ Math.floor(user.points) }}</strong>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
  props: ["user"],
};
</script>

<style></style>
