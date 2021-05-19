<template>
  <div class="card mb-3 width">
    <img :src="image" class="card-img-top height" alt="..." />
    <div class="card-body">
      <h4 class="text-center card-title">{{ name }}</h4>
      <p class="card-text text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore laborum
        rerum qui in inventore? Quisquam omnis magnam ipsam cumque maiores!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmployeeCard",
  props: ["name", "image"],
};
</script>

<style scoped>
.width {
  width: 300px;
}
.height {
  height: 440px;
}
</style>
