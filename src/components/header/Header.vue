<template>
  <Nav>
    <cartIcon :cartNum="calcInCartNum"/>
  </Nav>
</template>

<script>
  import Nav from './Nav'
  import cartIcon from "@/components/header/cartIcon";
  export default{
    name: 'Header',
    components: {
      Nav,
      cartIcon
    },
    props: ['inCart'],
    computed: {
      calcInCartNum () {
        let inCartNum = 0;
        this.inCart.forEach(item => inCartNum += item.qty)
        return inCartNum;
      }
    }
  }
</script>

<style scoped>

</style>
