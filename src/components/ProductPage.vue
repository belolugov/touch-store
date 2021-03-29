<template>
  <b-container class="product-page">
    <img :src="product.image">
    <div class="product-info">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>${{ product.price }}</p>
      <btn-group :product="product"/>
    </div>
  </b-container>
</template>

<script>
  import BtnGroup from "@/components/product-card/BtnGroup";
  export default{
    name: 'ProductPage',
    components: {BtnGroup},
    created () {
      // CHECK IF THE PRODUCT IS IN STORE OR IN THE ROUTE PARAMS, FETCH IF NOT
      if ( !this.$route.params.product && Object.keys(this.product ).length === 0 ) {
        this.$store.dispatch('loadItem', this.$route.params.id )
      } else if ( this.$route.params.product ) {
        this.$store.commit('GET_ITEM', this.$route.params.product )
      }
    },
    computed: {
      product () {
          return this.$store.state.product
      }
    }
  }
</script>

<style scoped>
  .product-page{
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
  .desktop .product-info {
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
  .mobile .product-info {
    grid-column: 1/13;
  }
</style>
