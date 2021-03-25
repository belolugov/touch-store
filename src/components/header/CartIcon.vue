<template>
  <router-link :to="{name:'Cart'}" id="cart-icon">
    <div>
      <b-icon  class="h3" icon="cart-2" variant="light"></b-icon>
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
  #cart-icon:hover {
    opacity: 0.5;
  }
</style>
