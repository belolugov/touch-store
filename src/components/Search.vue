<template>
    <div class="wrapper">
      <input class="search" placeholder="Search" type="text" v-model="searchValue" @keyup="searchItem">
      <b-icon v-if="searchValue" @click="clearSearch" icon="x" class="clear-icon h1" variant="danger"></b-icon>
      <div v-if="searchArray.length" id="search-results">
        <productCard
            v-for="product in searchArray"
            :key="product.id"
            :class="{ 'product-search':true }"
            :product="product"
        />
      </div>
    </div>
</template>

<script>
  import productCard from "./productCard"
  export default {
    name:'Search',
    components: {
      productCard
    },
    props: ['searchArray'],
    data () {
      return {
        searchValue: ''
      }
    },
    methods: {
      searchItem () {
        this.$emit('searchItem', this.searchValue)
      },
      clearSearch () {
        this.searchValue = ''
        this.$emit('clearSearch')
      }
    }
  }

</script>

<style scoped>
.wrapper {
  position: relative;
  display: flex;
  min-width: 100px;
}
#search-results{
  position: absolute;
  top: 6rem;
  width: 100%;
  background: white;
  border: 1px solid #b7bbbd;
  border-radius: 5px;
  z-index: 100;
}

.clear-icon {
  position: absolute;
  top: 6px;
  right: 2px;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
.clear-icon:hover {
  transform: scale(1.5);
}
.search {
  border: 1px solid grey;
  border-radius: 10px;
  height: 2rem;
  width: 100%;
  padding: 25px;
  outline: 0;
  background-color: #f5f5f5;
}
.search:hover, .search:focus {
  border: 1.5px solid #009688;
  background-color: white;
}
</style>
