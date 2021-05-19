<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-body text-center">
        <h1 class="card-title">About us at ShoeStore</h1>
        <p class="card-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint totam
          maxime dolorem nulla deleniti impedit voluptatum quis? Non, iure sint.
          Nemo, omnis facere! Distinctio eligendi rerum provident ea consectetur
          perspiciatis culpa, dicta vitae quam tempore iusto assumenda error at
          vel pariatur. Ipsum distinctio impedit adipisci ipsam voluptatibus
          similique quibusdam cum nesciunt tempora. Eveniet, qui sunt? Quo
          aspernatur provident eos enim, pariatur officiis. Rem, fugiat. Placeat
          quis commodi vitae nisi aspernatur, harum cum voluptates hic ad, quo
          error quaerat blanditiis at facere quos ut explicabo voluptas maiores
          dolor possimus, suscipit labore aliquam? Sit ipsam, quas aliquid in
          magni ratione corporis iure obcaecati hic nihil commodi consequatur.
          Pariatur quam quisquam perferendis dolor saepe, beatae sed molestias
          aliquam amet necessitatibus. Commodi, iure? Earum impedit quod vero
          tenetur asperiores officia voluptas eos aliquam id vitae, a et dolores
          veritatis modi laborum dolorem eum deserunt unde adipisci labore
          ducimus hic officiis. Dolores ad unde atque saepe minus tempore qui
          cumque, at recusandae blanditiis placeat fugit eos, repellat sed
        </p>
        <div class="d-flex justify-content-around flex-wrap">
          <EmployeeCard
            name="Maja"
            image="https://images.pexels.com/photos/2747553/pexels-photo-2747553.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <EmployeeCard
            name="Emelie"
            image="https://images.pexels.com/photos/6204323/pexels-photo-6204323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <EmployeeCard
            name="Roberto"
            image="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeCard from "../components/aboutpage/EmployeeCard";

export default {
  name: "About",
  components: {
    EmployeeCard,
  },
};
</script>

<style></style>
