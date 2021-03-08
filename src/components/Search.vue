<template>
    <div class="wrapper">
      <b-icon class="search-icon" icon="search"></b-icon>
      <input class="search" placeholder="Search" type="text" v-model="searchValue" @keyup="searchItem">
      <b-icon v-if="searchValue" @click="clearSearch" icon="x" class="clear-icon h1" variant="danger"></b-icon>
      <div v-if="searchArray.length" id="search-results">
        <router-link
            v-for="product in searchArray"
            :key="product.id"
            class="product-search"
            :to="{name:'productPage', params:{id:product.id}}">
          <img :src="product.image">
          <div class="info-search">
            <h5>{{ product.title }}</h5>
            <p>${{ product.price }}</p>
          </div>
          <hr>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name:'Search',
    props: ['searchArray'],
    data(){
      return{
        searchValue: ''
      }
    },
    methods: {
      searchItem() {
        this.$emit('searchItem', this.searchValue);
      },
      clearSearch() {
        this.searchValue = '';
        this.$emit('clearSearch');
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
  z-index: 100;
}
.product-search {
  display: flex;
  padding: 15px;
  border-bottom: #b7bbbd 1px solid;
}
.product-search:hover {
  cursor: pointer;
  text-decoration: none;
  background: aliceblue;
  color: black;
}
.info-search {
  align-self: center;
  justify-self: center;
  padding-left: 25px;
}
.search-icon {
  position: absolute;
  top: 6px;
  left: 8px;
  width: 14px;
}
.clear-icon {
  position: absolute;
  top: -3px;
  right: 0;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
.clear-icon:hover {
  transform: scale(1.2);
}
.search {
  border: 1px solid grey;
  border-radius: 5px;
  height: 2rem;
  width: 100%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;
}
.search:hover, .search:focus {
  border: 1.5px solid #009688;
  background-color: white;
}
img {
  width: 30%;
}


</style>