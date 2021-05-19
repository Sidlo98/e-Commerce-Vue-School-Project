<template>
  <div class="container width card p-3 mt-5">
    <form @submit.prevent="handleSubmit" novalidate>
      <div class="row">
        <div class="mb-3 col-12 col-sm-6">
          <label for="firstName" class="form-label">First Name</label>
          <input
            v-model="user.firstName"
            type="text"
            :class="fnameClass"
            class="form-control"
            id="firstName"
          />
          <div class="invalid-feedback">
            Enter a name with atleast 2 chars
          </div>
        </div>

        <div class="mb-3 col-12 col-sm-6">
          <label for="lastName" class="form-label">Last Name</label>
          <input
            v-model="user.lastName"
            type="text"
            :class="lnameClass"
            class="form-control"
            id="lastName"
          />
          <div class="invalid-feedback">
            Enter a name with atleast 2 chars
          </div>
        </div>

        <div class="mb-3 col-12">
          <label for="email" class="form-label">Email address</label>
          <input
            v-model="user.email"
            type="email"
            :class="emailClass"
            class="form-control"
            id="email"
          />
          <div class="invalid-feedback">
            You must enter a valid email address
          </div>
        </div>

        <div class="mb-3 col-12">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="user.password"
            type="password"
            :class="passwordClass"
            class="form-control"
            id="password"
          />
          <div class="invalid-feedback">
            You must enter a password with atleast 6 characters
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-secondary btn-block mb-3">
        Register
      </button>

      <div>
        <p v-if="regErr" class="text-danger text-center">
          {{ regErr.message }}
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from "../validation/regValidation";

export default {
  name: "Register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      fnameClass: "",
      lnameClass: "",
      passwordClass: "",
      emailClass: "",
    };
  },
  computed: {
    ...mapGetters(["regErr"]),
  },
  methods: {
    ...mapActions(["register", "clearRegErr"]),
    handleSubmit() {
      if (!nameValidation(this.user.firstName)) {
        this.fnameClass = "is-invalid";
      } else {
        this.fnameClass = "";
      }
      if (!nameValidation(this.user.lastName)) {
        this.lnameClass = "is-invalid";
      } else {
        this.lnameClass = "";
      }
      if (!passwordValidation(this.user.password)) {
        this.passwordClass = "is-invalid";
      } else {
        this.passwordClass = "";
      }
      if (!emailValidation(this.user.email)) {
        this.emailClass = "is-invalid";
      } else {
        this.emailClass = "";
      }

      if (
        nameValidation(this.user.firstName) &&
        nameValidation(this.user.lastName) &&
        passwordValidation(this.user.password) &&
        emailValidation(this.user.email)
      ) {
        this.register(this.user);
      }
    },
  },
  destroyed() {
    this.clearRegErr();
  },
};
</script>

<style></style>
