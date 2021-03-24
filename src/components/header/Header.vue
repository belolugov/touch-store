<template>
  <Nav>
    <cart-icon :cartNum="calcInCartNum" />
  </Nav>
</template>

<script>
  import CartIcon from "@/components/header/CartIcon";
  import Nav from './Nav'
  export default{
    name: 'Header',
    components: {
      CartIcon,
      Nav
    },
    props: {
      cart: Array
    },
    computed: {
      calcInCartNum () {
        let cartNum = 0;
        this.cart.forEach(item => cartNum += item.qty)
        return cartNum;
      }
    }
  }
</script>

<style scoped>

</style>
