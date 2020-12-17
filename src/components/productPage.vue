<template>
  <div id="productView"
       :class="{'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md'}">
    <img :src="product.image" alt="">
    <div class="productInfo">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'productPage',
    mounted(){
      fetch('https://fakestoreapi.com/products/'+ this.$route.params.id).then(res=>{return res.json()}).then((data)=>{this.product=data});
      },
    data() {
      return{
        product: {},
      }
    },
  }
</script>

<style scoped>
  #productView{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
  .desktop img {
    max-width: 60%;
    grid-column: 1/6;
    align-self: center;
    justify-self: center;
  }
  .desktop .productInfo {
    grid-column: 6/13;
    align-self: center;
    justify-self: center;
  }
  .mobile img {
    max-width: 90%;
    grid-column: 1/13;
    margin: 50px auto;
  }
  .mobile .productInfo {
    grid-column: 1/13;
  }



</style>