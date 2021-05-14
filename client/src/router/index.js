import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import ProductDetails from "../views/ProductDetails.vue";
import CheckOut from "../views/CheckOut.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Profile from "../views/Profile.vue";
import Payment from "../views/Payment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/checkout",
    name: "CheckOut",
    component: CheckOut,
    meta: { checkCart: true },
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
    meta: { checkCart: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { loggedIn: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { loggedIn: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: { authorize: true },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta;
  const { checkCart } = to.meta;
  const { loggedIn } = to.meta;

  const isLoggedIn = store.getters.isLoggedIn;
  const cartContains = store.getters.cart.length;

  if (loggedIn) {
    if (isLoggedIn) {
      next({ path: "/profile", query: { redirect: to.fullPath } });
    }
  } else {

    next();
  }

  if (checkCart) {
    if (cartContains === 0) {
      next({ path: "/products", query: { redirect: to.fullPath } });
    }
  } else {
    next();
  }

  if (authorize) {
    if (!isLoggedIn) {
      next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  }
  next();
});
export default router;
