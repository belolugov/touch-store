<template>
  <div id="gallery" :class="{ 'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md' }">
    <Search @searchItem="searchItem" @clearSearch="searchArray=[]" :searchArray="searchArray"/>
    <productCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        :searchArray="searchArray"
        :class="{ 'card-blur':searchArray.length, 'product-card':true }"
    />
  </div>
</template>

<script>
  import Search from './Search'
  import productCard from './productCard'
  export default {
    name: 'Gallery',
    components: {
      Search,
      productCard
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
  .desktop img:hover {
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
