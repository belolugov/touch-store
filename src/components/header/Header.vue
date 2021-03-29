<template>
  <Nav>
    <auth-icon />
    <cart-icon :cartNum="calcInCartNum" />
  </Nav>
</template>

<script>
  import CartIcon from "@/components/header/CartIcon";
  import Nav from './Nav'
  import AuthIcon from "@/components/header/AuthIcon";
  export default{
    name: 'Header',
    components: {
      AuthIcon,
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
