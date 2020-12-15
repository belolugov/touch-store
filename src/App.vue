<template>
  <div id="app">
    <Nav />
    <Gallery :products="products"/>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";
import Nav from '@/components/Nav'
export default {
  mounted(){
    fetch('https://fakestoreapi.com/products/').then(res => {
                    return res.json()
                    }).then((data)=>{this.products=data});
  },
  name: 'App',
  components: {
    Gallery,
    Nav
  },
  data(){
    return {
    products: [],
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
