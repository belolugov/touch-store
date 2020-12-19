<template>
  <div id="productView"
       :class="{'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md'}">
    <img :src="product.image" alt="">
    <div class="productInfo">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <button class="btn btn-large btn-danger" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default{
    name: 'productPage',
    mounted(){
        axios.get('https://fakestoreapi.com/products/'+ this.$route.params.id).then(res => this.product=res.data);
    },
    data() {
      return{
        product: {},
      }
    },
    methods: {
      addToCart: function(){
        this.$emit('addToCart', this.product);
      }
    }
  }
</script>

<style scoped>
  #productView{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 1280px;
    margin: 2rem auto;
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
  .desktop h3 {
    margin-bottom: 4rem;
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