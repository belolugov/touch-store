<template>
  <div id="gallery" :class="{'mobile':this.$mq=='sm', 'desktop':this.$mq=='lg', 'tablet':this.$mq=='md'}">
      <Search @searchItem="searchItem" @clearSearch="searchArray=[]" :searchArray="searchArray"/>
    <router-link
          v-for="product in products"
          :key="product.id"
          :class="{'card-blur':searchArray.length, 'product-card':true}"
          :to="{name:'productPage', params:{id:product.id, product:product}}">
        <img :src="product.image">
        <div class="info">
          <h5>{{ product.title }}</h5>
          <p>${{ product.price }} </p>
          <hr>
        </div>
      </router-link>
  </div>
</template>

<script>
  import Search from './Search';
  export default {
    name: 'Gallery',
    components: {
      Search
    },

    data(){
      return {
        searchArray: [],
      }
    },
    methods: {
      searchItem: function(searchValue){
        if(searchValue === '') this.searchArray = [];
        else {
        this.searchArray = this.products.filter((x) => {
          return  x.title.toLowerCase().search(searchValue) > -1;
          })
        }
      }
    },
    computed: {
      products() {
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
  .desktop img {
    width: 90%;
    max-height: 50%;
    align-self: center;
  }
  .desktop img:hover {
  }
  .desktop .wrapper {
    grid-column: 1/5;
    width: 50%;
    margin: auto;
  }
  .card-blur {
    filter: blur(4px);
  }

  hr {
    border-top-width:2px;
  }
  .mobile {
      display: grid;
      grid-template-columns: none;
      grid-gap: 20px;
      padding:15px;
  }
  .mobile img {
    width: 90%;
    max-height: 100%;
  }
  .mobile .info {
    margin-top: 50px;
  }

 .product-card{
   display: inline-grid;
   transition: all .2s ease-in-out;
 }
 .info{
   align-self: end;
 }
 .info p {
  font-size: medium;
}

 .product-card:hover{
  cursor:pointer;
  transform: scale(1.2);
}
  a:hover{
    text-decoration: none;
  }

</style>
