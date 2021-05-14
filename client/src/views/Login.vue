<template>
  <div class="container width card p-3 mt-5">
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input v-model="email" type="email" :class="invalid" class="form-control" id="email" />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input

          v-model="password"
          type="password"
          :class="invalid"
          class="form-control"
          id="password"
        />
      </div>

      <button type="submit" class="btn btn-secondary btn-block mb-3">
        Login
      </button>
      <div>
        <p v-if="loginErr" class="text-danger text-center">
          {{ loginErr.message }}
        </p>
      </div>
      <p class="text-center">
        Not a member? <router-link class="text-secondary" to="/register">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters(["loginErr"]),
    invalid() {
      if(this.loginErr) {
        return 'is-invalid'
      } else {
        return ''
      }
    }
  },
  methods: {
    ...mapActions(["login"]),
    handleSubmit() {
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style>
.width {
  max-width: 450px;
}
</style>
