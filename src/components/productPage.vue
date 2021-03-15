<template>
  <div id="productView"
       :class="{'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md'}">
    <img :src="product.image" alt="">
    <div class="productInfo">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <button class="btn btn-large btn-outline-danger" @click="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'productPage',
    created () {
      // CHECK IF THE PRODUCT IS IN STORE OR IN THE ROUTE PARAMS, FETCH IF NOT
      if ( !this.$route.params.product && Object.keys(this.$store.state.product ).length === 0 ) {
        this.$store.dispatch('loadItem', this.$route.params.id )
      } else if ( this.$route.params.product ) {
        this.$store.commit('GET_ITEM', this.$route.params.product )
      }
    },
    data () {
      return {}
    },
    methods: {
      addToCart () {
        this.$emit('addToCart', this.product )
      },
    },
    computed: {
      product () {
          return this.$store.state.product
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
