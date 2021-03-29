<template>
  <b-container>
    <Search @searchItem="searchItem" @clearSearch="searchArray = []" :searchArray="searchArray"/>
    <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        :searchArray="searchArray"
        :class="{ 'card-blur':searchArray.length, 'product-card':true }"
    >
      <btn-group :product="product"/>
    </product-card>
  </b-container>
</template>

<script>
  import BtnGroup from './product-card/BtnGroup'
  import ProductCard from './product-card/ProductCard'
  import Search from './Search'
  export default {
    name: 'Gallery',
    components: {
      BtnGroup,
      ProductCard,
      Search
    },
    data () {
      return {
        searchArray: [],
      }
    },
    methods: {
      searchItem (searchValue) {
        if (searchValue === '') this.searchArray = []
        else {
        this.searchArray = this.products.filter((x) => {
          return x.title.toLowerCase().search(searchValue) > -1
          })
        }
      }
    },
    computed: {
      products () {
        return this.$store.state.products;
      }
    }
  }

</script>

<style scoped>
  .desktop {
    max-width: 960px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(150px, auto);
    grid-gap: 30px;
    padding: 30px;
  }
  .desktop .wrapper {
    grid-column: 1/5;
    width: 50%;
    margin: auto;
  }
  .mobile {
      display: grid;
      grid-template-columns: none;
      grid-gap: 20px;
      padding:15px;
  }
</style>
