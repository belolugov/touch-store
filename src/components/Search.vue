<template>
    <div class="wrapper">
      <img class="search-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
      <input class="search" placeholder="Search" type="text" v-model="searchValue" @keyup="searchItem">
      <b-icon v-if="searchValue" @click="searchValue=''" icon="x" class="clear-icon h1" variant="danger"></b-icon>
      <div v-if="searchValue" id="search-results">
        <router-link
            v-for="product in searchArray"
            :key="product.id"
            class="product-search"
            :to="{name:'productPage', params:{id:product.id}}">
          <img :src="product.image">
          <div class="info-search">
            <h5>{{ product.title }}</h5>
            <p>${{ product.price }} </p>
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
        searchItem: function() {
            this.$emit('searchItem', this.searchValue);
        },
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
}
.product-search {
  display: flex;
  padding: 15px;
  border-bottom: #b7bbbd 1px solid;
  transition: all .2s ease-in-out;
}
.product-search:hover {
  cursor: pointer;
  text-decoration: none;
  transform: scale(1.1);
  border-bottom: none;
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