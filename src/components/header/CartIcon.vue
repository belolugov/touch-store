<template>
  <router-link :to="{name:'Cart'}" id="cart-icon">
    <b-icon  class="h3" icon="cart-2" variant="danger"></b-icon>
    <span>{{ cartNum ? cartNum : null}}</span>
  </router-link>
</template>

<script>
export default {
  name: "CartIcon",
  props: {
    cartNum: Number
  }
}
</script>

<style scoped>
  #cart-icon span {
    position: relative;
    right: 20px;
    bottom: 17px;
    color: red;
    font-size: x-large;
  }
  #cart-icon:hover {
    opacity: 0.5;
  }
</style>
