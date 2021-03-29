<template>
  <b-container class="text-center">
    <b-icon icon="cart-dash" class="empty-cart" variant="danger"></b-icon>
    <h3 class="my-3">Your Cart is Empty</h3>
    <router-link class="h2" to="/gallery">Keep Shopping!</router-link>
  </b-container>
</template>

<script>
export default {
  name: "EmptyCart"
}
</script>

<style scoped>
 .empty-cart {
    font-size: 20rem;
  }
 a:hover {
  text-decoration: none;
 }
</style>
