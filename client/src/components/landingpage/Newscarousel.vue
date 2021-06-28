<template>
  <div>
    <div
      id="carouselExampleCrossfade"
      class="carousel slide carousel-fade"
      data-mdb-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner rounded shadow">
        <div
          v-for="(product, index) in products"
          :key="product._id"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <router-link
            :to="{ name: 'ProductDetails', params: { id: product._id } }"
          >
            <img :src="product.image" class="d-block w-100" alt="..." />
          </router-link>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselExampleCrossfade"
        data-mdb-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-mdb-target="#carouselExampleCrossfade"
        data-mdb-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Newscarousel",
  props: ["products"],
};
</script>

<style></style>
