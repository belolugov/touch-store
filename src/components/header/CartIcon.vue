<template>
  <router-link to="/cart" id="cart-icon">
    <div>
      <b-icon class="h3" icon="cart-2" variant="light"></b-icon>
      <span v-if="cartNum">{{ cartNum }}</span>
    </div>
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
    font-size: 14px;
    border: red 0.5px solid;
    border-radius: 4px;
    color: #fff;
    padding: 0 5px;
    vertical-align: top;
  }
  svg {
    transition: all .2s ease-in-out;
    margin-right: 3px;
  }
  svg:hover {
    cursor: pointer;
    transform: scale(1.3);
  }
</style>
